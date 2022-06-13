// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


import DateUtils from './utility/DateUtils';
import kiwipageUtils from "../integration/pageObjects/kiwipageUtils"



var dateUtils = new DateUtils();
var kiwi = new kiwipageUtils();









Cypress.Commands.add('SelectFlightType', (flight_type) => { 


    kiwi.getFlightBtn().click()
    kiwi.getFlightTypes().each(function($ele, index, list) {

        if ($ele.text() === flight_type){
            cy.log("Found element")
            cy.wrap($ele).click()

        }
    })
})


Cypress.Commands.add('SelectClassType', (class_type) => { 


    kiwi.getClassBtn().click()
    kiwi.getClassTypes().each(function($ele, index, list) {
    
        if ($ele.text() === class_type){
            cy.log("Found element")
            cy.wrap($ele).click()
    
        }
    })
})


Cypress.Commands.add('SelectPassengers', (adults_number, children_number, infants_number) => { 


    kiwi.getPassengersAndBagsBtn().click()
    Cypress._.times(adults_number-1, () => {
        kiwi.getAdultsAddBtn().click()
    })
    kiwi.getAdultsConfiguredNumber().should('be.visible').should('have.value', adults_number)



    Cypress._.times(children_number, () => {
        kiwi.getChildrenAddBtn().click()
    })
    kiwi.getChildrenConfiguredNumber().should('be.visible').should('have.value', children_number)



    Cypress._.times(infants_number, () => {
        kiwi.getInfantsAddBtn().click()
    })
    kiwi.getInfantsConfiguredNumber().should('be.visible').should('have.value', infants_number)

    kiwi.getPassengersAndBagsDoneBtn().click()
    kiwi.getTotalPassengersConfiguredNumber().should('be.visible').should('contain', adults_number + children_number + infants_number)



})


Cypress.Commands.add('SelectBaggage', (cabin_baggage, checked_baggage) => { 


    kiwi.getPassengersAndBagsBtn().click()
    Cypress._.times(cabin_baggage, () => {
        kiwi.getCabinBaggageAddBtn().click()
    })
    kiwi.getCabinBaggageConfiguredNumber().should('be.visible').should('have.value', cabin_baggage)



    Cypress._.times(checked_baggage, () => {
        kiwi.getCheckedBaggageAddBtn().click()
    })
    kiwi.getCheckedBaggageConfiguredNumber().should('be.visible').should('have.value', checked_baggage)


    kiwi.getPassengersAndBagsDoneBtn().click()
    kiwi.getTotalBaggageConfiguredNumber().should('be.visible').should('contain', cabin_baggage + checked_baggage)



})




Cypress.Commands.add('SelectBaggageMulticity', (cabin_baggage, checked_baggage) => { 


    kiwi.getPassengersAndBagsBtn().click()
    Cypress._.times(cabin_baggage, () => {
        kiwi.getMultiCityCabinBaggageAddBtn().click()
    })
    kiwi.getCabinBaggageConfiguredNumber().should('be.visible').should('have.value', cabin_baggage)



    Cypress._.times(checked_baggage, () => {
        kiwi.getMultiCityCheckedBaggageAddBtn().click()
    })
    kiwi.getCheckedBaggageConfiguredNumber().should('be.visible').should('have.value', checked_baggage)


    kiwi.getPassengersAndBagsDoneBtn().click()
    kiwi.getTotalBaggageConfiguredNumber().should('be.visible').should('contain', cabin_baggage + checked_baggage)



})



Cypress.Commands.add('SelectDepartureLocation', (departureLocation) => { 

    kiwi.getInputForDepartureLocation().click().type(departureLocation)
    kiwi.getAddLocationBtn().click()


})

Cypress.Commands.add('SelectDestinationLocation', (destinationLocation) => { 

    kiwi.getInputForDestinationLocation().click().type(destinationLocation)
    kiwi.getAddLocationBtn().click()


})


Cypress.Commands.add('SelectFirstDefaultDepartureLocationMulticity', (departureLocation) => { 

    kiwi.getInputForFirstDefaultDepartureLocationMulticity().click().type(departureLocation)
    kiwi.getAddLocationBtn().click()


})

Cypress.Commands.add('SelectFirstDefaultDestinationLocationMulticity', (destinationLocation) => { 

    kiwi.getInputForFirstDefaultDestinationLocationMulticity().click().type(destinationLocation)
    kiwi.getAddLocationBtn().click()


})

Cypress.Commands.add('SelectSecondDefaultDepartureLocationMulticity', (departureLocation) => { 

    kiwi.getInputForSecondDefaultDepartureLocationMulticity().click().type(departureLocation)
    kiwi.getAddLocationBtn().click()


})

Cypress.Commands.add('SelectSecondDefaultDestinationLocationMulticity', (destinationLocation) => { 

    kiwi.getInputForSecondDefaultDestinationLocationMulticity().click().type(destinationLocation)
    kiwi.getAddLocationBtn().click()


})




