import type { Metadata } from "next";
import type { CSSProperties } from "react";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni | Sinan Sarıtaş SMMM",
  description:
    "Sinan Sarıtaş Serbest Muhasebeci Mali Müşavir olarak 6698 sayılı KVKK kapsamındaki aydınlatma metni.",
};

const pageStyle: CSSProperties = {
  backgroundColor: "#ffffff",
  minHeight: "100vh",
};

const containerStyle: CSSProperties = {
  maxWidth: "960px",
  margin: "0 auto",
  padding: "40px 16px 60px",
  fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  color: "#111827",
  lineHeight: 1.6,
  fontSize: "15px",
};

const tagStyle: CSSProperties = {
  fontSize: "11px",
  textTransform: "uppercase",
  letterSpacing: "0.18em",
  color: "#6b7280",
  marginBottom: "4px",
};

const titleStyle: CSSProperties = {
  fontSize: "26px",
  fontWeight: 800,
  color: "#b10f2e", // navbar kırmızısına yakın
  margin: 0,
};

const smallTextStyle: CSSProperties = {
  fontSize: "13px",
  color: "#6b7280",
  marginTop: "6px",
};

const buttonStyle: CSSProperties = {
  display: "inline-block",
  marginTop: "18px",
  padding: "8px 18px",
  borderRadius: "999px",
  backgroundColor: "#b10f2e",
  color: "#ffffff",
  fontSize: "13px",
  fontWeight: 500,
  textDecoration: "none",
};

const sectionTitleStyle: CSSProperties = {
  fontSize: "18px",
  fontWeight: 700,
  marginTop: "28px",
  marginBottom: "6px",
};

const listStyle: CSSProperties = {
  paddingLeft: "20px",
  marginTop: "4px",
};

export default function KvkkPage() {
  return (
    <main style={pageStyle}>
      <div style={containerStyle}>
        {/* Üst başlık ve PDF butonu */}
        <header>
          <div style={tagStyle}>Yasal Bilgilendirme</div>
          <h1 style={titleStyle}>KVKK Aydınlatma Metni</h1>
          <p style={smallTextStyle}>Son güncelleme: 2025</p>

          {/* PDF indir butonu */}
          <a
            href="/kvkk.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={buttonStyle}
          >
            KVKK metnini PDF olarak indir
          </a>
        </header>

        {/* İçerik */}
        <section style={{ marginTop: "32px" }}>
          <p>
            6698 sayılı Kişisel Verilerin Korunması Kanunu (&quot;KVKK&quot;)
            uyarınca, veri sorumlusu sıfatıyla Serbest Muhasebeci Mali Müşavir{" "}
            <strong>Sinan Sarıtaş</strong> olarak; mükelleflerimin ve ilgili
            kişilerin kişisel verilerini yalnızca mevzuata uygun olarak ve
            aşağıda belirtilen amaçlar dâhilinde işlemekteyim.
          </p>

          <h2 style={sectionTitleStyle}>1. Veri Sorumlusu</h2>
          <p>
            Veri sorumlusu: <strong>Sinan Sarıtaş</strong> — Serbest Muhasebeci
            Mali Müşavir
            <br />
            Adres: TARABYA MAH. ARABA YOLU CAD. NO: 194 B İÇ KAPI NO: 5,
            SARIYER / İSTANBUL
          </p>

          <h2 style={sectionTitleStyle}>
            2. İşlenen Kişisel Veriler ve Toplama Yöntemi
          </h2>
          <p>
            Kimlik, iletişim, finans, vergi, muhasebe kayıtları, işlem bilgisi,
            elektronik ortam kayıtları; ofis içi görüşmeler, WhatsApp, telefon,
            e-posta ve resmî kurum sistemleri (GİB, SGK vb.) üzerinden elde
            edilen veriler işlenmektedir.
          </p>

          <h2 style={sectionTitleStyle}>
            3. Kişisel Verilerin İşlenme Amaçları
          </h2>
          <ul style={listStyle}>
            <li>Vergi, muhasebe ve SGK süreçlerinin yürütülmesi,</li>
            <li>
              Beyannamelerin ve bildirimlerin hazırlanması, kontrolü ve ilgili
              kurumlara iletilmesi,
            </li>
            <li>
              Sözleşmesel ve kanuni yükümlülüklerin yerine getirilmesi,
            </li>
            <li>Muhasebe kayıtlarının mevzuata uygun şekilde tutulması,</li>
            <li>
              Talep ve şikâyetlerin değerlendirilmesi ve hukuki süreçlerin
              yürütülmesi.
            </li>
          </ul>

          <h2 style={sectionTitleStyle}>4. Kişisel Verilerin Aktarılması</h2>
          <p>
            Kişisel veriler; yalnızca mevzuattan kaynaklanan yükümlülükler
            kapsamında Vergi Dairesi Başkanlıkları, Sosyal Güvenlik Kurumu,
            mahkemeler ve diğer yetkili kamu kurum/kuruluşları ile, hizmet
            alınan yazılım ve bilişim firmalarına sözleşmesel sınırlar
            içerisinde aktarılabilmektedir.
          </p>

          <h2 style={sectionTitleStyle}>5. Saklama Süreleri</h2>
          <p>
            Kişisel veriler; ilgili mevzuatta öngörülen süreler boyunca (Vergi
            Usul Kanunu, Türk Ticaret Kanunu ve diğer düzenlemelerde yer alan
            asgarî saklama süreleri) saklanır. Sürelerin sona ermesiyle birlikte
            veriler, KVKK ve ilgili mevzuata uygun olarak silinir, yok edilir
            veya anonim hâle getirilir.
          </p>

          <h2 style={sectionTitleStyle}>
            6. KVKK Kapsamındaki Haklarınız
          </h2>
          <p>
            KVKK&apos;nın 11. maddesi uyarınca veri sahibi olarak aşağıdaki
            haklara sahipsiniz:
          </p>
          <ul style={listStyle}>
            <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme,</li>
            <li>İşlenmişse buna ilişkin bilgi talep etme,</li>
            <li>
              İşlenme amacını ve bunların amacına uygun kullanılıp
              kullanılmadığını öğrenme,
            </li>
            <li>Kişisel verilerin aktarıldığı üçüncü kişileri bilme,</li>
            <li>Eksik veya yanlış işlenmiş verilerin düzeltilmesini isteme,</li>
            <li>
              İşlenmesini gerektiren sebeplerin ortadan kalkması hâlinde
              silinmesini veya yok edilmesini isteme,
            </li>
            <li>
              Yapılan işlemlerin verilerin aktarıldığı üçüncü kişilere
              bildirilmesini isteme,
            </li>
            <li>
              İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz
              edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz
              etme,
            </li>
            <li>
              Kişisel verilerin kanuna aykırı olarak işlenmesi sebebiyle zarara
              uğramanız hâlinde zararın giderilmesini talep etme.
            </li>
          </ul>

          <p style={{ fontSize: "12px", color: "#6b7280", marginTop: "30px" }}>
            Bu metin genel bilgilendirme niteliğindedir. Gerekmesi hâlinde bir
            hukuk uzmanından görüş alınması tavsiye edilir.
          </p>
        </section>
      </div>
    </main>
  );
}
