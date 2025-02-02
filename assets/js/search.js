// assets/js/search.js
document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('blog-search');
  const postItems = document.querySelectorAll('.post-item');
  
  const performSearch = (term) => {
    postItems.forEach(post => {
      const text = post.innerText.toLowerCase();
      post.style.display = text.includes(term) ? 'block' : 'none';
    });
  };

  searchInput.addEventListener('input', (e) => {
    performSearch(e.target.value.trim().toLowerCase());
  });
});
