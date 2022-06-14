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
            
            '1' : '25.6', '2' : '38.3833', '3' : '50.4', '4' : '63.2', '5' : '75.9833', '6' : '88', '7' : '100.8', '8' : '113.583', '9' : '125.6', '10' : '138.4',
            '11' : '151.183', '12' : '163.2', '13' : '176', '14' : '188.783', '15' : '200.8', '16' : '213.6', '17' : '226.383', '18' : '238.4', '19' : '251.2', '20' : '263.983',
            '21' : '276', '22' : '288.8', '23' : '301.583', '24' : '313.6', '25' : '326.4', '26' : '339.183', '27' : '351.2', '28' : '364', '29' : '376.783', '30' : '388.8',
            '31' : '401.6', '32' : '414.383', '33' : '426.4', '34' : '439.2', '35' : '451.983', '36' : '464', '37' : '476.783', '38' : '489.583', '39' : '501.6', '40' : '514.4',
            '41' : '527.183', '42' : '539.2', '43' : '552', '44' : '564.783', '45' : '576.8', '46' : '589.6', '47' : '602.383', '48' : '614.4', '49' : '627.2', '50' : '639.983',
            '51' : '652', '52' : '664.8', '53' : '677.583', '54' : '689.6', '55' : '702.4', '56' : '715.183', '57' : '727.2', '58' : '740', '59' : '752.783', '60' : '765.6',

            
         

        }

        return coordinates[dayNumber]
    }

    RightHandleTransformToDayFromCoordinate(dayNumber){

        var coordinates = {
            
            '1' : '38.3833', '2' : '50.4', '3' : '63.2', '4' : '75.9833', '5' : '88', '6' : '100.8', '7' : '113.583', '8' : '125.6', '9' : '138.4',
            '10' : '151.183', '11' : '163.2', '12' : '176', '13' : '188.783', '14' : '200.8', '15' : '213.6', '16' : '226.383', '17' : '238.4', '18' : '251.2', '19' : '263.983',
            '20' : '276', '21' : '288.8', '22' : '301.583', '23' : '313.6', '24' : '326.4', '25' : '339.183', '26' : '351.2', '27' : '364', '28' : '376.783', '29' : '388.8',
            '30' : '401.6', '31' : '414.383', '32' : '426.4', '33' : '439.2', '34' : '451.983', '35' : '464', '36' : '476.783', '37' : '489.583', '38' : '501.6', '39' : '514.4',
            '40' : '527.183', '41' : '539.2', '42' : '552', '43' : '564.783', '44' : '576.8', '45' : '589.6', '46' : '602.383', '47' : '614.4', '48' : '627.2', '49' : '639.983',
            '50' : '652', '51' : '664.8', '52' : '677.583', '53' : '689.6', '54' : '702.4', '55' : '715.183', '56' : '727.2', '57' : '740', '58' : '752.783', '59' : '765.6', 
            '60' : '778.383'

            
         

        }

        return coordinates[dayNumber]
    }




}
export default DateUtils