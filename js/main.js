$(function(){
  $(".item").click(function() {
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
    } else {
      $(this).addClass('active');
    }
  })

  // $( ".dropdown" ).click(function() {
  //     $(".dropdown-content").toggleClass('display-block')
  // });


    $('.gallery__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
      });


      var myCarousel = $('.reviews__slider-mob').slick({
        arrows: true,
        slidesPerRow: 1, 
        rows: 2,
        prevArrow: '<svg class="slick-prev" width="28" height="47" viewBox="0 0 28 47" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.31828 20.1602C1.55546 19.9225 1.81276 19.7218 2.08347 19.5473L20.1933 1.33238C21.96 -0.443846 24.8263 -0.444689 26.5939 1.33322C28.3614 3.11029 28.3614 5.99255 26.5939 7.7713L10.9976 23.4589L26.6743 39.2283C28.4419 41.0053 28.4419 43.8868 26.6743 45.6664C25.7901 46.5566 24.631 47 23.4744 47C22.3179 47 21.1579 46.5566 20.2746 45.6664L2.08347 27.3671C1.81276 27.1926 1.55379 26.992 1.31828 26.7542C0.414802 25.8455 -0.0210126 24.6484 0.000778106 23.4572C-0.0210126 22.266 0.414802 21.0698 1.31828 20.1602Z" fill="#0277B2"/></svg>',
        nextArrow: '<svg class="slick-next" width="28" height="47" viewBox="0 0 28 47" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26.6817 20.1602C26.4445 19.9225 26.1872 19.7218 25.9165 19.5473L7.80675 1.33238C6.04002 -0.443846 3.1737 -0.444689 1.40613 1.33322C-0.361433 3.11029 -0.361433 5.99255 1.40613 7.7713L17.0024 23.4589L1.32567 39.2283C-0.441891 41.0053 -0.441891 43.8868 1.32567 45.6664C2.20988 46.5566 3.36898 47 4.52556 47C5.68215 47 6.84209 46.5566 7.72545 45.6664L25.9165 27.3671C26.1872 27.1926 26.4462 26.992 26.6817 26.7542C27.5852 25.8455 28.021 24.6484 27.9992 23.4572C28.021 22.266 27.5852 21.0698 26.6817 20.1602Z" fill="#0277B2"/></svg>',
      });
      
      myCarousel.slick( 'slickSetOption', {
        slidesPerRow: 1, 
        rows: 2
      }, true );


      $('.reviews__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<svg class="slick-prev" width="28" height="47" viewBox="0 0 28 47" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.31828 20.1602C1.55546 19.9225 1.81276 19.7218 2.08347 19.5473L20.1933 1.33238C21.96 -0.443846 24.8263 -0.444689 26.5939 1.33322C28.3614 3.11029 28.3614 5.99255 26.5939 7.7713L10.9976 23.4589L26.6743 39.2283C28.4419 41.0053 28.4419 43.8868 26.6743 45.6664C25.7901 46.5566 24.631 47 23.4744 47C22.3179 47 21.1579 46.5566 20.2746 45.6664L2.08347 27.3671C1.81276 27.1926 1.55379 26.992 1.31828 26.7542C0.414802 25.8455 -0.0210126 24.6484 0.000778106 23.4572C-0.0210126 22.266 0.414802 21.0698 1.31828 20.1602Z" fill="#0277B2"/></svg>',
        nextArrow: '<svg class="slick-next" width="28" height="47" viewBox="0 0 28 47" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26.6817 20.1602C26.4445 19.9225 26.1872 19.7218 25.9165 19.5473L7.80675 1.33238C6.04002 -0.443846 3.1737 -0.444689 1.40613 1.33322C-0.361433 3.11029 -0.361433 5.99255 1.40613 7.7713L17.0024 23.4589L1.32567 39.2283C-0.441891 41.0053 -0.441891 43.8868 1.32567 45.6664C2.20988 46.5566 3.36898 47 4.52556 47C5.68215 47 6.84209 46.5566 7.72545 45.6664L25.9165 27.3671C26.1872 27.1926 26.4462 26.992 26.6817 26.7542C27.5852 25.8455 28.021 24.6484 27.9992 23.4572C28.021 22.266 27.5852 21.0698 26.6817 20.1602Z" fill="#0277B2"/></svg>',
      })

    const anchors = document.querySelectorAll('a[href*="#"]')
    for (let anchor of anchors){
        anchor.addEventListener("click", function(event){
            event.preventDefault();
            const blockID = anchor.getAttribute('href')
            document.querySelector('' + blockID).scrollIntoView({
                behavior: "smooth",
                block: "start"
            })
        })
    }
});