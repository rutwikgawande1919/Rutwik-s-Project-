function handleValuationSubmit(event) {
  event.preventDefault();
  const year = Number($('sellerYear').value); const km = Number($('sellerKm').value);
  const make = $('sellerMake').value; const model = $('sellerModel').value.trim();
  if (!model) { $('sellerModel').setCustomValidity('Enter a vehicle model.'); $('sellerModel').reportValidity(); return; }
  const condition = document.querySelector('input[name=sellerCond]:checked').value;
  const known = CAR_DATABASE.find(car => car.make === make && car.model.toLowerCase().includes(model.toLowerCase().split(' ')[0]));
  const base = known ? known.priceLakh : ({Hyundai:11,Honda:12,Tata:10,Mahindra:16,Toyota:18,'Maruti Suzuki':8}[make] || 10);
  const ageAdjustment = Math.pow(.90, new Date().getFullYear() - year - (known ? new Date().getFullYear() - known.year : 2));
  const estimate = Math.max(1, base * ageAdjustment * (1 - km / 500000) * ({flawless:1,good:.93,fair:.82}[condition]));
  if (Store.write('valuation', {title:`${year} ${make} ${model}`,make,model,year,km,condition,low:estimate*.92,high:estimate})) location.href = 'estimate.html';
}
document.addEventListener('DOMContentLoaded', () => {
  $('sellerModel').addEventListener('input', () => $('sellerModel').setCustomValidity(''));
  $('sellerKm').setAttribute('aria-label', 'Kilometres driven');
  $('sellerKm').step = '1000'; $('sellerKm').value = '28000';
  const previous = Store.read('valuation', null);
  if (previous) {
    if ([...$('sellerMake').options].some(option => option.value === previous.make)) $('sellerMake').value = previous.make;
    if ([...$('sellerYear').options].some(option => Number(option.value) === previous.year)) $('sellerYear').value = previous.year;
    $('sellerModel').value = typeof previous.model === 'string' ? previous.model : '';
    $('sellerKm').value = previous.km || 28000;
    $('kmLabel').textContent = Number($('sellerKm').value).toLocaleString('en-IN') + ' km';
    const radio = [...document.querySelectorAll('input[name=sellerCond]')].find(input => input.value === previous.condition);
    if (radio) radio.checked = true;
  }
  const disclaimer = document.createElement('p'); disclaimer.className = 'text-xs text-slate-500';
  disclaimer.textContent = 'Demo estimate based on simple age, mileage and condition assumptions. No live market data, guaranteed offer or bank payout.';
  $('valuationFormCard').append(disclaimer);
});

document.addEventListener('DOMContentLoaded', () => {
  $('valuationFormCard').querySelector('form').addEventListener('submit', handleValuationSubmit);
  $('sellerKm').addEventListener('input', () => $('kmLabel').textContent = Number($('sellerKm').value).toLocaleString('en-IN') + ' km');
});
