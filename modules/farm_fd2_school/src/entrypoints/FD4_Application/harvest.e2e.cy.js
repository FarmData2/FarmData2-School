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

  it('Test the initial state of the harvest form', () => {
    cy.get('[data-cy="harvest-main-header"]')
      .should('be.visible')
      .should('have.text', 'Harvest');
    cy.get('[data-cy="date-dropdown"]')
      .should('be.visible')
      .find('input')
      .should('have.value', '2019-06-15');

    cy.get('[data-cy="crop-dropdown"]')
      .should('be.visible')
      .find('select')
      .should('have.value', null);

    cy.get('[data-cy="harvest-submit-reset"]')
      .should('be.visible')
      .find('button')
      .first()
      .should('be.disabled');

    cy.get('[data-cy="harvest-table"]').should('not.exist');
    cy.get('[data-cy="harvest-quantity"]').should('not.exist');
    cy.get('[data-cy="harvest-units"]').should('not.exist');
    cy.get('[data-cy="harvest-comment"]').should('not.exist');
  });

  it('Test crop selection with harvestable plants', () => {
    cy.get('[data-cy="crop-dropdown"] select').select('RADISH');

    cy.get('[data-cy="harvest-main-header"]')
      .should('be.visible')
      .should('have.text', 'Harvest');

    cy.get('[data-cy="date-dropdown"]')
      .should('be.visible')
      .find('input')
      .should('have.value', '2019-06-15');

    cy.get('[data-cy="crop-dropdown"]')
      .should('be.visible')
      .find('select')
      .should('have.value', 'RADISH');

    cy.get('[data-cy="harvest-table"]').should('be.visible');

    cy.get('[data-cy="harvest-quantity"]')
      .should('be.visible')
      .find('input')
      .should('have.value', 1);

    cy.get('[data-cy="harvest-units"]').should('be.visible');

    cy.get('[data-cy="harvest-comment"]')
      .should('be.visible')
      .find('textarea')
      .should('have.value', '');
  });

  it('Test crop selection without harvestable plants', () => {
    cy.get('[data-cy="crop-dropdown"] select').select('HERB');

    cy.get('[data-cy="harvest-main-header"]')
      .should('be.visible')
      .should('have.text', 'Harvest');

    cy.get('[data-cy="date-dropdown"]')
      .should('be.visible')
      .find('input')
      .should('have.value', '2019-06-15');

    cy.get('[data-cy="crop-dropdown"]')
      .should('be.visible')
      .find('select')
      .should('have.value', 'HERB');

    cy.get('[data-cy="harvest-submit-reset"]')
      .should('be.visible')
      .find('button')
      .first()
      .should('be.disabled');

    cy.get('[data-cy="no-plants-message"]')
      .should('be.visible')
      .should('contain.text', 'There are no')
      .should('contain.text', 'plants available for harvest');

    cy.get('[data-cy="harvest-table"]').should('not.exist');
    cy.get('[data-cy="harvest-quantity"]').should('not.exist');
    cy.get('[data-cy="harvest-units"]').should('not.exist');
    cy.get('[data-cy="harvest-comment"]').should('not.exist');
  });
});
