document.addEventListener("DOMContentLoaded", function () {
    const bookCarousel = document.querySelector(".book-carousel");
    const prevButton = document.getElementById("prev-button");
    const nextButton = document.getElementById("next-button");
    const books = document.querySelectorAll(".book");

    let currentIndex = 0;

    function updateCarousel() {
        const bookWidth = books[0].offsetWidth;
        const offset = -currentIndex * (bookWidth + 10); // 10 è la larghezza del margine tra i libri
        bookCarousel.style.transform = `translateX(${offset}px)`;
    }

    prevButton.addEventListener("click", function () {
        currentIndex = Math.max(currentIndex - 1, 0);
        updateCarousel();
    });

    nextButton.addEventListener("click", function () {
        currentIndex = Math.min(currentIndex + 1, books.length - 1);
        updateCarousel();
    });

    updateCarousel();

    let timer; // Variabile per l'intervallo

    function startAutoplay() {
        timer = setInterval(function () {
            currentIndex = (currentIndex + 1) % books.length;
            updateCarousel();
        }, 3000); // Cambia libro ogni 3 secondi
    }

    function stopAutoplay() {
        clearInterval(timer);
    }

    startAutoplay(); // Inizia l'autoplay

    bookCarousel.addEventListener("mouseenter", stopAutoplay); // Fermo l'autoplay al passaggio del mouse
    bookCarousel.addEventListener("mouseleave", startAutoplay); // Riavvio l'autoplay al rilascio del mouse
});