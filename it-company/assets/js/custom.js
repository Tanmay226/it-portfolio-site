
// for animation
   AOS.init({
  offset: 200,
  duration: 600,
  easing: 'ease-in-sine',
  delay: 100,
});

$(document).ready(function() {

  
  // navbar
    $('.navTrigger').click(function () {
      $(this).toggleClass('active');
      console.log("Clicked menu");
      $("#mainListDiv").toggleClass("see-list");
      $("#mainListDiv").fadeIn();
  
  });
  
  // on-scroll
  function handleScroll() {
    if (window.scrollY > 100) {
        document.body.classList.add('on-scroll');
    } else {
        document.body.classList.remove('on-scroll');
    }
  }
  
  // Attach the scroll event listener to the window
  window.addEventListener('scroll', handleScroll);
  

   // publish-slider
   new Swiper(".publish-slider", {
    loop: true,
    nextButton: ".publish-slider-next",
    prevButton: ".publish-slider-prev",
    slidesPerView: 5,
    paginationClickable: true,
    spaceBetween: 50,
    autoplay: {
      delay: 3000, 
      disableOnInteraction: false, 
    },
    breakpoints: {
      1200: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
      991: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
    },
  });
  
  // .publish-slider
   // Swiper: Slider
   new Swiper(".testimoni-slider", {
    loop: true,
    nextButton: ".testimoni-slider-next",
    prevButton: ".testimoni-slider-prev",
    slidesPerView: 1,
    paginationClickable: true,
    spaceBetween: 1,
    autoplay: {
      delay: 3000, 
      disableOnInteraction: false, 
    },
    breakpoints: {
      
      480: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    },
  });

  // counter
  $(document).ready(function() {
    function isVisible(element) {
      var elementTop = $(element).offset().top;
      var elementBottom = elementTop + $(element).outerHeight();
      var viewportTop = $(window).scrollTop();
      var viewportBottom = viewportTop + $(window).height();
      return elementBottom > viewportTop && elementTop < viewportBottom;
    }
  
    function animateCounter() {
      $('.counting').each(function() {
        var $this = $(this);
        var countTo = $this.attr('data-count');
        var duration = $this.attr('data-duration');
        
        if (!$this.hasClass('animated') && isVisible($this)) {
          $this.addClass('animated');
          $({ countNum: $this.text() }).animate({
            countNum: countTo
          }, {
            duration: parseInt(duration),
            easing: 'linear',
            step: function() {
              $this.text(Math.floor(this.countNum));
            },
            complete: function() {
              $this.text(this.countNum);
            }
          });
        }
      });
    }
  
    // Initial check and on scroll
    $(window).on('scroll', animateCounter);
    animateCounter(); // Trigger check on page load
  });
  
  });