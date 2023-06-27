const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    autoplay: {
      delay: 3000,
      disableOnInteraction: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    }, 
    
    effect: 'fade',
     fadeEffect: {
    crossFade: true
    },
  
  });


  const slideshow = document.querySelector('.slide-show');
  slideshow.addEventListener('mouseover', ()=>{
    const buttons = document.querySelectorAll('.swiper-button-prev, .swiper-button-next');
    buttons.forEach(button => {
      button.style.display = 'flex';
    });
  })
  slideshow.addEventListener('mouseout', ()=>{
    const buttons = document.querySelectorAll('.swiper-button-prev, .swiper-button-next');
    buttons.forEach(button => {
      button.style.display = 'none';
    });
  })