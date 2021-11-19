var Scrollbar = window.Scrollbar;

options = {
    damping: 0.1,
}

Scrollbar.init(document.querySelector('#main_page'), options);






$('.slider_container .works_slider').slick({
    autoplay: true,
    infinite: true,
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          adaptiveHeight: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });	