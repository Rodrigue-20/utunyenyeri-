
function toggleLanguage() {
  const texts = document.querySelectorAll('[data-en]');
  const isEnglish = texts[0].innerText === texts[0].dataset.en;

  texts.forEach(el => {
    el.innerText = isEnglish ? el.dataset.rw : el.dataset.en;
  });
}
