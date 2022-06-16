function scrollScreen() {
  var h = document.documentElement.clientHeight;
  var w = document.documentElement.clientWidth;

  if (w < 576) {
    window.scrollTo({
      left: 0,
      top: h,
      behavior: 'smooth'
    });
  };
};

document.addEventListener('scroll', function () {
  var h = document.documentElement.clientHeight;
  var a = document.documentElement.scrollTop;

  if (a >= (h / 10)) {
    document.querySelector('.screen-down').classList.add('screen-down--hide');
  } else {
    document.querySelector('.screen-down').classList.remove('screen-down--hide');
  };
});
