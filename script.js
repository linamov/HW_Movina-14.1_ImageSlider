const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;

function updateSlider() {
    slides.forEach((slide, index) => {
        slide.classList.toggle('active', index === currentIndex);
        dots[index].classList.toggle('active', index === currentIndex);
    });

    prevBtn.style.display = currentIndex === 0 ? 'none' : 'block';
    nextBtn.style.display = currentIndex === slides.length - 1 ? 'none' : 'block';
}

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentIndex < slides.length - 1) {
        currentIndex++;
        updateSlider();
    }
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        updateSlider();
    });
});

updateSlider();
