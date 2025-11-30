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

  it('Test for initial state of Harvest form', () => {
    cy.get('[data-cy="harvest-header"]')
      .should('be.visible')
      .should('have.text', 'Harvest');
    cy.get('[data-cy="harvest-date"]')
      .should('be.visible')
      .find('[data-cy="date-input"]')
      .should('have.value', '2019-06-15');
    cy.get('[data-cy="harvest-crop"]')
      .should('be.visible')
      .find('[data-cy="crop-selector"]')
      .should('have.value', '');
    cy.get('[data-cy="submit-reset-button"]')
      .should('be.visible')
      .find('[data-cy="submit-button"]')
      .should('be.disabled');
    cy.get('[data-cy="harvest-table"]').should('not.exist');
    cy.get('[data-cy="harvest-quantity"]').should('not.exist');
    cy.get('[data-cy="harvest-units"]').should('not.exist');
    cy.get('[data-cy="harvest-comment"]').should('not.exist');
  });
});
