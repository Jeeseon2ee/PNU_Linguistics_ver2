var burgerbar = document.querySelector(".burgerbar")
var mobileNav = document.querySelector(".mobile_nav")
var loginIcon = document.querySelector("#login_icon")

burgerbar.addEventListener("click", function() {
    mobileNav.classList.add('open');
})

loginIcon.addEventListener("click", function() {
    mobileNav.classList.remove("open");
})