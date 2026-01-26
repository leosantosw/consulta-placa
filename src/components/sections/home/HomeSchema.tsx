import { homeFaqs } from "@/components/sections/home/homeFaqs";

export default function HomeSchema() {
  const baseUrl = "https://olhaessecarro.com.br";
  const sectionLinks = [
    { name: "Planos", url: `${baseUrl}/#planos` },
    { name: "Como funciona", url: `${baseUrl}/#como-funciona` },
    { name: "FAQ", url: `${baseUrl}/#faq` },
  ];
  const webPageElements = sectionLinks.map((section) => ({
    "@type": "WebPageElement",
    "@id": section.url,
    name: section.name,
    url: section.url,
    isPartOf: { "@id": `${baseUrl}/#webpage` },
  }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${baseUrl}/#organization`,
        name: "Olha Esse Carro",
        url: baseUrl,
      },
      {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        url: baseUrl,
        name: "Olha Esse Carro",
        publisher: {
          "@id": `${baseUrl}/#organization`,
        },
        potentialAction: {
          "@type": "SearchAction",
          target: `${baseUrl}/?placa={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": ["WebPage", "FAQPage"],
        "@id": `${baseUrl}/#webpage`,
        url: baseUrl,
        name: "Consultar placa e histórico veicular",
        description:
          "Consulte placa, histórico veicular, restrição veicular, sinistro de carro, veículo de leilão, débitos e multas com rapidez e segurança.",
        inLanguage: "pt-BR",
        isPartOf: { "@id": `${baseUrl}/#website` },
        hasPart: webPageElements,
        mainEntity: homeFaqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
      {
        "@type": "SiteNavigationElement",
        "@id": `${baseUrl}/#site-navigation`,
        name: sectionLinks.map((section) => section.name),
        url: sectionLinks.map((section) => section.url),
      },
    ],
  };

  return (
    <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
  );
}
