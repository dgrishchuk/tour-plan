$(document).ready(function () {
  var hotelSlider = new Swiper(".hotel-slider", {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: ".hotel-slider__button--next",
      prevEl: ".hotel-slider__button--prev",
    },

    // Листаем слайды кнопками
    keyboard: {
      enabled: true,
      onlyInViewport: false,
  },
  });
  var reviewsSlider = new Swiper(".reviews-slider", {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: ".reviews-slider__button--next",
      prevEl: ".reviews-slider__button--prev",
    },
  });

  // Мобильное меню
  var menuButton = $(".menu-button");
  menuButton.on("click", function () {
    $(".navbar-button").toggleClass("navbar-button--visible");
  });

  // Модальное окно
  var modalButton = $('[data-toggle=modal]');
  var clouseModalButton = $(".modal__close");
  modalButton.on('click',  openModal);
  clouseModalButton.on('click', closeModal);
  
  // Открытие окна
  function openModal() {
    var modalOverlay = $('.modal__overlay');
    var modalDialog = $('.modal__dialog');
    modalOverlay.addClass('modal__overlay--visible');
    modalDialog.addClass('modal__dialog--visible');
  }

  // Закрытие окна
  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $('.modal__overlay');
    var modalDialog = $('.modal__dialog');
    modalOverlay.removeClass('modal__overlay--visible');
    modalDialog.removeClass('modal__dialog--visible');
  }
});


// Закрытие окна по кнопке ESC

// $(function(){
//   $('modal__overlay').keyup(function(){
//     var modOverlay = $('.modal__overlay');
//     var modDialog = $('.modal__dialog');
//     modOverlay.removeClass('modal__overlay--visible');
//     modDialog.removeClass('modal__dialog--visible');
//   });


// });


// $('.modal__overlay').keyup(function() {
//   $(this).removeClass('modal__overlay--visible');
// });