describe('HTML and CSS: exists and has main page elements.', () => {
  beforeEach(() => {
    cy.restoreLocalStorage();
    cy.restoreSessionStorage();
  });

  afterEach(() => {
    cy.saveLocalStorage();
    cy.saveSessionStorage();
  });

  it('Admin can access HTML and CSS form', () => {
    // Login if running in live farmOS.
    cy.login('admin', 'admin');
    // Go to the entry point page.
    cy.visit('fd2_school/HTML_CSS/');
    // Check that the page loads.
    cy.waitForPage();
  });

  /*
   * Additional tests here should check to ensure that only appropriate users
   * have access to the page.
   *
   * See modules/farm_fd2/src/entrypoints/tray_seeding/tray_seeding.exists.e2e.cy.js
   * for an examples.
   */
  it('Main entry point elements exist', () => {
    cy.login('admin', 'admin');
    cy.visit('fd2_school/HTML_CSS/');
    cy.waitForPage();

    cy.get('[data-cy="HTML-CSS"]').should('exist');
    cy.get('[data-cy="HTML-CSS-card"]').should('be.visible');
    cy.get('[data-cy="HTML-CSS-header"]').should('be.visible');
    cy.get('[data-cy="HTML-CSS-header"]').should(
      'contain.text',
      'HTML and CSS'
    );
    cy.get('[data-cy="HTML-CSS-form"]').should('exist');
  });
});
