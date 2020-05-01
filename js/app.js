let offsetContent = document.getElementById('quienes-somos').offsetTop;

window.addEventListener('scroll', function () {
  let y = document.documentElement.scrollTop;
  if (y > offsetContent) {
    document.getElementById('sec-nav').classList.add('active');
  } else {
    document.getElementById('sec-nav').classList.remove('active');
  }
});


/*
//For Ciner-Ella's animations when scrolloing
let firstCinerElla = document.getElementsByClassName('first').offsetTop;

window.addEventListener('scroll', function () {
  let x = document.documentElement.scrollTop;
  if (x > firstCinerElla) {
    document.getElementsByClassName('women2').classList.add('slideIn')
  }
});
*/