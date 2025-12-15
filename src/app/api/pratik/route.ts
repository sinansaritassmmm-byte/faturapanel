import { NextResponse } from "next/server";

function pickNumberTR(text: string): string | null {
  // 26.005,50 gibi sayı yakala
  const m = text.match(/(\d{1,3}(?:\.\d{3})*,\d{2})/);
  return m ? m[1] : null;
}

function pickAllNumberTR(text: string): string[] {
  // DÖNÜŞ TİPİNİ KİLİTLİYORUZ → string[]
  const matches = text.match(/\d{1,3}(?:\.\d{3})*,\d{2}/g);
  return matches ?? [];
}

export async function GET() {
  try {
    // 1) SGK: Prime Esas Kazanç (alt/üst sınır) - Resmî
    let sgk = {
      gunlukAlt: null as string | null,
      aylikAlt: null as string | null,
      gunlukUst: null as string | null,
      aylikUst: null as string | null,
      kaynak: "SGK",
    };

    try {
      const sgkUrl =
        "https://www.sgk.gov.tr/Content/Post/2e0c9e1a-2cfe-4456-af10-49d3de0c58ba/Prime-Esas-Kazanc-Miktarlari-2025-02-10-10-07-31";
      const r = await fetch(sgkUrl, { cache: "no-store" });
      const html = await r.text();

      // Sayfada “Günlük kazanç alt sınırı : 866,85 TL” gibi geçiyor.
      const gunlukAlt =
        html.match(/Günlük kazanç alt sınırı\s*:\s*([\d\.,]+)/)?.[1] ?? null;
      const aylikAlt =
        html.match(/Aylık kazanç alt sınırı\s*:\s*([\d\.,]+)/)?.[1] ?? null;
      const gunlukUst =
        html.match(/Günlük kazanç üst sınırı\s*:\s*([\d\.,]+)/)?.[1] ?? null;
      const aylikUst =
        html.match(/Aylık kazanç üst sınırı\s*:\s*([\d\.,]+)/)?.[1] ?? null;

      sgk = { ...sgk, gunlukAlt, aylikAlt, gunlukUst, aylikUst };
    } catch {
      // Sessiz fallback
    }

    // 2) Asgari ücret: ÇSGB haber sayfasından (Resmî) en azından NET değeri çekelim
    let asgari = {
      net: null as string | null,
      brut: null as string | null,
      kaynak: "ÇSGB",
    };

    try {
      const csgbUrl =
        "https://www.csgb.gov.tr/haberler/2025-yilinda-uygulanacak-yeni-asgari-ucret-22-bin-104-lira-olarak-belirlendi/";
      const r = await fetch(csgbUrl, { cache: "no-store" });
      const html = await r.text();

      // Net değer için metinde TR sayı varsa yakalarız:
      const all: string[] = pickAllNumberTR(html);
      const netGuess = all.find((x) => x.includes("22.104")) ?? null;

      // Brüt için SGK aylık alt sınırı proxy (boşsa fallbackta zaten dolacak)
      asgari = { ...asgari, net: netGuess, brut: sgk.aylikAlt ?? null };
    } catch {
      // Sessiz fallback
      asgari = { ...asgari, brut: sgk.aylikAlt ?? null };
    }

    // 3) KDV oranları: GİB sayfası (Resmî)
    const kdv = {
      oranlar: ["%1", "%10", "%20"],
      kaynak: "GİB",
      link: "https://www.gib.gov.tr/yardim-ve-kaynaklar/yararli-bilgiler/kdv-oranlari-listesi",
    };

    // Fallback değerler (hiç veri çekilemezse)
    const fallback = {
      asgari: { net: "22.104,67", brut: "26.005,50", kaynak: "Fallback" },
      sgk: {
        gunlukAlt: "866,85",
        aylikAlt: "26.005,50",
        gunlukUst: "6.501,38",
        aylikUst: "195.041,40",
        kaynak: "Fallback",
      },
      kdv,
    };

    const data = {
      asgari: {
        net: asgari.net ?? fallback.asgari.net,
        brut: asgari.brut ?? fallback.asgari.brut,
        kaynak: asgari.kaynak,
      },
      sgk: {
        gunlukAlt: sgk.gunlukAlt ?? fallback.sgk.gunlukAlt,
        aylikAlt: sgk.aylikAlt ?? fallback.sgk.aylikAlt,
        gunlukUst: sgk.gunlukUst ?? fallback.sgk.gunlukUst,
        aylikUst: sgk.aylikUst ?? fallback.sgk.aylikUst,
        kaynak: sgk.kaynak,
      },
      kdv,
      generatedAt: new Date().toISOString(),
    };

    return NextResponse.json({ ok: true, data });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
