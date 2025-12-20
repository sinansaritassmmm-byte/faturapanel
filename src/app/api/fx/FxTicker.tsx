"use client";

import { useEffect, useMemo, useState } from "react";

type FxRow = {
  code: string;
  name: string;
  forexBuying?: number;
  forexSelling?: number;
  banknoteBuying?: number;
  banknoteSelling?: number;
};

type FxPayload = {
  ok: boolean;
  asOf?: string;
  list?: FxRow[];
};

function fmt(n?: number) {
  if (typeof n !== "number" || !isFinite(n)) return "-";
  return n.toLocaleString("tr-TR", { minimumFractionDigits: 4, maximumFractionDigits: 4 });
}

export default function FxTicker() {
  const [data, setData] = useState<FxPayload>({ ok: false });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let alive = true;

    async function load() {
      try {
        setLoading(true);
        const res = await fetch("/api/fx", { cache: "no-store" });
        const json = (await res.json()) as FxPayload;
        if (alive) setData(json);
      } catch {
        if (alive) setData({ ok: false });
      } finally {
        if (alive) setLoading(false);
      }
    }

    load();
    const id = setInterval(load, 1000 * 60 * 30); // 30 dk
    return () => {
      alive = false;
      clearInterval(id);
    };
  }, []);

  const items = useMemo(() => {
    const list = data?.list ?? [];
    // İstersen burada filtre koyabiliriz (ör: sadece en çok kullanılanlar)
    return list;
  }, [data]);

  return (
    <div className="w-full border-b bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-2">
        <div className="flex items-center gap-3">
          <div className="shrink-0 text-xs font-semibold opacity-80">
            {loading ? "Kur Bandı yükleniyor..." : `TCMB ${data?.asOf ?? ""}`}
          </div>

          <div className="relative w-full overflow-hidden">
            <div className="ticker flex w-max items-center gap-6 pr-6">
              {items.map((x) => (
                <span key={x.code} className="whitespace-nowrap text-xs">
                  <strong>{x.code}</strong>{" "}
                  <span className="opacity-70">A:</span> {fmt(x.forexBuying)}{" "}
                  <span className="opacity-70">S:</span> {fmt(x.forexSelling)}
                </span>
              ))}
              {/* Kesintisiz akış için ikinci kez */}
              {items.map((x) => (
                <span key={x.code + "-2"} className="whitespace-nowrap text-xs">
                  <strong>{x.code}</strong>{" "}
                  <span className="opacity-70">A:</span> {fmt(x.forexBuying)}{" "}
                  <span className="opacity-70">S:</span> {fmt(x.forexSelling)}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .ticker {
          animation: scroll 45s linear infinite;
        }
        .ticker:hover {
          animation-play-state: paused;
        }
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
