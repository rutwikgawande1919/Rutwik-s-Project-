// Seller estimate review is a separate page from evaluation and payment.
document.addEventListener('DOMContentLoaded', () => {
  const estimate = Store.read('valuation', null);
  if (!estimate || typeof estimate.low !== 'number' || typeof estimate.high !== 'number') {
    $('estimateContent').innerHTML = '<h2>No estimate yet</h2><p>Enter your vehicle details to generate an illustrative estimate.</p><a class="button" href="sell.html">Evaluate my car →</a>'; return;
  }
  $('estimateContent').innerHTML = `<p class="eyebrow">Illustrative valuation</p><h2>${escapeHTML(estimate.title)}</h2><p>${escapeHTML(estimate.km.toLocaleString('en-IN'))} km · ${escapeHTML(estimate.condition)} condition</p><p class="estimate-price">₹${estimate.low.toFixed(2)}L – ₹${estimate.high.toFixed(2)}L</p><p>This estimate is based on demo assumptions. A dealer must inspect the vehicle and agree a final price; it is not a guaranteed purchase offer.</p><div class="estimate-actions"><a class="button" href="payment.html">Confirm estimate & continue →</a><a class="secondary-button" href="sell.html">Edit car details</a></div>`;
});
