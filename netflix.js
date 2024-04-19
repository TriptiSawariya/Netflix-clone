const initSlides = () => {
    const imageList = document.querySelector(".slide-wrapper .image-list");
    const slideButtons = document.querySelectorAll(".slide-wrapper .slide-button");
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

    // slide image according to the slide button clicks
    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "pre-slide" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({left: scrollAmount, behavior: "smooth" });
        });
    });
    const handleSlideButtons = () => {
        slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "block";
        slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "block";
    }
    imageList.addEventListener("scroll", () => {
        handleSlideButtons();
    });
}

window.addEventListener("load", initSlides);