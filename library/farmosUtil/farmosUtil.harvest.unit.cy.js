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
          [],
          plantAsset,
          quantity
        )
      ).as('harvestLog');
    });

    cy.getAll(['@plantAsset', '@quantity', '@harvestLog']).then(
      ([plantAsset, quantity, harvestLog]) => {
        
        expect(true).to.equal(false);

        /*
        cy.wrap(farmosUtil.getHarvestLog(harvestLog.id)).then((result) => {
          expect(result.attributes.timestamp).to.contain('1999-01-02');
          expect(result.attributes.purchase_date).to.contain('1999-01-02');

          expect(result.attributes.name).to.equal('1999-01-02_ts_ARUGULA');

          expect(result.attributes.status).to.equal('done');
          expect(result.attributes.is_movement).to.equal(true);

          expect(result.relationships.category.length).to.equal(2);
          expect(result.relationships.category[0].id).to.equal(
            categoryMap.get('seeding').id
          );
          expect(result.relationships.category[1].id).to.equal(
            categoryMap.get('seeding_tray').id
          );

          expect(result.relationships.location[0].id).to.equal(
            greenhouseMap.get('CHUAU').id
          );
          expect(result.relationships.location[0].type).to.equal(
            'asset--structure'
          );
          expect(result.relationships.asset[0].id).to.equal(plantAsset.id);

          expect(result.relationships.quantity.length).to.equal(1);
          expect(result.relationships.quantity[0].id).to.equal(quantity.id);
          */
      }
    );
  });
});
