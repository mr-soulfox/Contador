function initializeCounter() {
    let inputValue = document.getElementById('iDate').value
    let values = inputValue.match(regexSearchAlpha)
    let data = inputValue.match(regexSearchNumber)

    //redirect to counter page 
    if (values == null && inputValue.length >= 10 && data[1] <= 12 && data[0] <= 31) {

        let date = new Date()

        if ((data[0] <= date.getDate() && data[1] <= (date.getMonth() + 1)) && data[2] <= date.getFullYear()) {

            document.getElementById('errors').textContent = ''
            document.getElementById('errors').textContent = 'Data Passada'

        } else {

            document.getElementById('errors').textContent = ''
    
            document.cookie = 'chronometer=true'
    
            //saveValues
            let valuesArray = [['iDays', data[0]], ['iMonth', (data[1] - 1)], ['iYear', data[2]]]
            saveOnSession(valuesArray)
    
            //redirect
            window.location.replace('chronometer.html')
            
        }


    } else {

        document.getElementById('errors').textContent = 'Data incorreta'

    }
}

//Save values on session storage
function saveOnSession(array) {

    for (let i = 0; i < array.length; i++) {
        sessionStorage.setItem(array[i][0], array[i][1])
    }

}
