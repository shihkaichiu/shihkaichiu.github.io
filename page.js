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
