// 创建 search.js
document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('blog-search');
  
  searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    
    document.querySelectorAll('.post-item').forEach(post => {
      const text = post.innerText.toLowerCase();
      post.style.display = text.includes(term) ? 'block' : 'none';
    });
  });
});
