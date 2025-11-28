describe('Basic Accessibility Test', () => {

  beforeEach(() => {
    cy.visit('http://127.0.0.1:3000/')
    cy.injectAxe()
  })

  it('Should detect accessibility violations', () => {
    cy.checkA11y()
  })
})