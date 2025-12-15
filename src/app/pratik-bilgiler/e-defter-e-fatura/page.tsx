export default function Page() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f3f4f6",
        padding: "40px 16px",
        fontFamily:
          'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
    >
      <div
        style={{
          maxWidth: "960px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            fontSize: "28px",
            fontWeight: 700,
            marginBottom: "24px",
            textAlign: "center",
          }}
        >
          E-Defter, E-Fatura ve Tevkifat
        </h1>

        {/* KART 1 – E-Defter & E-Fatura */}
        <div
          style={{
            borderRadius: "28px",
            padding: "24px 24px 28px",
            marginBottom: "32px",
            background:
              "linear-gradient(135deg, #dc2626, #ec4899, #2563eb)",
            color: "#ffffff",
            boxShadow: "0 18px 40px rgba(0,0,0,0.22)",
          }}
        >
          <p
            style={{
              fontSize: "12px",
              textTransform: "uppercase",
              letterSpacing: "0.22em",
              fontWeight: 600,
              opacity: 0.9,
              margin: 0,
            }}
          >
            Pratik Bilgiler
          </p>

          <h2
            style={{
              fontSize: "22px",
              fontWeight: 700,
              margin: "10px 0 4px",
            }}
          >
            E-Defter &amp; E-Fatura Nedir?
          </h2>

          <p
            style={{
              fontSize: "14px",
              margin: 0,
              opacity: 0.95,
            }}
          >
            Temel kavramlar ve zorunluluk kapsamı – sade bir özet.
          </p>

          {/* Tanımlar */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "16px",
              marginTop: "24px",
            }}
          >
            <div
              style={{
                background: "rgba(15,23,42,0.35)",
                borderRadius: "18px",
                padding: "14px 16px",
              }}
            >
              <h3
                style={{
                  margin: "0 0 6px",
                  fontSize: "16px",
                  fontWeight: 600,
                }}
              >
                📘 E-Defter Nedir?
              </h3>
              <p
                style={{
                  fontSize: "14px",
                  margin: 0,
                  lineHeight: 1.5,
                }}
              >
                Vergi Usul Kanunu kapsamındaki{" "}
                <strong>yevmiye</strong> ve <strong>büyük defter</strong>{" "}
                kayıtlarının elektronik ortamda oluşturulması, saklanması ve
                ibraz edilmesidir. Noter tasdiki yerine, Gelir İdaresi
                Başkanlığı tarafından belirlenen elektronik imza / mali mühür
                ve berat süreçleri uygulanır.
              </p>
            </div>

            <div
              style={{
                background: "rgba(15,23,42,0.35)",
                borderRadius: "18px",
                padding: "14px 16px",
              }}
            >
              <h3
                style={{
                  margin: "0 0 6px",
                  fontSize: "16px",
                  fontWeight: 600,
                }}
              >
                📄 E-Fatura Nedir?
              </h3>
              <p
                style={{
                  fontSize: "14px",
                  margin: 0,
                  lineHeight: 1.5,
                }}
              >
                Kağıt fatura ile aynı hukuki niteliklere sahip elektronik
                faturadır. Düzenleme, iletim ve saklama süreçleri Gelir İdaresi
                Başkanlığı sistemi üzerinden dijital ortamda yürütülür; belgeler
                elektronik ortamda arşivlenir.
              </p>
            </div>
          </div>

          {/* Kimler zorunlu? */}
          <h3
            style={{
              marginTop: "22px",
              marginBottom: "10px",
              fontSize: "16px",
              fontWeight: 600,
            }}
          >
            Kimler E-Defter / E-Fatura Kullanmak Zorundadır?
          </h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "12px",
            }}
          >
            <div
              style={{
                background: "rgba(15,23,42,0.4)",
                borderRadius: "14px",
                padding: "10px 12px",
              }}
            >
              <p
                style={{
                  margin: "0 0 4px",
                  fontSize: "11px",
                  textTransform: "uppercase",
                  letterSpacing: "0.16em",
                  fontWeight: 600,
                  opacity: 0.9,
                }}
              >
                Ciro Sınırı
              </p>
              <p
                style={{
                  margin: 0,
                  fontSize: "13px",
                  lineHeight: 1.5,
                }}
              >
                İlgili tebliğlerde belirlenen{" "}
                <strong>brüt satış hasılatı sınırını aşan</strong> mükellefler,
                belirtilen tarihten itibaren e-Fatura ve e-Defter uygulamalarına
                geçmekle yükümlüdür.
              </p>
            </div>

            <div
              style={{
                background: "rgba(15,23,42,0.4)",
                borderRadius: "14px",
                padding: "10px 12px",
              }}
            >
              <p
                style={{
                  margin: "0 0 4px",
                  fontSize: "11px",
                  textTransform: "uppercase",
                  letterSpacing: "0.16em",
                  fontWeight: 600,
                  opacity: 0.9,
                }}
              >
                Sektörel Zorunluluklar
              </p>
              <p
                style={{
                  margin: 0,
                  fontSize: "13px",
                  lineHeight: 1.5,
                }}
              >
                Akaryakıt, otomotiv, e-ticaret, maden, inşaat taahhüt gibi bazı
                faaliyet alanlarında, cirodan bağımsız olarak e-Belge
                zorunluluğu söz konusu olabilir.
              </p>
            </div>

            <div
              style={{
                background: "rgba(15,23,42,0.4)",
                borderRadius: "14px",
                padding: "10px 12px",
              }}
            >
              <p
                style={{
                  margin: "0 0 4px",
                  fontSize: "11px",
                  textTransform: "uppercase",
                  letterSpacing: "0.16em",
                  fontWeight: 600,
                  opacity: 0.9,
                }}
              >
                E-Arşiv Fatura
              </p>
              <p
                style={{
                  margin: 0,
                  fontSize: "13px",
                  lineHeight: 1.5,
                }}
              >
                Belirli tutarın üzerindeki satışlarda ve özellikle internet
                üzerinden yapılan bazı işlemlerde, e-Arşiv Fatura düzenleme
                zorunluluğu bulunmaktadır.
              </p>
            </div>
          </div>

          <p
            style={{
              marginTop: "14px",
              fontSize: "11px",
              opacity: 0.88,
            }}
          >
            * Güncel ciro sınırları ve kapsam için Gelir İdaresi Başkanlığı
            tebliğleri mutlaka kontrol edilmelidir.
          </p>
        </div>

        {/* KART 2 – KDV Tevkifatı (Özet) */}
        <div
          style={{
            borderRadius: "28px",
            padding: "24px 24px 28px",
            marginBottom: "16px",
            background:
              "linear-gradient(135deg, #1d4ed8, #4f46e5, #7c3aed)",
            color: "#ffffff",
            boxShadow: "0 18px 40px rgba(0,0,0,0.18)",
          }}
        >
          <h2
            style={{
              fontSize: "20px",
              fontWeight: 700,
              margin: "0 0 6px",
            }}
          >
            KDV Tevkifatı – Kısa Örnek
          </h2>
          <p
            style={{
              fontSize: "13px",
              margin: 0,
              opacity: 0.95,
            }}
          >
            Tevkifatlı işlemlerde KDV&apos;nin bir kısmı satıcı, bir kısmı alıcı
            tarafından beyan edilir.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, minmax(0,1fr))",
              gap: "8px",
              marginTop: "18px",
              fontSize: "13px",
            }}
          >
            <div
              style={{
                background: "rgba(15,23,42,0.45)",
                borderRadius: "14px",
                padding: "10px 10px",
              }}
            >
              <p
                style={{
                  margin: "0 0 4px",
                  fontSize: "11px",
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  opacity: 0.9,
                }}
              >
                Hizmet Bedeli
              </p>
              <p style={{ margin: 0, fontWeight: 600 }}>10.000 TL</p>
            </div>
            <div
              style={{
                background: "rgba(15,23,42,0.45)",
                borderRadius: "14px",
                padding: "10px 10px",
              }}
            >
              <p
                style={{
                  margin: "0 0 4px",
                  fontSize: "11px",
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  opacity: 0.9,
                }}
              >
                KDV (%20)
              </p>
              <p style={{ margin: 0, fontWeight: 600 }}>2.000 TL</p>
            </div>
            <div
              style={{
                background: "rgba(15,23,42,0.45)",
                borderRadius: "14px",
                padding: "10px 10px",
              }}
            >
              <p
                style={{
                  margin: "0 0 4px",
                  fontSize: "11px",
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  opacity: 0.9,
                }}
              >
                Satıcı KDV
              </p>
              <p style={{ margin: 0, fontWeight: 600 }}>1.600 TL</p>
              <p style={{ margin: 0, fontSize: "11px", opacity: 0.9 }}>
                (8/10)
              </p>
            </div>
            <div
              style={{
                background: "rgba(15,23,42,0.45)",
                borderRadius: "14px",
                padding: "10px 10px",
              }}
            >
              <p
                style={{
                  margin: "0 0 4px",
                  fontSize: "11px",
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  opacity: 0.9,
                }}
              >
                Alıcı Tevkifat KDV
              </p>
              <p style={{ margin: 0, fontWeight: 600 }}>400 TL</p>
              <p style={{ margin: 0, fontSize: "11px", opacity: 0.9 }}>
                (2/10)
              </p>
            </div>
          </div>

          {/* Yevmiye kayıtları (özet) */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "12px",
              marginTop: "18px",
              fontSize: "12px",
            }}
          >
            <div
              style={{
                background: "rgba(15,23,42,0.55)",
                borderRadius: "14px",
                padding: "10px 12px",
                fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, monospace",
              }}
            >
              <p
                style={{
                  margin: "0 0 4px",
                  fontWeight: 600,
                  fontSize: "12px",
                }}
              >
                Satıcı Yevmiye Kaydı
              </p>
              <p style={{ margin: 0 }}>120 ALICILAR&nbsp;&nbsp;&nbsp; 11.600</p>
              <p style={{ margin: 0 }}>  600 HİZMET GELİRLERİ 10.000</p>
              <p style={{ margin: 0 }}>  391 HESAPLANAN KDV&nbsp;&nbsp; 1.600</p>
            </div>

            <div
              style={{
                background: "rgba(15,23,42,0.55)",
                borderRadius: "14px",
                padding: "10px 12px",
                fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, monospace",
              }}
            >
              <p
                style={{
                  margin: "0 0 4px",
                  fontWeight: 600,
                  fontSize: "12px",
                }}
              >
                Alıcı Yevmiye Kaydı
              </p>
              <p style={{ margin: 0 }}>740 / 770 GİDER&nbsp;&nbsp; 10.000</p>
              <p style={{ margin: 0 }}>191 İNDİRİLECEK KDV 1.600</p>
              <p style={{ margin: 0 }}>360 ÖDENECEK VERGİ&nbsp; 400</p>
              <p style={{ margin: 0 }}>  320 SATICILAR&nbsp;&nbsp;&nbsp;&nbsp; 11.600</p>
            </div>
          </div>

          <p
            style={{
              marginTop: "12px",
              fontSize: "11px",
              opacity: 0.9,
            }}
          >
            * 400 TL tevkifat tutarı, alıcı tarafından 2 No&apos;lu KDV
            beyannamesi ile beyan edilir. Örnek yalnızca açıklama amaçlıdır;
            gerçek işlemlerde güncel tebliğler dikkate alınmalıdır.
          </p>
        </div>
      </div>
    </main>
  );
}
