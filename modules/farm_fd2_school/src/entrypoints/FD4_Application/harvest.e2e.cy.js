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

  it('Check initial state of page is correct', () => {
    //should exist
    cy.contains('h1', 'Harvest').should('be.visible');

    cy.get('[data-cy="harvest-date"]')
      .should('be.visible')
      .find('input[type="date"]')
      .should('have.value', '2019-06-15');

    cy.get('[data-cy="harvest-crop"]')
      .should('be.visible')
      .find('select')
      .should('have.value', null);

    cy.get('[data-cy="harvest-buttons"]')
      .should('be.visible')
      .within(() => {
        cy.contains('button', 'Submit').should('be.disabled');
        cy.contains('button', 'Reset').should('be.enabled');
      });

    //not exist
    cy.get('body').find('[data-cy="harvest-table"]').should('not.exist');
    cy.get('body').find('[data-cy="harvest-quantity"]').should('not.exist');
    cy.get('body').find('[data-cy="harvest-units"]').should('not.exist');
    cy.get('body').find('[data-cy="harvest-comment"]').should('not.exist');
  });

  it('Check for full form functionality (crop has available plants)', () => {
    //should exist (all)
    cy.get('[data-cy ="harvest-crop"]').find('select').select('BROCCOLI');

    cy.get('[data-cy="harvest-table"]')
      .should('be.visible')
      .within(() => {
        cy.get('input[type="radio"]').should('have.length.at.least', 1);
      });

    cy.get('[data-cy="harvest-quantity"]')
      .should('be.visible')
      .find('input')
      .should('have.value', '1');

    cy.get('[data-cy="harvest-units"]')
      .should('be.visible')
      .find('option')
      .its('length')
      .should('be.greaterThan', 0);

    cy.get('[data-cy="harvest-comment"]')
      .should('be.visible')
      .find('textarea')
      .should('have.value', '');
  });

  it('Test for when crop has no available plants', () => {
    //should exist
    cy.get('[data-cy="harvest-crop"]').find('select').select('ASPARAGUS');

    cy.get('[data-cy="harvest-no-plants"]')
      .should('be.visible')
      .and('contain.text', 'There are no')
      .and('contain.text', 'plants available for harvest');

    //not exist
    cy.get('[data-cy="harvest-table"]').should('not.exist');
    cy.get('[data-cy="harvest-quantity"]').should('not.exist');
    cy.get('[data-cy="harvest-units"]').should('not.exist');
    cy.get('[data-cy="harvest-comment"]').should('not.exist');
  });
});
