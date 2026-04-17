window.addEventListener("scroll", () => {
    document.querySelectorAll("section").forEach(section => {
        let position = section.getBoundingClientRect().top;
        let screenPosition = window.innerHeight / 1.2;

        if (position < screenPosition) {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }
    });
});