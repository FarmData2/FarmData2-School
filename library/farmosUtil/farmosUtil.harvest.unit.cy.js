import * as farmosUtil from './farmosUtil';

describe('Test the harvest log functions', () => {
  let fieldMap = null;
  let bedMap = null;

  beforeEach(() => {
    cy.restoreLocalStorage();
    cy.restoreSessionStorage();

    cy.wrap(farmosUtil.getFieldNameToAssetMap()).then((map) => {
      fieldMap = map;
    });

    cy.wrap(farmosUtil.getBedNameToAssetMap()).then((map) => {
      bedMap = map;
    });
  });

  afterEach(() => {
    cy.saveLocalStorage();
    cy.saveSessionStorage();
  });

  it('Create a harvest log', () => {
    cy.wrap(
      farmosUtil.createPlantAsset('1999-01-02', 'ARUGULA', 'testComment')
    ).as('plantAsset');

    cy.wrap(
      farmosUtil.createStandardQuantity('weight', 5, 'harvest', 'POUND')
    ).as('quantity');

    cy.getAll(['@plantAsset', '@quantity']).then(([plantAsset, quantity]) => {
      cy.wrap(
        farmosUtil.createHarvestLog(
          '01/02/1999',
          'ALF',
          ['ALF-1', 'ALF-2'],
          plantAsset,
          quantity
        )
      ).as('harvestLog');
    });

    cy.getAll(['@plantAsset', '@quantity', '@harvestLog']).then(
      ([plantAsset, quantity, harvestLog]) => {
        cy.wrap(farmosUtil.getHarvestLog(harvestLog.id)).then((result) => {
          expect(result.attributes.timestamp).to.contain('1999-01-02');

          expect(result.attributes.name).to.equal('1999-01-02_ha_ARUGULA');

          expect(result.attributes.status).to.equal('done');

          // expect(result.relationships.category.length).to.equal(1);
          // expect(result.relationships.category[0].id).to.equal(
          //   categoryMap.get('harvest').id
          // );

          expect(result.relationships.location.length).to.equal(3);
          expect(result.relationships.location[0].id).to.equal(
            fieldMap.get('ALF').id
          );
          expect(result.relationships.location[1].id).to.equal(
            bedMap.get('ALF-1').id
          );
          expect(result.relationships.location[2].id).to.equal(
            bedMap.get('ALF-2').id
          );

          expect(result.relationships.asset[0].id).to.equal(plantAsset.id);

          expect(result.relationships.quantity.length).to.equal(1);
          expect(result.relationships.quantity[0].id).to.equal(quantity.id);
        });
      }
    );
  });

  it('Error creating harvest log', { retries: 4 }, () => {
    cy.intercept('POST', '**/api/log/harvest', {
      statusCode: 401,
    });

    cy.wrap(
      farmosUtil.createPlantAsset('1999-01-02', 'ARUGULA', 'testComment')
    ).as('plantAsset');

    cy.get('@plantAsset').then((plantAsset) => {
      cy.wrap(
        farmosUtil
          .createHarvestLog(
            '01/02/1999',
            'ALF',
            ['ALF-1', 'ALF-2'],
            plantAsset,
            []
          )
          .then(() => {
            throw new Error('Creating seeding log should have failed.');
          })
          .catch((error) => {
            expect(error.message).to.equal(
              'Request failed with status code 401'
            );
          })
      );
    });
  });

  it('Delete a harvest log', () => {
    cy.wrap(
      farmosUtil.createPlantAsset('1999-01-02', 'ARUGULA', 'testComment')
    ).as('plantAsset');

    cy.wrap(
      farmosUtil.createStandardQuantity('weight', 5, 'harvest', 'POUND')
    ).as('quantity');

    cy.getAll(['@plantAsset', '@quantity']).then(([plantAsset, quantity]) => {
      cy.wrap(
        farmosUtil.createHarvestLog(
          '01/02/1999',
          'ALF',
          ['ALF-1', 'ALF-2'],
          plantAsset,
          quantity
        )
      ).as('harvestLog');
    });

    cy.get('@harvestLog').then((harvestLog) => {
      cy.wrap(farmosUtil.deleteHarvestLog(harvestLog.id)).then((result) => {
        expect(result.status).to.equal(204);
      });
    });
  });

  it('Error deleting harvest log', { retries: 4 }, () => {
    cy.intercept('DELETE', '**/api/log/harvest/*', {
      statusCode: 401,
    });

    cy.wrap(
      farmosUtil
        .deleteHarvestLog('1234')
        .then(() => {
          throw new Error('Deleting harvest log should have failed.');
        })
        .catch((error) => {
          expect(error.message).to.equal('Request failed with status code 401');
        })
    );
  });
});
