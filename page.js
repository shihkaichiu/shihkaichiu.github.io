function toggleDisplay(x) {
    if(document.getElementById(x).style.display == "none" ) {
        document.getElementById(x).style.display = "";
    }
    else {
        document.getElementById(x).style.display = "none";
    }
}
function backTop() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
}
