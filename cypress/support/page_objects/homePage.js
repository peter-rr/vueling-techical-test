
function selectDayFromCurrent(days) {
    let date = new Date() // JS object to create a more dynamic selection of the current day, avoiding selection of hardcoded days.
    date.setDate(date.getDate() + days)
    let futureDay = date.getDate()
    let futureMonth = date.toLocaleDateString('en-US', {month: 'long'})
    let futureYear = date.getFullYear()

    cy.get('.ct-datepicker').find('.ct-datepicker-header').eq(0).invoke('text').then( dateHeaderLeft => {
        if (!dateHeaderLeft.includes(futureMonth) || !dateHeaderLeft.includes(futureYear)) {
            cy.get('.ct-datepicker').find('.ct-datepicker-header').eq(1).invoke('text').then( dateHeaderRight => {
                if (!dateHeaderRight.includes(futureMonth) || !dateHeaderRight.includes(futureYear)) {
                    cy.get('[data-comp-id="ct-calendar-nav-next"]').click()
                    selectDayFromCurrent(days) 
                } else {
                    cy.get('.ct-datepicker').find('.ct-datepicker-month').eq(1)
                        .find('.ct-datepicker-cell').not('[data-enabled="false"]')
                        .contains(futureDay).click()
                }
            })       
        } else {
            cy.get('.ct-datepicker').find('.ct-datepicker-month').eq(0)
                .find('.ct-datepicker-cell').not('[data-enabled="false"]')
                .contains(futureDay).click()
        }
    })
}

export class HomePage {
    
    openHomePage() {
        cy.visit('/')
        cy.get('[data-testid="tabNavigationButton"]').should('contain', 'Car Hire')
    }

    selectPickupLocation(location) {
        cy.get('#pickupLocation').then( input => {
            cy.wrap(input).click()
            cy.wrap(input).type(location)
            cy.get('[role="listbox"]').find('#item-0-0').click() // Select first item from dropdown -> Improvement: check item value before selecting
            
            // Potential improvement: 
            // Loop through the list of items until the location entered matches the value of any of the items

        })
    }

    selectPickupDate(dayFromToday) {
        cy.get('#pickupDate').click()
        selectDayFromCurrent(dayFromToday)
    }

    selectReturnDate(dayFromToday) {
        cy.get('#returnDate').click()
        selectDayFromCurrent(dayFromToday)
    }

    selectDriverAge(age) {

    }
    
}
    
export const onHomePage = new HomePage()