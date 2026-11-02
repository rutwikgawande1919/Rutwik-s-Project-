// Shared navigation, browser-local persistence and reusable vehicle cards.
'use strict';
const $ = id => document.getElementById(id);
const Store = {
  read(key, fallback) { try { const v = JSON.parse(localStorage.getItem('dealerdrive.' + key)); return v === null ? fallback : v; } catch { return fallback; } },
  write(key, value) { try { localStorage.setItem('dealerdrive.' + key, JSON.stringify(value)); return true; } catch { showToast('Browser storage is unavailable. Your changes cannot be saved.'); return false; } }
};
const escapeHTML = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
function savedCars() { const value = Store.read('shortlist', ['car-1']); return Array.isArray(value) ? value.filter(id => CAR_DATABASE.some(car => car.id === id)) : []; }
function records(key) { const value = Store.read(key, []); return Array.isArray(value) ? value.filter(item => item && typeof item === 'object') : []; }
function updateShortlistBadge() { if ($('shortlistBadge')) $('shortlistBadge').textContent = savedCars().length; }
function toggleShortlist(id) {
  if (!CAR_DATABASE.some(car => car.id === id)) return;
  const saved = savedCars(); const next = saved.includes(id) ? saved.filter(x => x !== id) : [...saved, id];
  if (Store.write('shortlist', next)) { updateShortlistBadge(); document.dispatchEvent(new Event('shortlistchange')); showToast(next.includes(id) ? 'Car saved to your shortlist.' : 'Car removed from your shortlist.'); }
}
function showToast(message) {
  const el = $('toastNotification'); el.textContent = message; el.hidden = false;
  clearTimeout(showToast.timer); showToast.timer = setTimeout(() => el.hidden = true, 3500);
}
function openCarModal(id) { location.href = 'car-details.html?id=' + encodeURIComponent(id); }
function paintCars(container, cars) {
  container.innerHTML = cars.length ? cars.map(car => `<article class="bg-white rounded-[24px] border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all"><a class="car-link" href="car-details.html?id=${car.id}"><img class="car-image" src="${car.image}" alt="${escapeHTML(car.make + ' ' + car.model)}" loading="lazy"><div class="p-5"><h3 class="font-extrabold text-slate-900 text-base">${car.year} ${car.make} ${car.model}</h3><p class="text-xs text-slate-500 mt-1.5">${car.mileage.toLocaleString('en-IN')} km · ${car.fuel} · ${car.trans}</p><p class="card-extra">${car.owners} · ${car.seats} seats · ${car.engineCc.toLocaleString('en-IN')} cc</p><p class="card-hub">${escapeHTML(car.hub)}</p><div class="card-highlights">${car.features.slice(0, 2).map(feature => `<span>${escapeHTML(feature)}</span>`).join('')}</div></div></a><div class="px-5 pb-5 car-actions"><strong class="text-xl text-forest">₹${car.priceLakh.toFixed(2)} Lakh</strong><button class="save-car" data-save="${car.id}" aria-pressed="${savedCars().includes(car.id)}" aria-label="${savedCars().includes(car.id) ? 'Remove' : 'Save'} ${car.make} ${car.model}">${savedCars().includes(car.id) ? '♥ Saved' : '♡ Save'}</button></div></article>`).join('') : '<div class="empty-state">No cars match your search.<br><a href="buy.html">Browse all cars →</a></div>';
  container.querySelectorAll('[data-save]').forEach(button => button.addEventListener('click', () => toggleShortlist(button.dataset.save)));
  attachImageFallbacks(container);
}
function attachImageFallbacks(root = document) {
  root.querySelectorAll('img').forEach(img => { img.onerror = () => { img.onerror = null; img.src = 'assets/car-placeholder.svg'; img.alt += ' — illustrative placeholder'; }; });
}
function validPhone(input) {
  const digits = input.value.replace(/\D/g, '').replace(/^91(?=\d{10}$)/, '');
  input.setCustomValidity(/^[6-9]\d{9}$/.test(digits) ? '' : 'Enter a valid 10-digit Indian mobile number.');
  return input.reportValidity();
}
function localDate() { const d = new Date(); return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`; }
document.addEventListener('DOMContentLoaded', () => {
  updateShortlistBadge(); attachImageFallbacks();
  $('menuToggle').addEventListener('click', () => { const open = $('mainNav').classList.toggle('is-open'); $('menuToggle').setAttribute('aria-expanded', String(open)); });
  const city = Store.read('city', 'Bengaluru');
  if ([...$('citySelect').options].some(option => option.value === city)) $('citySelect').value = city;
  function updateCity() { if ($('catalogHeaderTitle')) $('catalogHeaderTitle').textContent = 'Sample cars in ' + $('citySelect').value; }
  $('citySelect').addEventListener('change', () => { Store.write('city', $('citySelect').value); updateCity(); }); updateCity();
  const profile = Store.read('profile', null); if (profile && typeof profile.name === 'string') $('profileLink').textContent = profile.name;
  document.querySelectorAll('input[type=tel]').forEach(input => input.addEventListener('input', () => input.setCustomValidity('')));
});
window.addEventListener('storage', () => { updateShortlistBadge(); document.dispatchEvent(new Event('shortlistchange')); });

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-href]').forEach(button => button.addEventListener('click', () => location.href = button.dataset.href));
});
