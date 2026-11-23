const SITE_DATA = {
  // 1A. Polygones recalés sur la vue satellite de Guitrancourt
  // 1A. Polygones recalés au plus près de la carte SIG & vue satellite
  // 1A. Polygones recalés sur la carte SIG de référence & vue satellite
  mapPolygons: [
    {
      layer: "emta",
      name: "Site EMTA (SARPI-Veolia) — Projet +50 000 t/an",
      tag: "Cœur de la controverse • Seveso seuil haut",
      label: "EMTA (+50k t/an • Seveso)",
      labelCoords: [49.0084, 1.7892],
      style: { color: "#7c3aed", weight: 2.5, fillColor: "#8b5cf6", fillOpacity: 0.28 },
      description: "Emprise inchangée de 76 ha (dont 69 ha de stockage) exploitée jusqu'en 2040. Le projet vise : (1) une unité provisoire de stabilisation de 50 000 t/an entraînant le classement Seveso seuil haut, et (2) une hausse de l'ISDD de +50 000 t/an (200k → 250k t/an en moyenne, plafond 250k → 300k t/an).",
      coords: [
        [49.0126, 1.7915],
        [49.0112, 1.7939],
        [49.0102, 1.7928],
        [49.0085, 1.7942],
        [49.0066, 1.7924],
        [49.0056, 1.7894],
        [49.0046, 1.7866],
        [49.0050, 1.7848],
        [49.0076, 1.7846],
        [49.0102, 1.7878],
        [49.0114, 1.7896]
      ]
    },
    {
      layer: "icpe",
      name: "Emprise ICPE — Carrière Heidelberg Materials (Zones 1 & 2)",
      tag: "Contexte de cumul • 112,6 ha",
      label: "Carrière / ICPE (112,6 ha)",
      labelCoords: [49.0156, 1.7910],
      style: { color: "#dc2626", weight: 2.5, dashArray: "6, 5", fillColor: "#dc2626", fillOpacity: 0.08 },
      description: "Ancienne carrière calcaire (103,1 ha exploités jusqu'en 2021 + 9,5 ha d'extension). Zone 1 (nord) : remblayage de 900 000 m³. Ce dossier parallèle alimente le sentiment d'accumulation chez les riverains.",
      coords: [
        [49.0182, 1.7924],
        [49.0172, 1.7946],
        [49.0144, 1.7942],
        [49.0126, 1.7966],
        [49.0122, 1.7982],
        [49.0102, 1.8012],
        [49.0094, 1.8032],
        [49.0074, 1.8022],
        [49.0059, 1.7988],
        [49.0054, 1.7952],
        [49.0056, 1.7928],
        [49.0020, 1.7880],
        [49.0007, 1.7858],
        [49.0018, 1.7834],
        [49.0046, 1.7866],
        [49.0056, 1.7894],
        [49.0066, 1.7924],
        [49.0085, 1.7942],
        [49.0112, 1.7939],
        [49.0126, 1.7915],
        [49.0116, 1.7888],
        [49.0118, 1.7866],
        [49.0148, 1.7878]
      ]
    },
    {
      layer: "isdi",
      name: "Projet ISDI — Zone 2 (Heidelberg Materials)",
      tag: "Déchets inertes • 28,8 ha",
      label: "ISDI Zone 2 (28,8 ha)",
      labelCoords: [49.0089, 1.7985],
      style: { color: "#2563eb", weight: 2.5, fillColor: "#3b82f6", fillOpacity: 0.22 },
      description: "Projet parallèle de stockage de déchets inertes sur 28,8 ha (3 000 000 m³ issus notamment des chantiers du Grand Paris).",
      coords: [
        [49.0114, 1.7972],
        [49.0108, 1.8002],
        [49.0092, 1.8014],
        [49.0072, 1.8006],
        [49.0058, 1.7984],
        [49.0075, 1.7966],
        [49.0088, 1.7956],
        [49.0102, 1.7964]
      ]
    },
    {
      layer: "extension",
      name: "Extension ISDI (Sud-Est Zone 2)",
      tag: "Extension 9,5 ha",
      label: "Extension (9,5 ha)",
      labelCoords: [49.0064, 1.7998],
      style: { color: "#e11d48", weight: 1.8, fillColor: "#f43f5e", fillOpacity: 0.40 },
      description: "Extension de 9,5 ha sur d'anciennes parcelles réhabilitées pour permettre la création de l'ISDI en Zone 2.",
      coords: [
        [49.0075, 1.7966],
        [49.0058, 1.7984],
        [49.0072, 1.8006],
        [49.0086, 1.8026],
        [49.0074, 1.8022],
        [49.0059, 1.7988],
        [49.0054, 1.7952],
        [49.0066, 1.7948]
      ]
    }
  ],

  // 1B. Points géographiques
  mapPoints: [
    {
      layer: "bourg",
      name: "Bourg de Guitrancourt",
      tag: "646 habitants",
      coords: [49.0094, 1.7778],
      color: "#1b4332",
      description: "Village rural situé à ~450–600 m à l'ouest de l'ISDD EMTA, dont les habitants contestent le cumul des risques et des nuisances."
    },
    {
      layer: "context",
      name: "Captage d'eau potable (AEP) de Gargenville",
      tag: "Vulnérabilité eau (CVO2)",
      coords: [48.9965, 1.8050],
      color: "#d97706",
      description: "Captage alimenté par la nappe de la Craie à ~1,5 km au sud-est (aval hydraulique). Un second captage AEP se trouve dans un rayon de 2 km."
    },
    {
      layer: "context",
      name: "Ancienne carrière des Blancs Soleils",
      tag: "Cumul territorial",
      coords: [48.9989, 1.7642],
      color: "#d97706",
      description: "Ancienne carrière au sud-ouest du village, rappelant l'historique extractif et de remblaiement du secteur."
    },
    {
      layer: "context",
      name: "Site SARPI-Veolia de Limay",
      tag: "Unité saturée",
      coords: [48.9830, 1.7350],
      color: "#d97706",
      description: "La saturation de l'usine de stabilisation de Limay motive l'implantation de la nouvelle unité de 50 000 t/an directement à Guitrancourt."
    },
    {
      layer: "context",
      name: "Ancien site SITA (Brueil-en-Vexin)",
      tag: "Mémoire des déchets",
      coords: [49.0260, 1.8120],
      color: "#d97706",
      description: "Ancienne ISDND fermée en 2014 au nord-est, illustrant la concentration historique d'installations sur ce territoire."
    },
    {
      layer: "context",
      name: "Commune d'Issou",
      tag: "Commune limitrophe",
      coords: [48.9890, 1.7920],
      color: "#52606d",
      description: "Commune voisine traversée par les axes d'accès (RD 190) vers les sites industriels."
    }
  ],

  // 2. Cartographie des acteurs
  actors: [
    {
      id: "emta",
      name: "EMTA (SARPI / Groupe Veolia)",
      category: "industriel",
      categoryLabel: "Industriel",
      role: "Exploitant du site (720 000 t/an déjà autorisées)",
      stance: "Porteur du projet +50 000 t/an",
      details: "Demande l'ajout d'une unité de stabilisation de 50 000 t/an (classant le site Seveso seuil haut) et une hausse de l'ISDD de 200k à 250k t/an en moyenne (300k max) pour pallier la saturation de Limay, sans extension foncière ni report de 2040."
    },
    {
      id: "heidelberg",
      name: "Heidelberg Materials (ex-Calcia)",
      category: "industriel",
      categoryLabel: "Industriel",
      role: "Exploitant de la carrière voisine (112,6 ha)",
      stance: "Porteur du dossier parallèle ISDI",
      details: "Prévoit le remblaiement de Zone 1 et une ISDI de 28,8 ha (+9,5 ha d'extension) en Zone 2. Bien que distinct d'EMTA, ce dossier simultané amplifie le sentiment d'encerclement."
    },
    {
      id: "ange",
      name: "Association ANGE & riverains",
      category: "civil",
      categoryLabel: "Société civile",
      role: "Alliance Nature Guitrancourt et Environs",
      stance: "Opposition au passage Seveso et au +50k t/an",
      details: "Refuse l'étiquette NIMBY : dénonce un effet cumulatif sur un village de 646 habitants, les risques sur la nappe et la santé, et l'inégalité entre métropole et commune rurale."
    },
    {
      id: "mairie",
      name: "Mairie de Guitrancourt & Député",
      category: "elu",
      categoryLabel: "Élu local",
      role: "Collectivité locale & relais parlementaire",
      stance: "Opposition ferme au projet EMTA",
      details: "Refus de permis de construire, PV pour travaux sans autorisation (janvier 2026) et question écrite n°12494 du député B. Lucas-Lundy sur les risques eau/santé et le PNR du Vexin."
    },
    {
      id: "prefecture",
      name: "Préfecture des Yvelines & DRIEAT",
      category: "etat",
      categoryLabel: "État & Régulation",
      role: "Instruction ICPE et décision finale",
      stance: "Autorisation délivrée le 10 août 2026",
      details: "Met en avant l'urgence francilienne (plus de 700 000 t/an de déchets dangereux en Île-de-France) et impose des contrôles renforcés (odeurs, biogaz, rétention des eaux)."
    },
    {
      id: "medias",
      name: "Médias (Reporterre, TV78, presse locale)",
      category: "media",
      categoryLabel: "Média",
      role: "Médiatisation de la controverse",
      stance: "Mise en lumière de l'asymétrie territoriale",
      details: "Popularise le contraste « 640 habitants face aux montagnes de déchets du Grand Paris », transformant une enquête ICPE en débat public."
    }
  ],

  // 3. Axes de l'Arène des arguments (Prisme NIMBY centré sur le +50k t/an)
  arenaAxes: [
    {
      id: "echelle",
      title: "1. Nécessité francilienne vs Injustice locale",
      proTitle: "Logique d'intérêt général régional",
      proPoints: [
        "L'Île-de-France génère ~760 000 t/an de déchets dangereux et manque d'exutoires.",
        "L'usine de stabilisation de Limay est saturée face aux nouveaux flux (REFIOM, biomasse, batteries).",
        "Traiter sur place 50 000 t/an réduit les transferts et sécurise une filière déjà existante depuis 1984."
      ],
      conTitle: "Critique de la « zone de sacrifice »",
      conPoints: [
        "Le site accueille déjà 720 000 t/an tous déchets confondus pour un village de 646 habitants.",
        "Les opposants refusent l'étiquette NIMBY : Guitrancourt assume déjà sa part depuis 40 ans.",
        "Le cumul avec le projet voisin Heidelberg donne le sentiment de devenir « la poubelle du Grand Paris »."
      ]
    },
    {
      id: "risque",
      title: "2. Changement de seuil : Seveso seuil haut",
      proTitle: "Maîtrise technique revendiquée",
      proPoints: [
        "Emprise foncière inchangée (76 ha) et date de fermeture maintenue à 2040.",
        "Reprofilage de casiers existants et fonctionnement en circuit fermé (bassins de rétention).",
        "Prescriptions préfectorales renforcées sur les odeurs, lixiviats et le suivi environnemental."
      ],
      conTitle: "Risque accru et défiance sanitaire",
      conPoints: [
        "L'unité de 50 000 t/an fait basculer le site en Seveso seuil haut par règle de cumul.",
        "Zone identifiée en vulnérabilité eau (CVO2) avec deux captages AEP dans un rayon de 2 km.",
        "Perte de confiance après des travaux démarrés sans autorisation préalable (PV de janvier 2026)."
      ]
    },
    {
      id: "democratie",
      title: "3. Consultation publique & décision préfectorale",
      proTitle: "Cadre réglementaire respecté",
      proPoints: [
        "Consultation publique menée de nov. 2025 à fév. 2026 sous l'égide d'un commissaire enquêteur.",
        "Avis favorables du commissaire enquêteur, de la DRIEAT et du CODERST.",
        "Création de 6 emplois permanents (46 au total sur le site)."
      ],
      conTitle: "Asymétrie et sentiment de passage en force",
      conPoints: [
        "Double consultation (EMTA + Heidelberg) jugée opaque et difficile à décrypter pour des bénévoles.",
        "Opposition unanime des riverains en réunion publique peu suivie d'effet sur la décision finale.",
        "Contournement des avis défavorables locaux (mairie, ABF) par l'arrêté préfectoral d'août 2026."
      ]
    }
  ],

  // 4. Chronologie
  timeline: [
    {
      date: "1984 – 2024",
      title: "Un site déjà structurant (720 000 t/an autorisées)",
      desc: "Exploitation historique de l'ISDD EMTA (200 000 t/an en moyenne, 250 000 t/an max de déchets dangereux), avec fin d'activité fixée à 2040. Jusqu'ici, la stabilisation se faisait à Limay."
    },
    {
      date: "20 nov. 2025 – 19 fév. 2026",
      title: "Consultation publique sur l'agrandissement (+50 000 t/an)",
      desc: "EMTA demande l'unité de stabilisation de 50 000 t/an (passage Seveso seuil haut) et +50 000 t/an en ISDD. Mobilisation citoyenne et naissance de l'association ANGE dès décembre 2025."
    },
    {
      date: "Janvier – Mars 2026",
      title: "Tensions locales et question à l'Assemblée nationale",
      desc: "La mairie dresse un PV pour travaux sans autorisation ; le député B. Lucas-Lundy interpelle le ministère sur les risques eau, santé et le classement Seveso."
    },
    {
      date: "Été – Automne 2026",
      title: "Médiatisation nationale et autorisation préfectorale",
      desc: "Enquête de Reporterre, puis arrêté préfectoral du 10 août 2026 autorisant les 250 000 t/an (300k max) et l'unité de stabilisation, suivi d'un bras de fer juridique local."
    }
  ],

  // 5. Glossaire technique
  glossary: [
    { term: "NIMBY", def: "« Not In My BackYard » (Pas dans mon jardin). Terme souvent utilisé pour qualifier un refus riverain d'équipement collectif ; contesté à Guitrancourt au nom du cumul déjà subi." },
    { term: "NIABY", def: "« Not In Anyone's BackYard ». Refus fondé non sur l'égoïsme local, mais sur la critique environnementale globale de la filière." },
    { term: "Stabilisation (50 000 t/an)", def: "Mélange des déchets dangereux (REFIOM, cendres) avec des réactifs et liants pour bloquer la migration des polluants avant enfouissement." },
    { term: "Seveso seuil haut", def: "Classement européen des sites présentant les risques d'accidents industriels majeurs les plus élevés (atteint ici par règle de cumul avec la nouvelle unité)." },
    { term: "ISDD / ISDI", def: "Installation de Stockage de Déchets Dangereux (EMTA) vs Déchets Inertes (projet carrière Heidelberg Materials)." },
    { term: "REFIOM", def: "Résidus d'Épuration des Fumées d'Incinération des Ordures Ménagères : déchets ultimes dangereux nécessitant une stabilisation." }
  ]
};