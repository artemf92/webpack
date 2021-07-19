let burger = document.querySelector('.page-header__burger');
let nav = document.querySelector('.page-header__nav');
let menu = document.querySelector('.page-header__menu');
let scrollFlag = true;

burger.addEventListener('click', () => {
  toggleMenu();
})

let toggleMenu = () => {
  if (scrollFlag) disableScroll()
  else enableScroll();
  burger.classList.toggle('is-active');
  nav.classList.toggle('is-active');
  document.body.classList.toggle('scroll-block');
}

let disableScroll = function () {
  console.log('DISB')
  scrollFlag = !scrollFlag;
  let pagePosition = window.scrollY;
  document.body.classList.add('disable-scroll');
  document.body.dataset.position = pagePosition;
  document.body.style.top = -pagePosition + 'px';
}

let enableScroll = function () {
  scrollFlag = !scrollFlag;
  let pagePosition = parseInt(document.body.dataset.position, 10);
  document.body.style.top = 'auto';
  document.body.classList.remove('disable-scroll');
  window.scroll({ top: pagePosition, left: 0 });
  document.body.removeAttribute('data-position');
}

$(document).ready(function() {
  $('.hero__features-item').matchHeight();

  if ($('.hero__features').length) {
    $(".hero__features").slick({
      mobileFirst: true,
      variableWidth: true,
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      centerMode: true,
      autoplay: true,
      arrows: false,
      responsive: [
        {
          breakpoint: 570,
          settings: {
            centerMode: false,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            centerMode: false,
          }
        },
        {
          breakpoint: 992,
          settings: "unslick",
      },
      ]
    });
  }
  if ($('.teachers__item').length > 1) {
    $('.teachers__arrows').css('display', 'flex')
    $('.teachers__list').slick({
      infinite: false,
      prevArrow: $('.teachers__arrows--prev'),
      nextArrow: $('.teachers__arrows--next')
    })
  }

  if ($('.gallery__list').length) {
    $('.gallery__list').slick({
      slidesToShow: 5,
      centerMode: true,
      autoplay: true,
      prevArrow: $('.gallery__arrows--prev'),
      nextArrow: $('.gallery__arrows--next'),
      responsive: [
        {
          breakpoint: 1600,
          settings:{
            slidesToShow: 4,
          }
        },
        {
          breakpoint:992,
          settings:{
            slidesToShow: 3,
            centerMode: true,
          }
        },
        {
          breakpoint: 768,
          settings:{
            slidesToShow: 2,
            centerMode: true,
          }
        },
        {
          breakpoint: 480,
          settings:{
            slidesToShow: 1,
            centerMode: true,
          }
        },
      ]
    })
  }
  if ($('.reviews__item').length > 1) {
    $('.reviews__arrows').css('display', 'flex')
    $('.reviews__list').slick({
      infinite: false,
      prevArrow: $('.reviews__arrows--prev'),
      nextArrow: $('.reviews__arrows--next'),
    })
  }
})
