describe('Check that the HTML_CSS entrypoint in farm_fd2_school exists.', () => {
  it('Check that the page loaded.', () => {
    // Login if running in live farmOS.
    cy.login('admin', 'admin');
    // Go to the HTML_CSS page.
    cy.visit('/fd2_school/HTML_CSS/');
    // Check that the page loads.
    cy.get('[data-cy="HTML-CSS"]');
  });
});
