
    //////////////////////////swiper////////////////////////////////
    var swiper = new Swiper('.swiper-container', {
      //initialSlide: 1,
      slidesPerView: 9,
      //spaceBetween: 20,
      centeredSlides: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  
     /* hide left arrow by deafult */
    var arrow = document.getElementsByClassName('swiper-button-prev')[0];
    arrow.style.display = 'none';
    /* Swiper API - if index = 1 hide left arrow / otherwise show */
    swiper.on('slideChange', function() {
      var realIndex = swiper.realIndex;
      if (realIndex == 0) {
        console.log("real index:" + realIndex + " - hide arrow");
        arrow.style.display = 'none';
      } else {
        console.log("real index:" + realIndex + " - show arrow");
        arrow.style.display = 'block';
      }
    });
  ///////////////////////swiper/////////////////////////////////////////////////////





    