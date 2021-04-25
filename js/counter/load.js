function load() {
    let cookies = document.cookie
    
    if (cookies.indexOf("chronometer=true") == -1) {

        sessionStorage.clear()
        window.location.replace("index.html")

    }
}

function unload() {
    sessionStorage.clear()
    document.cookie = "chronometer=false"
}