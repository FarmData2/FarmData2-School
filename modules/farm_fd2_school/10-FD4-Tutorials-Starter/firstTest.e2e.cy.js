describe('FD2-Tutorial - A First Test', () => {
  it('Check the page state when loaded', () => {
    cy.visit('./index.html');
    cy.get('[data-cy="app-heading"]').should(
      'have.text',
      'Shopping List Application'
    );
    cy.get('[data-cy="add-item-button"]').should('be.visible');
    cy.get('[data-cy="nice-job-message"]')
      .should('be.visible')
      .should('contain.text', 'Nice job!');
    cy.get('[data-cy="cancel-button"]').should('not.exist');
    cy.get('[data-cy="new-item-input"]').should('not.exist');
    cy.get('[data-cy="high-priority-checkbox"]').should('not.exist');
    cy.get('[data-cy="save-item-button"]').should('not.exist');
  });
  it('Add Item button shows form', () => {
    cy.visit('./index.html');
    cy.get('[data-cy="add-item-button"]').click();
    cy.get('[data-cy="cancel-button"]').should('be.visible');
    cy.get('[data-cy="high-priority-checkbox"]').should('be.visible');
    cy.get('[data-cy="save-item-button"]')
      .should('be.visible')
      .should('not.be.enabled');
    cy.get('[data-cy="add-item-button"]').should('not.exist');
  });
});
