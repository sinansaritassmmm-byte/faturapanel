"use client";

import Link from "next/link";

const SEKTORLER = [
  { slug: "e-ticaret-muhasebe", name: "E-Ticaret", icon: "🛒" },
  { slug: "kargo-kurye-muhasebe", name: "Kargo / Kurye", icon: "🚚" },
  { slug: "basit-usulden-gercek-usule-gecis", name: "Basit Usul → Gerçek Usul", icon: "🔄" },
  { slug: "imalat-sanayi-muhasebe", name: "İmalat & Sanayi", icon: "🏭" },
  { slug: "gida-sektoru-muhasebe", name: "Gıda Sektörü", icon: "🥗" },
  { slug: "tekstil-giyim-muhasebe", name: "Tekstil & Giyim", icon: "👗" },
  { slug: "kagit-ve-kagit-urunleri", name: "Kağıt & Kağıt Ürünleri", icon: "📄" },
  { slug: "metal-sanayi-muhasebe", name: "Metal Sanayi", icon: "⚙️" },
  { slug: "toptan-perakende-muhasebe", name: "Toptan & Perakende", icon: "🏬" },
  { slug: "ulastirma-lojistik-muhasebe", name: "Ulaştırma & Lojistik", icon: "🚛" },
  { slug: "egitim-kurumlari-muhasebe", name: "Eğitim Kurumları", icon: "🎓" },
  { slug: "saglik-sektoru-muhasebe", name: "Sağlık Sektörü", icon: "🏥" },
  { slug: "sigorta-acente-muhasebe", name: "Sigorta Acenteleri", icon: "🛡️" },
  { slug: "finansal-danismanlik", name: "Finansal Danışmanlık", icon: "💼" },
  { slug: "insaat-muhasebe", name: "İnşaat", icon: "🏗️" },
  { slug: "yazilim-it-muhasebe", name: "Yazılım & IT", icon: "💻" },
  { slug: "restoran-kafe-muhasebe", name: "Restoran & Kafe", icon: "🍽️" },
  { slug: "serbest-meslek-muhasebe", name: "Serbest Meslek", icon: "👨‍💼" },
];

export default function Page() {
  return (
    <main className="section">
      <div className="container">
        <h1 className="section-title">Hizmet Verdiğimiz Sektörler</h1>
        <p className="section-intro">
          Aşağıdaki sektör sayfalarından detaylara ulaşabilirsiniz.
        </p>

        <div className="grid">
          {SEKTORLER.map((s) => (
            <Link key={s.slug} href={`/sektorler/${s.slug}`} className="card">
              <h3>
                {s.icon} {s.name}
              </h3>
              <p>Detayları görüntüle</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
