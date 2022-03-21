const navLinks = document.querySelectorAll(".pages a:not(dialog a)");
const innerNavLinks = document.querySelectorAll(".pages a:not(.pa)");

console.log(innerNavLinks);

navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        const dialog = e.target.nextElementSibling;
        dialog.setAttribute("open", "");
        setTimeout(() => {
            function ev(e) {
                dialog.removeAttribute("open");
                document.removeEventListener("click", ev);
            }
            document.addEventListener("click", ev);
        });
    });
});

const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");

hamburger.addEventListener("click", () => {
    nav.setAttribute("open", "");
    setTimeout(() => {
        function ev(e) {
            const x = nav.getBoundingClientRect().x;
            const x2 = x + nav.getBoundingClientRect().width;
            const y = nav.getBoundingClientRect().y;
            const y2 = nav.getBoundingClientRect().height + y;
            const cond = e.x > x && e.x < x2 && e.y > y && e.y < y2;
            console.log(e.x, e.y);
            console.log(x, x2, y, y2);
            if (!(e.x > x && e.x < x2 && e.y > y && e.y < y2)) {
                nav.removeAttribute("open");
                document.removeEventListener("click", ev);
            }
        }
        document.addEventListener("click", ev);
    });
});
