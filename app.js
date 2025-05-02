// Fetch and display veg recipes
fetch('recipes.json')
  .then(res => res.json())
  .then(recipes => {
    window.allRecipes = recipes;
    renderRecipes(recipes);
  });

const grid = document.getElementById('recipes-grid');
const search = document.getElementById('search');

function renderRecipes(list) {
  grid.innerHTML = list.map(r => `
    <article class="recipe-card">
      <img src="${r.image}" alt="${r.title}">
      <div class="card-content">
        <h3>${r.title}</h3>
        <p>${r.description}</p>
        <a href="${r.url}">Read More →</a>
      </div>
    </article>
  `).join('');
}

// Live-search filter
search.addEventListener('input', e => {
  const term = e.target.value.toLowerCase();
  const filtered = window.allRecipes.filter(r =>
    r.title.toLowerCase().includes(term) ||
    r.description.toLowerCase().includes(term)
  );
  renderRecipes(filtered);
});
