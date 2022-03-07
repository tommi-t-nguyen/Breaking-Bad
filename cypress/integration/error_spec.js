describe('Error Page', () => {
  it('Should display an error message and have a button that navigates back to dashboard page', () => {
        cy.visit('http://localhost:3000/error')
          .get('h1')
          .should('have.text', 'We\'re Experiencing Technical Difficulties')
          .get('p')
          .should('have.text', 'Sorry for any inconvenience. Please try again.')
          .get('a')
          .should('have.text', 'Back to Home')
          .click()
          .intercept('GET', 'https://www.breakingbadapi.com/api/characters', {fixture: 'characters.json'})
          .url()
          .should('eq','http://localhost:3000/');
  })
})
