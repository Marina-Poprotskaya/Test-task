
(function () {                                                                   

    const sliderInIt = function (slider) {

        let sliders = slider.querySelectorAll('.slides');

        sliders[0].classList.add('active-slider');

        let ArrowNext = document.querySelector('.slider__arrow-right');
    
        let ArrowPrev = document.querySelector('.slider__arrow-left');
        
        ArrowNext.addEventListener('click', function () {
            let activeElem = slider.querySelector('div.active-slider');
            let nextElem = activeElem.nextElementSibling;

            if (activeElem != null) {
                 if (!nextElem) {
                    activeElem.classList.remove('active-slider');
                    sliders[0].classList.add('active-slider');
                }
                else if (nextElem.classList.contains('slides')) {
                    activeElem.classList.remove('active-slider');
                    nextElem.classList.add('active-slider');
                }
                else {
                    activeElem.classList.remove('active-slider');
                    sliders[0].classList.add('active-slider');
                }
            }
        });

        ArrowPrev.addEventListener('click', function () {
            let activeElem = slider.querySelector('div.active-slider');
            let prevElem = activeElem.previousElementSibling;
            if (activeElem != null) {
                if (!prevElem) {
                    activeElem.classList.remove('active-slider');
                    sliders[sliders.length - 1].classList.add('active-slider');
                }
                else if (prevElem.classList.contains('slides')) {
                    activeElem.classList.remove('active-slider');
                    prevElem.classList.add('active-slider');
                }
                else {
                    activeElem.classList.remove('active-slider');
                    sliders[sliders.length - 1].classList.add('active-slider');
                }
            }
        });
    };

    this.slider = function (selector) {

        let slider = document.querySelector(selector);

        if (!slider) {
            console.log('Slider not found');
            return false;
        }

        sliderInIt(slider);
    };
}());
slider('.slider__main-block');



const form = document.querySelector('.main-form__form');
const modal = document.querySelector('.modal')
form.addEventListener('submit', (e) => {
    e.preventDefault();
    modal.classList.add('active');
    setTimeout(() => {
        modal.classList.remove('active');
    }, 2000);
    form.reset();
})