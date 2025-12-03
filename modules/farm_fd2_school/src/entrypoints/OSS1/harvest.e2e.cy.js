describe('Tests for the Harvest form', () => {
  beforeEach(() => {
    cy.restoreLocalStorage();
    cy.restoreSessionStorage();

    cy.login('manager1', 'farmdata2');
    cy.visit('fd2_school/OSS1');
  });

  afterEach(() => {
    cy.saveLocalStorage();
    cy.saveSessionStorage();
  });

  it('Check initial state of the Harvest form', () => {
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

  it('Selecting crop with harvestable plants', () => {
    cy.get('[data-cy="harvest-crop"]')
      .find('[data-cy="crop-selector"]')
      .find('[data-cy="selector-input"]')
      .select('RADISH');

    cy.get('[data-cy="harvest-table"]').should('be.visible');
    cy.get('[data-cy="harvest-quantity"]')
      .find('[data-cy="numeric-input"]')
      .should('be.visible')
      .should('have.value', '1');
    cy.get('[data-cy="harvest-units"]')
      .should('be.visible')
      .should('have.value', null);
    cy.get('[data-cy="single-harvest-unit"]').should('not.exist');
    cy.get('[data-cy="harvest-comment"]')
      .find('[data-cy="comment-input"]')
      .should('be.visible')
      .should('have.value', '');
  });

  it('Selecting crop without harvestable plants', () => {
    cy.get('[data-cy="harvest-crop"]')
      .find('[data-cy="crop-selector"]')
      .find('[data-cy="selector-input"]')
      .select('CARROT');

    cy.get('[data-cy="harvest-no-plants-message"]')
      .should('be.visible')
      .should(
        'contain.text',
        'There are no CARROT plants available for harvest.'
      );

    cy.get('[data-cy="harvest-table"]').should('not.exist');
    cy.get('[data-cy="harvest-quantity"]').should('not.exist');
    cy.get('[data-cy="harvest-units"]').should('not.exist');
    cy.get('[data-cy="single-harvest-unit"]').should('not.exist');
    cy.get('[data-cy="harvest-comment"]').should('not.exist');
  });
  it('Steps to produce', () => {
    cy.get('[data-cy="harvest-crop"]')
      .find('[data-cy="crop-selector"]')
      .find('[data-cy="selector-input"]')
      .select('CARROT');
  });
});
