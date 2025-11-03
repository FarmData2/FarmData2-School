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

  it('Add Item button shows full form', () => {
    cy.visit('./index.html');

    cy.get('[data-cy="add-item-button"]').click();

    cy.get('[data-cy="cancel-button"]').should('be.visible');
    cy.get('[data-cy="new-item-input"]').should('be.visible');
    cy.get('[data-cy="high-priority-checkbox"]').should('be.visible');
    cy.get('[data-cy="save-item-button"]')
      .should('be.visible')
      .should('not.be.enabled');
    cy.get('[data-cy="add-item-button"]').should('not.exist');
  });

  it('Save Item button adds item to list', () => {
    cy.visit('./index.html');

    cy.get('[data-cy="add-item-button"]').click();
    cy.get('[data-cy="new-item-input"]').type('Party Hats');
    cy.get('[data-cy="save-item-button"]').click();

    // Below are two different approaches to testing the shopping list contents.
    // Only one of these is necessary and which is appropriate would depend
    // upon the goal of the test.

    // We can just check that "Party Hats" is somewhere in the list.
    cy.get('[data-cy="shopping-list"]').should('contain', 'Party Hats');

    // Or we can be more specific and check that "Party Hats" is the first item in the list.
    // Note: This requires adding a data-cy attribute to each list item.
    //       See the `index.html` file for how that is done.
    cy.get('[data-cy="item-0"]').should('contain', 'Party Hats');

    cy.get('[data-cy="new-item-input"]').should('be.empty');
    cy.get('[data-cy="nice-job-message"]').should('not.exist');
  });
});
