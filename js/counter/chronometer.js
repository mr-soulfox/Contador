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
    days.textContent = calculate(nowDates, values)

    //set initial time
    hours.textContent = (24 - nowDates.hour)
    minutes.textContent = (59 - nowDates.minutes)
    seconds.textContent = (59 - nowDates.seconds) <= 0 ? 0 : (59 - nowDates.seconds) 
    
    //initialize chronometer
    let id = setInterval(() => {

        if (days.textContent < 1 && hours.textContent < 1 && minutes.textContent < 1 && seconds.textContent < 1) {

            clearInterval(id)

        } else {

            if (seconds.textContent <= 1 && minutes.textContent > 0) {
                seconds.textContent = 60
                minutes.textContent -= 1
            }
    
            if (minutes.textContent == 0 && hours.textContent > 0) {
                minutes.textContent = 59
                hours.textContent -= 1
            }
    
            if (hours.textContent == 0 && days.textContent > 0) {
                hours.textContent = 24
                days.textContent -= 1
            }

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
    let numMonths = 0

    if (input.iYear == now.year) {

        numMonths = input.iMonth - now.month
        let nowMonth = now.month

        for (let i = 0; i <= numMonths; i++) {
            arrayDaysMonth.push(requireDays(now.year, (nowMonth + 1)))
            nowMonth += 1
        }   
        
        let sumDays = arrayDaysMonth.reduce((acc, cur) => acc + cur)

        return sumDays
    } 
}

//function to get numbers days
function requireDays(y, m) {
    var data = new Date(y, m, 0)
    return data.getDate()

}