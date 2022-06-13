/// <reference types="cypress" />


import kiwipage from "../pageObjects/kiwiPage"

describe('Test_1_configure_return_flight', function()
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



    it('Select multi-city flight', function()
    {
        cy.SelectFlightType(this.myflight_types.flight_multicity)
        kiwipage.verifyFlightTypeAsExpected(this.myflight_types.flight_multicity)

    })





    it('Select passengers', function()
    {
        cy.SelectPassengers(3,2,2)
        
    })



    it('Select baggage', function()
    {
        
        cy.SelectBaggageMulticity(3,2)

    })


    it('Select first departure location', function()
    {

        kiwipage.removeFirstDefaultDepartureMulticity()
        cy.SelectFirstDefaultDepartureLocationMulticity(this.mydepartures.location_3)
      
    })


    it('Select first destination location', function()
    {

        cy.SelectFirstDefaultDestinationLocationMulticity(this.mydestinations.location_3)


    })

    it('Select second departure location', function()
    {
        
        kiwipage.removeSecondDefaultDepartureMulticity()
        cy.SelectSecondDefaultDepartureLocationMulticity(this.mydepartures.location_2)     


    })


    it('Select second destination location', function()
    {

        kiwipage.removeSecondDefaultDestinationMulticity()
        cy.SelectSecondDefaultDestinationLocationMulticity(this.mydestinations.location_2)

    })



    it('Select first departure date', function()
    {
       
        kiwipage.clickInputForFirstDefaultDepartureDateMulticity()
        kiwipage.verifyDatePickerVisible()
        cy.selectDate(this.mydeparture_return_dates.departure_date_2.year, this.mydeparture_return_dates.departure_date_2.month, this.mydeparture_return_dates.departure_date_2.day)
        kiwipage.clickDoneForDates()
        
        
    })

    it('Select second departure date', function()
    {      

        kiwipage.clickInputForSecondDefaultDepartureDateMulticity()
        kiwipage.verifyDatePickerVisible()
        cy.selectDate(this.mydeparture_return_dates.departure_date_3.year, this.mydeparture_return_dates.departure_date_3.month, this.mydeparture_return_dates.departure_date_3.day)
        kiwipage.clickDoneForDates()
        kiwipage.clickSearchForFlightsMulticity()


    })

  

})