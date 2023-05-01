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

const activeInfos = document.querySelectorAll('.restaurant__common-inner');

activeInfos.forEach(activeInfo => {
    activeInfo.addEventListener('click', () => {
        document.querySelector('.active-info')?.classList.remove('active-info');
        activeInfo.classList.add('active-info');
    });
});

const activeFilters = document.querySelectorAll('.btn__filter-inner');

activeFilters.forEach(activeFilter => {
    activeFilter.addEventListener('click', () => {
        document.querySelector('.active-filter')?.classList.remove('active-filter');
        activeFilter.classList.add('active-filter');
    });
});

const activeMenus = document.querySelectorAll('.btn__menu-inner');

activeMenus.forEach(activeMenu => {
    activeMenu.addEventListener('click', () => {
        document.querySelector('.active')?.classList.remove('active');
        activeMenu.classList.add('active');
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
    zIndex: -1,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

