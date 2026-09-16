const WEIGHTS = {
  '100':  { article: '01306', oldPrice: 349.20, currentPrice: 326.40 },
  '500':  { article: '01307', oldPrice: 1646,   currentPrice: 1432 },
  '1000': { article: '01308', oldPrice: 2592,   currentPrice: 2064 },
  '5000': { article: '01309', oldPrice: 8710,   currentPrice: 6320 }
};

function formatPrice(value) {
  const rounded = Math.round(value * 100) / 100;
  const hasKopecks = rounded % 1 !== 0;

  return (
    rounded.toLocaleString('ru-RU', {
      minimumFractionDigits: hasKopecks ? 2 : 0,
      maximumFractionDigits: hasKopecks ? 2 : 0
    }) + ' ₽'
  );
}

document.addEventListener('DOMContentLoaded', () => {
  const articleEl      = document.querySelector('[data-article]');
  const oldPriceEl     = document.querySelector('[data-old-price]');
  const currentPriceEl = document.querySelector('[data-current-price]');
  const weightInputs   = document.querySelectorAll('input[name="weight"]');

  function updateCard(weightKey) {
    const data = WEIGHTS[weightKey];
    if (!data) return;

    articleEl.textContent      = data.article;
    oldPriceEl.textContent     = formatPrice(data.oldPrice);
    currentPriceEl.textContent = formatPrice(data.currentPrice);
  }

  weightInputs.forEach((input) => {
    input.addEventListener('change', (event) => {
      if (event.target.checked) {
        updateCard(event.target.value);
      }
    });
  });
});