const mobilMenu = document.querySelector('.mobil-navbar');
const burgerButton = document.querySelector('.button-burger');

burgerButton.addEventListener('click', () => {
  burgerButton.classList.toggle('open');

  if (burgerButton.classList.contains('open')) {
    mobilMenu.style = 'opacity: 1';
    return;
  }
  mobilMenu.style = 'opacity: 0';
});
