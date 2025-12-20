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
          <span>Basit Usul → Gerçek Usul</span>
        </nav>

        {/* Hero */}
        <header style={{ marginBottom: 20 }}>
          <h1 className="section-title">
            Basit Usulden Gerçek Usule Geçişte Muhasebe ve Vergi Danışmanlığı
          </h1>
          <p className="section-intro">
            Basit usulden gerçek usule geçiş; <strong>defter düzeni</strong>,
            <strong> fatura/e-belge</strong>, <strong>KDV</strong> ve{" "}
            <strong>aylık beyanname</strong> süreçlerinin yeniden kurulmasıdır.
            İstanbul’da SMMM Sinan Sarıtaş ile geçişi hızlı ve hatasız tamamlayın.
          </p>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a
              className="btn btn-primary"
              href="https://wa.me/905435172198"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp ile İletişim
            </a>
            <a className="btn btn-outline" href="#gecis-adimlari">
              Geçiş Adımları
            </a>
            <a className="btn btn-outline" href="#sss">
              SSS
            </a>
          </div>
        </header>

        {/* Geçiş adımları */}
        <section id="gecis-adimlari" className="section" style={{ paddingTop: 0 }}>
          <h2 className="section-title">Geçişte Ne Yapıyoruz?</h2>
          <div className="grid">
            <div className="card">
              <h3>1) Durum Analizi</h3>
              <p>
                Faaliyet konusu, ciro, belge akışı ve mevcut kayıt düzeni
                incelenir. Hangi e-belgeler ve defter düzeni gerekecek netleşir.
              </p>
            </div>
            <div className="card">
              <h3>2) Defter & Belge Düzeni</h3>
              <p>
                Fatura/fiş toplama sistemi, gider sınıfları, cari takibi ve aylık
                kapanış akışı kurulup standartlaştırılır.
              </p>
            </div>
            <div className="card">
              <h3>3) KDV ve Beyan Takvimi</h3>
              <p>
                KDV uygulamaları, tevkifat/stopaj gibi özel durumlar belirlenir.
                Aylık beyan takvimi oluşturulur.
              </p>
            </div>
            <div className="card">
              <h3>4) Yazılım & Entegrasyon</h3>
              <p>
                E-Fatura/e-Arşiv, ön muhasebe programı, banka entegrasyonu ve
                raporlama formatı seçilir ve devreye alınır.
              </p>
            </div>
          </div>
        </section>

        {/* Kısa liste */}
        <section className="section">
          <h2 className="section-title">Gerçek Usulde En Çok Yapılan Hatalar</h2>
          <div className="grid">
            <div className="card">
              <h3>🧾 Belge Eksikliği</h3>
              <p>Gider belgeleri toplanmadığı için maliyetler yükselir.</p>
            </div>
            <div className="card">
              <h3>📅 Takvim Kaçırma</h3>
              <p>Aylık KDV/Muhtasar/SGK yükümlülükleri gecikebilir.</p>
            </div>
            <div className="card">
              <h3>📌 Yanlış KDV / Tevkifat</h3>
              <p>Oran ve uygulama hataları ceza-riskini artırır.</p>
            </div>
          </div>
        </section>

        {/* SSS */}
        <section id="sss" className="section">
          <h2 className="section-title">Sık Sorulan Sorular</h2>

          <div className="grid">
            <div className="card">
              <h3>Basit usulden gerçek usule geçince ilk değişen şey nedir?</h3>
              <p>
                En büyük fark; belge/defter düzeni ve aylık beyanname takibinin
                sistemli hale gelmesidir. İşletmeye özel akış kurmak kritik.
              </p>
            </div>

            <div className="card">
              <h3>e-Fatura / e-Arşiv zorunlu olur mu?</h3>
              <p>
                Zorunluluklar ciro ve faaliyet türüne göre değişir. Sizin durumunuza
                göre zorunluluk kontrolü yapıp en uygun yöntemi belirliyoruz.
              </p>
            </div>

            <div className="card">
              <h3>KDV’yi nasıl doğru yönetirim?</h3>
              <p>
                Satış ve gider belgeleri düzenli toplanır, oran/tevkifat kontrolleri
                yapılır, aylık kapanışta KDV tablosu çıkarılır.
              </p>
            </div>

            <div className="card">
              <h3>Geçiş süreci ne kadar sürer?</h3>
              <p>
                Belge akışı ve işletmenin yapısına göre değişir; amaç, ilk aydan
                itibaren doğru kayıt düzenini oturtmaktır.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section">
          <div className="card" style={{ padding: 24 }}>
            <h2 style={{ marginTop: 0 }}>Gerçek usule geçişte düzeni birlikte kuralım</h2>
            <p style={{ marginBottom: 16 }}>
              Geçiş planı, belge düzeni ve aylık raporlama ile süreci güvenle yönetelim.
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
