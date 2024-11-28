const menus = document.querySelectorAll(".menu-trigger");
const nav = document.querySelector("nav");

nav.classList.add("hidden");

menus.forEach(function (menu, index) {
    menu.addEventListener("click", function (e) {
        e.preventDefault();
        this.classList.toggle("active-" + (index + 7));
        if (nav.classList.contains("hidden")) {
            nav.classList.remove("hidden");
            nav.classList.add("visible");
        } else {
            nav.classList.remove("visible");
            nav.classList.add("hidden");
        }
    });
});
