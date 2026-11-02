// Catalog controller shared by the home and buy pages.
let activeFilter = 'All';
let searchQuery = new URLSearchParams(location.search).get('q') || '';
function renderInventory() {
  const query = searchQuery.trim().toLowerCase();
  const filtered = CAR_DATABASE.filter(car => (activeFilter === 'All' || car.body === activeFilter) && `${car.make} ${car.model}`.toLowerCase().includes(query));
  paintCars($('carsGrid'), filtered);
}
function handleLiveSearch(value) { searchQuery = value; renderInventory(); }
function executeSearch() { location.href = 'buy.html?q=' + encodeURIComponent($('heroSearchInput').value); }
function filterCatalog(type) {
  activeFilter = type;
  document.querySelectorAll('.body-filter-btn').forEach(button => {
    const active = button.dataset.type === type;
    button.className = 'body-filter-btn px-4 py-2 rounded-full text-xs font-bold transition-all ' + (active ? 'bg-forest text-white' : 'bg-slate-100 text-slate-700');
    button.setAttribute('aria-pressed', String(active));
  }); renderInventory();
}
document.addEventListener('DOMContentLoaded', () => {
  $('heroSearchInput').value = searchQuery;
  $('heroSearchInput').setAttribute('aria-label', 'Search car make or model');
  $('heroSearchInput').addEventListener('keydown', event => { if (event.key === 'Enter') executeSearch(); });
  filterCatalog('All');
});
document.addEventListener('shortlistchange', renderInventory);

document.addEventListener('DOMContentLoaded', () => {
  $('heroSearchInput').addEventListener('input', event => handleLiveSearch(event.target.value));
  document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => filterCatalog(button.dataset.filter)));
  document.querySelector('[data-action="executeSearch"]')?.addEventListener('click', executeSearch);
});
