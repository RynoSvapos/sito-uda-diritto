var Scrollbar = window.Scrollbar;

options = {
    damping: 0.1,
}

Scrollbar.init(document.querySelector('#main_page'), options);






$('.slider_container .works_slider').slick({
    infinite: true,
    dots: false,
    autoplay: true,
    speed: 700,
    autoplaySpeed: 4000,
    slidesToShow: 2,
    slidesToScroll: 1
});