describe('Single character Details User Flows', () => {
 beforeEach(() => {
    cy.intercept('https://www.breakingbadapi.com/api/characters/1', {fixture: 'details.json'})
    .visit('http://localhost:3000/characters/1');
 });

 it('should be able to visit the url for a single character and correct details be returned', () => {
    cy.url()
    .should('eq', 'http://localhost:3000/characters/1');
  });


 it('should see a name upon page load', () => {
    cy.get('.character-info')
      .contains('Walter White')
      .should('be.visible');
  });

it('should see a birthday upon page load', () => {
     cy.get('.character-info')
       .contains('09-07-1958')
       .should('be.visible');
  });

it('should see a nickname upon page load', () => {
     cy.get('.character-info')
       .contains('Heisenberg')
       .should('be.visible');
  });

it('should see a status upon page load', () => {
     cy.get('.character-info')
       .contains('Presumed dead')
       .should('be.visible');
  });

it('should see a Portrayed by upon page load', () => {
     cy.get('.character-info')
       .contains('Bryan Cranston')
       .should('be.visible');
  });

it('should see a Home button by upon page load', () => {
     cy.get('.home')
       .contains('Home ↩')
       .should('be.visible')
       .click()
       .intercept('GET', 'https://www.breakingbadapi.com/api/characters', {fixture: 'characters.json'})
       .url()
       .should('eq','http://localhost:3000/');
  });
});
