import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://sinansaritas.com.tr";
  const now = new Date();

  const sektorler = [
    "e-ticaret-muhasebe",
    "kargo-kurye-muhasebe",
    "basit-usulden-gercek-usule-gecis",
    "imalat-sanayi-muhasebe",
    "gida-sektoru-muhasebe",
    "tekstil-giyim-muhasebe",
    "kagit-ve-kagit-urunleri",
    "metal-sanayi-muhasebe",
    "toptan-perakende-muhasebe",
    "ulastirma-lojistik-muhasebe",
    "egitim-kurumlari-muhasebe",
    "saglik-sektoru-muhasebe",
    "sigorta-acente-muhasebe",
    "finansal-danismanlik",
    "insaat-muhasebe",
    "yazilim-it-muhasebe",
    "restoran-kafe-muhasebe",
    "serbest-meslek-muhasebe",
  ] as const;

  return [
    { url: `${baseUrl}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/hizmetler`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/pratik-bilgiler`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/kvkk`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
    { url: `${baseUrl}/sektorler`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },

    // Sektör detay sayfaları (18 adet)
    ...sektorler.map((slug) => ({
      url: `${baseUrl}/sektorler/${slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: slug === "e-ticaret-muhasebe" ? 0.95 : 0.75,
    })),
  ];
}
