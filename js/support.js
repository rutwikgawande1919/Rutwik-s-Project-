function updateTicketsList() {
  const tickets = records('tickets');
  $('ticketsListContainer').innerHTML = tickets.length ? tickets.map(ticket => `<article class="record"><strong>${escapeHTML(ticket.id)} · ${escapeHTML(ticket.category)}</strong><p>${escapeHTML(ticket.msg)}</p><p>${escapeHTML(ticket.name)} · ${escapeHTML(ticket.status)}</p><button data-close="${escapeHTML(ticket.id)}" ${ticket.status === 'Closed locally' ? 'disabled' : ''}>${ticket.status === 'Closed locally' ? 'Closed' : 'Close local request'}</button></article>`).join('') : '<p class="text-sm text-slate-500">No saved requests yet.</p>';
  document.querySelectorAll('[data-close]').forEach(button => button.addEventListener('click', () => {
    const tickets = records('tickets'); const item = tickets.find(ticket => ticket.id === button.dataset.close);
    if (item) { item.status = 'Closed locally'; if (Store.write('tickets', tickets)) updateTicketsList(); }
  }));
}
function handleTicketSubmit(event) {
  event.preventDefault(); if (!validPhone($('ticketPhone'))) return;
  const name = $('ticketName').value.trim(); const msg = $('ticketMessage').value.trim();
  if (!name || !msg) { showToast('Enter your name and a message.'); return; }
  const ticket = {id:'DD-' + Date.now().toString(36).toUpperCase(), name, phone:$('ticketPhone').value.trim(), category:$('ticketCategory').value, msg, status:'Saved locally'};
  if (Store.write('tickets', [ticket, ...records('tickets')])) { updateTicketsList(); event.target.reset(); showToast('Request ' + ticket.id + ' saved on this browser.'); }
}
document.addEventListener('DOMContentLoaded', updateTicketsList);

document.addEventListener('DOMContentLoaded', () => $('supportSection').querySelector('form').addEventListener('submit', handleTicketSubmit));
