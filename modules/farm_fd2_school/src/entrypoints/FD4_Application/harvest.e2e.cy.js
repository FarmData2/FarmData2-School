describe('Tests for the Harvest form', () => {
  beforeEach(() => {
    cy.restoreLocalStorage();
    cy.restoreSessionStorage();

    cy.login('manager1', 'farmdata2');
    cy.visit('fd2_school/FD4_Application');
  });

  afterEach(() => {
    cy.saveLocalStorage();
    cy.saveSessionStorage();
  });

  it('Initial State Test for Harvest Form', () => {
    cy.get('[data-cy="harvest-header"]')
      .should('be.visible')
      .should('have.text', 'Harvest');
    cy.get('[data-cy="harvest-date"]')
      .should('be.visible')
      .find('input')
      .should('have.value', '2019-06-15');
    cy.get('[data-cy="harvest-crop"]')
      .should('be.visible')
      .find('select')
      .should('have.value', null);
    cy.get('[data-cy="harvest-submit-reset"]')
      .should('be.visible')
      .find('button')
      .first()
      .should('be.disabled');
    cy.get('[data-cy="harvest-table"]').should('not.exist');
    cy.get('[data-cy="harvest-quantity"]').should('not.exist');
    cy.get('[data-cy="harvest-units"]').should('not.exist');
    cy.get('[data-cy="harvest-comment"]').should('not.exist');
  });

  it('State Test After Crop Selected With Harvestable Plants', () => {
    cy.get('[data-cy="harvest-crop"] select').select('RADISH');
    cy.get('[data-cy="harvest-header"]')
      .should('be.visible')
      .should('have.text', 'Harvest');
    cy.get('[data-cy="harvest-date"]')
      .should('be.visible')
      .find('input')
      .should('have.value', '2019-06-15');
    cy.get('[data-cy="harvest-crop"]')
      .should('be.visible')
      .find('select')
      .should('have.value', 'RADISH');
    cy.get('[data-cy="harvest-submit-reset"]')
      .should('be.visible')
      .find('button')
      .first()
      .should('be.disabled');
    cy.get('[data-cy="harvest-table"]').should('be.visible');
    cy.get('[data-cy="harvest-quantity"]')
      .should('be.visible')
      .find('input')
      .should('have.value', 1);
    cy.get('[data-cy="harvest-units"]').should('be.visible');
    cy.get('[data-cy="harvest-comment"]')
      .should('be.visible')
      .find('textarea')
      .should('have.value', '');
  });
});
