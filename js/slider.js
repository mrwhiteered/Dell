const slider = document.querySelector('.slider');
const sliderContainer = slider.querySelector('.slider-container');
const slides = sliderContainer.querySelectorAll('img');
const prevButton = slider.querySelector('.slider-prev');
const nextButton = slider.querySelectorAll('.slider-next');


const el = document.querySelectorAll('.elips');
let slideIndex = 0;

function showSlide() {
  sliderContainer.style.transform = `translateX(-${slideIndex * slides[0].offsetWidth}px)`;
  for (let i =0; i<slides.length; i++) {
    slides[i].classList.remove('active_slide');
  }
  for (let j = 0; j<el.length; j++){
    el[j].classList.remove('ela');
    
  }
  
  el[slideIndex].classList.add('ela');
  
  slides[slideIndex].classList.add('active_slide');
}


// function showPrevSlide() {
//   slideIndex--;
//   if (slideIndex < 0) {
//     slideIndex = slides.length - 1;

//   }
//   showSlide();
// }

function showNextSlide(par) {
  console.log(par);
  slideIndex = par;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  showSlide();
}

// for (let d =0; d<nextButton.length;d++){

//   let par = d;
  
// nextButton[d].addEventListener('click', showNextSlide(par));

// }
  const timerId = setInterval(() => {
    slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  showSlide();
}, 3000)
