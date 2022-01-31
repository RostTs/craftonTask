let currentSlide = 0;
const slides = document.getElementsByClassName('carousel-item');
const totalSlides = slides.length;

document.getElementById('slide-backward').addEventListener("click", () => {
  nextSlides();
});

document.getElementById('slide-forward').addEventListener("click", () => {
  prevSlides();
});

 const sliderPoints = document.querySelectorAll('.slider-point');
 sliderPoints.forEach(item => {item.addEventListener('click', () => {
    pointSlide(item);
  })
  })

function nextSlides() {
    if (currentSlide === totalSlides - 1) {
      currentSlide = 0;
    } else {
        currentSlide++;
    }
    updateCurrentSlide();
  }
  
  function prevSlides() {
    if (currentSlide === 0) {
        currentSlide = totalSlides - 1;
    } else {
      currentSlide--;
    }
    updateCurrentSlide();
  }

   function pointSlide(item) {    
    currentSlide = item.ariaLabel;
    updateCurrentSlide();
    updateCurrentPosition();
  }

  function updateCurrentSlide() {
    for (let slide of slides) {
      slide.classList.remove('shown');
      slide.classList.add('hidden');
    }
  
    slides[currentSlide].classList.add('shown');
    updateCurrentPosition();
  }

  function setActiveSlide(slideToActivate) {
    for (let slide of slides) {
      slide.classList.remove('shown');
      slide.classList.add('hidden');
    }
  
    slides[slideToActivate].classList.add('shown');
  }

  function updateCurrentPosition() {
    for (let slide of sliderPoints) {
      slide.classList.remove('active');
      slide.classList.add('deactive');
    }
    sliderPoints[currentSlide].classList.add('active');
  }