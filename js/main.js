$(document).ready(function(){

  // BurgerMenu

  const menuToggle = document.querySelector('#menu__togle');
  const mobileNavContainer = document.querySelector('#mobile__nav');

  menuToggle.onclick = function(){
	  menuToggle.classList.toggle('menu-icon-active');
	  mobileNavContainer.classList.toggle('mobile-nav--active');
  }


 // Header slickSlider

  var headerSlider = $('.header-slider-block');

  headerSlider.slick({
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

   // Popup slickSlider
  var slick = $('.slider').slick({
	  infinite: true,
	  arrows: true,
	  dots: false,
	  autoplay: true,
	  autoplaySpeed: 3000,
	  speed: 700
  });

  // fixed slider - magnificPopup
  $('.decor__gallery-link, .spoler__gallery').click(function() {
	 slick.slick('refresh');
  });




  // magnificPopup
  $('.popup-link').magnificPopup();


  // Toggle view content
  $('.example').moreContent({
	"shadow": true 
  });
 
});
