class kiwiPageUtils{


    getFlightBtn(){

        return cy.get(".ModesFieldstyled__ButtonWrap-sc-l4niwy-1")
    }

    getFlightTypes(){

        return cy.get("p[data-test]")
    }


    getClassBtn(){

        return cy.get(".ButtonWrapsstyled__ButtonTabletWrap-sc-zf781k-0:nth-child(2)")
    }

    getClassTypes(){

        return cy.get("a.CabinClassPickerOptionstyled__StyledCabinClassPickerOption-sc-116y8d4-0")
    }

    getPassengersAndBagsBtn(){

        return cy.get(".PassengersAndBagsFieldstyled__StyledPassengersField-sc-kasop6-0")
    }


    getAdultsAddBtn(){

        return cy.get('[data-test="PassengersRow-adults"] > .LabeledStepperstyled__StepperWrap-sc-oo4v0a-4 > .StepperStateless__StyledStepper-sc-er9xml-0 > [aria-label="increment"] > .ButtonPrimitiveContent__StyledButtonPrimitiveContent-sc-1r81o9a-0')
    }

    getAdultsRmvBtn(){

        return cy.get('[data-test="PassengersRow-adults"] > .LabeledStepperstyled__StepperWrap-sc-oo4v0a-4 > .StepperStateless__StyledStepper-sc-er9xml-0 > [aria-label="decrement"] > .ButtonPrimitiveContent__StyledButtonPrimitiveContent-sc-1r81o9a-0')
    }

    getChildrenAddBtn(){

        return cy.get('[data-test="PassengersRow-children"] > .LabeledStepperstyled__StepperWrap-sc-oo4v0a-4 > .StepperStateless__StyledStepper-sc-er9xml-0 > [aria-label="increment"] > .ButtonPrimitiveContent__StyledButtonPrimitiveContent-sc-1r81o9a-0')
    }

    getChildrenRmvBtn(){

        return cy.get('[data-test="PassengersRow-children"] > .LabeledStepperstyled__StepperWrap-sc-oo4v0a-4 > .StepperStateless__StyledStepper-sc-er9xml-0 > [aria-label="decrement"] > .ButtonPrimitiveContent__StyledButtonPrimitiveContent-sc-1r81o9a-0')
    }

    getInfantsAddBtn(){

        return cy.get('[data-test="PassengersRow-infants"] > .LabeledStepperstyled__StepperWrap-sc-oo4v0a-4 > .StepperStateless__StyledStepper-sc-er9xml-0 > [aria-label="increment"] > .ButtonPrimitiveContent__StyledButtonPrimitiveContent-sc-1r81o9a-0')
    }

    getInfantsRmvBtn(){

        return cy.get('[data-test="PassengersRow-infants"] > .LabeledStepperstyled__StepperWrap-sc-oo4v0a-4 > .StepperStateless__StyledStepper-sc-er9xml-0 > [aria-label="decrement"] > .ButtonPrimitiveContent__StyledButtonPrimitiveContent-sc-1r81o9a-0')
    }

    
    getPassengersAndBagsDoneBtn(){

        return cy.get('[data-test="PassengersFieldFooter-done"] > .ButtonPrimitiveContent__StyledButtonPrimitiveContent-sc-1r81o9a-0')
    }

    getAdultsConfiguredNumber(){

        return cy.get('.doKCsw > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > input:nth-child(2)')
    }

    getChildrenConfiguredNumber(){

        return cy.get('.doKCsw > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > input:nth-child(2)')
    }

    getInfantsConfiguredNumber(){

        return cy.get('.doKCsw > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > input:nth-child(2)')
    }

    getTotalPassengersConfiguredNumber(){

        return cy.get('.PassengersAndBagsFieldstyled__StyledPassengersField-sc-kasop6-0 > div:nth-child(1) > div:nth-child(1) > button:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > span:nth-child(2)')
    }

    
    getCabinBaggageAddBtn(){

        return cy.get('[data-test="BagsPopup-cabin"] > .LabeledStepperstyled__StepperWrap-sc-oo4v0a-4 > .StepperStateless__StyledStepper-sc-er9xml-0 > [aria-label="increment"] > .ButtonPrimitiveContent__StyledButtonPrimitiveContent-sc-1r81o9a-0')
    }

    getMultiCityCabinBaggageAddBtn(){

        return cy.get('[data-test="BagsPopup-cabin"] > .LabeledStepperstyled__StepperWrap-sc-oo4v0a-4 > .StepperStateless__StyledStepper-sc-er9xml-0 > [aria-label="increment"] > .ButtonPrimitiveContent__StyledButtonPrimitiveContent-sc-1r81o9a-0 > .ButtonPrimitiveIconContainer__StyledButtonPrimitiveIconContainer-sc-8rx3cv-0 > .Icon__StyledIcon-sc-1det6wr-0')
    }

    getMultiCityCheckedBaggageAddBtn(){

        return cy.get('[data-test="BagsPopup-checked"] > .LabeledStepperstyled__StepperWrap-sc-oo4v0a-4 > .StepperStateless__StyledStepper-sc-er9xml-0 > [aria-label="increment"] > .ButtonPrimitiveContent__StyledButtonPrimitiveContent-sc-1r81o9a-0 > .ButtonPrimitiveIconContainer__StyledButtonPrimitiveIconContainer-sc-8rx3cv-0 > .Icon__StyledIcon-sc-1det6wr-0')
    }

   
    getCabinBaggageRmvBtn(){

        return cy.get('[data-test="BagsPopup-cabin"] > .LabeledStepperstyled__StepperWrap-sc-oo4v0a-4 > .StepperStateless__StyledStepper-sc-er9xml-0 > [aria-label="decrement"] > .ButtonPrimitiveContent__StyledButtonPrimitiveContent-sc-1r81o9a-0')
    }

