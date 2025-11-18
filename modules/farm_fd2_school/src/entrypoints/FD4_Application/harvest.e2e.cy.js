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

  it('Initial state of the Harvest form is correct', () => {
    cy.get('[data-cy="harvest-header"]')
      .should('be.visible')
      .and('contain', 'Harvest');

    cy.get('[data-cy="harvest-date"]')
      .should('be.visible')
      .find('input')
      .should('have.value', '2019-06-15');

    cy.get('[data-cy="harvest-crop"]')
      .should('be.visible')
      .find('select')
      .should('have.value', null);

    cy.get('[data-cy="harvest-buttons"]').should('be.visible');
    cy.get('[data-cy="harvest-buttons"]')
      .find('button')
      .first()
      .should('be.disabled');

    cy.get('[data-cy="harvest-table"]').should('not.exist');
    cy.get('[data-cy="harvest-quantity"]').should('not.exist');
    cy.get('[data-cy="harvest-units"]').should('not.exist');
    cy.get('[data-cy="harvest-comment"]').should('not.exist');
  });
});
