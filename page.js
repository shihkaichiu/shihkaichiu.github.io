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

function toggleFace(x) {
    var src = x.src.replace(/^.*[\\\/\/]/, '');
    if (src == "face-art.png") {
        x.src = "face.png";
    }
    else {
        x.src = "face-art.png";
    }
}


function toggleInvert() {
    btn = document.getElementById("darkModeButton");

    if (btn.innerHTML == "Dark mode") {
        document.body.classList.add("dark");
        document.querySelectorAll("a").forEach(l => l.classList.add("dark"));
    }
    else {
        var elements = document.getElementsByClassName('dark');
        while(elements.length > 0){
            elements[0].classList.remove('dark');
        }
    }

    btn.innerHTML = (btn.innerHTML == "Dark mode") ? "Light mode" : "Dark mode";
}
