document.addEventListener('DOMContentLoaded', () => {
  const profile = Store.read('profile', null); if (profile && typeof profile.name === 'string') $('profileName').value = profile.name;
  $('profileForm').addEventListener('submit', event => {
    event.preventDefault(); const name = $('profileName').value.trim();
    if (!name) { showToast('Enter your name.'); return; }
    if (Store.write('profile', {name})) { $('profileLink').textContent = name; $('profileStatus').textContent = 'Demo profile saved on this browser.'; }
  });
  $('signOut').addEventListener('click', () => { if (Store.write('profile', null)) { $('profileForm').reset(); $('profileName').value = ''; $('profileLink').textContent = 'Sign in ↗'; $('profileStatus').textContent = 'Demo profile cleared.'; } });
});
