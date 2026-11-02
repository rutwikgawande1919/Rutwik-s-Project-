function renderBookings() {
  const bookings = records('bookings');
  $('bookingsList').innerHTML = bookings.length ? bookings.map(item => `<article class="record"><strong>${escapeHTML(item.type)} · ${escapeHTML(item.id)}</strong><p>${escapeHTML(item.vehicle)}</p><p>${escapeHTML(item.date)} · ${escapeHTML(item.time)}</p><p>${escapeHTML(item.city)} · ${escapeHTML(item.status)}</p><button data-cancel="${escapeHTML(item.id)}" ${item.status === 'Cancelled' ? 'disabled' : ''}>${item.status === 'Cancelled' ? 'Cancelled' : 'Cancel request'}</button></article>`).join('') : '<p>No appointment requests saved yet.</p>';
  document.querySelectorAll('[data-cancel]').forEach(button => button.addEventListener('click', () => {
    const items = records('bookings'); const item = items.find(item => item.id === button.dataset.cancel);
    if (item) { item.status = 'Cancelled'; if (Store.write('bookings', items)) renderBookings(); }
  }));
}
document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(location.search);
  if ([...$('bookingType').options].some(option => option.value === params.get('type'))) $('bookingType').value = params.get('type');
  $('bookingCar').innerHTML = '<option value="own">My own vehicle</option>' + CAR_DATABASE.map(car => `<option value="${car.id}">${car.make} ${car.model}</option>`).join('');
  if (CAR_DATABASE.some(car => car.id === params.get('car'))) $('bookingCar').value = params.get('car');
  else if ($('bookingType').value === 'Test drive') $('bookingCar').value = CAR_DATABASE[0].id;
  $('bookingDate').min = localDate();
  $('bookingForm').addEventListener('submit', event => {
    event.preventDefault(); if (!validPhone($('bookingPhone'))) return;
    if ($('bookingDate').value < localDate()) { showToast('Choose today or a future date.'); return; }
    if (!$('bookingName').value.trim() || !$('bookingAddress').value.trim()) { showToast('Enter your name and address.'); return; }
    if ($('bookingType').value === 'Test drive' && $('bookingCar').value === 'own') { showToast('Choose a listed car for your test drive.'); return; }
    const item = {id:'BK-' + Date.now().toString(36).toUpperCase(), name:$('bookingName').value.trim(), phone:$('bookingPhone').value.trim(), address:$('bookingAddress').value.trim(), type:$('bookingType').value, vehicle:$('bookingCar').selectedOptions[0].textContent, date:$('bookingDate').value, time:$('bookingTime').value, city:$('citySelect').value, status:'Saved locally — unconfirmed'};
    if (Store.write('bookings', [item, ...records('bookings')])) { renderBookings(); $('bookingFeedback').textContent = `Request ${item.id} saved on this browser. No dealer has been notified.`; event.target.reset(); }
  }); renderBookings();
});
