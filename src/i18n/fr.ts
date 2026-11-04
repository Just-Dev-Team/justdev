import type { Dict } from './pl';

export const fr: Dict = {
  meta: {
    homeTitle: 'JustDev — ingénierie backend et infrastructure cloud',
    homeDescription:
      'JustDev, Kielce (Pologne) : nous concevons, développons et exploitons des backends hautement scalables en Java, Kotlin et Python, ainsi que l’infrastructure cloud qui les fait tourner. E-commerce et secteur public.',
    blogTitle: 'Blog — JustDev',
    blogDescription:
      'Le blog JustDev : actualités de l’entreprise et articles sur le développement backend en Java, Kotlin et Python, l’infrastructure cloud et la sécurité.',
    ogLocale: 'fr_FR',
    ogImageAlt: 'JustDev — ingénierie backend et infrastructure cloud pour les systèmes à fort trafic',
  },
  a11y: {
    skip: 'Aller au contenu',
    mainNav: 'Navigation principale',
    menu: 'Menu',
    langSwitch: 'Langue',
    home: 'JustDev — accueil',
  },
  nav: [
    { id: 'services', label: 'Services' },
    { id: 'technology', label: 'Technologies' },
    { id: 'process', label: 'Méthode' },
    { id: 'experience', label: 'Expérience' },
    { id: 'about', label: 'À propos' },
    { id: 'contact', label: 'Contact' },
  ],
  blogNav: 'Blog',
  hero: {
    eyebrow: 'Ingénierie logicielle · Kielce, Pologne · depuis 2020',
    title: 'Des backends et une infrastructure cloud conçus pour encaisser un fort trafic.',
    lead: 'Nous concevons, développons et exploitons des applications hautement scalables en Java, Kotlin et Python — avec l’infrastructure cloud sur laquelle elles tournent. Basés en Pologne, nous travaillons avec des clients dans toute l’Europe.',
    ctaPrimary: 'Parlez-nous de votre projet',
    ctaSecondary: 'Voir nos services',
    diagramCaption: 'fig. 01 — architecture de référence d’un système à fort trafic',
    facts: [
      { k: 'Sur le marché', v: 'depuis 2020' },
      { k: 'Stack', v: 'Java · Kotlin · Python' },
      { k: 'Langues', v: 'anglais, polonais' },
    ],
  },
  services: {
    index: '01',
    kicker: 'Services',
    title: 'De l’architecture à l’exploitation en production',
    intro:
      'Nous couvrons tout le cycle de vie d’un système backend : conception, code, infrastructure, déploiement et évolution. Nous pouvons prendre en charge l’ensemble du périmètre ou rejoindre votre équipe.',
    items: [
      {
        tag: 'backend',
        title: 'Backends d’applications hautement scalables',
        body: 'Services et API en Java, Kotlin et Python, conçus pour un fort trafic, une haute disponibilité et une évolution sur le long terme. Nous choisissons l’architecture en fonction de votre échelle et de votre équipe — pas de la dernière tendance.',
        points: [
          'conception de services, d’API et d’intégrations',
          'traitement asynchrone et systèmes distribués',
          'performance et montée en charge face à un trafic croissant',
          'évolution et modernisation de systèmes existants',
        ],
      },
      {
        tag: 'cloud',
        title: 'Infrastructure cloud',
        body: 'Nous concevons et construisons les environnements sur lesquels tournent ces systèmes — et nous en prenons soin après la mise en production. Une infrastructure décrite en code, reproductible et prévisible.',
        points: [
          'architecture d’environnements cloud',
          'infrastructure as code et automatisation',
          'pipelines CI/CD et déploiements sécurisés',
          'supervision, alertes et exploitation',
        ],
      },
      {
        tag: 'frontend',
        title: 'Frontend et outils d’appui',
        body: 'Interfaces web, panneaux d’administration et outils internes qui complètent le backend et accélèrent le travail quotidien de vos équipes.',
        points: [
          'applications et tableaux de bord web',
          'outillage pour les équipes de développement',
          'automatisation des processus répétitifs',
        ],
      },
      {
        tag: 'advisory',
        title: 'Conseil IT et sécurité',
        body: 'Nous vous aidons à prendre les bonnes décisions techniques et à réduire les risques : revues d’architecture et de code, plan de montée en charge, sécurité des applications et de l’infrastructure.',
        points: [
          'revues d’architecture et de code',
          'choix technologiques et feuille de route du système',
          'sécurité des applications et du cloud',
        ],
      },
    ],
  },
  technology: {
    index: '02',
    kicker: 'Technologies',
    title: 'Le stack avec lequel nous travaillons au quotidien',
    intro:
      'Le cœur, c’est la JVM et Python. Autour, nous construisons tout ce dont un système en production a besoin : des API à l’observabilité, en passant par l’infrastructure.',
    // TODO(Artur): keep in sync with the Polish list in pl.ts.
    layers: [
      { label: 'Langages', items: ['Java', 'Kotlin', 'Python'] },
      { label: 'Backend', items: ['API REST et intégrations', 'systèmes distribués', 'traitement asynchrone'] },
      { label: 'Cloud & DevOps', items: ['infrastructure as code', 'CI/CD', 'supervision et alertes'] },
      { label: 'Frontend', items: ['applications web', 'panneaux d’administration', 'outils internes'] },
      { label: 'Sécurité', items: ['revues de code et de configuration', 'gestion des accès', 'déploiements sécurisés'] },
    ],
  },
  process: {
    index: '03',
    kicker: 'Méthode',
    title: 'Prévisible, en cycles courts',
    intro: 'Chaque projet suit quatre étapes. À chacune d’elles, vous savez ce qui est construit et pourquoi.',
    steps: [
      {
        title: 'Cadrage',
        body: 'Nous découvrons l’objectif métier, le système existant et les contraintes : trafic, budget, délais, exigences de sécurité.',
      },
      {
        title: 'Architecture et plan',
        body: 'Nous proposons une solution et un découpage en étapes. Les décisions techniques sont documentées pour être compréhensibles aussi en dehors de l’équipe IT.',
      },
      {
        title: 'Livraison itérative',
        body: 'Nous travaillons en cycles courts, avec des démonstrations régulières, des revues de code et des tests automatisés.',
      },
      {
        title: 'Déploiement et exploitation',
        body: 'Nous déployons automatiquement, supervisons le système en production et remettons la documentation. Nous pouvons rester à vos côtés pour la suite.',
      },
    ],
  },
  experience: {
    index: '04',
    kicker: 'Expérience',
    title: 'Des systèmes qui ne peuvent pas s’arrêter',
    sectors: [
      {
        tag: 'e-commerce',
        title: 'E-commerce à grande échelle',
        body: 'Nous développons des systèmes pour certaines des plus grandes plateformes e-commerce d’Europe, en tant que sous-traitant des sociétés de services qui les accompagnent. Nous travaillons dans des équipes internationales, en anglais, sur des solutions à très fort trafic et à haute disponibilité.',
      },
      {
        tag: 'public sector',
        title: 'Secteur public',
        body: 'Nous réalisons des projets pour des administrations et des institutions publiques en Pologne — des systèmes qui soutiennent la numérisation des services aux citoyens, où fiabilité, sécurité et conformité sont essentielles.',
      },
    ],
    ndaTitle: 'Confidentialité',
    ndaBody:
      'Nos projets sont couverts par des accords de confidentialité ; nous ne publions donc ni noms ni logos de clients. Nous pouvons en discuter en détail lors d’un échange direct, dans les limites permises par ces accords.',
    direct:
      'Nous sommes ouverts à une collaboration directe — y compris avec des entreprises technologiques et des start-ups qui doivent faire monter en charge leur produit rapidement et en toute sécurité.',
  },
  about: {
    index: '05',
    kicker: 'À propos',
    title: 'Une petite entreprise, de grands systèmes',
    paragraphs: [
      'JustDev Artur Węgrzyn est une entreprise de développement logiciel basée à Kielce, en Pologne, active depuis 2020. Elle est dirigée par Artur Węgrzyn, ingénieur backend et infrastructure cloud.',
      'Nous travaillons à distance avec des clients en Pologne et à l’étranger, en anglais et en polonais. Vous parlez directement avec la personne qui conçoit et écrit le code, ce qui raccourcit le chemin du problème à la solution.',
      'Artur co-organise le Kielce Java User Group (KJUG), une communauté qui développe les compétences des développeurs de la région de Świętokrzyskie.',
    ],
    facts: [
      { k: 'Forme juridique', v: 'entreprise individuelle enregistrée en Pologne (CEIDG)' },
      { k: 'Siège', v: 'Kielce, Pologne' },
      { k: 'Création', v: '2020' },
      { k: 'Langues de travail', v: 'anglais, polonais' },
      { k: 'Communauté', v: 'Kielce Java User Group', href: 'kjug' },
    ],
  },
  news: {
    index: '06',
    kicker: 'Actualités',
    title: 'Sur le blog',
    all: 'Tous les articles',
    read: 'Lire l’article',
  },
  faq: {
    index: '07',
    kicker: 'FAQ',
    title: 'Questions fréquentes',
    items: [
      {
        q: 'Que fait JustDev ?',
        a: 'Nous concevons, développons et exploitons des backends hautement scalables en Java, Kotlin et Python, ainsi que l’infrastructure cloud sur laquelle ils tournent. En complément, nous réalisons des frontends et des outils d’appui, et proposons du conseil IT et des services de sécurité.',
      },
      {
        q: 'Où est basée l’entreprise, et travaillez-vous avec des clients étrangers ?',
        a: 'L’entreprise est basée à Kielce, en Pologne, et est active depuis 2020. Nous travaillons à distance avec des clients en Pologne et à l’étranger, en anglais et en polonais. Sur les projets pour des plateformes e-commerce européennes, nous travaillons dans des équipes internationales.',
      },
      {
        q: 'Dans quels secteurs avez-vous de l’expérience ?',
        a: 'Principalement dans l’e-commerce à grande échelle — en tant que sous-traitant de sociétés de services, nous développons des systèmes pour certaines des plus grandes plateformes e-commerce d’Europe — et dans le secteur public, sur des projets pour des administrations et institutions en Pologne.',
      },
      {
        q: 'Pourquoi ne publiez-vous pas les noms de vos clients ?',
        a: 'Nos projets sont couverts par des accords de confidentialité (NDA). Nous pouvons détailler notre expérience lors d’un échange direct, dans les limites permises par ces accords.',
      },
      {
        q: 'Pouvez-vous rejoindre une équipe existante ?',
        a: 'Oui. Nous pouvons prendre en charge tout le périmètre backend et infrastructure, ou rejoindre votre équipe et travailler selon vos processus.',
      },
      {
        q: 'Comment démarrer une collaboration ?',
        a: 'Écrivez à arturwegrzyn96@gmail.com ou appelez le +48 601 698 230. Décrivez brièvement le système, l’échelle et le calendrier — nous reviendrons vers vous pour convenir d’un échange.',
      },
    ],
  },
  contact: {
    index: '08',
    kicker: 'Contact',
    title: 'Parlons de votre projet',
    intro:
      'Écrivez-nous quelques lignes sur ce dont vous avez besoin — le système, l’échelle, le calendrier. Nous reviendrons vers vous pour convenir d’un échange.',
    email: 'E-mail',
    phone: 'Téléphone',
    address: 'Adresse',
    company: 'Informations légales',
    vat: 'N° TVA UE',
    profiles: 'Profils',
  },
  footer: {
    rights: 'Tous droits réservés.',
    privacy: 'Ce site n’utilise ni cookies ni outils d’analyse et ne collecte aucune donnée personnelle.',
    updated: 'Mise à jour du contenu',
    country: 'Pologne',
  },
  blog: {
    title: 'Blog',
    intro: 'Actualités de l’entreprise et articles sur le backend, le cloud et la sécurité.',
    back: 'Tous les articles',
    published: 'Publication',
    author: 'Auteur',
    home: 'Accueil',
    ctaTitle: 'Un projet sur lequel nous pourrions vous aider ?',
    ctaBody: 'Écrivez-nous — nous vous répondrons et conviendrons d’un échange.',
  },
  dateLocale: 'fr-FR',
};
