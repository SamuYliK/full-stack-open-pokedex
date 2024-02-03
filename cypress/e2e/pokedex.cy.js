describe('Pokedex', function() {
  beforeEach(function () {
    cy.visit('http://localhost:5000/error')
  })

  it('front page can be opened', function() {
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })

  it('pokemon page can be navigated to', function() {
    cy.contains('ivysaur').click()
    cy.contains('chlorophyll')
    cy.contains('overgrow')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })

  it('back to home page button works from pokemon page', function() {
    cy.contains('ivysaur').click()
    cy.contains('chlorophyll')
    cy.contains('overgrow')
    cy.contains('Home').click()
    cy.contains('charizard')
    cy.contains('blastoise')
  })
})