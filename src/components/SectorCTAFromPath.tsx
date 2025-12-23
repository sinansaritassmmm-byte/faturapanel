"use client";

import { usePathname } from "next/navigation";

type CTAConf = {
  label: string;      // buton üstü başlık
  message: string;    // WhatsApp hazır mesaj
};

const PHONE = "905435172198";

function enc(s: string) {
  return encodeURIComponent(s);
}

function pickCTA(slug: string | null): CTAConf {
  // default
  const base: CTAConf = {
    label: "Hızlı Ön Görüşme (WhatsApp)",
    message:
      "Merhaba Sinan Bey, muhasebe hizmetleriniz hakkında bilgi almak istiyorum. Kısa bir ön görüşme yapabilir miyiz?",
  };

  if (!slug) return base;

  const map: Record<string, CTAConf> = {
    "e-ticaret-muhasebe": {
      label: "E-Ticaret için Ön Görüşme (WhatsApp)",
      message:
        "Merhaba Sinan Bey, e-ticaret muhasebesi için bilgi almak istiyorum. Pazaryeri/komisyon/iade süreçlerimiz var. Kısa bir ön görüşme yapabilir miyiz?",
    },
    "kargo-kurye-muhasebe": {
      label: "Kargo/Kurye için Ön Görüşme (WhatsApp)",
      message:
        "Merhaba Sinan Bey, kargo/kurye işletmem için muhasebe ve SGK/bordro süreçleri hakkında bilgi almak istiyorum. Kısa bir ön görüşme yapabilir miyiz?",
    },
    "basit-usulden-gercek-usule-gecis": {
      label: "Gerçek Usule Geçiş için Ön Görüşme (WhatsApp)",
      message:
        "Merhaba Sinan Bey, basit usulden gerçek usule geçiş sürecim var. Defter düzeni ve vergi yükümlülükleri için yönlendirme rica ediyorum. Kısa bir ön görüşme yapabilir miyiz?",
    },

    // İstersen diğer sektörler için de aynı mantıkla tek tek ekleriz.
    // Şimdilik default mesaj ile devam eder.
  };

  return map[slug] ?? base;
}

export default function SectorCTAFromPath() {
  const pathname = usePathname();

  // /sektorler/<slug> gibi bir path bekliyoruz
  const slug = (() => {
    if (!pathname) return null;
    const parts = pathname.split("/").filter(Boolean);
    const idx = parts.indexOf("sektorler");
    if (idx === -1) return null;
    return parts[idx + 1] ?? null;
  })();

  const conf = pickCTA(slug);

  const waLink = `https://wa.me/${PHONE}?text=${enc(conf.message)}`;

  return (
    <section className="section" aria-label="İletişim CTA">
      <div className="container">
        <div className="card" style={{ padding: 18 }}>
          <h3 style={{ marginTop: 0 }}>{conf.label}</h3>
          <p style={{ marginBottom: 10 }}>
            Sorunu kısaca yazman yeterli.{" "}
            <strong>Genelde aynı gün dönüş</strong> sağlıyorum.
          </p>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <a className="btn btn-primary" href={waLink} target="_blank" rel="noreferrer">
              WhatsApp’tan Yaz
            </a>

            <a className="btn btn-outline" href="/iletisim">
              İletişim Sayfası
            </a>
          </div>

          <p style={{ marginTop: 10, opacity: 0.8, fontSize: 13 }}>
            Not: Mesaj taslağı otomatik doldurulur; dilersen düzenleyebilirsin.
          </p>
        </div>
      </div>
    </section>
  );
}
