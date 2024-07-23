const swiper = new Swiper('.slider-wrapper', {
    // Optional parameters
    loop: true,
    grabCursor: true,
    spaceBetween: 30,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
     // Responssive breakpoint

  breakpoints: {
    0: {
        slidesPerView:1
    },
    620: {
        slidesPerview: 2
    },
    1024: {
        slidesPerView: 3
    }
      }

  });


 