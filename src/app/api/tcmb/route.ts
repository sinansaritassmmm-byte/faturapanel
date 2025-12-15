// src/app/api/tcmb/route.ts
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const revalidate = 0;

type Fx = {
  USD?: number;
  EUR?: number;
  GBP?: number;
};

export async function GET() {
  try {
    const res = await fetch("https://www.tcmb.gov.tr/kurlar/today.xml", {
      cache: "no-store",
      headers: {
        "User-Agent": "Mozilla/5.0",
        "Accept": "application/xml,text/xml;q=0.9,*/*;q=0.8",
      },
    });

    if (!res.ok) {
      return NextResponse.json(
        { ok: false, error: "TCMB fetch failed", status: res.status },
        { status: 502 }
      );
    }

    const xmlText = await res.text();

    const pick = (code: string) => {
      const re = new RegExp(
        `<Currency[^>]*CurrencyCode="${code}"[\\s\\S]*?<ForexSelling>([^<]+)</ForexSelling>`,
        "i"
      );
      const m = xmlText.match(re);
      if (!m?.[1]) return undefined;
      const n = parseFloat(m[1].replace(",", "."));
      return Number.isFinite(n) ? n : undefined;
    };

    const data: Fx = {
      USD: pick("USD"),
      EUR: pick("EUR"),
      GBP: pick("GBP"),
    };

    return NextResponse.json({ ok: true, data }, { status: 200 });
  } catch (e: any) {
    return NextResponse.json(
      { ok: false, error: e?.message || "unknown error" },
      { status: 500 }
    );
  }
}
