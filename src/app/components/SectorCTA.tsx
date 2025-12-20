type Props = {
  sector: string;
};

export default function SectorCTA({ sector }: Props) {
  return (
    <section className="section">
      <div className="container">
        <div className="card" style={{ textAlign: "center" }}>
          <h2>{sector} İçin Muhasebe Desteği Alın</h2>
          <p style={{ marginTop: 8 }}>
            {sector} sektörüne özel muhasebe, mali müşavirlik ve danışmanlık
            hizmetleri hakkında detaylı bilgi almak için benimle iletişime
            geçebilirsiniz.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 12,
              marginTop: 16,
              flexWrap: "wrap",
            }}
          >
            <a
              className="btn btn-primary"
              href="https://wa.me/905435172198"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp ile İletişim
            </a>

            <a className="btn btn-outline" href="/#iletisim">
              İletişim Bilgileri
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
