export const getOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Advanced IT",
  url: "https://advanced-it.top/",
  logo: "https://advanced-it.top/assets/NavBarLogo-CxDsP5fV.webp",
  description:
    "Advanced IT provides professional ZOHO consulting, customization, and implementation services to streamline your business operations. Boost productivity with our end-to-end ZOHO support.",
  email: "work.abdur.rouf@gmail.com",
  telephone: "+8801749569015",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Chapai Nawabganj",
    postalCode: "6300",
    addressCountry: "BD",
  },
  openingHours: "Mo-Su 00:00-23:59",
  founder: {
    "@type": "Person",
    name: "Abdur Rouf",
  },
  foundingDate: "2022",
  sameAs: [
    "https://www.facebook.com/advance.it.center01/",
    "https://www.linkedin.com/in/abdur-rouf-ar/",
  ],
});

export const getFaqSchema = (faqs) => ({
  "@context": "https://schema.org",
  "@type": "FAQ",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});

export const getArticleSchema = ({ title, description, url, author }) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: title,
  description: description,
  author: {
    "@type": "Person",
    name: author,
  },
  url: url,
  publisher: {
    "@type": "Organization",
    name: "Advanced IT",
  },
  datePublished: new Date().toISOString(),
});
