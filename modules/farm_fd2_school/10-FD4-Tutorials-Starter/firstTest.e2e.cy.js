describe('FD2-Tutorial - A First Test', () => {
  it('Check the page state when loaded', () => {
    cy.visit('./index.html');
    cy.get('h1').should('have.text', 'Shopping List Application');
  });
});
