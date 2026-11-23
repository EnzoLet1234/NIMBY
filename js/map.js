document.addEventListener("DOMContentLoaded", () => {
  const mapEl = document.getElementById("guitrancourt-map");
  if (!mapEl) return;

  if (typeof L === "undefined") {
    mapEl.innerHTML = `<div style="padding:2rem;text-align:center;color:#52606d;">
      Carte indisponible hors connexion (bibliothèque Leaflet requise).
    </div>`;
    return;
  }

  // Initialisation centrée entre le bourg de Guitrancourt et la carrière
  const views = {
    quarry: { center: [49.0085, 1.7875], zoom: 14 },
    territory: { center: [49.0040, 1.7780], zoom: 12 }
  };

  const map = L.map("guitrancourt-map", { scrollWheelZoom: false }).setView(
    views.quarry.center,
    views.quarry.zoom
  );

  // Échelle métrique (comme sur la carte d'origine)
  L.control.scale({ metric: true, imperial: false, position: "bottomleft" }).addTo(map);

  // Fonds de carte : Satellite (Esri) et Plan (OSM)
  const basemaps = {
    satellite: L.tileLayer(
      "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
      { attribution: "&copy; Esri, Maxar, Earthstar Geographics", maxZoom: 19 }
    ),
    plan: L.tileLayer(
      "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      { attribution: "&copy; OpenStreetMap", maxZoom: 19 }
    )
  };

  let activeBasemap = basemaps.satellite.addTo(map);

  // Groupes de couches
  const layerGroups = {
    icpe: L.layerGroup().addTo(map),
    isdi: L.layerGroup().addTo(map),
    extension: L.layerGroup().addTo(map),
    emta: L.layerGroup().addTo(map),
    bourg: L.layerGroup().addTo(map),
    context: L.layerGroup().addTo(map)
  };

  const buildPopupHtml = (item) => `
    <div class="map-popup">
      <span class="map-popup-tag">${item.tag}</span>
      <h4>${item.name}</h4>
      <p>${item.description}</p>
    </div>
  `;

  // 1. Rendu des polygones (Zones 1 & 2, ISDI, Extension, EMTA)
  SITE_DATA.mapPolygons.forEach((zone) => {
    const poly = L.polygon(zone.coords, zone.style);
    poly.bindPopup(buildPopupHtml(zone));

    // Effet de survol fluide
    const baseOpacity = zone.style.fillOpacity;
    poly.on("mouseover", () => poly.setStyle({ fillOpacity: Math.min(baseOpacity + 0.2, 0.7) }));
    poly.on("mouseout", () => poly.setStyle({ fillOpacity: baseOpacity }));

    if (layerGroups[zone.layer]) {
      poly.addTo(layerGroups[zone.layer]);

      // Étiquette flottante discrète au centre de la zone
      if (zone.label && zone.labelCoords) {
        L.marker(zone.labelCoords, { opacity: 0, interactive: false })
          .bindTooltip(zone.label, {
            permanent: true,
            direction: "center",
            className: "map-label-tooltip"
          })
          .addTo(layerGroups[zone.layer]);
      }
    }
  });

  // 2. Cercles de distance NIMBY autour du bourg (500 m et 2 km)
  L.circle([49.0094, 1.7778], {
    radius: 500,
    color: "#1b4332",
    weight: 1.5,
    dashArray: "4, 5",
    fillColor: "#1b4332",
    fillOpacity: 0.06,
    interactive: false
  }).addTo(layerGroups.bourg);

  L.circle([49.0094, 1.7778], {
    radius: 2000,
    color: "#ffffff",
    weight: 1.2,
    dashArray: "4, 6",
    fillOpacity: 0,
    interactive: false
  }).addTo(layerGroups.bourg);

  // 3. Rendu des points repères
  SITE_DATA.mapPoints.forEach((pt) => {
    const marker = L.circleMarker(pt.coords, {
      radius: 8,
      fillColor: pt.color || "#1b4332",
      color: "#ffffff",
      weight: 2,
      opacity: 1,
      fillOpacity: 0.95
    });

    marker.bindPopup(buildPopupHtml(pt));
    if (layerGroups[pt.layer]) marker.addTo(layerGroups[pt.layer]);
  });

  // 4. Interaction : cases à cocher des couches
  document.querySelectorAll(".map-layer-toggle").forEach((checkbox) => {
    checkbox.addEventListener("change", (e) => {
      const group = layerGroups[e.target.value];
      if (!group) return;
      if (e.target.checked) map.addLayer(group);
      else map.removeLayer(group);
    });
  });

  // 5. Interaction : boutons de zoom fluide (flyTo)
  document.querySelectorAll(".map-zoom-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".map-zoom-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const target = views[btn.dataset.view];
      if (target) map.flyTo(target.center, target.zoom, { duration: 1.1 });
    });
  });

  // 6. Interaction : bascule Satellite / Plan
  document.querySelectorAll(".map-basemap-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".map-basemap-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const next = basemaps[btn.dataset.basemap];
      if (next && next !== activeBasemap) {
        map.removeLayer(activeBasemap);
        activeBasemap = next.addTo(map);
      }
    });
  });
});