"use client";

import { usePathname } from "next/navigation";
import SectorCTA from "./SectorCTA";

const SEKTOR_ADLARI: Record<string, string> = {
  "e-ticaret-muhasebe": "E-Ticaret",
  "kargo-kurye-muhasebe": "Kargo / Kurye",
  "basit-usulden-gercek-usule-gecis": "Basit Usul → Gerçek Usul",
  "imalat-sanayi-muhasebe": "İmalat & Sanayi",
  "gida-sektoru-muhasebe": "Gıda Sektörü",
  "tekstil-giyim-muhasebe": "Tekstil & Giyim",
  "kagit-ve-kagit-urunleri": "Kağıt & Kağıt Ürünleri",
  "metal-sanayi-muhasebe": "Metal Sanayi",
  "toptan-perakende-muhasebe": "Toptan & Perakende",
  "ulastirma-lojistik-muhasebe": "Ulaştırma & Lojistik",
  "egitim-kurumlari-muhasebe": "Eğitim Kurumları",
  "saglik-sektoru-muhasebe": "Sağlık Sektörü",
  "sigorta-acente-muhasebe": "Sigorta Acenteleri",
  "finansal-danismanlik": "Finansal Danışmanlık",
  "insaat-muhasebe": "İnşaat",
  "yazilim-it-muhasebe": "Yazılım & IT",
  "restoran-kafe-muhasebe": "Restoran & Kafe",
  "serbest-meslek-muhasebe": "Serbest Meslek",
};

export default function SectorCTAFromPath() {
  const pathname = usePathname() || "";

  // /sektorler/<slug>
  const slug = pathname.split("/").filter(Boolean)[1] || "";
  const sectorName = SEKTOR_ADLARI[slug] || "Bu Sektör";

  return <SectorCTA sector={sectorName} />;
}
