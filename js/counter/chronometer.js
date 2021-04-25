//get elements
let days = document.getElementById('days')
let hours = document.getElementById('hours')
let minutes = document.getElementById('minutes')

let seconds = document.getElementById('seconds')

//main function
function chronometer() {
    let values = getValues()
    let nowDates = values.objDetails

    //calculate time
    let result = calculate(nowDates, values)

    //set initial time
    days.textContent = ((result - nowDates.days) - (requireDays(values.iYear, (values.iMonth + 1)) - values.iDays))
    hours.textContent = (24 - nowDates.hour)
    minutes.textContent = (60 - nowDates.minutes)
    seconds.textContent = (60 - nowDates.seconds) <= 0 ? 0 : (60 - nowDates.seconds) 
    
    //initialize chronometer
    let id = setInterval(() => {

        if (seconds.textContent <= 1) {
            seconds.textContent = 60
            minutes.textContent -= 1
        }

        if (minutes.textContent < 1) {
            minutes.textContent = 60
            hours.textContent -= 1
        }

        if (hours.textContent < 1) {
            hours.textContent = 24
            days.textContent -= 1
        }

        if (days.textContent < 1 && hours.textContent < 1 && minutes.textContent < 1 && seconds.textContent < 1) {
            clearInterval(id)
        }

        seconds.textContent = Number(seconds.textContent) - 1
    }, 1000)

}

//get values in sessionStorage and create values
function getValues() {

    //inputValues
    let days = sessionStorage.getItem('iDays')
    let month = sessionStorage.getItem('iMonth')
    let year = sessionStorage.getItem('iYear')

    var date = new Date()

    return {
        iDays: days,
        iMonth: month,
        iYear: year, 
        objDetails: {
            //now values
            days: date.getDate(),
            month: date.getMonth(),
            year: date.getFullYear(), 
            hour: date.getHours(), 
            minutes: date.getMinutes(),
            seconds: date.getSeconds()
        },
    }
}

//function to calculate days
function calculate(now, input) {

    let arrayDaysMonth = []

    //get days month
    for (let m = now.month, y = now.year; m < (input.iMonth + 1) && y <= input.iYear; m++) {

        let days = requireDays(input.iYear, (input.iMonth + 1))
        arrayDaysMonth.push(days)

        if (m == 11 && y < input.iYear) {
            y++
            m = 0
        }
    }

    return arrayDaysMonth.reduce(function(total, num){
            return total + num;
            }, 0);
}

//function to get numbers days
function requireDays(y, m) {
    var data = new Date(y, m, 0)
    return data.getDate()

}