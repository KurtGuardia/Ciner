let offsetContent = document.getElementById('quienes-somos').offsetTop;

window.addEventListener('scroll', function () {
  let y = document.documentElement.scrollTop;
  if (y + 60 > offsetContent) {
    document.getElementById('sec-nav').classList.add('active');
  } else {
    document.getElementById('sec-nav').classList.remove('active');
  }
});
