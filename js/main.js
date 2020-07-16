$(document).ready(function(){

  $('.header-slider-block').slick({
   infinite: true,
   arrows: false,
   dots: true,
   autoplay: true,
   autoplaySpeed: 3000,
   speed: 700,
   

   responsive: [
    {
      breakpoint: 555,
      settings: {
        dots: false,
      }
    }
  ]

 
  });

  //////////////////////////////////////////

  const menuToggle = document.querySelector('#menu__togle');
  const mobileNavContainer = document.querySelector('#mobile__nav');

  menuToggle.onclick = function(){
      menuToggle.classList.toggle('menu-icon-active');
      mobileNavContainer.classList.toggle('mobile-nav--active');
  }

  

  $('.popup-link').magnificPopup({

      callbacks: {
          open: function() {
             $('.slider').slick({
               infinite: true,
               arrows: true,
               dots: false,
               autoplay: true,
               autoplaySpeed: 3000,
               speed: 700,
             });
          }
      }
  });

  $('.example').moreContent({
    "shadow": true, // Добавляет в разметку блок с тенью
    // Если нужно изменить разметку блока с тенью:
    // tpl: {
    //  shadow: '<div class="mrc-shadow"></div>'
    // }
  });

});