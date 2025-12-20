"use client";

import { useEffect, useMemo, useState } from "react";

/* ===========================
 *  TİPLER
 * =========================== */
type FxItem = {
  code: string;
  buy: string;  // Alış
  sell: string; // Satış
};

type CostResult = {
  net: number;
  employerCost: number;
  employeeSgk: number;
  employeeUnemp: number;
  incomeTax: number;
  stampTax: number;
  employerSgk: number;
  employerUnemp: number;
};

/* ===========================
 *  YARDIMCI FONKSİYONLAR
 * =========================== */
function parseNumberTR(input: string): number {
  const cleaned = input.replace(/\./g, "").replace(",", ".");
  const n = parseFloat(cleaned);
  return Number.isFinite(n) ? n : NaN;
}

/* ===========================
 *  ANA SAYFA
 * =========================== */
export default function Page() {
  /* ===========================
   *  YUKARI ÇIK BUTONU
   * =========================== */
  useEffect(() => {
    const btn = document.getElementById("scrollTopBtn");
    if (!btn) return;

    const onScroll = () => {
      if (window.scrollY > 300) btn.classList.add("show");
      else btn.classList.remove("show");
    };

    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ===========================
   *  TCMB TÜM KURLAR (ALIŞ / SATIŞ)
   * =========================== */
  const [fxList, setFxList] = useState<FxItem[]>([]);

  useEffect(() => {
  async function loadFx() {
    try {
      const res = await fetch("https://www.tcmb.gov.tr/kurlar/today.xml");
      const text = await res.text();
      const parser = new DOMParser();
      const xml = parser.parseFromString(text, "text/xml");

      const toNum = (s?: string | null) => {
        if (!s) return null;
        const n = parseFloat(s.replace(",", "."));
        return isFinite(n) ? n : null;
      };

      // Önce USD/TL satışını al (çaprazlar için lazım)
      const usdNode = xml.querySelector(
        'Currency[CurrencyCode="USD"] > ForexSelling'
      );
      const usdTl = toNum(usdNode?.textContent);

      const nodes = Array.from(xml.querySelectorAll("Currency"));

      const list: FxItem[] = nodes
        .map((node) => {
          const code = node.getAttribute("CurrencyCode");
          if (!code) return null;

          let buy =
            toNum(node.querySelector("ForexBuying")?.textContent) ??
            toNum(node.querySelector("BanknoteBuying")?.textContent);

          let sell =
            toNum(node.querySelector("ForexSelling")?.textContent) ??
            toNum(node.querySelector("BanknoteSelling")?.textContent);

          // Eğer doğrudan TL kuru yoksa → CrossRateUSD kullan
          if ((buy === null || sell === null) && usdTl) {
            const crossUsd = toNum(
              node.querySelector("CrossRateUSD")?.textContent
            );

            if (crossUsd) {
              buy = crossUsd * usdTl;
              sell = crossUsd * usdTl;
            }
          }

          if (buy === null && sell === null) return null;

          const fmt = (n: number | null) =>
            n === null ? "—" : n.toFixed(4).replace(".", ",");

          return {
            code,
            buy: fmt(buy),
            sell: fmt(sell),
          } as FxItem;
        })
        .filter(Boolean) as FxItem[];

      setFxList(list);
    } catch {
      setFxList([
        { code: "USD", buy: "33,1000", sell: "33,2500" },
        { code: "EUR", buy: "36,4000", sell: "36,5500" },
        { code: "GBP", buy: "42,2000", sell: "42,4500" },
        { code: "CHF", buy: "38,1000", sell: "38,2500" },
        { code: "JPY", buy: "0,2100", sell: "0,2150" },
      ]);
    }
  }

  loadFx();
}, []);


  return (
    <>
      <main id="anasayfa">

        {/* ===========================
         *  KAYAN KUR BANDI (TÜM KURLAR)
         * =========================== */}
        <div className="fx-marquee">
          <div className="fx-track">
            {fxList.map((x) => (
              <span key={x.code}>
                <strong>{x.code}</strong> A: {x.buy} / S: {x.sell}
              </span>
            ))}
            {fxList.map((x) => (
              <span key={x.code + "-2"}>
                <strong>{x.code}</strong> A: {x.buy} / S: {x.sell}
              </span>
            ))}
          </div>
        </div>

        {/* ===========================
         *  HERO
         * =========================== */}
        <section className="hero">
          <div className="container">
            <p className="hero-kicker">
              Sinan Sarıtaş — Serbest Muhasebeci Mali Müşavir
            </p>

            <h1 className="hero-title">
              KOBİ’ler ve Şirketler İçin Profesyonel Mali Müşavirlik ve
              Muhasebe Hizmetleri
            </h1>

            <p className="hero-subtitle">
              E-Defter, e-Fatura ve vergi süreçlerinde ulaşılabilir ve
              güvenilir mali müşavirlik desteği.
            </p>

            <div className="hero-actions">
              <a
                className="btn btn-primary"
                href="https://wa.me/905435172198"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp ile Hızlı İletişim
              </a>
              <a className="btn btn-outline" href="#hizmetler">
                Hizmetleri Gör
              </a>
            </div>

            <div className="hero-highlight">
              <span>📍 İstanbul</span>
              <span>📑 SMMM Ruhsatlı</span>
              <span>👨‍💼 KOBİ ve bireysel mükellefler</span>
            </div>
          </div>
        </section>

        {/* ===========================
         *  SEKTÖRLER
         * =========================== */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">Hizmet Verdiğimiz Sektörler</h2>
            <p className="section-intro">
              Sektöre özel muhasebe ve mali danışmanlık çözümleri sunuyoruz.
            </p>

            <div className="grid">
              <a className="card" href="/sektorler/e-ticaret-muhasebe">
                <h3>🛒 E-Ticaret</h3>
                <p>Pazaryeri, komisyon, iade ve e-belge süreçleri</p>
              </a>

              <a className="card" href="/sektorler/kargo-kurye-muhasebe">
                <h3>🚚 Kargo / Kurye</h3>
                <p>Tahsilat mutabakatı ve araç giderleri</p>
              </a>

              <a
                className="card"
                href="/sektorler/basit-usulden-gercek-usule-gecis"
              >
                <h3>🔄 Basit Usul → Gerçek Usul</h3>
                <p>Geçiş planı ve vergi etkileri</p>
              </a>

              <a className="card" href="/sektorler/imalat-sanayi-muhasebe">
                <h3>🏭 İmalat & Sanayi</h3>
                <p>Maliyet, stok ve üretim muhasebesi</p>
              </a>

              <a className="card" href="/sektorler/restoran-kafe-muhasebe">
                <h3>🍽️ Restoran / Kafe</h3>
                <p>Kasa, POS ve günlük takip</p>
              </a>

              <a className="card" href="/sektorler/serbest-meslek-muhasebe">
                <h3>👨‍💼 Serbest Meslek</h3>
                <p>Belge düzeni ve vergi planlama</p>
              </a>
            </div>
          </div>
        </section>

        {/* ===========================
         *  HİZMETLER
         * =========================== */}
        <section id="hizmetler" className="section">
          <div className="container">
            <h2 className="section-title">Hizmetler</h2>
            <p className="section-intro">
              Mali yükümlülüklerinizi güvenle yönetmeniz için uçtan uca hizmet
              sunuyorum.
            </p>
          </div>
        </section>

        {/* ===========================
         *  YUKARI ÇIK
         * =========================== */}
        <button
          id="scrollTopBtn"
          className="scroll-top-btn"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          ↑
        </button>
      </main>
    </>
  );
}
