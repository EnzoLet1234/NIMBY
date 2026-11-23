document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("actors-grid");
  const filterBtns = document.querySelectorAll("#actors-filters .filter-btn");
  const modal = document.getElementById("actor-modal");
  const modalClose = document.getElementById("modal-close");

  if (!grid) return;

  const renderActors = (category = "all") => {
    const filtered = category === "all"
      ? SITE_DATA.actors
      : SITE_DATA.actors.filter((a) => a.category === category);

    grid.innerHTML = filtered.map((actor) => `
      <article class="actor-card" data-id="${actor.id}" tabindex="0">
        <span class="actor-tag">${actor.categoryLabel}</span>
        <h3>${actor.name}</h3>
        <p class="actor-role">${actor.role}</p>
        <div class="actor-stance">${actor.stance} →</div>
      </article>
    `).join("");

    // Ouverture modale au clic
    grid.querySelectorAll(".actor-card").forEach((card) => {
      card.addEventListener("click", () => openActorModal(card.dataset.id));
    });
  };

  const openActorModal = (id) => {
    const actor = SITE_DATA.actors.find((a) => a.id === id);
    if (!actor || !modal) return;

    document.getElementById("modal-actor-cat").textContent = actor.categoryLabel;
    document.getElementById("modal-actor-name").textContent = actor.name;
    document.getElementById("modal-actor-role").textContent = actor.role;
    document.getElementById("modal-actor-stance").textContent = actor.stance;
    document.getElementById("modal-actor-details").textContent = actor.details;

    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
  };

  const closeActorModal = () => {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
  };

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderActors(btn.dataset.category);
    });
  });

  if (modalClose) modalClose.addEventListener("click", closeActorModal);
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeActorModal();
    });
  }

  renderActors();
});