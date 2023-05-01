let buttons = document.querySelectorAll('button');

      for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(event) {
          event.preventDefault();
        });
      }


const activeBtns = document.querySelectorAll('.footer__link');

activeBtns.forEach(activeBtn => {
    activeBtn.addEventListener('click', () => {
        document.querySelector('.active__link')?.classList.remove('active__link');
        activeBtn.classList.add('active__link');
    });
});
const activeLinks = document.querySelectorAll('.btn-select');

activeLinks.forEach(activeLink => {
    activeLink.addEventListener('click', () => {
        document.querySelector('.active')?.classList.remove('active');
        activeLink.classList.add('active');
    });
});

const activeInfos = document.querySelectorAll('.active-category');

activeInfos.forEach(activeInfo => {
    activeInfo.addEventListener('click', () => {
        document.querySelector('.active-info')?.classList.remove('active-info');
        activeInfo.classList.add('active-info');
    });
});

const activeFilters = document.querySelectorAll('.btn__select');

activeFilters.forEach(activeFilter => {
    activeFilter.addEventListener('click', () => {
        document.querySelector('.active-select')?.classList.remove('active-select');
        activeFilter.classList.add('active-select');
    });
});



//Swiper

let swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    spaceBetween: 10,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

let swiper_restaurant = new Swiper('.swiper-container-restaurant', {
    slidesPerView: 'auto',
    spaceBetween: 10,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

