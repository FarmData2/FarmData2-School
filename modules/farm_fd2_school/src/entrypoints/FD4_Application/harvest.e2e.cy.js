describe('Tests for the Harvest form', () => {
  beforeEach(() => {
    cy.restoreLocalStorage();
    cy.restoreSessionStorage();

    cy.intercept('GET', '**/api/taxonomy_term/plant_type*').as('getCrops');

    cy.login('manager1', 'farmdata2');
    cy.visit('fd2_school/FD4_Application');

    cy.wait('@getCrops');
  });

  afterEach(() => {
    cy.saveLocalStorage();
    cy.saveSessionStorage();
  });

  it('Should verify the initial state of the Harvest form upon loading', () => {
    cy.get('[data-cy="harvest-header"]')
      .should('be.visible')
      .and('contain', 'Harvest');
    
    cy.get('[data-cy="date-selector"]')
      .should('be.visible')
      .find('input')
      .should('have.value', '2019-06-15');

    cy.get('[data-cy="crop-selector"]')
      .should('be.visible')
      .find('select')
      .should('have.value', ""); 
    cy.get('[data-cy="submit"]').should('be.visible').and('be.disabled'); 
    cy.get('[data-cy="reset"]').should('be.visible').and('not.be.disabled');

    cy.get('[data-cy="plant-table"]').should('not.exist');
    cy.get('[data-cy="quantity-input"]').should('not.exist');
    cy.get('[data-cy="units-select"]').should('not.exist');
    cy.get('[data-cy="comment-box"]').should('not.exist');
  });

  it('Should correctly update the form when a crop with harvestable plants is selected', () => {    cy.get('[data-cy="crop-selector"]').find('select').select('ARUGULA');
        
    // Plant Table check
    cy.get('[data-cy="plant-table"]')
      .should('be.visible')
      .find('tr')
      .its('length')
      .should('be.gt', 1); 
    cy.get('[data-cy="plant-table"]')
      .find('input[type="radio"]')
      .should('not.be.checked'); 
    cy.get('[data-cy="quantity-input"]')
      .should('be.visible')
      .find('input')
      .should('have.attr', 'type', 'number')
      .should('have.value', '1');
      
    cy.get('[data-cy="units-select"], span').should('be.visible');
    cy.get('[data-cy="comment-box"]').should('be.visible');
    
    cy.get('[data-cy="submit"]').should('be.disabled');
    
    cy.get('#harvest-no-plants').should('not.exist');
  });

  it('Should correctly display a message when a selected crop has no harvestable plants', () => {
    cy.get('[data-cy="crop-selector"]').find('select').select('BEANS'); 

    cy.get('#harvest-no-plants')
      .should('be.visible')
      .and('contain', 'There are no BEANS plants available for harvest.');

    cy.get('[data-cy="plant-table"]').should('not.exist');
    cy.get('[data-cy="quantity-input"]').should('not.exist');
    cy.get('[data-cy="units-select"]').should('not.exist');
    cy.get('[data-cy="comment-box"]').should('not.exist');

    cy.get('[data-cy="submit"]').should('be.disabled');
  });
});