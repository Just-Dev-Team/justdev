export const pl = {
  meta: {
    homeTitle: 'JustDev — backend i chmura dla systemów wysoko skalowalnych',
    homeDescription:
      'JustDev Artur Węgrzyn, Kielce. Projektujemy, budujemy i utrzymujemy wysoko skalowalne backendy (Java, Kotlin, Python) oraz infrastrukturę chmurową. E-commerce na dużą skalę i sektor publiczny.',
    blogTitle: 'Blog — JustDev',
    blogDescription: 'Aktualności i wpisy firmy JustDev: backend, chmura, bezpieczeństwo.',
    ogLocale: 'pl_PL',
  },
  a11y: {
    skip: 'Przejdź do treści',
    mainNav: 'Nawigacja główna',
    menu: 'Menu',
    langSwitch: 'Wybór języka',
    home: 'JustDev — strona główna',
  },
  nav: [
    { id: 'services', label: 'Usługi' },
    { id: 'technology', label: 'Technologie' },
    { id: 'process', label: 'Jak pracujemy' },
    { id: 'experience', label: 'Doświadczenie' },
    { id: 'about', label: 'O firmie' },
    { id: 'contact', label: 'Kontakt' },
  ],
  blogNav: 'Blog',
  hero: {
    eyebrow: 'Usługi programistyczne · Kielce · od 2020',
    title: 'Backendy i infrastruktura chmurowa dla systemów, które muszą wytrzymać duży ruch.',
    lead: 'Projektujemy, budujemy i utrzymujemy wysoko skalowalne aplikacje w Javie, Kotlinie i Pythonie — razem z chmurą, na której działają. Pracujemy z Kielc dla klientów z Polski i całej Europy.',
    ctaPrimary: 'Porozmawiajmy o projekcie',
    ctaSecondary: 'Zobacz usługi',
    diagramCaption: 'rys. 01 — typowa architektura systemu wysoko skalowalnego',
    facts: [
      { k: 'Na rynku', v: 'od 2020 r.' },
      { k: 'Stack', v: 'Java · Kotlin · Python' },
      { k: 'Języki', v: 'polski, angielski' },
    ],
  },
  services: {
    index: '01',
    kicker: 'Usługi',
    title: 'Od architektury po utrzymanie na produkcji',
    intro:
      'Zajmujemy się całą ścieżką systemu backendowego: od projektu, przez kod i infrastrukturę, po wdrożenie i dalszy rozwój. Możemy przejąć cały obszar albo dołączyć do Twojego zespołu.',
    items: [
      {
        tag: 'backend',
        title: 'Backendy aplikacji wysoko skalowalnych',
        body: 'Serwisy i API w Javie, Kotlinie i Pythonie, projektowane pod duży ruch, wysoką dostępność i dalszy rozwój. Architekturę dobieramy do skali i zespołu, a nie do mody.',
        points: [
          'projektowanie usług, API i integracji',
          'przetwarzanie asynchroniczne i systemy rozproszone',
          'wydajność i skalowanie pod rosnący ruch',
          'rozwój i modernizacja istniejących systemów',
        ],
      },
      {
        tag: 'cloud',
        title: 'Infrastruktura chmurowa',
        body: 'Projektujemy i budujemy środowiska, na których działają takie systemy — i dbamy o nie po uruchomieniu. Infrastruktura opisana w kodzie, powtarzalna i przewidywalna.',
        points: [
          'architektura środowisk chmurowych',
          'infrastruktura jako kod i automatyzacja',
          'potoki CI/CD i bezpieczne wdrożenia',
          'monitoring, alerty i utrzymanie',
        ],
      },
      {
        tag: 'frontend',
        title: 'Frontend i narzędzia wspierające',
        body: 'Interfejsy webowe, panele administracyjne i narzędzia wewnętrzne, które domykają backend i przyspieszają codzienną pracę zespołów.',
        points: [
          'aplikacje i panele webowe',
          'narzędzia dla zespołów deweloperskich',
          'automatyzacja powtarzalnych procesów',
        ],
      },
      {
        tag: 'advisory',
        title: 'Doradztwo IT i bezpieczeństwo',
        body: 'Pomagamy podejmować decyzje techniczne i ograniczać ryzyko: przeglądy architektury i kodu, plan skalowania, bezpieczeństwo aplikacji i infrastruktury.',
        points: [
          'przeglądy architektury i kodu',
          'wybór technologii i plan rozwoju systemu',
          'bezpieczeństwo aplikacji i chmury',
        ],
      },
    ],
  },
  technology: {
    index: '02',
    kicker: 'Technologie',
    title: 'Stack, w którym pracujemy na co dzień',
    intro:
      'Trzon to JVM i Python. Wokół nich budujemy wszystko, czego potrzebuje system produkcyjny: od API, przez infrastrukturę, po obserwowalność.',
    // TODO(Artur): replace/extend the descriptive items below with concrete tools
    // (frameworks, cloud providers, databases, IaC, CI/CD) that you actually use.
    layers: [
      { label: 'Języki', items: ['Java', 'Kotlin', 'Python'] },
      { label: 'Backend', items: ['REST API i integracje', 'systemy rozproszone', 'przetwarzanie asynchroniczne'] },
      { label: 'Chmura i DevOps', items: ['infrastruktura jako kod', 'CI/CD', 'monitoring i alerty'] },
      { label: 'Frontend', items: ['aplikacje webowe', 'panele administracyjne', 'narzędzia wewnętrzne'] },
      { label: 'Bezpieczeństwo', items: ['przeglądy kodu i konfiguracji', 'zarządzanie dostępem', 'bezpieczne wdrożenia'] },
    ],
  },
  process: {
    index: '03',
    kicker: 'Jak pracujemy',
    title: 'Przewidywalnie, w krótkich cyklach',
    intro: 'Każdy projekt prowadzimy w czterech krokach. Na każdym etapie wiesz, co powstaje i dlaczego.',
    steps: [
      {
        title: 'Rozpoznanie',
        body: 'Poznajemy cel biznesowy, obecny system i ograniczenia: ruch, budżet, terminy, wymagania bezpieczeństwa.',
      },
      {
        title: 'Architektura i plan',
        body: 'Proponujemy rozwiązanie i podział na etapy. Decyzje techniczne opisujemy tak, żeby były zrozumiałe także poza zespołem IT.',
      },
      {
        title: 'Iteracyjne dostarczanie',
        body: 'Pracujemy w krótkich cyklach, z regularnymi prezentacjami postępów, przeglądem kodu i testami automatycznymi.',
      },
      {
        title: 'Wdrożenie i utrzymanie',
        body: 'Wdrażamy automatycznie, monitorujemy system na produkcji i przekazujemy dokumentację. Możemy zostać przy dalszym rozwoju.',
      },
    ],
  },
  experience: {
    index: '04',
    kicker: 'Doświadczenie',
    title: 'Systemy, które nie mogą przestać działać',
    sectors: [
      {
        tag: 'e-commerce',
        title: 'E-commerce na dużą skalę',
        body: 'Rozwijamy systemy dla największych platform e-commerce w Europie, jako podwykonawca software house’ów, które je obsługują. Pracujemy w międzynarodowych zespołach, po angielsku, przy rozwiązaniach obsługujących bardzo duży ruch i wymagających wysokiej dostępności.',
      },
      {
        tag: 'public sector',
        title: 'Sektor publiczny',
        body: 'Realizujemy projekty dla urzędów i instytucji publicznych w Polsce — systemy wspierające cyfryzację usług dla mieszkańców, gdzie liczą się niezawodność, bezpieczeństwo i zgodność z wymaganiami.',
      },
    ],
    ndaTitle: 'Poufność',
    ndaBody:
      'Nasze projekty są objęte umowami o zachowaniu poufności, dlatego nie publikujemy nazw ani logo klientów. Szczegóły możemy omówić w bezpośredniej rozmowie, w zakresie, na jaki pozwalają umowy.',
    direct:
      'Jesteśmy otwarci na bezpośrednią współpracę — także z firmami technologicznymi i startupami, które muszą szybko i bezpiecznie skalować swój produkt.',
  },
  about: {
    index: '05',
    kicker: 'O firmie',
    title: 'Mała firma, duże systemy',
    paragraphs: [
      'JustDev Artur Węgrzyn to firma programistyczna z Kielc, działająca od 2020 roku. Firmę prowadzi Artur Węgrzyn — programista backendu i infrastruktury chmurowej.',
      'Pracujemy zdalnie z klientami z Polski i z zagranicy, po polsku i po angielsku. Bezpośredni kontakt z osobą, która projektuje i pisze kod, skraca drogę od problemu do rozwiązania.',
      'Artur współtworzy Kielce Java User Group (KJUG) — społeczność, która rozwija kompetencje programistów w regionie świętokrzyskim.',
    ],
    facts: [
      { k: 'Forma prawna', v: 'jednoosobowa działalność gospodarcza (CEIDG)' },
      { k: 'Siedziba', v: 'Kielce, woj. świętokrzyskie' },
      { k: 'Na rynku od', v: '2020' },
      { k: 'Języki współpracy', v: 'polski, angielski' },
      { k: 'Społeczność', v: 'Kielce Java User Group' },
    ],
  },
  news: {
    index: '06',
    kicker: 'Aktualności',
    title: 'Z bloga',
    all: 'Wszystkie wpisy',
    read: 'Czytaj wpis',
  },
  contact: {
    index: '07',
    kicker: 'Kontakt',
    title: 'Porozmawiajmy o Twoim projekcie',
    intro:
      'Napisz kilka zdań o tym, czego potrzebujesz — systemie, skali, terminie. Odezwiemy się, żeby umówić rozmowę.',
    email: 'E-mail',
    phone: 'Telefon',
    address: 'Adres',
    company: 'Dane firmy',
  },
  footer: {
    rights: 'Wszelkie prawa zastrzeżone.',
    privacy: 'Ta strona nie używa ciasteczek ani narzędzi analitycznych i nie zbiera danych osobowych.',
    updated: 'Aktualizacja treści',
    country: 'Polska',
  },
  blog: {
    title: 'Blog',
    intro: 'Aktualności firmy oraz wpisy o backendzie, chmurze i bezpieczeństwie.',
    back: 'Wszystkie wpisy',
    published: 'Opublikowano',
    ctaTitle: 'Masz projekt, w którym możemy pomóc?',
    ctaBody: 'Napisz do nas — odpowiemy i umówimy rozmowę.',
  },
  dateLocale: 'pl-PL',
};

export type Dict = typeof pl;
