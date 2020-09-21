// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="Cypress" />

describe('Batman TV shows', () => {
  it('API works', () => {
    cy.request('https://api.tvmaze.com/search/shows?q=batman')
      .its('body')
      .should('have.length', 10)
  })

  it('has list of shows', () => {
    cy.visit('/')
    cy.contains('h1', 'Batman TV Shows')
    // adding visibility ensures the DOM has been updated
    // and the elements are actually visible to the user
    cy.get('li').should('have.length.gt', 5).and('be.visible')
  })

  it('goes to the first post', () => {
    cy.visit('/')
    cy.get('li').should('have.length.gt', 5).and('be.visible')
      .first()
      .find('a')
      .click()
    cy.url().should('match', /\/p\/\d+$/)
  })

  it('has About page', () => {
    cy.visit('/')
    cy.contains('a', 'About').should('be.visible')
      .click()
    cy.location('pathname').should('equal', '/about')
    cy.contains('a', 'Home').should('be.visible').click()
    cy.location('pathname').should('equal', '/')
  })
})
