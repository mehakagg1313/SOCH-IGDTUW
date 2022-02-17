let toggle = document.querySelector('.nav__menu input')
const navList = document.querySelector("#nav ul")
console.log("in js");
toggle.addEventListener('change', function() {
    navList.classList.toggle("nav__active")
})
// function active_nav () {
//     if(toggle.checked)
    
// }