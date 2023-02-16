import './style.scss';

const btnMenu = document.querySelector('.nav__menu-btn') as HTMLButtonElement;
const menu = document.querySelector('.mobile-nav') as HTMLDivElement;

btnMenu.addEventListener('click', () => {
  btnMenu.classList.toggle('nav__menu-btn_active');
  menu.classList.toggle('mobile-nav_opened');

  if (menu.classList.contains('mobile-nav_opened')) {
    menu.setAttribute('aria-expanded', 'true');
  } else {
    menu.setAttribute('aria-expanded', 'false');
  }
});
