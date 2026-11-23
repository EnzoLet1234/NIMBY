// =========================================================================
// FICHIER DE DONNÉES CENTRALISÉ
// Pour modifier ou enrichir le contenu du site, éditez uniquement ce fichier.
// =========================================================================

const SITE_DATA = {
  // 1. Points de la carte interactive (Leaflet)
  mapPoints: [
    {
      layer: "communes",
      name: "Bourg de Guitrancourt",
      coords: [49.0095, 1.7765],
      description: "Commune rurale d'environ 646 habitants au cœur de la controverse."
    },
    {
      layer: "sites",
      name: "Site EMTA (Veolia) — Les Croix Blanches",
      coords: [48.9990, 1.7730],
      description: "ISDD : projet d'augmentation de tonnage et unité de stabilisation provisoire."
    },
    {
      layer: "sites",
      name: "Carrière / Site Heidelberg Materials",
      coords: [49.0025, 1.7660],
      description: "Ancienne carrière calcaire : projet de remblaiement par déchets inertes (ISDI)."
    },
    {
      layer: "sites",
      name: "Site de Limay (Zone portuaire)",
      coords: [48.9830, 1.7350],
      description: "Site voisin arrivé à saturation, justifiant le report vers Guitrancourt."
    },
    {
      layer: "communes",
      name: "Issou (commune limitrophe)",
      coords: [48.9890, 1.7920],
      description: "Commune voisine concernée par les flux routiers et la proximité des sites."
    },
    {
      layer: "sensible",
      name: "Secteur patrimonial & nappes (à préciser)",
      coords: [49.0060, 1.7840],
      description: "Zone sensible : enjeux liés à l'eau et au menhir néolithique (avis ABF)."
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