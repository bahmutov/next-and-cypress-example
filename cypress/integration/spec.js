// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="Cypress" />

describe('Batman TV shows', () => {
  it('has list of shows', () => {
    cy.visit('/')
    cy.contains('h1', 'Batman TV Shows')
    cy.get('li').should('have.length.gt', 5)
  })

  it('goes to the first post', () => {
    cy.visit('/')
    cy.get('li')
      .first()
      .find('a')
      .click()
    cy.url().should('match', /\/p\/\d+$/)
  })

  it('has About page', () => {
    cy.visit('/')
    cy.contains('a', 'About').click()
    cy.location('pathname').should('equal', '/about')
    cy.contains('a', 'Home').click()
    cy.location('pathname').should('equal', '/')
  })
})
