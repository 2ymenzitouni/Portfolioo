// to show and hide About , Resume , Projects , Contact
// =================================================
col3_elements = document.querySelectorAll(".element");
function showDiv(divId){
    col3_elements.forEach(el => {
        el.style.display = "none";
    });
    document.getElementById(divId).style.display = "block"
}
// =================================================