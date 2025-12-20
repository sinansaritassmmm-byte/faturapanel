import { NextResponse } from "next/server";

export async function GET() {
  try {
    // TCMB today.xml
    const res = await fetch("https://www.tcmb.gov.tr/kurlar/today.xml", {
      // Server-side fetch; caching'i response header ile yöneteceğiz
      cache: "no-store",
    });

    if (!res.ok) {
      return NextResponse.json(
        { ok: false, error: "TCMB yanıt vermedi" },
        { status: 502, headers: { "Cache-Control": "no-store" } }
      );
    }

    const text = await res.text();

    const pick = (code: string) => {
      // ForexSelling / ForexBuying alanlarını regex ile çekiyoruz (XML parse yerine hızlı ve sağlam)
      // CurrencyCode="USD" ... <ForexBuying>..</ForexBuying> <ForexSelling>..</ForexSelling>
      const block = text.match(
        new RegExp(`CurrencyCode="${code}"[\\s\\S]*?<\\/Currency>`, "m")
      )?.[0];

      if (!block) return null;

      const buying = block.match(/<ForexBuying>(.*?)<\/ForexBuying>/)?.[1] ?? null;
      const selling = block.match(/<ForexSelling>(.*?)<\/ForexSelling>/)?.[1] ?? null;

      const toNum = (v: string | null) => {
        if (!v) return null;
        const n = parseFloat(v.replace(",", "."));
        return Number.isFinite(n) ? n : null;
      };

      return { buying: toNum(buying), selling: toNum(selling) };
    };

    const currencies = ["USD", "EUR", "GBP", "CHF", "JPY", "SAR", "RUB", "AUD", "CAD", "SEK", "NOK", "DKK", "KWD", "QAR"] as const;

    const data: Record<string, { buying: number | null; selling: number | null }> = {};
    for (const c of currencies) {
      data[c] = pick(c) ?? { buying: null, selling: null };
    }

    return NextResponse.json(
      { ok: true, data },
      {
        headers: {
          // 30 dk cache + stale revalidate
          "Cache-Control": "public, s-maxage=1800, stale-while-revalidate=3600",
        },
      }
    );
  } catch (e) {
    return NextResponse.json(
      { ok: false, error: "Sunucu hatası" },
      { status: 500, headers: { "Cache-Control": "no-store" } }
    );
  }
}
