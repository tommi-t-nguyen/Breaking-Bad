describe('Homepage User Flow', () => {
  beforeEach(() => {
    cy.intercept('https://www.breakingbadapi.com/api/characters', {fixture: 'characters.json'})
      .visit('http://localhost:3000');
  });

  it('should be able to visit the url', () => {
   cy.url()
     .should('eq', 'http://localhost:3000/');
 });

 it('should be able to see a nav with the app logo', () => {
   cy.get('.logo')
     .should('be.visible');
 });

 it('should display characters card on home page', () => {
   cy.get('.characters-container')
     .get('.card')
     .should('be.visible');
 });

 it('should see a search bar and able to search', () => {
   cy.get('.search-bar')
     .type('Walter White Jr')
     .get('.submit')
     .click()
     .get('.characters-container')
     .its('length')
     .should('be.lessThan', 2)
  });

  it('should display character details when a character card is clicked', () => {
      cy.intercept('GET', 'https://www.breakingbadapi.com/api/characters/1', {fixture: 'details.json'})
      .visit('http://localhost:3000')
      .get('.card').first().click()
      .url().should('include', '/characters/1');
    });
});
