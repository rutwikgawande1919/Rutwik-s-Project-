const selectedCar = CAR_DATABASE.find(car => car.id === new URLSearchParams(location.search).get('id'));
function recalcModalEmi() {
  if (!selectedCar) return;
  const down = Number($('emiDownSlider').value); const years = Number($('emiTenureSlider').value);
  const principal = selectedCar.priceLakh * 100000 * (1 - down / 100);
  const rate = .095 / 12; const months = years * 12;
  const emi = Math.round(principal * rate / (1 - Math.pow(1 + rate, -months)));
  $('modalCalculatedEmi').textContent = '₹' + emi.toLocaleString('en-IN') + '/mo';
  $('downPaymentPctLabel').textContent = down + '%'; $('tenureYearsLabel').textContent = years + ' Years';
}
function updateSaveButton() {
  if (!selectedCar) return;
  const saved = savedCars().includes(selectedCar.id);
  $('modalShortlistBtn').textContent = saved ? 'Remove from shortlist' : 'Save to shortlist';
  $('modalShortlistBtn').setAttribute('aria-pressed', String(saved));
}
function toggleModalShortlist() { if (selectedCar) toggleShortlist(selectedCar.id); }
function bookHomeTestDrive() { if (selectedCar) location.href = 'booking.html?type=Test%20drive&car=' + selectedCar.id; }

function renderCarOverview() {
  $('carDescription').textContent = selectedCar.description;
  const specs = [['Model year', selectedCar.year], ['Distance driven', selectedCar.mileage.toLocaleString('en-IN') + ' km'], ['Fuel type', selectedCar.fuel], ['Transmission', selectedCar.gearbox], ['Engine', selectedCar.engineCc.toLocaleString('en-IN') + ' cc'], ['Seats', selectedCar.seats], ['Ownership', selectedCar.owners], ['Body style', selectedCar.body], ['Registration state', selectedCar.registration], ['Visit this car', selectedCar.hub]];
  $('carSpecs').innerHTML = specs.map(([label, value]) => `<div><dt>${escapeHTML(label)}</dt><dd>${escapeHTML(value)}</dd></div>`).join('');
  const photos = selectedCar.photos;
  $('carGallery').innerHTML = photos.map((photo, index) => `<button type="button" class="gallery-thumb" data-photo="${index}" aria-label="View ${escapeHTML(photo.alt)}" aria-pressed="${index === 0}"><img src="${photo.src}" alt="${escapeHTML(photo.alt)}" loading="lazy"><span>${escapeHTML(photo.label)}</span></button>`).join('');
  function selectPhoto(index) {
    $('modalImg').src = photos[index].src;
    $('modalImg').alt = photos[index].alt;
    $('photoCredit').href = photos[index].source;
    $('photoCredit').textContent = `Photo: ${photos[index].author} · ${photos[index].licence} — source & licence`;
    $('carGallery').querySelectorAll('button').forEach((button, i) => button.setAttribute('aria-pressed', String(i === index)));
    attachImageFallbacks($('modalImg').parentElement);
  }
  $('carGallery').querySelectorAll('button').forEach(button => button.addEventListener('click', () => selectPhoto(Number(button.dataset.photo))));
  attachImageFallbacks($('carGallery'));
  selectPhoto(0);
}
document.addEventListener('DOMContentLoaded', () => {
  if (!selectedCar) { $('main').innerHTML = '<div class="empty-state"><h1>Car not found</h1><p>This listing is unavailable.</p><a href="buy.html">Back to all cars →</a></div>'; return; }
  document.title = `${selectedCar.make} ${selectedCar.model} — DealerDrive`;
  $('modalImg').src = selectedCar.image; $('modalImg').alt = selectedCar.make + ' ' + selectedCar.model;
  $('modalBadge').textContent = selectedCar.badge;
  $('modalTitle').textContent = `${selectedCar.year} ${selectedCar.make} ${selectedCar.model}`;
  $('modalSub').textContent = `${selectedCar.mileage.toLocaleString('en-IN')} km · ${selectedCar.fuel} · ${selectedCar.trans}`;
  $('modalPrice').textContent = '₹' + selectedCar.priceLakh.toFixed(2) + ' Lakh';
  $('modalScore').textContent = 'Score: ' + selectedCar.score;
  $('modalFeatures').innerHTML = selectedCar.features.map(feature => '<span class="px-3 py-2 rounded-xl bg-slate-100">' + escapeHTML(feature) + '</span>').join('');
  $('emiDownSlider').setAttribute('aria-label', 'Down payment percentage'); $('emiTenureSlider').setAttribute('aria-label', 'Loan tenure in years');
  const note = document.createElement('p'); note.className = 'text-xs text-slate-500'; note.textContent = 'Illustrative EMI at 9.5% annual interest, excluding fees. This is not a loan offer.';
  $('modalCalculatedEmi').parentElement.parentElement.append(note);
  renderCarOverview(); recalcModalEmi(); updateSaveButton();
});
document.addEventListener('shortlistchange', updateSaveButton);

document.addEventListener('DOMContentLoaded', () => {
  if (!selectedCar) return;
  $('emiDownSlider').addEventListener('input', recalcModalEmi);
  $('emiTenureSlider').addEventListener('input', recalcModalEmi);
  $('modalShortlistBtn').addEventListener('click', toggleModalShortlist);
  document.querySelector('[data-action="bookHomeTestDrive"]').addEventListener('click', bookHomeTestDrive);
});
