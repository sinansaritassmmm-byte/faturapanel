"use client";

import { useEffect, useState } from "react";

type Rates = {
  USD: number | null;
  EUR: number | null;
  GBP: number | null;
  ts: string;
};

export default function Kurlar() {
  const [rates, setRates] = useState<Rates | null>(null);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    let alive = true;

    async function load() {
      try {
        const r = await fetch("/api/tcmb", { cache: "no-store" });
        const j = await r.json();

        if (!alive) return;

        if (!j?.ok) {
          setErr(j?.error || "Kur verisi alınamadı");
          return;
        }

        setRates(j.data);
      } catch (e: any) {
        if (!alive) return;
        setErr(e?.message || "Kur verisi alınamadı");
      }
    }

    load();
    const id = setInterval(load, 60_000); // her 1 dk yenile
    return () => {
      alive = false;
      clearInterval(id);
    };
  }, []);

  if (err) {
    return (
      <div className="kur-list">
        <p>Kur verisi alınamadı.</p>
        <p className="note">{err}</p>
      </div>
    );
  }

  if (!rates) {
    return (
      <div className="kur-list">
        <p>Kur verisi yükleniyor…</p>
      </div>
    );
  }

  const fmt = (v: number | null) =>
    v == null ? "-" : v.toLocaleString("tr-TR", { minimumFractionDigits: 4 });

  return (
    <div className="kur-list">
      <p>USD: {fmt(rates.USD)}</p>
      <p>EUR: {fmt(rates.EUR)}</p>
      <p>GBP: {fmt(rates.GBP)}</p>
      <p className="note">
        Son güncelleme: {new Date(rates.ts).toLocaleString("tr-TR")}
      </p>
    </div>
  );
}
