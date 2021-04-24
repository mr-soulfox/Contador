let regexSearchAlpha = /[a-z]/gi
let regexSearchNumber = /\d+/g

document.getElementById('iDate').addEventListener('keydown', inputReview)

function inputReview(e) {
    let input = document.getElementById('iDate')

    //clean input if found some character
    if ((input.value).match(regexSearchAlpha) != null) {

        if ((input.value).match(regexSearchNumber) != null) {

            let numbers = (input.value).match(regexSearchNumber).join('/')
            input.value = ''
            input.value = numbers

        } else {
            input.value = ''
        }

    }

    //switch to format input
    if ((input.value).length == 2 && e.code != 'Backspace') {
        input.value += '/'
    } else if ((input.value).length == 5 && e.code != 'Backspace') {
        input.value += '/'
    }

}
