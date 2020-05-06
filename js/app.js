let offsetContent = document.getElementById('quienes-somos').offsetTop;

window.addEventListener('scroll', function () {
  let y = document.documentElement.scrollTop;
  if (y + 60 > offsetContent) {
    document.getElementById('sec-nav').classList.add('active');
  } else {
    document.getElementById('sec-nav').classList.remove('active');
  }
});

let contArr = [...document.querySelectorAll('.img-container')];

contArr.map((img, index) => {
  img.addEventListener('mouseover', () => {
    let descArr = [...document.querySelectorAll('.description')];
    for (let i = 0; i < descArr.length; i++) {
      if (index === i) {
        descArr[i].classList.add('active');
      }
    }
    let box = document.querySelector('.description.active');
    box.addEventListener('mouseover', () => {
      img.firstElementChild.style.filter = 'blur(3px)';
      img.firstElementChild.style.opacity = '1';
      img.firstElementChild.style.transform = 'scale(1.03)';
    });
    box.addEventListener('mouseout', () => {
      img.firstElementChild.style.filter = 'blur(0px)';
      img.firstElementChild.style.opacity = '0.5';
      img.firstElementChild.style.transform = 'scale(1)';
    });
  });
});

contArr.map((img) => {
  img.addEventListener('mouseout', () => {
    let descArr = [...document.querySelectorAll('.description')];
    for (let i = 0; i < descArr.length; i++) {
      descArr[i].classList.remove('active');
    }
  });
});
