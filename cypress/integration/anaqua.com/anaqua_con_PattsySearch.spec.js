describe('Anaqua.com Pattsy Wave Search', () => {
//Search Results page has an uncaptured error before will prevent failed test
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})
  it('Searches for Pattsy Wave and confirm results', () => {
    cy.visit('https://anaqua.com')
	cy.get('#cookie_action_close_header')
		.click()
	cy.get('#flsearchform')
		.click()
	

	cy.get('#menu-item-381 > div > form > input')
		.type('pattsy wave{enter}')

	
	cy.url().should('include',  's=pattsy+wave')
		
		
	cy.get('#fl-main-content > div > div > div > div')
		.find('div')
		.filter('.featured-content')
		.and('have.length', 3)
  })
})
