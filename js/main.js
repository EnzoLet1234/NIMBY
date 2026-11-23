document.addEventListener("DOMContentLoaded", () => {
  // 1. Menu mobile & Scroll-spy navigation
  const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      const isOpen = navMenu.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });
    navLinks.forEach((link) =>
      link.addEventListener("click", () => navMenu.classList.remove("open"))
    );
  }

  // Highlight du lien actif au scroll
  const sections = document.querySelectorAll("main section[id]");
  window.addEventListener("scroll", () => {
    const scrollPos = window.scrollY + 120;
    sections.forEach((sec) => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute("id");
      const link = document.querySelector(`.nav-link[href="#${id}"]`);
      if (link) {
        if (scrollPos >= top && scrollPos < top + height) link.classList.add("active");
        else link.classList.remove("active");
      }
    });
  });

  // 2. Arène des arguments NIMBY (Onglets dynamiques)
  const arenaTabs = document.getElementById("arena-tabs");
  const arenaStage = document.getElementById("arena-stage");

  const renderArenaAxis = (axisId) => {
    const axis = SITE_DATA.arenaAxes.find((a) => a.id === axisId);
    if (!axis || !arenaStage) return;

    arenaStage.innerHTML = `
      <div class="arena-comparison">
        <div class="arena-col arena-col-pro">
          <h3>${axis.proTitle}</h3>
          <ul class="arena-list">
            ${axis.proPoints.map((p) => `<li>${p}</li>`).join("")}
          </ul>
        </div>
        <div class="arena-col arena-col-con">
          <h3>${axis.conTitle}</h3>
          <ul class="arena-list">
            ${axis.conPoints.map((p) => `<li>${p}</li>`).join("")}
          </ul>
        </div>
      </div>
    `;
  };

  if (arenaTabs && SITE_DATA.arenaAxes.length) {
    arenaTabs.innerHTML = SITE_DATA.arenaAxes.map((axis, idx) => `
      <button class="arena-tab ${idx === 0 ? "active" : ""}" data-axis="${axis.id}">
        ${axis.title}
      </button>
    `).join("");

    arenaTabs.querySelectorAll(".arena-tab").forEach((tab) => {
      tab.addEventListener("click", () => {
        arenaTabs.querySelectorAll(".arena-tab").forEach((t) => t.classList.remove("active"));
        tab.classList.add("active");
        renderArenaAxis(tab.dataset.axis);
      });
    });

    renderArenaAxis(SITE_DATA.arenaAxes[0].id);
  }

  // 3. Chronologie
  const timelineEl = document.getElementById("timeline-container");
  if (timelineEl) {
    timelineEl.innerHTML = SITE_DATA.timeline.map((item) => `
      <article class="timeline-item reveal is-visible">
        <span class="timeline-date">${item.date}</span>
        <h3>${item.title}</h3>
        <p>${item.desc}</p>
      </article>
    `).join("");
  }

  // 4. Glossaire + recherche en direct
  const glossaryGrid = document.getElementById("glossary-grid");
  const glossarySearch = document.getElementById("glossary-search");

  const renderGlossary = (query = "") => {
    if (!glossaryGrid) return;
    const q = query.trim().toLowerCase();
    const items = SITE_DATA.glossary.filter(
      (g) => g.term.toLowerCase().includes(q) || g.def.toLowerCase().includes(q)
    );

    glossaryGrid.innerHTML = items.length
      ? items.map((g) => `
          <article class="glossary-card">
            <h3>${g.term}</h3>
            <p>${g.def}</p>
          </article>
        `).join("")
      : `<p style="color:#52606d;">Aucun terme ne correspond à « ${query} ».</p>`;
  };

  if (glossarySearch) {
    glossarySearch.addEventListener("input", (e) => renderGlossary(e.target.value));
  }
  renderGlossary();
});