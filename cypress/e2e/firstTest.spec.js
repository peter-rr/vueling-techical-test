const { onHomePage } = require("../support/page_objects/homePage")

describe('Tests for insurance options', () => {
    
    it('test 1', () => {
        onHomePage.openHomePage()
        onHomePage.selectPickupLocation('Barcelona Airport')
        onHomePage.selectPickupDate(3)
        onHomePage.selectReturnDate(5)
        // onHomePage.selectDriverAge()
    })

})