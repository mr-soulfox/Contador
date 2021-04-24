function initializeCounter() {
    let inputValue = document.getElementById('iDate').value
    let values = inputValue.match(regexSearchAlpha)

    //redirect to counter page 
    if (values == null && inputValue.length >= 10) {

        document.getElementById('errors').textContent = ''
        document.cookie = 'chronometer=true'
        window.location.replace('chronometer.html')

    } else {

        document.getElementById('errors').textContent = 'Data incorreta'

    }
}