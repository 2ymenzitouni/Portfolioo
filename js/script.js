let currentIndex = 0;

function updateSlider(index) {
    const slider = document.querySelector('.slider');
    const offset = index * 100;
    slider.style.transform = `translateX(-${offset}%)`;
    slider.style.opacity = 0.6; 
    setTimeout(() => {
        slider.style.opacity = 1;
    }, 350); 

    document.querySelectorAll('.menu-item').forEach(item => {
        item.classList.remove('active');
    });
    document.querySelector(`.menu-item[data-index="${index + 1}"]`).classList.add('active');
}

document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', () => { 
        const index = parseInt(item.getAttribute('data-index')) - 1;
        currentIndex = index;
        updateSlider(index);
    });
});

const slider = document.querySelector('.slider');
const hammer = new Hammer(slider);

hammer.on('swipeleft', () => {
    currentIndex = (currentIndex + 1) % 3;
    updateSlider(currentIndex);
});

hammer.on('swiperight', () => {
    currentIndex = (currentIndex - 1 + 3) % 3;
    updateSlider(currentIndex);
});

updateSlider(currentIndex);
// ==============