Cypress.Commands.add('selectDate', (yearName, monthName, dayName) => { 
    let givenMonth = dateUtils.getMonthIndexFromName(monthName)
    const dayjs = require('dayjs')
    let actual = dayjs().format('DD/MM/YYYY').split('/')
    let min_year = actual[2]
    let min_month = actual[1]
    let min_day = actual[0]
    cy.log(min_month)
    cy.log(min_year)
    cy.log(min_day)
    if(yearName<min_year){

        throw 'Specified year number is not available in the calendar!'
    }
    else if(yearName==min_year){
        if(givenMonth<min_month){
            throw 'Specified month number is not available in the calendar!'
        }
        else if(givenMonth>min_month){

            cy.log('we need to move forward with the month')
                }
        else if(givenMonth=min_month){

            if(dayName<min_day){
                throw 'Specified day number is not available in the calendar!'
            }
            else if(dayName>min_day){
                cy.log('we need to move forward with the day')
            }
                }
        
    }
    else if(yearName>min_year){
        cy.log('we need to move forward with the year')
    }

        kiwi.getDisplayedDate().then(($date) => {
    
        let value = $date.text().split(' ')
        let actual_year = value[1]
        let actual_month = value[0]
        if(actual_year==yearName){

            cy.log(yearName + ' year is selected as it should')
            // return
        }
        
        else{
            if(yearName<actual_year){

                cy.log('the year you want to configure is in the past, please review the selected value')
                throw 'Specified year number is not available in the calendar!'
            }

            else if (yearName>actual_year){
                kiwi.getNavigateForwardBtn().click()
                cy.log('moved forward to select the year')
            }

        }

        if(actual_month==monthName){
            cy.log(monthName + ' month is selected as it should')
            // return
        }
        else{
              
            kiwi.getNavigateForwardBtn().click()
            cy.log('moved forward to select the month')
        }

        kiwi.getAllDaysCalendar().contains(dayName).each(function($ele, index, list) {
            cy.log($ele.text())
            if ($ele.text() == dayName){
                cy.log("Found element")
                cy.wrap($ele).click()
    
            }    
        })
        cy.selectYear(yearName, monthName, dayName)
     })

 })
 
 Cypress.Commands.add('selectYear', (yearName) => { 


    kiwi.getDisplayedDate().then(($year) => {
        let value = $year.text().split(' ')
        let actual_year = value[1]
        if(actual_year==yearName){

            cy.log(yearName + ' year is selected as it should')
            return
        }
        
        else{
            if(yearName<actual_year){

                cy.log('the year you want to configure is in the past, please review the selected value')
                throw 'Specified year number is not available in the calendar!'
            }

            else if (yearName>actual_year){
                kiwi.getNavigateForwardBtn().click()
                cy.log('moved forward to select the year')
            }

        }


        cy.selectYear(yearName)
     })

 })

 Cypress.Commands.add('selectMonth', (monthName) => { 



    kiwi.getDisplayedDate().then(($month) => {
        let value = $month.text().split(' ')
        let actual_month = value[0]
        if(actual_month==monthName){
            cy.log(monthName + ' month is selected as it should')
            return
        }
        else{
              
            kiwi.getNavigateForwardBtn().click()
            cy.log('moved forward to select the month')
        }

              

        
        cy.selectMonth(monthName)

    })

 })


 Cypress.Commands.add('selectDay', (dayName) => { 

    

    kiwi.getAllDaysCalendar().contains(dayName).each(function($ele, index, list) {
        cy.log($ele.text())
        if ($ele.text() == dayName){
            cy.log("Found element")
            cy.wrap($ele).click()

        }    
    })

 })

 Cypress.Commands.add('validateDate', (yearName, monthName, dayName) => { 


    let givenMonth = dateUtils.getMonthIndexFromName(monthName)
    const dayjs = require('dayjs')
    let actual = dayjs().format('DD/MM/YYYY').split('/')
    let min_year = actual[2]
    let min_month = actual[1]
    let min_day = actual[0]
    cy.log(min_month)
    cy.log(min_year)
    cy.log(min_day)
    if(yearName<min_year){

        throw 'Specified year number is not available in the calendar!'
    }
    else if(yearName==min_year){
        if(givenMonth<min_month){
            throw 'Specified month number is not available in the calendar!'
        }
        else if(givenMonth>min_month){

            cy.log('we need to move forward with the month')
                }
        else if(givenMonth=min_month){

            if(dayName<min_day){
                throw 'Specified day number is not available in the calendar!'
            }
            else if(dayName>min_day){
                cy.log('we need to move forward with the day')
            }
                }
        
    }
    else if(yearName>min_year){
        cy.log('we need to move forward with the year')
    }

})

Cypress.Commands.add('moveLeftHandle', (dayNumber) => { 


    let coordinate = dateUtils.leftHandleTransformToDayFromCoordinate(dayNumber)
    cy.get('[data-test="SliderHandle-0"]').trigger('mousedown', {button:0}, { force: true })
    .trigger("mousemove", {clientX : coordinate, clientY : 0}, { force: true }).trigger("mousemove")
    .trigger("mouseup", {force:true})
   

})