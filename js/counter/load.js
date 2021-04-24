function load() {
    let cookies = document.cookie
    
    if (cookies.indexOf("chronometer=true") == -1) {

        window.location.replace("index.html")

    }
}
