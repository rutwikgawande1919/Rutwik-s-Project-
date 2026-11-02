// Demo payout setup. Full account numbers are never persisted or transmitted.
document.addEventListener('DOMContentLoaded', () => {
  const estimate = Store.read('valuation', null);
  if (!estimate) {
    $('paymentForm').innerHTML = '<h2>Start with your car valuation</h2><p>Review and confirm an estimate before entering payout details.</p><a class="button" href="sell.html">Evaluate my car →</a>'; return;
  }
  const previous = Store.read('payout', null);
  if (previous && previous.lastFour) $('paymentStatus').textContent = 'Previously saved demo account ending ' + previous.lastFour + '. No transfer has been made.';
  $('accountConfirm').addEventListener('input', () => $('accountConfirm').setCustomValidity(''));
  $('accountNumber').addEventListener('input', () => $('accountConfirm').setCustomValidity(''));
  $('paymentForm').addEventListener('submit', event => {
    event.preventDefault();
    if (!$('accountName').value.trim()) { showToast('Enter the account holder name.'); return; }
    if ($('accountNumber').value !== $('accountConfirm').value) { $('accountConfirm').setCustomValidity('Account numbers must match.'); $('accountConfirm').reportValidity(); return; }
    const payout = {name:$('accountName').value.trim(),lastFour:$('accountNumber').value.slice(-4),ifsc:$('accountIfsc').value.toUpperCase(),savedAt:new Date().toISOString()};
    if (Store.write('payout', payout)) {
      $('accountNumber').value = ''; $('accountConfirm').value = '';
      $('paymentStatus').textContent = 'Demo payout details saved for account ending ' + payout.lastFour + '. No payment has been sent. Your seller flow is complete.';
      showToast('Masked demo payout details saved.');
    }
  });
});
