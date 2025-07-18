// main.js
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("blog-container");

  posts.sort((a, b) => new Date(a.date) - new Date(b.date)); // Ascending

  posts.forEach(post => {
    const tile = document.createElement("div");
    tile.className = "post-tile";

    const date = new Date(post.date).toLocaleDateString("en-US", {
      year: "numeric", month: "short", day: "numeric"
    });

    tile.innerHTML = `
      <h2>${post.title}</h2>
      <p><em>${date}</em></p>
      ${post.images && post.images[0] ? `<img src="${post.images[0]}" alt="${post.title}" class="post-thumbnail" />` : ""}
      <p>${post.summary}</p>
    `;

    tile.addEventListener("click", () => showPost(post));
    container.appendChild(tile);
  });

  function showPost(post) {
    const overlay = document.createElement("div");
    overlay.className = "overlay";

    const modal = document.createElement("div");
    modal.className = "post-expanded";

    const date = new Date(post.date).toLocaleDateString("en-US", {
      year: "numeric", month: "long", day: "numeric"
    });

    // Carousel HTML
    let carouselHTML = '';
    if (post.images && post.images.length > 0) {
      carouselHTML = `
        <div class="carousel">
          <img src="${post.images[0]}" class="carousel-image" />
          <button class="carousel-btn left">&#9664;</button>
          <button class="carousel-btn right">&#9654;</button>
        </div>
      `;
    }

    let contentHTML = post.content
      .split("\n")
      .map(line => `<p>${line.trim()}</p>`)
      .join("");

    let imagesHTML = "";
    if (post.images && post.images.length > 0) {
      imagesHTML = post.images
        .map(src => `<img src="${src}" alt="${post.title}" class="post-image" />`)
        .join("");
    }

    modal.innerHTML = `
      <h2>${post.title}</h2>
      <p><em>${date}</em></p>
      ${carouselHTML}
      ${contentHTML}
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

    // Carousel logic
    if (post.images && post.images.length > 1) {
      const img = modal.querySelector(".carousel-image");
      const leftBtn = modal.querySelector(".carousel-btn.left");
      const rightBtn = modal.querySelector(".carousel-btn.right");
      let index = 0;

      leftBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        index = (index - 1 + post.images.length) % post.images.length;
        img.src = post.images[index];
      });

      rightBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        index = (index + 1) % post.images.length;
        img.src = post.images[index];
      });
    }
  }
});
