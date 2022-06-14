# kiwi.com-search
kiwi.com search flight functionality testing with cypress

Brief description of how search functionality works:



At least 1 adult must be selected as passenger for any type of flight.

Infants can travel only together with at least one adult. Number of infants that can be configured is maximum one per adult passenger

If the flight is return, user should have the possibility to select the departure date and the return date of the journey as well.

If the flight is return or one-way and there are no departure and destination locations selected in the fields, the explore button is displayed but it is disabled (greyed out).

If the flight is one-way, for the return field area there should be “No return” written inside of it as default, and user should have the possibility to select the departure date of the journey but also to change the return date for the flight from “no return” to an actual date.

If the flight is one-way, if the user chooses a date for the return field area instead of “No return” as it is by default, the flight automatically turns to return.

If the flight is one-way or return, if the user chooses only the departure location, without the destination location, the explore button is available instead of search.

If the flight is one-way or return, all available classes can be selected, also the apply mixed classes is available.

If the flight is multi city, 2 trips are displayed as default. Additional trips can be added. The total number of trips that can be added is eight. Having the maximum number of trips, the add destination button is disabled. Departure and destination location can be selected for each trip. Only economy class is available for multi-city flight.

If the flight is nomad, there is no class available for selection.

If the flight is multi city and there are at least 3 trips, the option to delete trips is available through delete button for the specific trip.

If the flight is return or one-way or nomad, the departure date is by default an interval of 1 month, an interval between the curent date and the same day but from the next month.

If the flight is nomad, a trip length field is available and the default value for it is an interval between 1-60 nights.

If the flight is multi-city, for the first trip the departure date is by default an interval of 1 month, an interval between the curent date and the same day but from the next month. For the next trips the default date is a day that is 3 days away from the end of the previous trip period. This behavior is true for each trip except the first trip, so for the other 7 possible trips, because the first trip is always taken as reference and the first trip doesn’t have any reference, only the ones that follow after.

If the flight is nomad, additional destinations can be added with “add destinations” button. If users clicks on this button, a new window is opened and by default 2 destinations must be configured minimum. Default period for these destinations is an interval of 3-5 nights. Additional destinations can be added using “add destination” button from this new window. Ten is the maximum number of destinations that can be added. After reaching this number the “add destination” button is not available anymore. After the two minimum destinations are selected as locations a message is displayed in the window “It is about the right amount of travel time”. Each destination can be removed by clicking the “X” from each destination, from the upper right corner. The number of nights can be edited for each destination. There is a checkbox available in this window, “return to a different location”, if checked another field is displayed which can be configured with a destination location. By default, it is configured with the departure destination from the flight. After having minimum 2 trips configured, the “search journeys” button is enabled.

For each type of flight, the location field can be configured with multiple locations in the same time.

For each type of flight, the user can configure the number of passengers and the baggage. The maximum number of passengers is 9. The maximum of baggage for one passenger is 1 for cabin baggage and 2 for checked baggage.

For all types of flights maximum 10 locations can be configured in the “From” field. 10 maximum locations can be configured in the “To” field for all types of flights less the nomad type which doesn’t have the “to” field.




Automated tests:

There are 4 automated test cases, one for each type of flight:
1.1_one_way_flight_economy
1.2_return_flight_first_class
1.3_multi_city_flight
1.4_nomad_flight


Things worth mentioning:

1. For each type of flight, at least one calendar date must be chosen, depending on the type of flight, even two dates.
I covered this functionality by creating a custom command, "selectDate" 

Cypress.Commands.add('selectDate', (yearName, monthName, dayName) => { 
    
	###we re using getMonthIndexFromName() to transform the month into anumber
	let givenMonth = dateUtils.getMonthIndexFromName(monthName)
	###Day.js is a minimalist JavaScript date library for parsing, validating, manipulating, and formatting dates.
	###we get the actual date
    const dayjs = require('dayjs')
    let actual = dayjs().format('DD/MM/YYYY').split('/')
	### we get from date format the year, month and day values separately
    let min_year = actual[2]
    let min_month = actual[1]
    let min_day = actual[0]
    cy.log(min_month)
    cy.log(min_year)
    cy.log(min_day)
	### we validate if the date we want to configure is in the past
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
		### we get the dislayed date from the kiwi calendar and split it into year and month values separately
        kiwi.getDisplayedDate().then(($date) => {
    
        let value = $date.text().split(' ')
        let actual_year = value[1]
        let actual_month = value[0]
		### the logic below is tho select the coresponding year, if needed we click on the button to navigate further
		### untill the year is as expected; if we move forward after the year is as expected, the first date 
		### automatically will be the desired year together with the first month of the year, which is January
		
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
		## the logic below is to select the coresponding month
        if(actual_month==monthName){
            cy.log(monthName + ' month is selected as it should')
            // return
        }
        else{
              
            kiwi.getNavigateForwardBtn().click()
            cy.log('moved forward to select the month')
        }
		### the logic below is to select the coresponding day
        kiwi.getAllDaysCalendar().contains(dayName).each(function($ele, index, list) {
            cy.log($ele.text())
            if ($ele.text() == dayName){
                cy.log("Found element")
                cy.wrap($ele).click({force: true})
    
            }    
        })
        cy.selectYear(yearName, monthName, dayName)
     })

 })
 
 I have used this mapping to transform the month name into a number
 Did this to know how we have to navigate to find the month in the calendar.
 
 getMonthIndexFromName(monthName){

        var months = {

            'January' : '01',
            'February' : '02',
            'March' : '03',
            'April' : '04',
            'May' : '05',
            'June' : '06',
            'July' : '07',
            'August' : '08',
            'September' : '09',
            'October' : '10',
            'November' : '11',
            'December' : '12'

        }

        return months[monthName]
    }
	
	
	
2. Another thing to mention, for nomad flight there is a slidebar to configure trip length, it has two handles.
I created a custom command to move each handle based on position.

Cypress.Commands.add('selectTripInterval', (dayNumber1, dayNumber2) => { 


    let coordinate1 = dateUtils.leftHandleTransformToDayFromCoordinate(dayNumber1)
    let coordinate2 = dateUtils.RightHandleTransformToDayFromCoordinate(dayNumber2)

    
    cy.get('[data-test="SliderHandle-0"]').trigger('mousedown', {button:0}, { force: true })
    .trigger("mousemove",{clientX: coordinate1, clientY: 0, screenX: coordinate1, screenY: 0, pageX: coordinate1, pageY: 0 }, { force: true })
    .trigger("mouseup", {force:true})
    
    cy.get('[data-test="SliderHandle-1"]').trigger('mousedown', {button:0}, { force: true })
    .trigger("mousemove",{clientX: coordinate2, clientY: 0, screenX: coordinate2, screenY: 0, pageX: coordinate2, pageY: 0 }, { force: true })
    .trigger("mouseup", {force:true})

    if(coordinate2>coordinate1){
        kiwi.getDisplayedIntervalDate().should('be.visible').should('have.text','Stay ' + dayNumber1 + ' – ' + dayNumber2 + ' nights')
   
    }
    else if (coordinate2<coordinate1){
        kiwi.getDisplayedIntervalDate().should('be.visible').should('have.text','Stay ' + dayNumber2 + ' – ' + dayNumber1 + ' nights')
   
    }
    

})