// Company data shown in the footer, contact section and structured data.
// Single source of truth — update here, not in templates.
export const company = {
  name: 'JustDev Artur Węgrzyn',
  brand: 'JustDev',
  owner: 'Artur Węgrzyn',
  nip: '9592036515',
  regon: '387205469',
  street: 'ul. Stefana Okrzei 41b/16',
  postalCode: '25-526',
  city: 'Kielce',
  region: 'świętokrzyskie',
  countryCode: 'PL',
  email: 'arturwegrzyn96@gmail.com',
  phoneDisplay: '+48 601 698 230',
  phoneHref: '+48601698230',
  foundingYear: 2020,
  linkedin: 'https://www.linkedin.com/in/artur-wegrzyn/',
  github: 'https://github.com/Stiuil06',
  kjug: 'https://kjug.justdev.pl/',
} as const;

// Shown in the footer as "content updated". Bump when you change the site's content.
export const contentUpdated = '2026-09-29';
