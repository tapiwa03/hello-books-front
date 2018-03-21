/* Nav Switching to mobile version */
function myFunction() {
    var x = document.getElementById("mobi");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}
/* End of Nav switch */