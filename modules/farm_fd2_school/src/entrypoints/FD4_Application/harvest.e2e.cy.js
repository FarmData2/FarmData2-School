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
      .find('[data-cy="selector-input"]')
      .should('have.value', null);
    cy.get('[data-cy="submit-reset-button"]')
      .should('be.visible')
      .find('[data-cy="submit-button"]')
      .should('be.disabled');
    cy.get('[data-cy="harvest-table"]').should('not.exist');
    cy.get('[data-cy="harvest-quantity"]').should('not.exist');
    cy.get('[data-cy="harvest-units"]').should('not.exist');
    cy.get('[data-cy="harvest-comment"]').should('not.exist');
  });

  it('Test for crop selection with harvestable plants', () => {
    cy.get('[data-cy="harvest-crop"]')
      .should('be.visible')
      .find('[data-cy="crop-selector"]')
      .find('[data-cy="selector-input"]')
      .select('BROCCOLI');
    cy.get('[data-cy="harvest-table"]').should('be.visible');
    cy.get('[data-cy="harvest-quantity"]')
      .should('be.visible')
      .find('[data-cy="numeric-input"]')
      .should('have.value', 1);
    cy.get('[data-cy="harvest-units"]').should('be.visible');
    cy.get('[data-cy="harvest-comment"]')
      .should('be.visible')
      .find('[data-cy="comment-input"]')
      .should('have.value', '');
  });

  it('Test for crop selection without harvestable plants', () => {
    cy.get('[data-cy="harvest-crop"]')
      .should('be.visible')
      .find('[data-cy="crop-selector"]')
      .find('[data-cy="selector-input"]')
      .select('ASPARAGUS');
    cy.get('[data-cy="harvest-table"]').should('not.exist');
    cy.get('[data-cy="harvest-quantity"]').should('not.exist');
    cy.get('[data-cy="harvest-units"]').should('not.exist');
    cy.get('[data-cy="harvest-comment"]').should('not.exist');
    cy.get('[data-cy="harvest-no-plants"]')
      .should('be.visible')
      .should(
        'contain.text',
        'There are no ASPARAGUS plants available for harvest.'
      );
  });
});
