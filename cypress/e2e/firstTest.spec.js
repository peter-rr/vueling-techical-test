const { onHomePage } = require("../support/page_objects/homePage")
const { onResultsPage, onSearchResultsPage } = require("../support/page_objects/searchResultsPage")

describe('Tests for insurance options', () => {

    it('test 1', () => {
        onHomePage.openHomePage()
        onHomePage.selectPickupLocation('Barcelona Airport')
        onHomePage.selectPickupDate(3)
        onHomePage.selectReturnDate(5)
        onHomePage.selectDriverAge(40)
        
        onHomePage.searchCars()
        // onSearchResultsPage.checkPageIsLoaded()
    })

})