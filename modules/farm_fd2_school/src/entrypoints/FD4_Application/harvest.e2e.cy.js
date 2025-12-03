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
  it('Test initial state of the Harvest form', () => {
    cy.get('[data-cy="harvest-header"]')
      .should('be.visible')
      .and('contain', 'Harvest');

    cy.get('[data-cy="date-selector"]')
      .should('be.visible')
      .find('input')
      .should('have.value', '2019-06-15');

    cy.get('[data-cy="crop-selector"]')
      .should('be.visible')
      .find('select')
      .should('have.value', null);
    cy.get('[data-cy="submit"]')
      .find('button')
      .should('be.visible')
      .and('be.disabled');

    cy.get('[data-cy="plant-table"]').should('not.exist');
    cy.get('[data-cy="quantity-input"]').should('not.exist');
    cy.get('[data-cy="units-select"]').should('not.exist');
    cy.get('[data-cy="comment-box"]').should('not.exist');
  });
  it('Test Crop Selection with Harvestable Plants', () => {
    cy.get('[data-cy="crop-selector"]').find('select').select('ARUGULA');
    cy.get('[data-cy="plant-table"]')
      .should('be.visible')
      .find('tr')
      .its('length')
      .should('be.gt', 1);
    cy.get('[data-cy="plant-table"]')
      .find('input[type="radio"]')
      .should('not.be.checked');
    cy.get('[data-cy="quantity-input"]')
      .should('be.visible')
      .find('input')
      .should('have.value', '1');

    cy.get('[data-cy="units-select"], span').should('be.visible');
    cy.get('[data-cy="comment-box"]').should('be.visible');

    cy.get('[data-cy="submit"]').find('button').should('be.disabled');

    cy.get('#harvest-no-plants').should('not.exist');
  });
});
