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
  $("input.form__input--phone").mask("+7(999) 999-9999");

  $('.form__input').blur(function () {
    if($(this).val() !== '') {
      $(this).next('.form__input-placeholder').hide();
    }
  })

  $('.form__textarea').blur(function () {
    if($(this).val() !== '') {
      $(this).next('.form__input-placeholder').hide();
    }
  })

  $('.modal__close').click(function () {
    $.fancybox.close();
  })

  $(".gallery__item").fancybox({
    'transitionIn'	:	'elastic',
    'transitionOut'	:	'elastic',
    'speedIn'		:	600,
    'speedOut'		:	200,
    'overlayShow'	:	false
  });
  $("a.lessons__media").fancybox({
    'transitionIn'	:	'elastic',
    'transitionOut'	:	'elastic',
    'speedIn'		:	600,
    'speedOut'		:	200,
    'overlayShow'	:	false
  });
  $("a[data-fancybox='modal']").fancybox({
    'transitionIn'	:	'elastic',
    'transitionOut'	:	'elastic',
    'speedIn'		:	600,
    'speedOut'		:	200,
    'overlayShow'	:	false,
    'modal' : true,
    'showCloseButton' : true,
  });

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
      autoplay: true,
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
      autoplay: true,
      prevArrow: $('.reviews__arrows--prev'),
      nextArrow: $('.reviews__arrows--next'),
    })
  }
  //
  // function init() {
  //   const myMap = new ymaps.Map('map', {
  //       center: [54.72,20.49],
  //       zoom: 10,
  //       behaviors: ["drag", "dblClickZoom", "rightMouseButtonMagnifier", "multiTouch"]
  //     });
  //
  //
  // }
  //
  // ymaps.ready(init);
})


