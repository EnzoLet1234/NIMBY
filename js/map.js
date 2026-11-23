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
    quarry: { center: [49.0095, 1.7905], zoom: 14 },
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

  // Point focal animé : future unité de stabilisation (+50 000 t/an) sur le site EMTA
  const emtaPulseIcon = L.divIcon({
    className: "",
    html: '<div class="pulse-marker" title="Projet +50 000 t/an (EMTA)"></div>',
    iconSize: [18, 18],
    iconAnchor: [9, 9]
  });

  L.marker([49.0098, 1.7902], { icon: emtaPulseIcon })
    .bindPopup(
      buildPopupHtml({
        tag: "Projet contesté",
        name: "Nouvelle unité de stabilisation (50 000 t/an) & +50 000 t/an ISDD",
        description: "Épicentre de la controverse : passage en Seveso seuil haut et hausse de la capacité moyenne d'enfouissement de 200 000 à 250 000 t/an (max 300 000 t/an)."
      })
    )
    .addTo(layerGroups.emta);

  // 2. Cercles de distance NIMBY autour du bourg (500 m et 2 km)
  // 2. Cercles de distance NIMBY autour du bourg (500 m et 2 km) bien lisibles
  L.circle([49.0094, 1.7778], {
    radius: 500,
    color: "#34d399",
    weight: 2,
    dashArray: "5, 5",
    fillColor: "#34d399",
    fillOpacity: 0.08,
    interactive: false
  }).addTo(layerGroups.bourg);

  L.marker([49.0138, 1.7778], { opacity: 0, interactive: false })
    .bindTooltip("Rayon 500 m", {
      permanent: true,
      direction: "center",
      className: "map-distance-tooltip"
    })
    .addTo(layerGroups.bourg);

  L.circle([49.0094, 1.7778], {
    radius: 2000,
    color: "#ffffff",
    weight: 1.5,
    dashArray: "5, 7",
    fillOpacity: 0,
    interactive: false
  }).addTo(layerGroups.bourg);

  L.marker([49.0135, 1.8032], { opacity: 0, interactive: false })
    .bindTooltip("Rayon 2 km", {
      permanent: true,
      direction: "center",
      className: "map-distance-tooltip"
    })
    .addTo(layerGroups.bourg);

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

    // Affiche le nom du bourg directement sur la carte
    if (pt.layer === "bourg") {
      marker.bindTooltip("Guitrancourt (646 hab.)", {
        permanent: true,
        direction: "bottom",
        offset: [0, 8],
        className: "map-label-tooltip"
      });
    }

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