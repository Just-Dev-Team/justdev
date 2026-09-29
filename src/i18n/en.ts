import type { Dict } from './pl';

export const en: Dict = {
  meta: {
    homeTitle: 'JustDev — backend engineering and cloud infrastructure',
    homeDescription:
      'JustDev, Kielce, Poland: we design, build and run highly scalable backends in Java, Kotlin and Python, plus the cloud infrastructure behind them.',
    blogTitle: 'Blog — JustDev',
    blogDescription: 'The JustDev blog: company news and articles on backend engineering in Java, Kotlin and Python, cloud infrastructure and security.',
    ogLocale: 'en_US',
    ogImageAlt: 'JustDev — backend engineering and cloud infrastructure for high-traffic systems',
  },
  a11y: {
    skip: 'Skip to content',
    mainNav: 'Main navigation',
    menu: 'Menu',
    langSwitch: 'Language',
    home: 'JustDev — home',
  },
  nav: [
    { id: 'services', label: 'Services' },
    { id: 'technology', label: 'Technology' },
    { id: 'process', label: 'How we work' },
    { id: 'experience', label: 'Experience' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ],
  blogNav: 'Blog',
  hero: {
    eyebrow: 'Software engineering · Kielce, Poland · since 2020',
    title: 'Backend systems and cloud infrastructure built to handle serious traffic.',
    lead: 'We design, build and run highly scalable applications in Java, Kotlin and Python — together with the cloud infrastructure they run on. Based in Poland, working with clients across Europe.',
    ctaPrimary: 'Tell us about your project',
    ctaSecondary: 'See our services',
    diagramCaption: 'fig. 01 — reference architecture of a high-traffic system',
    facts: [
      { k: 'In business', v: 'since 2020' },
      { k: 'Stack', v: 'Java · Kotlin · Python' },
      { k: 'Languages', v: 'English, Polish' },
    ],
  },
  services: {
    index: '01',
    kicker: 'Services',
    title: 'From architecture to running in production',
    intro:
      'We cover the whole lifecycle of a backend system: design, code, infrastructure, deployment and ongoing development. We can own the entire area or work as part of your team.',
    items: [
      {
        tag: 'backend',
        title: 'Scalable backend development',
        body: 'Services and APIs in Java, Kotlin and Python, designed for high traffic, high availability and long-term development. We choose the architecture to fit your scale and your team — not the latest trend.',
        points: [
          'service, API and integration design',
          'asynchronous processing and distributed systems',
          'performance work and scaling for growth',
          'evolving and modernising existing systems',
        ],
      },
      {
        tag: 'cloud',
        title: 'Cloud infrastructure',
        body: 'We design and build the environments these systems run on, and look after them once they are live. Infrastructure defined as code — repeatable and predictable.',
        points: [
          'cloud environment architecture',
          'infrastructure as code and automation',
          'CI/CD pipelines and safe deployments',
          'monitoring, alerting and operations',
        ],
      },
      {
        tag: 'frontend',
        title: 'Frontend and supporting tools',
        body: 'Web interfaces, admin panels and internal tools that complete the backend and make your teams’ day-to-day work faster.',
        points: [
          'web applications and dashboards',
          'developer tooling',
          'automation of repetitive processes',
        ],
      },
      {
        tag: 'advisory',
        title: 'IT consulting and security',
        body: 'We help you make technical decisions and reduce risk: architecture and code reviews, scaling plans, and security for applications and infrastructure.',
        points: [
          'architecture and code reviews',
          'technology choices and system roadmaps',
          'application and cloud security',
        ],
      },
    ],
  },
  technology: {
    index: '02',
    kicker: 'Technology',
    title: 'The stack we work with every day',
    intro:
      'The core is the JVM and Python. Around it we build everything a production system needs, from APIs and infrastructure to observability.',
    // TODO(Artur): keep in sync with the Polish list in pl.ts.
    layers: [
      { label: 'Languages', items: ['Java', 'Kotlin', 'Python'] },
      { label: 'Backend', items: ['REST APIs and integrations', 'distributed systems', 'asynchronous processing'] },
      { label: 'Cloud & DevOps', items: ['infrastructure as code', 'CI/CD', 'monitoring and alerting'] },
      { label: 'Frontend', items: ['web applications', 'admin panels', 'internal tools'] },
      { label: 'Security', items: ['code and configuration reviews', 'access management', 'secure deployments'] },
    ],
  },
  process: {
    index: '03',
    kicker: 'How we work',
    title: 'Predictable, in short iterations',
    intro: 'Every project follows four steps. At each stage you know what is being built and why.',
    steps: [
      {
        title: 'Discovery',
        body: 'We learn your business goal, the current system and its constraints: traffic, budget, deadlines and security requirements.',
      },
      {
        title: 'Architecture and plan',
        body: 'We propose a solution and split it into stages. Technical decisions are written down so that people outside IT can follow them too.',
      },
      {
        title: 'Iterative delivery',
        body: 'We work in short iterations with regular demos, code review and automated tests.',
      },
      {
        title: 'Deployment and operations',
        body: 'We deploy automatically, monitor the system in production and hand over documentation. We are happy to stay on for further development.',
      },
    ],
  },
  experience: {
    index: '04',
    kicker: 'Experience',
    title: 'Systems that cannot afford to go down',
    sectors: [
      {
        tag: 'e-commerce',
        title: 'Large-scale e-commerce',
        body: 'We work on systems for some of Europe’s largest e-commerce platforms, as a subcontractor to the software companies that serve them. Our work is done in international, English-speaking teams, on solutions that handle very high traffic and must stay highly available.',
      },
      {
        tag: 'public sector',
        title: 'Public sector',
        body: 'We deliver projects for public authorities and institutions in Poland — systems that help digitise services for citizens, where reliability, security and compliance matter.',
      },
    ],
    ndaTitle: 'Confidentiality',
    ndaBody:
      'Our projects are covered by non-disclosure agreements, so we do not publish client names or logos. We are glad to go into detail in a direct conversation, as far as those agreements allow.',
    direct:
      'We are open to working with clients directly — including technology companies and startups that need to scale their product quickly and safely.',
  },
  about: {
    index: '05',
    kicker: 'About',
    title: 'A small company building large systems',
    paragraphs: [
      'JustDev Artur Węgrzyn is a software company based in Kielce, Poland, operating since 2020. It is run by Artur Węgrzyn, a backend and cloud infrastructure engineer.',
      'We work remotely with clients in Poland and abroad, in English and Polish. You talk directly to the person who designs and writes the code, which shortens the path from problem to solution.',
      'Artur is a co-organiser of the Kielce Java User Group (KJUG), a community that helps developers in the Świętokrzyskie region grow their skills.',
    ],
    facts: [
      { k: 'Legal form', v: 'sole proprietorship registered in Poland (CEIDG)' },
      { k: 'Location', v: 'Kielce, Poland' },
      { k: 'Founded', v: '2020' },
      { k: 'Working languages', v: 'English, Polish' },
      { k: 'Community', v: 'Kielce Java User Group', href: 'kjug' },
    ],
  },
  news: {
    index: '06',
    kicker: 'News',
    title: 'From the blog',
    all: 'All posts',
    read: 'Read post',
  },
  faq: {
    index: '07',
    kicker: 'FAQ',
    title: 'Frequently asked questions',
    items: [
      {
        q: 'What does JustDev do?',
        a: 'We design, build and run highly scalable backends in Java, Kotlin and Python, together with the cloud infrastructure they run on. We also build frontends and supporting tools, and provide IT consulting and security services.',
      },
      {
        q: 'Where are you based, and do you work with international clients?',
        a: 'The company is based in Kielce, Poland, and has been operating since 2020. We work remotely with clients in Poland and abroad, in English and Polish. On projects for European e-commerce platforms we work in international teams.',
      },
      {
        q: 'Which industries do you have experience in?',
        a: 'Mainly large-scale e-commerce — as a subcontractor to software companies, we work on systems for some of Europe’s largest e-commerce platforms — and the public sector, on projects for authorities and institutions in Poland.',
      },
      {
        q: 'Why don’t you publish client names?',
        a: 'Our projects are covered by non-disclosure agreements. We are glad to discuss our experience in a direct conversation, as far as those agreements allow.',
      },
      {
        q: 'Can you join an existing team?',
        a: 'Yes. We can own the whole backend and infrastructure area, or join your team and work within your processes.',
      },
      {
        q: 'How do we start working together?',
        a: 'Email arturwegrzyn96@gmail.com or call +48 601 698 230. Tell us briefly about the system, the scale and the timeline, and we will get back to you to set up a call.',
      },
    ],
  },
  contact: {
    index: '08',
    kicker: 'Contact',
    title: 'Let’s talk about your project',
    intro:
      'Send us a few lines about what you need — the system, the scale, the timeline. We will get back to you to set up a call.',
    email: 'Email',
    phone: 'Phone',
    address: 'Address',
    company: 'Company details',
    profiles: 'Profiles',
  },
  footer: {
    rights: 'All rights reserved.',
    privacy: 'This website uses no cookies or analytics and collects no personal data.',
    updated: 'Content updated',
    country: 'Poland',
  },
  blog: {
    title: 'Blog',
    intro: 'Company news and articles on backend engineering, cloud and security.',
    back: 'All posts',
    published: 'Published',
    author: 'Author',
    home: 'Home',
    ctaTitle: 'Have a project we could help with?',
    ctaBody: 'Get in touch — we will reply and set up a call.',
  },
  dateLocale: 'en-GB',
};
