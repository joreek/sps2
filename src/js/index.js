import '../scss/style.scss'

console.log('Works!')

// Создаю свипер на кнопки-слылки для размера до 767
let swiperInstance;

function manageSwiper() {
  const screenWidth = window.innerWidth; 

  if (screenWidth <= 767) {
    if (!swiperInstance) { 
      swiperInstance = new Swiper('.swiper', {
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        slidesPerView: 1.3,
        spaceBetween: 16,
        loop:true,
      });
    }
  } else {
  
    if (swiperInstance) {
      swiperInstance.destroy(true, true); 
      swiperInstance = null; 
    }
  }
}

manageSwiper();
window.addEventListener('resize', manageSwiper);
document.getElementById("toggleButton").style.setProperty('--rotate', '45deg');

// Делаю копку показать все-скрыть кликабельной для картинок-ссылок от 768 до 1120 размера
window.readMore = function() {
  const toggleButton = document.getElementById("toggleButton");
  const hiddenElements = document.querySelectorAll(".hidden"); 
  const largeScreenHiddenElements = document.querySelectorAll(".large-screen-hidden"); 
  const screenWidth = window.innerWidth; 

  if (screenWidth >= 1120) {
     
      if (largeScreenHiddenElements[0].style.display === "" || largeScreenHiddenElements[0].style.display === "none") {
          largeScreenHiddenElements.forEach((el) => {
              el.style.display = "grid"; 
          });
          toggleButton.innerHTML = "Скрыть";
          toggleButton.style.setProperty('--rotate', '225deg')
      } else {
          largeScreenHiddenElements.forEach((el) => {
              el.style.display = "none"; 
          });
          toggleButton.innerHTML = "Показать все";
          toggleButton.style.setProperty('--rotate', '45deg')
      }
  } else {
    
      if (hiddenElements[0].style.display === "" ||  hiddenElements[0].style.display === "none") {
          hiddenElements.forEach((el) => {
              el.style.display = "grid"; 
          });
          toggleButton.innerHTML = "Скрыть";
          toggleButton.style.setProperty('--rotate', '225deg')
      } else {
          hiddenElements.forEach((el) => {
              el.style.display = "none"; 
          });
          toggleButton.innerHTML = "Показать все";
          toggleButton.style.setProperty('--rotate', '45deg')
      }
  }
}