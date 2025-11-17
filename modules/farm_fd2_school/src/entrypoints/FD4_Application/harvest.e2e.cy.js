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

  it('Check initial state of page is correct', () => {
    cy.contains('h1', 'Harvest').should('be.visible');

    cy.get('[data-cy="harvest-date"]')
      .should('be.visible')
      .find('input[type="date"]')
      .should('have.value', '2019-06-15');

    cy.get('[data-cy="harvest-crop"]')
      .should('be.visible')
      .find('select')
      .should('have.value', null);

    cy.get('[data-cy="harvest-buttons"]')
      .should('be.visible')
      .within(() => {
        cy.contains('button', 'Submit').should('be.disabled');
        cy.contains('button', 'Reset').should('be.enabled');
      });

    cy.get('body').find('[data-cy="harvest-table"]').should('not.exist');
    cy.get('body').find('[data-cy="harvest-quantity"]').should('not.exist');
    cy.get('body').find('[data-cy="harvest-units"]').should('not.exist');
    cy.get('body').find('[data-cy="harvest-comment"]').should('not.exist');
  });
});
