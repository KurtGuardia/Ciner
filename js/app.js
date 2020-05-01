let offsetContent = document.getElementById('quienes-somos').offsetTop;

window.addEventListener('scroll', function () {
  let y = document.documentElement.scrollTop;
  if (y > offsetContent) {
    document.getElementById('sec-nav').classList.add('active');
  } else {
    document.getElementById('sec-nav').classList.remove('active');
  }
});
