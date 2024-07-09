export default function initHamburgerMenu() {
  const btnHamburguer = document.querySelector('.btn-hamburguer');
  const menuList = document.querySelector('.menu-list');
  document.addEventListener('click', (e) => {
    if (e.target.closest('.btn-hamburguer')) {
      btnHamburguer.classList.toggle('is-active');
      menuList.classList.toggle('is-active');
    }
  })
}
