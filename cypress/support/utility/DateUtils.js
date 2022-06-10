class DateUtils {

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


    leftHandleTransformToDayFromCoordinate(dayNumber){

        var coordinates = {

            '1' : '-12',
            '2' : '0.783333' ,
            '3' : '12.8',
            '34' : '401.6'
            
         

        }

        return coordinates[dayNumber]
    }




}
export default DateUtils