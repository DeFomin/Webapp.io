const burger = document.querySelector('.burger');
const modal = document.querySelector('.modal');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  modal.classList.toggle('active');
  document.querySelector('.nav-menu').classList.toggle('active');
});