// Fitur Filter / Pencarian Judul Catatan secara Real-time
function filterNotes() {
  const input = document.getElementById('searchInput');
  const filter = input.value.toLowerCase();
  const noteList = document.getElementById('noteList');
  const cards = noteList.getElementsByClassName('note-card');

  for (let i = 0; i < cards.length; i++) {
    const title = cards[i].getElementsByTagName('h3')[0].innerText;
    const tag = cards[i].getElementsByClassName('note-tag')[0]?.innerText || '';
    
    if (title.toLowerCase().includes(filter) || tag.toLowerCase().includes(filter)) {
      cards[i].style.display = 'flex';
    } else {
      cards[i].style.display = 'none';
    }
  }
}
