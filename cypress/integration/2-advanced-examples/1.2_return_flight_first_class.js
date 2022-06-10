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



    it('Select return flight', function()
    {
        cy.SelectFlightType(this.myflight_types.flight_return)
        kiwipage.verifyFlightTypeAsExpected(this.myflight_types.flight_return)

    })


    it('Select class type', function()
    {
        cy.SelectClassType(this.myclass_types.first_class)
        kiwipage.verifyClassTypeAsExpected(this.myclass_types.first_class)

    })



    it('Select passengers', function()
    {
        cy.SelectPassengers(3,2,2)
        
    })



    it('Select baggage', function()
    {
        
        cy.SelectBaggage(3,2)

    })


    it('Select departure location', function()
    {

        kiwipage.removeDefaultDeparture()
        cy.SelectDepartureLocation(this.mydepartures.location_1)

       
    })



    it('Select destination location', function()
    {
            
        cy.SelectDestinationLocation(this.mydestinations.location_1)

    })

  

    it('Select departure and return date', function()
    {
 
        
        kiwipage.clickInputForDepartureDate()
        kiwipage.verifyDatePickerVisible()

        cy.selectDate(this.mydeparture_return_dates.departure_date_1.year, this.mydeparture_return_dates.departure_date_1.month, this.mydeparture_return_dates.departure_date_1.day)
        
        kiwipage.clickInputForReturnDate()
        kiwipage.verifyDatePickerVisible()

        cy.selectDate(this.mydeparture_return_dates.return_date_1.year, this.mydeparture_return_dates.return_date_1.month, this.mydeparture_return_dates.return_date_1.day)

          
        kiwipage.clickDoneForDates()
        kiwipage.uncheckBooking()
        kiwipage.clickSearchForFlights()
        
    })

  

})