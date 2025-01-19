function handleSmoothScroll(e) {
    e.preventDefault();

    const target = e.target;
    const id = target.getAttribute("href").replace("#", "");

    if (id) {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    }
}
