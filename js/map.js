document.addEventListener("DOMContentLoaded", () => {
  const mapEl = document.getElementById("guitrancourt-map");
  if (!mapEl) return;

  // Sécurité si Leaflet n'a pas pu charger (hors ligne)
  if (typeof L === "undefined") {
    mapEl.innerHTML = `<div style="padding:2rem;text-align:center;color:#52606d;">
      Carte indisponible hors connexion (bibliothèque Leaflet requise).
    </div>`;
    return;
  }

  // Centrage sur Guitrancourt
  const map = L.map("guitrancourt-map", { scrollWheelZoom: false }).setView([49.005, 1.775], 13);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap"
  }).addTo(map);

  const colorMap = {
    sites: "#b91c1c",
    communes: "#1b4332",
    sensible: "#d97706"
  };

  const layerGroups = {
    sites: L.layerGroup().addTo(map),
    communes: L.layerGroup().addTo(map),
    sensible: L.layerGroup().addTo(map)
  };

  // Ajout des points depuis data.js
  SITE_DATA.mapPoints.forEach((pt) => {
    const marker = L.circleMarker(pt.coords, {
      radius: 9,
      fillColor: colorMap[pt.layer] || "#1f2937",
      color: "#ffffff",
      weight: 2,
      opacity: 1,
      fillOpacity: 0.9
    });

    marker.bindPopup(`<strong>${pt.name}</strong><br><span style="font-size:13px;">${pt.description}</span>`);
    if (layerGroups[pt.layer]) marker.addTo(layerGroups[pt.layer]);
  });

  // Cercle indicatif autour de Guitrancourt (rayon 2 km)
  L.circle([49.0095, 1.7765], {
    color: "#1b4332",
    fillColor: "#1b4332",
    fillOpacity: 0.05,
    weight: 1,
    dashArray: "5, 6",
    radius: 2000
  }).addTo(layerGroups.communes);

  // Filtres interactifs
  document.querySelectorAll(".map-layer-toggle").forEach((checkbox) => {
    checkbox.addEventListener("change", (e) => {
      const layer = layerGroups[e.target.value];
      if (!layer) return;
      if (e.target.checked) map.addLayer(layer);
      else map.removeLayer(layer);
    });
  });
});