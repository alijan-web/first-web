// Add this script to enable the slider functionality

document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider");
    let currentIndex = 0;

    function showSlide(index) {
        const newPosition = -index * 100 + "%";
        slider.style.transform = "translateX(" + newPosition + ")";
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % document.querySelectorAll(".slide").length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + document.querySelectorAll(".slide").length) % document.querySelectorAll(".slide").length;
        showSlide(currentIndex);
    }

    setInterval(nextSlide, 5000); // Change slide every 5 seconds (adjust as needed)
});
