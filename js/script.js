const toggleButton = document.querySelector(".menu-toggler");
const menu = document.querySelector(".collapsible-menu");
const main = document.querySelector(".main");
const footer = document.querySelector(".footer");
const menuTitle = document.querySelector(".menu-title");

toggleButton.addEventListener("click", function () {
    menu.classList.add("collapsible-menu-open");
    main.classList.add("main-menu-open");
    footer.classList.add("footer-menu-open");
});

menuTitle.addEventListener("click", function () {
    menu.classList.remove("collapsible-menu-open");
    main.classList.remove("main-menu-open");
    footer.classList.remove("footer-menu-open");
});