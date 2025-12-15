"use client";

import { useEffect, useMemo, useState } from "react";

type ApiData = {
  asgari: { net: string; brut: string; kaynak: string };
  sgk: {
    gunlukAlt: string;
    aylikAlt: string;
    gunlukUst: string;
    aylikUst: string;
    kaynak: string;
  };
  kdv: { oranlar: string[]; kaynak: string; link: string };
  generatedAt: string;
};

export default function PratikBilgilerPage() {
  const [data, setData] = useState<ApiData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const r = await fetch("/api/pratik", { cache: "no-store" });
        const j = await r.json();
        if (j?.ok && j?.data) setData(j.data);
      } catch {
        // sessiz
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const updatedText = useMemo(() => {
    if (!data?.generatedAt) return "";
    const d = new Date(data.generatedAt);
    return d.toLocaleString("tr-TR");
  }, [data?.generatedAt]);

  return (
    <main className="section">
      <div className="container">
        <p className="hero-kicker">Pratik Bilgiler</p>
        <h1 className="section-title">Pratik Bilgiler</h1>
        <p className="section-intro">
          Asgari ücret, SGK sınırları, KDV oranları ve faydalı resmî bağlantılar.
          {updatedText ? ` (Son kontrol: ${updatedText})` : ""}
        </p>

        {/* Sayfa içi menü */}
        <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap", marginTop: "0.8rem" }}>
          <a className="btn btn-outline" href="#asgari">Asgari Ücret</a>
          <a className="btn btn-outline" href="#sgk">SGK</a>
          <a className="btn btn-outline" href="#kdv">KDV</a>
          <a className="btn btn-outline" href="#resmi">Resmî Linkler</a>
        </div>

        {/* Kartlar */}
        <div className="grid" style={{ marginTop: "1rem" }}>
          {/* Asgari */}
          <article id="asgari" className="card soft">
            <h3>Asgari Ücret</h3>
            <p style={{ marginTop: "0.4rem" }}>
              {loading ? "Yükleniyor..." : "Güncel değerler otomatik çekilir."}
            </p>
            <div style={{ marginTop: "0.6rem", fontSize: "0.95rem" }}>
              <div><strong>Brüt:</strong> {data?.asgari.brut ?? "—"} TL</div>
              <div><strong>Net (bilgi):</strong> {data?.asgari.net ?? "—"} TL</div>
              <div style={{ marginTop: "0.35rem", fontSize: "0.85rem", opacity: 0.8 }}>
                Kaynak: {data?.asgari.kaynak ?? "—"}
              </div>
            </div>
          </article>

          {/* SGK */}
          <article id="sgk" className="card soft">
            <h3>SGK Prime Esas Kazanç (Taban / Tavan)</h3>
            <p style={{ marginTop: "0.4rem" }}>
              Aylık ve günlük alt/üst sınırlar (otomatik çekilir).
            </p>
            <div style={{ marginTop: "0.6rem", fontSize: "0.95rem" }}>
              <div><strong>Günlük alt:</strong> {data?.sgk.gunlukAlt ?? "—"} TL</div>
              <div><strong>Aylık alt:</strong> {data?.sgk.aylikAlt ?? "—"} TL</div>
              <div><strong>Günlük üst:</strong> {data?.sgk.gunlukUst ?? "—"} TL</div>
              <div><strong>Aylık üst:</strong> {data?.sgk.aylikUst ?? "—"} TL</div>
              <div style={{ marginTop: "0.35rem", fontSize: "0.85rem", opacity: 0.8 }}>
                Kaynak: {data?.sgk.kaynak ?? "—"}
              </div>
            </div>
          </article>

          {/* KDV */}
          <article id="kdv" className="card soft">
            <h3>KDV Oranları</h3>
            <p style={{ marginTop: "0.4rem" }}>
              Genel özet: {data?.kdv.oranlar?.join(" • ") ?? "%1 • %10 • %20"}
            </p>
            <a
              className="btn btn-primary"
              style={{ marginTop: "0.7rem" }}
              href={data?.kdv.link ?? "https://www.gib.gov.tr/yardim-ve-kaynaklar/yararli-bilgiler/kdv-oranlari-listesi"}
              target="_blank"
              rel="noreferrer"
            >
              GİB KDV Oranları Listesi
            </a>
            <div style={{ marginTop: "0.35rem", fontSize: "0.85rem", opacity: 0.8 }}>
              Kaynak: {data?.kdv.kaynak ?? "GİB"}
            </div>
          </article>

          {/* Resmi */}
          <article id="resmi" className="card soft">
            <h3>Resmî PDF & Linkler</h3>
            <div style={{ display: "grid", gap: "0.5rem", marginTop: "0.7rem" }}>
              <a className="btn btn-outline full" href="https://gib.gov.tr/vergi-takvimi" target="_blank" rel="noreferrer">
                GİB Vergi Takvimi
              </a>
              <a className="btn btn-outline full" href="https://www.sgk.gov.tr/" target="_blank" rel="noreferrer">
                SGK Resmi Sitesi
              </a>
              <a className="btn btn-outline full" href="https://dijital.gib.gov.tr/" target="_blank" rel="noreferrer">
                Dijital Vergi Dairesi
              </a>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}
