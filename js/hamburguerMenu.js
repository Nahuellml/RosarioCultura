export default function hamburgerMenu(panelBtn, panel, menuLink) {
  const d = document;

  d.addEventListener('click', (e) => {
    if (e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)) {
      d.querySelector(panel).classList.toggle('is-active');
      d.querySelector(panelBtn).classList.toggle('is-active');
      d.querySelector('body').classList.toggle('block-scroll')
    }

    if (e.target.matches(menuLink)) {
      d.querySelector(panel).classList.remove('is-active');
      d.querySelector(panelBtn).classList.remove('is-active');
      d.querySelector('body').classList.remove('block-scroll');
    }
  })
}