const navLinks = document.querySelectorAll(".pages a:not(dialog a)");

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
console.log(navLinks);
