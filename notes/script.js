document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchInput');
  const cards = document.querySelectorAll('.note-card');
  const noResult = document.getElementById('noResult');

  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    const keyword = e.target.value.toLowerCase().trim();
    let visibleCount = 0;

    cards.forEach(card => {
      const title = card.querySelector('h3')?.textContent.toLowerCase() || '';
      const tag = card.querySelector('.note-tag')?.textContent.toLowerCase() || '';

      // Cek apakah judul atau tag mengandung keyword
      const isMatch = title.includes(keyword) || tag.includes(keyword);

      if (isMatch) {
        card.classList.remove('is-hidden');
        visibleCount++;
      } else {
        card.classList.add('is-hidden');
      }
    });

    // Tampilkan pesan jika tidak ada hasil yang cocok
    if (visibleCount === 0) {
      noResult.classList.add('show');
    } else {
      noResult.classList.remove('show');
    }
  });
});
