// Native links keep services accessible with or without JavaScript.
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.service-card').forEach((card, index) => {
    card.querySelector('h2').id = 'service-' + index;
    card.setAttribute('aria-labelledby', 'service-' + index);
  });
});
