function renderShortlist() {
  const cars = CAR_DATABASE.filter(car => savedCars().includes(car.id));
  $('emptyShortlist').classList.toggle('hidden', cars.length > 0);
  if (cars.length) paintCars($('shortlistGrid'), cars); else $('shortlistGrid').replaceChildren();
}
document.addEventListener('DOMContentLoaded', renderShortlist);
document.addEventListener('shortlistchange', renderShortlist);
