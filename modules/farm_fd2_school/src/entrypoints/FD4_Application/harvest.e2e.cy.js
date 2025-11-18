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

  it('Initial State', () => {
    cy.get('[data-cy="header"]')
      .should('be.visible')
      .and('have.text', 'Harvest');

    cy.get('[data-cy="dateSelect"]').should('be.visible');
    cy.get('[data-cy="dateSelect"]')
      .find('[data-cy="date-input"]')
      .should('have.value', '2019-06-15');

    cy.get('[data-cy="cropSelect"]').should('be.visible');
    cy.get('[data-cy="cropSelect"]')
      .find('[data-cy="selector-input"]')
      .should('have.value', null);

    cy.get('[data-cy="submitResetButtons"]').should('be.visible');
    // cy.get('[data-cy="submitResetButtons"]')
    //   .find('[data-cy="submit-button"]')
    //   .should('have.prop', 'enableSubmit', false);

    cy.get('[data-cy="table"]').should('not.exist');
    cy.get('[data-cy="quantityInput"]').should('not.exist');
    cy.get('[data-cy="harvestUnits"]').should('not.exist');
    cy.get('[data-cy="commentBox"]').should('not.exist');
  });
});
