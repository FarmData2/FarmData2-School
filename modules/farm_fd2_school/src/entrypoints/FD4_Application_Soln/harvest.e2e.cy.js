describe('Tests for the Harvest form', () => {
  beforeEach(() => {
    cy.restoreLocalStorage();
    cy.restoreSessionStorage();

    cy.login('manager1', 'farmdata2');
    // Note: The URL has changed from the starter code to visit
    //       the solution page rather than the starter page.
    cy.visit('fd2_school/FD4_Application_Soln');
  });

  afterEach(() => {
    cy.saveLocalStorage();
    cy.saveSessionStorage();
  });

  it('Placeholder test', () => {
    cy.get('[data-cy="harvest-header"]')
      .should('be.visible')
      .should('have.text', 'Harvest');
    cy.get('[data-cy="harvest-date"]')
      .find('[data-cy="date-input"]')
      .should('be.visible')
      .should('have.value', '2019-06-15');
    cy.get('[data-cy="harvest-crop"]')
      .find('[data-cy="crop-selector"]')
      .find('[data-cy="selector-input"]')
      .should('be.visible')
      .should('have.value', null);
    cy.get('[data-cy="harvest-submit-reset"]').should('be.visible');
    cy.get('[data-cy="harvest-submit-reset"]')
      .find('[data-cy="submit-button"]')
      .should('not.be.enabled');

    cy.get('[data-cy="harvest-table"]').should('not.exist');
    cy.get('[data-cy="harvest-quantity"]').should(`not.exist`);
    cy.get('[data-cy="harvest-units"]').should(`not.exist`);
    cy.get('[data-cy="single-harvest-unit"]').should(`not.exist`);
    cy.get('[data-cy="harvest-comment"]').should(`not.exist`);
  });
});
