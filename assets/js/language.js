(function () {
  const root = document.documentElement;
  const saved = localStorage.getItem('site-language');
  if (saved === 'zh') root.classList.add('zh');

  function updateButton() {
    const button = document.querySelector('[data-language-toggle]');
    if (!button) return;
    const isZh = root.classList.contains('zh');
    button.textContent = isZh ? 'English' : '中文';
    button.setAttribute('aria-label', isZh ? 'Switch to English' : '切换到中文');
  }

  document.addEventListener('DOMContentLoaded', function () {
    updateButton();
    const button = document.querySelector('[data-language-toggle]');
    if (!button) return;
    button.addEventListener('click', function () {
      root.classList.toggle('zh');
      localStorage.setItem('site-language', root.classList.contains('zh') ? 'zh' : 'en');
      updateButton();
    });
  });
})();
