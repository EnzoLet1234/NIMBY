// =========================================================================
// FICHIER DE DONNÉES CENTRALISÉ
// Pour modifier ou enrichir le contenu du site, éditez uniquement ce fichier.
// =========================================================================

const SITE_DATA = {
  // 1. Points de la carte interactive (Leaflet)
  // 1A. Polygones réels de la carte (calés sur Guitrancourt Est)
  mapPolygons: [
    {
      layer: "icpe",
      name: "Emprise ICPE — Carrière actuelle (Zones 1 & 2)",
      tag: "Heidelberg Materials (ex-Calcia)",
      label: "Carrière / ICPE (112,6 ha)",
      labelCoords: [49.0126, 1.7878],
      style: { color: "#dc2626", weight: 2.5, dashArray: "6, 5", fillColor: "#dc2626", fillOpacity: 0.12 },
      description: "Périmètre total de 112,6 ha (103,1 ha d'ancienne carrière calcaire exploitée jusqu'en 2021). Zone 1 (nord-ouest) : remblayage de 900 000 m³ pour remise en état.",
      coords: [
        [49.0148, 1.7875], [49.0132, 1.7898], [49.0110, 1.7905],
        [49.0096, 1.7924], [49.0108, 1.7945], [49.0095, 1.7988],
        [49.0066, 1.7992], [49.0046, 1.7955], [49.0056, 1.7916],
        [49.0038, 1.7896], [49.0014, 1.7874], [49.0026, 1.7844],
        [49.0046, 1.7866], [49.0068, 1.7888], [49.0086, 1.7892],
        [49.0105, 1.7875], [49.0108, 1.7845], [49.0130, 1.7852]
      ]
    },
    {
      layer: "isdi",
      name: "Projet ISDI — Zone 2 (Guitrancourt 2)",
      tag: "Déchets inertes",
      label: "ISDI Zone 2 (28,8 ha)",
      labelCoords: [49.0082, 1.7952],
      style: { color: "#2563eb", weight: 2.5, fillColor: "#3b82f6", fillOpacity: 0.22 },
      description: "Installation de Stockage de Déchets Inertes prévue sur 28,8 ha (3 000 000 m³ de matériaux, notamment issus des chantiers du Grand Paris).",
      coords: [
        [49.0102, 1.7940], [49.0096, 1.7978], [49.0072, 1.7985],
        [49.0060, 1.7952], [49.0064, 1.7924], [49.0085, 1.7928]
      ]
    },
    {
      layer: "extension",
      name: "Extension ISDI (Sud Zone 2)",
      tag: "Extension 9,5 ha",
      label: "Extension (9,5 ha)",
      labelCoords: [49.0056, 1.7952],
      style: { color: "#e11d48", weight: 1.8, fillColor: "#f43f5e", fillOpacity: 0.45 },
      description: "Extension de 9,5 ha sur d'anciennes parcelles réhabilitées afin de réaliser l'ISDI en Zone 2.",
      coords: [
        [49.0064, 1.7924], [49.0060, 1.7952], [49.0068, 1.7974],
        [49.0050, 1.7966], [49.0047, 1.7938], [49.0056, 1.7918]
      ]
    },
    {
      layer: "emta",
      name: "Site EMTA (SARPI-Veolia) — Les Croix Blanches",
      tag: "ISDD • Déchets dangereux",
      label: "EMTA / Veolia (ISDD)",
      labelCoords: [49.0068, 1.7885],
      style: { color: "#7c3aed", weight: 2.5, fillColor: "#8b5cf6", fillOpacity: 0.32 },
      description: "Installation mitoyenne à la carrière : passage visé de 200 000 à 250 000 t/an (max 300 000 t/an) jusqu'en 2040 + unité provisoire de stabilisation (50 000 t/an).",
      coords: [
        [49.0102, 1.7890], [49.0086, 1.7916], [49.0055, 1.7892],
        [49.0038, 1.7866], [49.0056, 1.7852], [49.0084, 1.7870]
      ]
    }
  ],    

  // 1B. Points géographiques (Bourg, eau et sites voisins)
  mapPoints: [
    {
      layer: "bourg",
      name: "Bourg de Guitrancourt",
      tag: "646 habitants",
      coords: [49.0094, 1.7778],
      color: "#1b4332",
      description: "Cœur du village rural, situé entre 300 m et 600 m à l'ouest des emprises industrielles."
    },
    {
      layer: "context",
      name: "Captage d'eau potable (AEP) de Gargenville",
      tag: "Enjeu hydrogéologique",
      coords: [48.9965, 1.8050],
      color: "#d97706",
      description: "Captage alimenté par la nappe de la Craie, situé à ~1,5 km au sud-est à l'aval hydraulique."
    },
    {
      layer: "context",
      name: "Ancienne carrière des Blancs Soleils",
      tag: "Mémoire industrielle",
      coords: [48.9989, 1.7642],
      color: "#d97706",
      description: "Autre ancienne carrière à proximité immédiate au sud-ouest de Guitrancourt."
    },
    {
      layer: "context",
      name: "Unité EMTA / Limay (Zone portuaire)",
      tag: "Site saturé",
      coords: [48.9830, 1.7350],
      color: "#d97706",
      description: "La saturation de l'unité de stabilisation de Limay est l'argument clé justifiant le report vers Guitrancourt."
    },
    {
      layer: "context",
      name: "Ancien site SITA (Brueil-en-Vexin)",
      tag: "Cumul territorial",
      coords: [49.0260, 1.8120],
      color: "#d97706",
      description: "Ancienne installation de stockage de déchets non dangereux (fermée en 2014), illustrant le cumul historique sur le secteur."
    },
    {
      layer: "context",
      name: "Commune d'Issou",
      tag: "Commune limitrophe",
      coords: [48.9890, 1.7920],
      color: "#52606d",
      description: "Commune voisine concernée par les accès routiers et la limite sud de la carrière."
    }
  ],

  // 2. Cartographie des acteurs
  actors: [
    {
      id: "emta",
      name: "EMTA (filiale de Veolia)",
      category: "industriel",
      categoryLabel: "Industriel",
      role: "Exploitant de l'ISDD de Guitrancourt",
      stance: "Porteur du projet d'extension de capacité",
      details: "Met en avant la continuité du site sans extension foncière et la nécessité de traiter les déchets ultimes d'Île-de-France."
    },
    {
      id: "heidelberg",
      name: "Heidelberg Materials",
      category: "industriel",
      categoryLabel: "Industriel",
      role: "Ex-Calcia, gestionnaire de la carrière",
      stance: "Porteur du projet de remblaiement (ISDI)",
      details: "Prévoit la remise en état de l'ancienne carrière calcaire d'ici 2040 par apport de déchets inertes."
    },
    {
      id: "ange",
      name: "Association ANGE",
      category: "civil",
      categoryLabel: "Société civile",
      role: "Alliance Nature Guitrancourt et Environs",
      stance: "Opposition structurée au cumul des déchets",
      details: "Conteste l'étiquette NIMBY en dénonçant un effet cumulatif, les risques sanitaires et la transformation du village en zone de sacrifice."
    },
    {
      id: "mairie",
      name: "Mairie de Guitrancourt",
      category: "elu",
      categoryLabel: "Élu local",
      role: "Collectivité locale",
      stance: "Opposée au projet EMTA",
      details: "Refus de permis de construire, PV pour travaux sans autorisation, défense du cadre de vie rural."
    },
    {
      id: "prefecture",
      name: "Préfecture des Yvelines & DRIEAT",
      category: "etat",
      categoryLabel: "État & Régulation",
      role: "Autorité environnementale et décisionnaire",
      stance: "A autorisé la poursuite/modification (août 2026)",
      details: "Arbitre entre l'intérêt général régional de gestion des déchets et les prescriptions environnementales ICPE."
    },
    {
      id: "medias",
      name: "Presse nationale & locale (Reporterre, etc.)",
      category: "media",
      categoryLabel: "Média",
      role: "Caisse de résonance",
      stance: "Médiatisation de l'asymétrie métropole / village",
      details: "A contribué à sortir le conflit de l'échelle municipale en popularisant le cas des « 640 habitants »."
    }
  ],

  // 3. Axes de l'Arène des arguments (Prisme NIMBY)
  arenaAxes: [
    {
      id: "echelle",
      title: "1. Échelle d'intérêt",
      proTitle: "Impératif régional & intérêt général",
      proPoints: [
        "L'Île-de-France génère des volumes massifs de déchets dangereux.",
        "Saturation de l'installation voisine de Limay.",
        "Nécessité d'une filière de proximité pour éviter les transports longue distance."
      ],
      conTitle: "Injustice territoriale & saturation locale",
      conPoints: [
        "Disproportion démographique : 646 habitants face aux déchets de la métropole.",
        "Sentiment d'être traité comme une « poubelle du Grand Paris ».",
        "Effet cumulatif entre plusieurs sites industriels sur une même commune."
      ]
    },
    {
      id: "risque",
      title: "2. Risque & Technique",
      proTitle: "Maîtrise industrielle et encadrement",
      proPoints: [
        "Procédés de stabilisation et confinement des déchets ultimes.",
        "Suivi réglementaire strict (ICPE) et réhabilitation finale prévue à terme.",
        "Pas d'extension géographique de l'emprise existante."
      ],
      conTitle: "Incertitudes sanitaires & défiance",
      conPoints: [
        "Inquiétudes liées au seuil Seveso et à la nature des résidus (REFIOM, batteries).",
        "Craintes sur la protection des nappes phréatiques et la qualité de l'air.",
        "Rupture de confiance suite à des épisodes contentieux (travaux, avis ABF)."
      ]
    },
    {
      id: "democratie",
      title: "3. Démocratie locale",
      proTitle: "Procédure légale respectée",
      proPoints: [
        "Organisation de consultations publiques réglementaires.",
        "Expertise instruite par les services déconcentrés de l'État.",
        "Cadre fixé par le Code de l'environnement et la loi Industrie verte."
      ],
      conTitle: "Sentiment de passage en force",
      conPoints: [
        "Impression que les avis locaux (mairie, riverains, ABF) pèsent peu face à l'État.",
        "Asymétrie technique entre dossiers de centaines de pages et citoyens bénévoles.",
        "Difficulté à faire entendre une alternative globale (réduction des déchets)."
      ]
    }
  ],

  // 4. Chronologie (à affiner avec vos dates exactes)
  timeline: [
    {
      date: "Jusqu'en 2021",
      title: "Fin d'exploitation de la carrière calcaire",
      desc: "L'histoire extractive du site ouvre la voie aux projets de remblaiement et de réaménagement."
    },
    {
      date: "Novembre 2025 – Février 2026",
      title: "Consultations publiques & mobilisation citoyenne",
      desc: "Lancement des consultations sur les projets EMTA et Heidelberg. Naissance de la mobilisation locale et création de l'association ANGE."
    },
    {
      date: "Janvier 2026",
      title: "Tensions municipales et relais politique",
      desc: "La mairie relève des travaux sans autorisation ; le sujet est porté jusqu'à l'Assemblée nationale."
    },
    {
      date: "Été – Automne 2026",
      title: "Médiatisation nationale et bataille juridique",
      desc: "Publication de l'enquête de Reporterre, délivrance de l'arrêté préfectoral (août 2026) et bras de fer autour du permis et du foncier."
    }
  ],

  // 5. Glossaire technique
  glossary: [
    { term: "NIMBY", def: "« Not In My BackYard » (Pas dans mon jardin). Concept désignant l'opposition des riverains à un équipement d'intérêt collectif jugé nuisible à proximité." },
    { term: "NIABY", def: "« Not In Anyone's BackYard ». Élargissement de la critique : le projet n'est refusé nulle part en tant que tel, mais pour le modèle de production de déchets qu'il perpétue." },
    { term: "ISDD / ISDI", def: "Installation de Stockage de Déchets Dangereux (EMTA) vs Déchets Inertes (remblais carrière Heidelberg)." },
    { term: "ICPE", def: "Installation Classée pour la Protection de l'Environnement : statut juridique encadrant les sites industriels à risques." },
    { term: "REFIOM", def: "Résidus d'Épuration des Fumées d'Incinération des Ordures Ménagères, classés comme déchets dangereux." },
    { term: "Seveso (seuil haut)", def: "Directive européenne classant les sites industriels présentant les risques d'accidents majeurs les plus élevés." }
  ]
};