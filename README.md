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


