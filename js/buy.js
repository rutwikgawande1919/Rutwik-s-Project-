// Catalog page: search query is retained in the URL for sharing and reloads.
document.addEventListener('DOMContentLoaded', () => {
  $('heroSearchInput').addEventListener('input', () => {
    const url = new URL(location.href);
    if ($('heroSearchInput').value) url.searchParams.set('q', $('heroSearchInput').value);
    else url.searchParams.delete('q');
    history.replaceState(null, '', url);
  });
});
