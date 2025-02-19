const { onHomePage } = require("../support/page_objects/homePage")
const { onResultsPage, onSearchResultsPage } = require("../support/page_objects/searchResultsPage")

describe('Tests for insurance options', () => {
    
    afterEach(() => {
        cy.wait(2000); // Espera un poco antes de finalizar
        cy.screenshot(); // Toma una captura para ver qué pasó antes de la pantalla en blanco
    });
      
    it('test 1', () => {
        onHomePage.openHomePage()
        onHomePage.selectPickupLocation('Barcelona Airport')
        onHomePage.selectPickupDate(3)
        onHomePage.selectReturnDate(5)
        onHomePage.selectDriverAge(40)
        
        cy.intercept('GET', '**/book*').as('searchResults')
        cy.get('#searchCarsFormBtn-searchcars').click()
        cy.wait('@searchResults')
        cy.url().should('include', '/book')

        // onHomePage.searchCars()
        // onSearchResultsPage.checkPageIsLoaded()
    })

})