import { NextResponse } from "next/server";

export async function GET() {
  try {
    // /api/tcmb'yi çağırıp aynı cevabı döndürebilirsin (tek kaynak)
    const r = await fetch("http://localhost:3000/api/tcmb", { cache: "no-store" });

    if (!r.ok) {
      return NextResponse.json(
        { ok: false, error: "FX kaynak hatası" },
        { status: 502, headers: { "Cache-Control": "no-store" } }
      );
    }

    const j = await r.json();

    return NextResponse.json(j, {
      headers: {
        "Cache-Control": "public, s-maxage=1800, stale-while-revalidate=3600",
      },
    });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Sunucu hatası" },
      { status: 500, headers: { "Cache-Control": "no-store" } }
    );
  }
}
