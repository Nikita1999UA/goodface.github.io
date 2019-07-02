$(document).ready(function(){
    $('.main__slider').slick({
        slidesPerRow: 3,
        rows: 2,
        centerMode: true,
        centerPadding: '60px',
        infinite: true,
        dots: true,
        prevArrow: '<button id="prev" type="button" class="btn btn-juliet"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>',
        nextArrow: '<button id="next" type="button" class="btn btn-juliet"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>',
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesPerRow: 3,
                rows: 2,
                centerPadding: '10px',
              }
            },
            {
                breakpoint: 769,
                settings: {
                  slidesPerRow: 2,
                  rows: 2,
                  centerPadding: '10px',
                }
              },
            {
                breakpoint: 540,
                settings: {
                  slidesPerRow: 1,
                  rows: 1,
                  centerPadding: '10px',
                }
              },
          ]
    });
  });