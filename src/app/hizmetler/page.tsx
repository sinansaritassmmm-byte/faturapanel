import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hizmetler | Sinan Sarıtaş SMMM",
  description:
    "Vergi, e-defter, e-fatura, SGK, bordro, beyanname, raporlama ve danışmanlık hizmetleri. İstanbul Sarıyer’de SMMM Sinan Sarıtaş.",
};

export default function HizmetlerPage() {
  return (
    <main className="section">
      <div className="container">
        <p className="hero-kicker">Sinan Sarıtaş — SMMM</p>
        <h1 className="section-title">Hizmetler</h1>
        <p className="section-intro">
          İşletmenizin muhasebe, vergi ve SGK süreçlerini mevzuata uygun, düzenli
          ve zamanında yürütebilmeniz için uçtan uca hizmet sunuyorum.
          Aşağıdaki başlıklar en sık talep edilen hizmetlerdir.
        </p>

        <div className="grid" style={{ marginTop: "1rem" }}>
          <div className="card">
            <h3>Aylık / 3 Aylık / Yıllık Beyannameler</h3>
            <p>
              KDV, Muhtasar, Geçici Vergi, BA–BS ve Yıllık Gelir/Kurumlar
              beyannamelerinin hazırlanması, kontrolü ve elektronik ortamda
              gönderimi.
            </p>
          </div>

          <div className="card">
            <h3>Bordro ve SGK İşlemleri</h3>
            <p>
              Bordroların hazırlanması, SGK bildirgeleri, işe giriş–çıkış,
              teşvik kontrolleri ve yasal yükümlülüklerin düzenli takibi.
            </p>
          </div>

          <div className="card">
            <h3>E-Defter / E-Fatura / E-Arşiv Süreçleri</h3>
            <p>
              E-dönüşüm geçişi, sistem kurulumu, entegrasyon ve aylık/yıllık
              süreç yönetimi. Hata kontrolü ve mevzuat uyum danışmanlığı.
            </p>
          </div>

          <div className="card">
            <h3>Gelir–Gider Analizi &amp; Raporlama</h3>
            <p>
              Gelir-gider takibi, nakit akışı, kârlılık odaklı özet raporlar ve
              yönetim kararlarına destek.
            </p>
          </div>

          <div className="card">
            <h3>Finansal Danışmanlık</h3>
            <p>
              Finansman yapısı, kredi/limit planlaması, bütçe, mali hedefler ve
              şirket ölçeğine uygun çözüm önerileri.
            </p>
          </div>

          <div className="card">
            <h3>Ön Muhasebe Hizmetleri</h3>
            <p>
              Fatura, stok, cari hesap, banka hareketleri ve muhasebeye hazır
              veri setlerinin oluşturulması. Düzenli kontrol ve takip.
            </p>
          </div>

          <div className="card">
            <h3>Şirket Kuruluş &amp; Süreç Danışmanlığı</h3>
            <p>
              Şirket türü seçimi, kuruluş adımları, vergi dairesi/SGK süreçleri
              ve kuruluş sonrası muhasebe sisteminin yapılandırılması.
            </p>
          </div>

          <div className="card">
            <h3>Yazılım ve Entegrasyon Danışmanlığı</h3>
            <p>
              Ticari program seçimi, e-dönüşüm entegrasyonları, raporlama
              otomasyonları ve kullanıcı eğitimleri.
            </p>
          </div>
        </div>

        <div style={{ marginTop: "1.25rem" }}>
          <a
            className="btn btn-primary"
            href="https://wa.me/905435172198"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp ile Hızlı İletişim
          </a>
          <a
            className="btn btn-outline"
            href="/#iletisim"
            style={{ marginLeft: "0.6rem" }}
          >
            İletişim Bölümüne Git
          </a>
        </div>
      </div>
    </main>
  );
}
