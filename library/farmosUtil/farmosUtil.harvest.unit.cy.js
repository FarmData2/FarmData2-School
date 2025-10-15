import * as farmosUtil from './farmosUtil';

describe('Test the harvest log functions', () => {
  let fieldMap = null;
  let bedMap = null;
  let unitMap = null;
  let logCategoryMap = null;

  beforeEach(() => {
    cy.restoreLocalStorage();
    cy.restoreSessionStorage();

    cy.wrap(farmosUtil.getFieldNameToAssetMap()).as('fieldMap');
    cy.wrap(farmosUtil.getBedNameToAssetMap()).as('bedMap');
    cy.wrap(farmosUtil.getUnitIdToTermMap()).as('unitMap');
    cy.wrap(farmosUtil.getLogCategoryToTermMap()).as(`categoryMap`);

    cy.getAll(['@fieldMap', '@bedMap', '@unitMap', `@categoryMap`]).then(
      ([fields, beds, units, categories]) => {
        fieldMap = fields;
        bedMap = beds;
        unitMap = units;
        logCategoryMap = categories;
      }
    );
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

          expect(result.relationships.category.length).to.equal(1);
          expect(result.relationships.category[0].id).to.equal(
            logCategoryMap.get('harvest').id
          );

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

  it('Get the harvest units for a crop with no unit conversions', () => {
    cy.wrap(farmosUtil.getHarvestUnits('ARUGULA')).as('harvestUnits');

    cy.get('@harvestUnits').then((harvestUnits) => {
      expect(harvestUnits.length).to.equal(1);
      expect(unitMap.get(harvestUnits[0].id).attributes.name).to.equal('POUND');
    });
  });

  it('Get the harvest units for a crop with one unit conversion', () => {
    cy.wrap(farmosUtil.getHarvestUnits('CARROT')).as('harvestUnits');

    cy.get('@harvestUnits').then((harvestUnits) => {
      expect(harvestUnits.length).to.equal(2);
      expect(unitMap.get(harvestUnits[0].id).attributes.name).to.equal('BUNCH');
      expect(unitMap.get(harvestUnits[1].id).attributes.name).to.equal('POUND');
      expect(harvestUnits[1].meta.factor).to.equal(1.75);
    });
  });

  it('Get the harvest units for a crop with multiple unit conversions', () => {
    cy.wrap(farmosUtil.getHarvestUnits('BROCCOLI')).as('harvestUnits');

    cy.get('@harvestUnits').then((harvestUnits) => {
      expect(harvestUnits.length).to.equal(3);
      expect(unitMap.get(harvestUnits[0].id).attributes.name).to.equal('POUND');
      expect(unitMap.get(harvestUnits[1].id).attributes.name).to.equal('HEAD');
      expect(harvestUnits[1].meta.factor).to.equal(1);
      expect(unitMap.get(harvestUnits[2].id).attributes.name).to.equal('EACH');
      expect(harvestUnits[2].meta.factor).to.equal(1);
    });
  });
});
