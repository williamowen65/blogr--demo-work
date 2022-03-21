const navLinks = document.querySelectorAll(".pages a:not(dialog a)");
let innerNavLinks = document.querySelectorAll(".pages a:not(.pages span > a)");
innerNavLinks = Array.from(innerNavLinks);
innerNavLinks.push(...document.querySelectorAll(".auth button"));

navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        const dialog = e.target.nextElementSibling;
        dialog?.setAttribute("open", "");
        setTimeout(() => {
            function ev(e) {
                dialog.removeAttribute("open");
                link.blur();
                document.removeEventListener("click", ev);
            }
            if (dialog?.hasAttribute("open")) {
                document.addEventListener("click", ev);
            }
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
            if (!(e.x > x && e.x < x2 && e.y > y && e.y < y2)) {
                nav.removeAttribute("open");
                document.removeEventListener("click", ev);
            }
        }
        document.addEventListener("click", ev);
    });
});

innerNavLinks.forEach((link) => {
    link.addEventListener("click", () => {
        nav.removeAttribute("open");
    });
});
