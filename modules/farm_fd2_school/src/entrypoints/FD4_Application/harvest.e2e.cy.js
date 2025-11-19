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

  it('Initial state of Harvest form', () => {
    cy.get('[data-cy="crop-selector"]')
      .should('be.visible')
      .find('select')
      .should('have.value', null);
    cy.get('[data-cy="harvest-header"]')
      .should('be.visible')
      .should('have.text', 'Harvest');
    cy.get('[data-cy="date-selector"]')
      .should('be.visible')
      .find('input')
      .should('have.value', '2019-06-15');
    cy.get('[data-cy="submit-reset-buttons"]')
      .should('be.visible')
      .find('button')
      .first()
      .should('be.disabled');
    cy.get('[data-cy="comment-box"]').should('not.exist');
    cy.get('[data-cy="harvest-unit"]').should('not.exist');
    cy.get('[data-cy="harvest-quantity"]').should('not.exist');
    cy.get('[data-cy="harvest-table"]').should('not.exist');
  });
  it('Test state of form after crop is selected', () => {
    cy.get('[data-cy="crop-selector"] select').select('RADISH');

    cy.get('[data-cy="harvest-header"]')
      .should('be.visible')
      .should('have.text', 'Harvest');

    cy.get('[data-cy="date-selector"]')
      .should('be.visible')
      .find('input')
      .should('have.value', '2019-06-15');

    cy.get('[data-cy="crop-selector"]')
      .should('be.visible')
      .find('select')
      .should('have.value', 'RADISH');

    cy.get('[data-cy="harvest-table"]').should('be.visible');

    cy.get('[data-cy="harvest-quantity"]')
      .should('be.visible')
      .find('input')
      .should('have.value', 1);

    cy.get('[data-cy="harvest-unit"]').should('be.visible');

    cy.get('[data-cy="comment-box"]')
      .should('be.visible')
      .find('textarea')
      .should('have.value', '');
  });
  it('Test crop selection without harvestable plants', () => {
    cy.get('[data-cy="crop-selector"] select').select('HERB');

    cy.get('[data-cy="harvest-header"]')
      .should('be.visible')
      .should('have.text', 'Harvest');

    cy.get('[data-cy="date-selector"]')
      .should('be.visible')
      .find('input')
      .should('have.value', '2019-06-15');

    cy.get('[data-cy="crop-selector"]')
      .should('be.visible')
      .find('select')
      .should('have.value', 'HERB');

    cy.get('[data-cy="submit-reset-buttons"]')
      .should('be.visible')
      .find('button')
      .first()
      .should('be.disabled');

    cy.get('[data-cy="harvest-no-plants"]')
      .should('be.visible')
      .should('contain.text', 'There are no')
      .should('contain.text', 'plants available for harvest');

    cy.get('[data-cy="harvest-table"]').should('not.exist');
    cy.get('[data-cy="harvest-quantity"]').should('not.exist');
    cy.get('[data-cy="harvest-unit"]').should('not.exist');
    cy.get('[data-cy="comment-box"]').should('not.exist');
  });
});
