/// <reference types="cypress" />

import kiwipage from "../pageObjects/kiwiPage"

describe('Test_4_configure_nomad_flight', function()
{

    beforeEach(function()
    {

    cy.fixture('base_urls.json').then(myurls => {
    this.myurls = myurls
    })

    cy.fixture('departure_locations.json').then(mydepartures => {
    this.mydepartures = mydepartures
    })

    cy.fixture('destination_locations.json').then(mydestinations => {
    this.mydestinations = mydestinations
    })

    cy.fixture('departure_return_dates.json').then(mydeparture_return_dates => {
    this.mydeparture_return_dates = mydeparture_return_dates
    })

    cy.fixture('flight_types.json').then(myflight_types => {
        this.myflight_types = myflight_types
    })

    cy.fixture('class_types.json').then(myclass_types => {
        this.myclass_types = myclass_types
    })


})



    it('Open kiwi page', function()
    {


    kiwipage.open(this.myurls.url_1)  //access the url
    kiwipage.acceptcookies()
    cy.title().should('eq', 'Kiwi.com | Find Cheap Flights & Discover New Destinations')
    kiwipage.verifyTitleOnPage('Calling for peace')       


    })



    it('Select nomad flight', function()
    {
    cy.SelectFlightType(this.myflight_types.flight_nomad)
    kiwipage.verifyFlightTypeAsExpected(this.myflight_types.flight_nomad)

    })



    it('Select passengers', function()
    {
        cy.SelectPassengers(3,2,2)
        
    })

    it('Select baggage', function()
    {
        
        cy.SelectBaggage(3,2)

    })


    it('Select initial departure location', function()
    {

        kiwipage.removeFirstDefaultDepartureNomad()
        cy.SelectInitialDepartureLocationNomad(this.mydepartures.location_1)

      
    })




    it('Select initial departure date', function()
    {
        kiwipage.clickInputForDepartureDateNomad()
        kiwipage.verifyDatePickerVisible()
        cy.selectDate(this.mydeparture_return_dates.departure_date_2.year, this.mydeparture_return_dates.departure_date_2.month, this.mydeparture_return_dates.departure_date_2.day)
        kiwipage.clickDoneForDates()


    })



    it('Select trip length', function()
    {

        kiwipage.clickInputForTripIntervalNomad()
        kiwipage.verifyDatePickerVisible()
        cy.selectTripInterval(13,18)
        kiwipage.clickDoneForDates()
       
        })

    
    it('Go to select destinations', function()
    {
        kiwipage.clickAddDestinations()
    
    })



    it('Select first destination location', function()
    {
        cy.SelectFirstDestinationLocationNomad(this.mydestinations.location_3)      


    })


    it('Select second destination location', function()
    {
        cy.SelectSecondDestinationLocationNomad(this.mydestinations.location_1) 
        kiwipage.clickSearchForFlightsNomad()
        


    })





  

})