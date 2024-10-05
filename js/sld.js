const slides = document.querySelectorAll('.b .c');
let currentIndex = 0;

// Fungsi untuk menampilkan slide berdasarkan indeks
function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.style.display = 'block'; // Tampilkan slide yang dipilih
        } else {
            slide.style.display = 'none'; // Sembunyikan slide lainnya
        }
    });
}

// Mulai dengan menampilkan slide pertama
showSlide(currentIndex);

// Event listener untuk menangani gesekan pada layar sentuh
let startX = 0;

slides.forEach(slide => {
    slide.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    });

    slide.addEventListener('touchmove', (e) => {
        const moveX = e.touches[0].clientX;
        const diffX = startX - moveX;

        // Geser ke kanan (next slide)
        if (diffX > 50) {
            currentIndex = (currentIndex + 1) % slides.length;
            showSlide(currentIndex);
        }

        // Geser ke kiri (previous slide)
        if (diffX < -50) {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            showSlide(currentIndex);
        }
    });
});
