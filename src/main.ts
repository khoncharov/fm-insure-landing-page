import './style.scss';

const btnMenu = document.querySelector('.nav__menu-btn') as HTMLButtonElement;

btnMenu.addEventListener('click', () => {
  btnMenu.classList.toggle('nav__menu-btn_active');
});
