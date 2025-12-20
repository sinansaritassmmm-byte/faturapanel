"use client";

import Link from "next/link";

export default function Page() {
  return (
    <main className="section">
      <div className="container">
        {/* Breadcrumb */}
        <nav style={{ marginBottom: 16, fontSize: 14, opacity: 0.85 }}>
          <Link href="/">Ana Sayfa</Link> {" / "}
          <Link href="/sektorler">Sektörler</Link> {" / "}
          <span>Kargo / Kurye</span>
        </nav>

        {/* Hero */}
        <header style={{ marginBottom: 20 }}>
          <h1 className="section-title">
            Kargo / Kurye Firmaları İçin Muhasebe ve Mali Müşavirlik
          </h1>
          <p className="section-intro">
            Kurye ve kargo işletmelerinde <strong>fatura yoğunluğu</strong>,
            <strong> gider belgeleri</strong>, <strong>personel-prim</strong> ve{" "}
            <strong>nakit akışı</strong> en kritik alanlar. İstanbul’da SMMM
            Sinan Sarıtaş ile süreçlerinizi düzenleyin: e-Fatura/e-Arşiv,
            e-Defter, KDV, stopaj, SGK ve raporlama.
          </p>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a
              className="btn btn-primary"
              href="https://wa.me/905435172198"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp ile Hızlı İletişim
            </a>
            <a className="btn btn-outline" href="#hizmet-kapsami">
              Hizmet Kapsamı
            </a>
            <a className="btn btn-outline" href="#sss">
              SSS
            </a>
          </div>
        </header>

        {/* Kısa kartlar */}
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="grid">
            <div className="card">
              <h3>🚚 Fatura & Tahsilat Düzeni</h3>
              <p>
                Çok sayıda müşteriye kesilen e-Arşiv/e-Fatura kayıtlarının düzenli
                işlenmesi, tahsilat takibi ve cari mutabakat.
              </p>
            </div>
            <div className="card">
              <h3>🧾 Gider Belgeleri</h3>
              <p>
                Yakıt, bakım-onarım, lastik, köprü/otoyol, POS komisyonları ve
                taşeron giderlerinin doğru sınıflandırılması.
              </p>
            </div>
            <div className="card">
              <h3>👥 Personel & SGK</h3>
              <p>
                Kurye personeli bordroları, SGK bildirgeleri, işe giriş-çıkış,
                ücret/prim ve teşvik kontrolleri.
              </p>
            </div>
          </div>
        </section>

        {/* Hizmet kapsamı */}
        <section id="hizmet-kapsami" className="section">
          <h2 className="section-title">Hizmet Kapsamı</h2>
          <div className="grid">
            <div className="card">
              <h3>1) Aylık Muhasebe & Beyannameler</h3>
              <p>
                KDV, Muhtasar/SGK, Geçici Vergi ve diğer yükümlülüklerin takibi,
                hazırlanması ve zamanında gönderimi.
              </p>
            </div>
            <div className="card">
              <h3>2) e-Fatura / e-Arşiv / e-Defter</h3>
              <p>
                Portal/entegrasyon süreçleri, e-Defter berat hazırlığı ve
                kapanışlara kadar uçtan uca kontrol.
              </p>
            </div>
            <div className="card">
              <h3>3) Gider Yönetimi & Raporlama</h3>
              <p>
                Yakıt-bakım, araç giderleri, taşeron ödemeleri, komisyonlar ve
                gider kalemlerinin aylık raporlanması.
              </p>
            </div>
            <div className="card">
              <h3>4) Nakit Akışı & Karlılık</h3>
              <p>
                Günlük/haftalık tahsilat-gider dengesi, dönemsel karlılık ve
                operasyonel kararlar için yönetim raporları.
              </p>
            </div>
          </div>
        </section>

        {/* SSS */}
        <section id="sss" className="section">
          <h2 className="section-title">Sık Sorulan Sorular</h2>

          <div className="grid">
            <div className="card">
              <h3>Kargo/kurye firmaları genelde hangi vergi yükümlülüklerine tabi?</h3>
              <p>
                İşletme türüne ve ölçeğe göre KDV, Muhtasar/SGK, Geçici Vergi ve
                yıllık beyanlar gündeme gelir. Sizin yapınıza göre net listeyi
                çıkarıp takvim oluşturuyoruz.
              </p>
            </div>

            <div className="card">
              <h3>Yakıt, otoyol, bakım giderleri nasıl takip edilmeli?</h3>
              <p>
                Fatura/fişlerin düzenli toplanması, gider kalemlerinin doğru
                sınıflandırılması ve araç bazlı raporlama ile kontrol sağlanır.
              </p>
            </div>

            <div className="card">
              <h3>Taşeron kurye ödemelerinde dikkat edilmesi gerekenler neler?</h3>
              <p>
                Sözleşme, fatura/serbest meslek belgesi, stopaj/KDV uygulaması ve
                mutabakat süreçleri doğru kurulmalıdır. Uygulamanıza göre kontrol
                listesi çıkarıyoruz.
              </p>
            </div>

            <div className="card">
              <h3>İstanbul’da kargo/kurye muhasebesi için nasıl ilerliyoruz?</h3>
              <p>
                İlk görüşmede belge akışı ve yazılım altyapısını analiz ediyoruz,
                ardından aylık iş planı + raporlama formatını belirleyip düzenli
                takibe geçiyoruz.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section">
          <div className="card" style={{ padding: 24 }}>
            <h2 style={{ marginTop: 0 }}>Kargo / Kurye muhasebesinde düzen kurmak ister misiniz?</h2>
            <p style={{ marginBottom: 16 }}>
              İş akışınıza uygun belge toplama, beyanname takvimi ve aylık raporlama
              modelini birlikte kuralım.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a
                className="btn btn-primary"
                href="https://wa.me/905435172198"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp’tan Yaz
              </a>
              <Link className="btn btn-outline" href="/sektorler">
                Tüm Sektörler
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
