// script.js
document.addEventListener("DOMContentLoaded", function() {
    const gallery = document.querySelector(".gallery");
    const images = document.querySelectorAll(".gallery img");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");
    let currentIndex = 0;

    function updateGallery() {
        const imageWidth = images[0].clientWidth;
        gallery.style.transform = `translateX(${-currentIndex * imageWidth}px)`;
    }

    prevButton.addEventListener("click", function() {
        if (currentIndex > 0) {
            currentIndex--;
            updateGallery();
        }
    });

    nextButton.addEventListener("click", function() {
        if (currentIndex < images.length - 1) {
            currentIndex++;
            updateGallery();
        }
    });

    window.addEventListener("resize", updateGallery);
});
