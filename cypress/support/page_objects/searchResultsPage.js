
export class SearchResultsPage {
    
    checkPageIsLoaded() {
        //cy.url().should('include', '/book')
        //cy.get('[page="vehicles"]', { timeout: 10000 }).should('contain', ' Search Results ')
        cy.get('.ct-list-block__carousel').should('be.visible')
    }

}
    
export const onSearchResultsPage = new SearchResultsPage()