    getCheckedBaggageAddBtn(){

        return cy.get('[data-test="BagsPopup-checked"] > .LabeledStepperstyled__StepperWrap-sc-oo4v0a-4 > .StepperStateless__StyledStepper-sc-er9xml-0 > [aria-label="increment"] > .ButtonPrimitiveContent__StyledButtonPrimitiveContent-sc-1r81o9a-0')
    }

    getCheckedBaggageRmvBtn(){

        return cy.get('[data-test="BagsPopup-checked"] > .LabeledStepperstyled__StepperWrap-sc-oo4v0a-4 > .StepperStateless__StyledStepper-sc-er9xml-0 > [aria-label="decrement"] > .ButtonPrimitiveContent__StyledButtonPrimitiveContent-sc-1r81o9a-0')
    }

    getCabinBaggageConfiguredNumber(){

        return cy.get('.BagsPickerstyled__Wrapper-sc-h2j3jl-0 > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > input:nth-child(2)')
    }

    getCheckedBaggageConfiguredNumber(){

        return cy.get('.BagsPickerstyled__Wrapper-sc-h2j3jl-0 > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > input:nth-child(2)')
    }

    getTotalBaggageConfiguredNumber(){

        return cy.get('.PassengersAndBagsFieldstyled__StyledPassengersField-sc-kasop6-0 > div:nth-child(1) > div:nth-child(1) > button:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > span:nth-child(2)')
    }
    

    getInputForDepartureLocation(){

        return cy.get('[data-test="PlacePickerInput-origin"]')
    }


    getInputForFirstDefaultDepartureLocationMulticity(){

        return cy.get('[data-test="SearchPlaceField-origin-0"]')
    }

    getInputForFirstDefaultDestinationLocationMulticity(){

        return cy.get('[data-test="SearchPlaceField-destination-0"]')
    }
    
    
    getInputForSecondDefaultDepartureLocationMulticity(){

        return cy.get('[data-test="SearchPlaceField-origin-1"]')
    }

    getInputForSecondDefaultDestinationLocationMulticity(){

        return cy.get('[data-test="SearchPlaceField-destination-1"]')
    }
    

    
    getAddLocationBtn(){

        return cy.get(':nth-child(1) > [data-test="PlacePickerRow-city"] > .Stack__StyledStack-sc-oaff2v-0 > [data-test="PlacePickerRow-wrapper"] > .RowButtonsstyled__AddButton-sc-1imtypa-0 > .ButtonPrimitive__StyledButtonPrimitive-sc-1lbd19y-0 > .ButtonPrimitiveContent__StyledButtonPrimitiveContent-sc-1r81o9a-0')
    }

    
    getInputForDestinationLocation(){

        return cy.get('[data-test="PlacePickerInput-destination"] > [data-test="SearchField-input"]')
    }

    getInputForDepartureDate(){

        return cy.get(':nth-child(3) > [data-test="SearchDateInput"] > .SearchFieldstyled__SearchFieldItem-sc-1f3jsso-2 > [data-test="SearchField-inputWrapper"] > [data-test="SearchFieldDateInput"]')
    }

    getInputForReturnDate(){

        return cy.get(':nth-child(4) > [data-test="SearchDateInput"] > .SearchFieldstyled__SearchFieldItem-sc-1f3jsso-2 > [data-test="SearchField-inputWrapper"] > [data-test="SearchFieldDateInput"]')
    }

    getInputForFirstDefaultDepartureDateMulticity(){

        return cy.get(':nth-child(2) > .MulticityLinestyled__DateFieldWrapper-sc-9evteg-3 > .SearchFieldstyled__SearchField-sc-1f3jsso-0 > [data-test="SearchDateInput"] > .SearchFieldstyled__SearchFieldItem-sc-1f3jsso-2 > [data-test="SearchField-inputWrapper"] > [data-test="SearchFieldDateInput"]')
    }

    getDatePicker(){

        return cy.get('.DatePickerstyled__DatePickerContainer-sc-tu2c5k-0')
    }


    getNavigateBackBtn(){

        return cy.get('[data-test="CalendarMovePreviousButton"] > .ButtonPrimitiveContent__StyledButtonPrimitiveContent-sc-1r81o9a-0')
    }

    getNavigateForwardBtn(){

        return cy.get('[data-test="CalendarMoveNextButton"] > .ButtonPrimitiveContent__StyledButtonPrimitiveContent-sc-1r81o9a-0')
    }

    getSetDatesBtn(){

        return cy.get('[data-test="SearchFormDoneButton"] > .ButtonPrimitiveContent__StyledButtonPrimitiveContent-sc-1r81o9a-0')
    }

    getSearchFinalBtn(){

        return cy.get('[data-test="LandingSearchButton"] > .ButtonPrimitiveContent__StyledButtonPrimitiveContent-sc-1r81o9a-0')
    }

    getDisplayedDate(){

        return cy.get('div.Calendarstyled__Container-sc-612c3d-0:nth-child(1) > div:nth-child(1) > div:nth-child(1) > button:nth-child(1) > div:nth-child(1) > div:nth-child(1)')
    }

    getAllDaysCalendar(){

        return cy.get('[data-type="DayContainer"]')
    }

    
}

export default kiwiPageUtils