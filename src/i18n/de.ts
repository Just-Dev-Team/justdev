import type { Dict } from './pl';

export const de: Dict = {
  meta: {
    homeTitle: 'JustDev — Backend-Entwicklung und Cloud-Infrastruktur',
    homeDescription:
      'JustDev aus Kielce, Polen: Wir entwerfen, bauen und betreiben hochskalierbare Backends in Java, Kotlin und Python sowie die Cloud-Infrastruktur dahinter. E-Commerce und öffentlicher Sektor.',
    blogTitle: 'Blog — JustDev',
    blogDescription:
      'Der JustDev-Blog: Neuigkeiten aus dem Unternehmen und Beiträge zu Backend-Entwicklung in Java, Kotlin und Python, Cloud-Infrastruktur und Sicherheit.',
    ogLocale: 'de_DE',
    ogImageAlt: 'JustDev — Backend und Cloud-Infrastruktur für Systeme mit hohem Traffic',
  },
  a11y: {
    skip: 'Zum Inhalt springen',
    mainNav: 'Hauptnavigation',
    menu: 'Menü',
    langSwitch: 'Sprache',
    home: 'JustDev — Startseite',
  },
  nav: [
    { id: 'services', label: 'Leistungen' },
    { id: 'technology', label: 'Technologien' },
    { id: 'process', label: 'Arbeitsweise' },
    { id: 'experience', label: 'Erfahrung' },
    { id: 'about', label: 'Über uns' },
    { id: 'contact', label: 'Kontakt' },
  ],
  blogNav: 'Blog',
  hero: {
    eyebrow: 'Softwareentwicklung · Kielce, Polen · seit 2020',
    title: 'Backend-Systeme und Cloud-Infrastruktur, die hohem Traffic standhalten.',
    lead: 'Wir entwerfen, bauen und betreiben hochskalierbare Anwendungen in Java, Kotlin und Python — zusammen mit der Cloud-Infrastruktur, auf der sie laufen. Von Polen aus arbeiten wir für Kunden in ganz Europa.',
    ctaPrimary: 'Erzählen Sie uns von Ihrem Projekt',
    ctaSecondary: 'Unsere Leistungen',
    diagramCaption: 'Abb. 01 — Referenzarchitektur eines Systems mit hohem Traffic',
    facts: [
      { k: 'Am Markt', v: 'seit 2020' },
      { k: 'Stack', v: 'Java · Kotlin · Python' },
      { k: 'Sprachen', v: 'Englisch, Polnisch' },
    ],
  },
  services: {
    index: '01',
    kicker: 'Leistungen',
    title: 'Von der Architektur bis zum Betrieb in Produktion',
    intro:
      'Wir decken den gesamten Lebenszyklus eines Backend-Systems ab: Entwurf, Code, Infrastruktur, Deployment und Weiterentwicklung. Wir können den gesamten Bereich übernehmen oder Teil Ihres Teams werden.',
    items: [
      {
        tag: 'backend',
        title: 'Backends für hochskalierbare Anwendungen',
        body: 'Services und APIs in Java, Kotlin und Python, ausgelegt auf hohen Traffic, hohe Verfügbarkeit und langfristige Weiterentwicklung. Die Architektur wählen wir passend zu Ihrer Größenordnung und Ihrem Team — nicht nach dem aktuellen Trend.',
        points: [
          'Entwurf von Services, APIs und Integrationen',
          'asynchrone Verarbeitung und verteilte Systeme',
          'Performance und Skalierung für wachsenden Traffic',
          'Weiterentwicklung und Modernisierung bestehender Systeme',
        ],
      },
      {
        tag: 'cloud',
        title: 'Cloud-Infrastruktur',
        body: 'Wir entwerfen und bauen die Umgebungen, auf denen solche Systeme laufen — und kümmern uns nach dem Go-live um sie. Infrastruktur als Code: wiederholbar und vorhersehbar.',
        points: [
          'Architektur von Cloud-Umgebungen',
          'Infrastructure as Code und Automatisierung',
          'CI/CD-Pipelines und sichere Deployments',
          'Monitoring, Alerting und Betrieb',
        ],
      },
      {
        tag: 'frontend',
        title: 'Frontend und unterstützende Werkzeuge',
        body: 'Web-Oberflächen, Admin-Panels und interne Tools, die das Backend vervollständigen und die tägliche Arbeit Ihrer Teams beschleunigen.',
        points: [
          'Webanwendungen und Dashboards',
          'Werkzeuge für Entwicklungsteams',
          'Automatisierung wiederkehrender Prozesse',
        ],
      },
      {
        tag: 'advisory',
        title: 'IT-Beratung und Sicherheit',
        body: 'Wir helfen bei technischen Entscheidungen und reduzieren Risiken: Architektur- und Code-Reviews, Skalierungspläne, Sicherheit von Anwendungen und Infrastruktur.',
        points: [
          'Architektur- und Code-Reviews',
          'Technologieauswahl und Roadmap für das System',
          'Sicherheit von Anwendungen und Cloud',
        ],
      },
    ],
  },
  technology: {
    index: '02',
    kicker: 'Technologien',
    title: 'Der Stack, mit dem wir täglich arbeiten',
    intro:
      'Der Kern sind die JVM und Python. Darum herum bauen wir alles, was ein Produktivsystem braucht — von APIs über Infrastruktur bis zur Observability.',
    // TODO(Artur): keep in sync with the Polish list in pl.ts.
    layers: [
      { label: 'Sprachen', items: ['Java', 'Kotlin', 'Python'] },
      { label: 'Backend', items: ['REST-APIs und Integrationen', 'verteilte Systeme', 'asynchrone Verarbeitung'] },
      { label: 'Cloud & DevOps', items: ['Infrastructure as Code', 'CI/CD', 'Monitoring und Alerting'] },
      { label: 'Frontend', items: ['Webanwendungen', 'Admin-Panels', 'interne Tools'] },
      { label: 'Sicherheit', items: ['Code- und Konfigurations-Reviews', 'Zugriffsverwaltung', 'sichere Deployments'] },
    ],
  },
  process: {
    index: '03',
    kicker: 'Arbeitsweise',
    title: 'Planbar, in kurzen Zyklen',
    intro: 'Jedes Projekt läuft in vier Schritten. In jeder Phase wissen Sie, was entsteht und warum.',
    steps: [
      {
        title: 'Analyse',
        body: 'Wir lernen das Geschäftsziel, das bestehende System und die Rahmenbedingungen kennen: Traffic, Budget, Termine, Sicherheitsanforderungen.',
      },
      {
        title: 'Architektur und Plan',
        body: 'Wir schlagen eine Lösung vor und teilen sie in Etappen auf. Technische Entscheidungen dokumentieren wir so, dass sie auch außerhalb der IT verständlich sind.',
      },
      {
        title: 'Iterative Lieferung',
        body: 'Wir arbeiten in kurzen Zyklen mit regelmäßigen Demos, Code-Review und automatisierten Tests.',
      },
      {
        title: 'Deployment und Betrieb',
        body: 'Wir deployen automatisiert, überwachen das System in Produktion und übergeben die Dokumentation. Gerne bleiben wir für die Weiterentwicklung an Bord.',
      },
    ],
  },
  experience: {
    index: '04',
    kicker: 'Erfahrung',
    title: 'Systeme, die nicht ausfallen dürfen',
    sectors: [
      {
        tag: 'e-commerce',
        title: 'E-Commerce im großen Maßstab',
        body: 'Wir entwickeln Systeme für einige der größten E-Commerce-Plattformen Europas — als Subunternehmer der Softwarehäuser, die sie betreuen. Wir arbeiten in internationalen, englischsprachigen Teams an Lösungen mit sehr hohem Traffic und hohen Anforderungen an die Verfügbarkeit.',
      },
      {
        tag: 'public sector',
        title: 'Öffentlicher Sektor',
        body: 'Wir realisieren Projekte für Behörden und öffentliche Einrichtungen in Polen — Systeme, die die Digitalisierung von Bürgerdiensten unterstützen und bei denen Zuverlässigkeit, Sicherheit und Compliance zählen.',
      },
    ],
    ndaTitle: 'Vertraulichkeit',
    ndaBody:
      'Unsere Projekte unterliegen Geheimhaltungsvereinbarungen, deshalb veröffentlichen wir keine Kundennamen oder Logos. Details besprechen wir gerne im direkten Gespräch, soweit die Vereinbarungen es zulassen.',
    direct:
      'Wir sind offen für eine direkte Zusammenarbeit — auch mit Technologieunternehmen und Start-ups, die ihr Produkt schnell und sicher skalieren müssen.',
  },
  about: {
    index: '05',
    kicker: 'Über uns',
    title: 'Kleines Unternehmen, große Systeme',
    paragraphs: [
      'JustDev Artur Węgrzyn ist ein Softwareunternehmen aus Kielce, Polen, das seit 2020 besteht. Geführt wird es von Artur Węgrzyn, Entwickler für Backend und Cloud-Infrastruktur.',
      'Wir arbeiten remote mit Kunden aus Polen und dem Ausland, auf Englisch und Polnisch. Sie sprechen direkt mit der Person, die das System entwirft und den Code schreibt — das verkürzt den Weg vom Problem zur Lösung.',
      'Artur ist Mitorganisator der Kielce Java User Group (KJUG), einer Community, die Entwickler in der Region Świętokrzyskie weiterbildet.',
    ],
    facts: [
      { k: 'Rechtsform', v: 'Einzelunternehmen, registriert in Polen (CEIDG)' },
      { k: 'Sitz', v: 'Kielce, Polen' },
      { k: 'Gegründet', v: '2020' },
      { k: 'Arbeitssprachen', v: 'Englisch, Polnisch' },
      { k: 'Community', v: 'Kielce Java User Group', href: 'kjug' },
    ],
  },
  news: {
    index: '06',
    kicker: 'Aktuelles',
    title: 'Aus dem Blog',
    all: 'Alle Beiträge',
    read: 'Beitrag lesen',
  },
  faq: {
    index: '07',
    kicker: 'FAQ',
    title: 'Häufige Fragen',
    items: [
      {
        q: 'Was macht JustDev?',
        a: 'Wir entwerfen, bauen und betreiben hochskalierbare Backends in Java, Kotlin und Python sowie die Cloud-Infrastruktur, auf der sie laufen. Ergänzend entwickeln wir Frontends und unterstützende Werkzeuge und bieten IT-Beratung und Sicherheitsdienstleistungen an.',
      },
      {
        q: 'Wo sitzt das Unternehmen, und arbeiten Sie mit Kunden aus dem Ausland?',
        a: 'Das Unternehmen sitzt in Kielce, Polen, und ist seit 2020 tätig. Wir arbeiten remote mit Kunden aus Polen und dem Ausland, auf Englisch und Polnisch. Bei Projekten für europäische E-Commerce-Plattformen arbeiten wir in internationalen Teams.',
      },
      {
        q: 'In welchen Branchen haben Sie Erfahrung?',
        a: 'Vor allem im E-Commerce im großen Maßstab — als Subunternehmer von Softwarehäusern entwickeln wir Systeme für einige der größten E-Commerce-Plattformen Europas — sowie im öffentlichen Sektor, in Projekten für Behörden und Einrichtungen in Polen.',
      },
      {
        q: 'Warum veröffentlichen Sie keine Kundennamen?',
        a: 'Unsere Projekte unterliegen Geheimhaltungsvereinbarungen (NDA). Details zu unserer Erfahrung besprechen wir gerne im direkten Gespräch, soweit die Vereinbarungen es zulassen.',
      },
      {
        q: 'Können Sie sich einem bestehenden Team anschließen?',
        a: 'Ja. Wir können den gesamten Bereich Backend und Infrastruktur übernehmen oder Ihrem Team beitreten und in Ihren Prozessen arbeiten.',
      },
      {
        q: 'Wie starten wir die Zusammenarbeit?',
        a: 'Schreiben Sie an arturwegrzyn96@gmail.com oder rufen Sie +48 601 698 230 an. Beschreiben Sie kurz das System, die Größenordnung und den Zeitrahmen — wir melden uns, um ein Gespräch zu vereinbaren.',
      },
    ],
  },
  contact: {
    index: '08',
    kicker: 'Kontakt',
    title: 'Sprechen wir über Ihr Projekt',
    intro:
      'Schreiben Sie uns ein paar Zeilen dazu, was Sie brauchen — System, Größenordnung, Zeitrahmen. Wir melden uns, um ein Gespräch zu vereinbaren.',
    email: 'E-Mail',
    phone: 'Telefon',
    address: 'Adresse',
    company: 'Unternehmensdaten',
    vat: 'USt-IdNr.',
    profiles: 'Profile',
  },
  footer: {
    rights: 'Alle Rechte vorbehalten.',
    privacy: 'Diese Website verwendet keine Cookies oder Analyse-Tools und erhebt keine personenbezogenen Daten.',
    updated: 'Inhalt aktualisiert',
    country: 'Polen',
  },
  blog: {
    title: 'Blog',
    intro: 'Neuigkeiten aus dem Unternehmen und Beiträge zu Backend, Cloud und Sicherheit.',
    back: 'Alle Beiträge',
    published: 'Veröffentlicht',
    author: 'Autor',
    home: 'Startseite',
    ctaTitle: 'Haben Sie ein Projekt, bei dem wir helfen können?',
    ctaBody: 'Schreiben Sie uns — wir antworten und vereinbaren ein Gespräch.',
  },
  colon: ': ',
  dateLocale: 'de-DE',
};
