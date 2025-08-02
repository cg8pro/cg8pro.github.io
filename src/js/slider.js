// Slider & thumbnail navigation logic encapsulated in initSlider()
// Can be called multiple times after dynamic page load.
function initSlider() {
    const slider = document.querySelector('.slider');
    if (!slider) return; // no slider on this page

    const slides = slider.querySelectorAll('.slide');
    if (slides.length === 0) return;

    const thumbList = document.querySelector('.thumbnail-list');
    const thumbPrevBtn = document.getElementById('thumbPrevBtn');
    const thumbNextBtn = document.getElementById('thumbNextBtn');
    const thumbContainer = document.querySelector('.thumbnail-container');

    // Clear any previous thumbnails / listeners (if re-initialised)
    if (thumbList) thumbList.innerHTML = '';

    // Generate thumbnails
    slides.forEach((slide, index) => {
        const thumbItem = document.createElement('div');
        thumbItem.className = 'thumbnail-item';
        thumbItem.dataset.index = index;
        const imgSrc = slide.querySelector('img')?.src;
        thumbItem.innerHTML = `<img src="${imgSrc}" alt="Thumbnail ${index + 1}">`;
        thumbList.appendChild(thumbItem);
    });

    const thumbnails = thumbList.querySelectorAll('.thumbnail-item');
    let currentIndex = 0;

    function updateSlideWidth() {
        return slides[0].clientWidth || slides[0].getBoundingClientRect().width;
    }

    function updateActiveThumbnail() {
        thumbnails.forEach(t => t.classList.remove('active'));
        thumbnails[currentIndex].classList.add('active');
    }

    function scrollThumbnails() {
        if (!thumbContainer) return;
        const thumbHeight = thumbnails[0].offsetHeight;
        const thumbMargin = 10; // keep in sync with CSS
        const thumbTotalHeight = thumbHeight + thumbMargin * 2;
        const containerHeight = thumbContainer.clientHeight;
        const visibleThumbs = Math.floor(containerHeight / thumbTotalHeight);
        let scrollOffset = 0;
        if (currentIndex >= visibleThumbs) {
            scrollOffset = (currentIndex - visibleThumbs + 1) * thumbTotalHeight;
        }
        thumbList.style.transform = `translateY(-${scrollOffset}px)`;
    }

    function goToSlide(index) {
        if (index < 0) index = slides.length - 1;
        if (index >= slides.length) index = 0;
        currentIndex = index;
        const slideWidth = updateSlideWidth();
        slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
        updateActiveThumbnail();
        scrollThumbnails();
    }

    // Attach thumbnail click events
    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', () => {
            goToSlide(parseInt(thumb.dataset.index));
        });
    });

    // Prev/Next buttons
    if (thumbPrevBtn) thumbPrevBtn.onclick = () => goToSlide(currentIndex - 1);
    if (thumbNextBtn) thumbNextBtn.onclick = () => goToSlide(currentIndex + 1);

    // Window resize recalculation
    window.addEventListener('resize', () => {
        // Adjust slider position in case width changed
        const slideWidth = updateSlideWidth();
        slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    });

    // Initial state
    goToSlide(0);
}

// Auto-init when script first loaded on static home page
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSlider);
} else {
    initSlider();
}
