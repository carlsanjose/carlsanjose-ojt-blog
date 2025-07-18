document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("blog-container");

  fetch("posts.json")
    .then(res => res.json())
    .then(posts => {
      // Sort by date descending
      posts.sort((a, b) => new Date(b.date) - new Date(a.date));

      posts.forEach(post => {
        const tile = document.createElement("div");
        tile.className = "post-tile";

        const date = new Date(post.date).toLocaleDateString("en-US", {
          year: "numeric", month: "short", day: "numeric"
        });

        tile.innerHTML = `
          <h2>${post.title}</h2>
          <p><em>${date}</em></p>
          <p>${post.summary}</p>
        `;

        tile.addEventListener("click", () => showPost(post));
        container.appendChild(tile);
      });
    });

  function showPost(post) {
    const overlay = document.createElement("div");
    overlay.className = "overlay";

    const modal = document.createElement("div");
    modal.className = "post-expanded";

    const date = new Date(post.date).toLocaleDateString("en-US", {
      year: "numeric", month: "long", day: "numeric"
    });

    modal.innerHTML = `
      <h2>${post.title}</h2>
      <p><em>${date}</em></p>
      <p>${post.content}</p>
    `;

    overlay.addEventListener("click", () => {
      overlay.classList.remove("show");
      modal.classList.remove("show");
      setTimeout(() => {
        document.body.removeChild(overlay);
        document.body.removeChild(modal);
      }, 300);
    });

    document.body.appendChild(overlay);
    document.body.appendChild(modal);

    setTimeout(() => {
      overlay.classList.add("show");
      modal.classList.add("show");
    }, 10);
  }
});
