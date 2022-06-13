class kiwiPage{


    open(url){

        cy.visit(url)
    
    }

    acceptcookies(){

        cy.get(".grobKh").click({ force: true })
    }

    verifyTitleOnPage(text){

        cy.get(".FullWidthPageTitlestyled__Title-sc-baj8m7-1").should('be.visible').should('contain', text)
    }



    verifyFlightTypeAsExpected(text){

        cy.get(".ModesFieldstyled__ButtonWrap-sc-l4niwy-1").should('be.visible').should('contain', text)
    }

    verifyClassTypeAsExpected(text){

        cy.get(".ButtonWrapsstyled__ButtonTabletWrap-sc-zf781k-0:nth-child(2)").should('be.visible').should('contain', text)
    }

    removeDefaultDeparture(){

        cy.get(".PlacePickerInputPlacestyled__PlacePickerInputClose-sc-esw2vf-1").click()
    }


    uncheckBooking(){

        cy.get('.Checkbox__Input-sc-1xqef2c-4').uncheck({force: true})
    }

    clickInputForDepartureDate(){

        cy.get(':nth-child(3) > [data-test="SearchDateInput"] > .SearchFieldstyled__SearchFieldItem-sc-1f3jsso-2 > [data-test="SearchField-inputWrapper"] > [data-test="SearchFieldDateInput"]').click()
    }

    clickInputForReturnDate(){

        cy.get(':nth-child(2) > [data-test="Container"] > .Stack__StyledStack-sc-oaff2v-0 > [data-test="DateValue"]').click()
    }

    clickInputForFirstDefaultDepartureDateMulticity(){

        cy.get(':nth-child(2) > .MulticityLinestyled__DateFieldWrapper-sc-9evteg-3 > .SearchFieldstyled__SearchField-sc-1f3jsso-0 > [data-test="SearchDateInput"] > .SearchFieldstyled__SearchFieldItem-sc-1f3jsso-2 > [data-test="SearchField-inputWrapper"] > [data-test="SearchFieldDateInput"]').click()
    }
    
    clickInputForSecondDefaultDepartureDateMulticity(){

        cy.get(':nth-child(3) > .MulticityLinestyled__DateFieldWrapper-sc-9evteg-3 > .SearchFieldstyled__SearchField-sc-1f3jsso-0 > [data-test="SearchDateInput"] > .SearchFieldstyled__SearchFieldItem-sc-1f3jsso-2 > [data-test="SearchField-inputWrapper"] > [data-test="SearchFieldDateInput"]').click()
    }
    


    verifyDatePickerVisible(){

        cy.get('.DatePickerstyled__DatePickerContainer-sc-tu2c5k-0').should('be.visible')
    }
    
    clickDoneForDates(){

        cy.get('[data-test="SearchFormDoneButton"] > .ButtonPrimitiveContent__StyledButtonPrimitiveContent-sc-1r81o9a-0').click()
    }

    clickSearchForFlights(){

        cy.get('[data-test="LandingSearchButton"] > .ButtonPrimitiveContent__StyledButtonPrimitiveContent-sc-1r81o9a-0').click()
    }

    clickSearchForFlightsMulticity(){

        cy.get('[data-test="searchMultiCity"] > .ButtonPrimitiveContent__StyledButtonPrimitiveContent-sc-1r81o9a-0').click()
    }

    removeFirstDefaultDepartureMulticity(){

        cy.get('[data-test="PlacePickerInput-origin-0"] > [data-test="PlacePickerInputPlace"] > [data-test="PlacePickerInputPlace-close"]').click()
    }

    removeSecondDefaultDepartureMulticity(){
        cy.get('[data-test="SearchPlaceField-origin-1"]').click()
        cy.get('[data-test="PlacePickerInput-origin-1"] > [data-test="PlacePickerInputPlace"] > [data-test="PlacePickerInputPlace-close"]').click()
    }

    removeSecondDefaultDestinationMulticity(){

        cy.get('[data-test="PlacePickerInput-destination-1"] > [data-test="PlacePickerInputPlace"] > [data-test="PlacePickerInputPlace-close"]').click()
    }


}
export default new kiwiPage();