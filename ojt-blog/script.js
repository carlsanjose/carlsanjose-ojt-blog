document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("blog-container");

  fetch("posts.json")
    .then(res => res.json())
    .then(posts => {
      posts.forEach(post => {
        const tile = document.createElement("div");
        tile.className = "post-tile";
        tile.innerHTML = `<h2>${post.title}</h2><p>${post.summary}</p>`;
        tile.addEventListener("click", () => showPost(post));
        container.appendChild(tile);
      });
    });

  function showPost(post) {
    const overlay = document.createElement("div");
    overlay.className = "overlay";
    overlay.addEventListener("click", () => {
      document.body.removeChild(overlay);
      document.body.removeChild(modal);
    });

    const modal = document.createElement("div");
    modal.className = "post-expanded";
    modal.innerHTML = `
      <h2>${post.title}</h2>
      <p>${post.content}</p>
    `;

    document.body.appendChild(overlay);
    document.body.appendChild(modal);
  }
});
