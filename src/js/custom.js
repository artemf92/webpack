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
