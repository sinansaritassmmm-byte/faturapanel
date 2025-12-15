"use client";

import { useState } from "react";

const ALPHA_MENU_ITEMS: { label: string; href?: string }[] = [
  { label: "Anasayfa", href: "#hero" },
  { label: "Amortismanlar", href: "#amortismanlar" },
  { label: "Asgari Geçim İndirimi", href: "#asgari-gecim-indirimi" },
  { label: "Asgari Ücretler", href: "#asgari-ucretler" },
  { label: "Bağ-Kur", href: "#bagkur" },
  { label: "Beyanname Süreleri", href: "#vergi-takvimi" },
  { label: "Bizden Haberler", href: "#bizden-haberler" },
  { label: "Dilekçe ve Formlar", href: "#dilekce-form" },
  { label: "E-Bildirge", href: "#sgk" },
  { label: "Faaliyet Kodları ve Adları", href: "#faaliyet-kodlari" },
  { label: "Faydalı Linkler", href: "#faydali-linkler" },
  { label: "Had ve Miktarlar", href: "#had-miktarlar" },
  { label: "Hesaplamalar", href: "#hesaplamalar" },
  { label: "Dijital Vergi Dairesi", href: "#dijital-vergi" },
  { label: "İşçilik Maliyetleri", href: "#iscilik-maliyetleri" },
  { label: "Kanun ve Mevzuatlar", href: "#kanun-mevzuat" },
  { label: "KDV Oranları Listesi", href: "#kdv-oranlari" },
  { label: "Pratik Bilgiler", href: "#pratik-bilgiler" },
  { label: "Resmi Gazete", href: "#resmi-gazete" },
  { label: "Sorgulamalar", href: "#sorgulamalar" },
  { label: "SGK (Sigorta)", href: "#sgk" },
  { label: "Tek Düzen Hesap Planı", href: "#tdhp" },
  { label: "Vergi Takvimi", href: "#vergi-takvimi" },
  { label: "Vergi Türü Kodları", href: "#vergi-tur-kodlari" },
  { label: "Yıllık Ücretli İzinler", href: "#yillik-izinler" },
];

export default function PratikBilgiMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className="rounded-full border border-white/60 bg-white/10 px-6 py-2 text-sm font-semibold text-white shadow-sm backdrop-blur hover:bg-white/20 transition"
        onClick={() => setOpen(true)}
      >
        Pratik Bilgi Menüsü
      </button>

      {open && (
        <div className="fixed inset-0 z-40 flex items-start justify-center bg-black/40 backdrop-blur-sm">
          <div className="mt-24 w-full max-w-6xl rounded-3xl bg-slate-50 p-8 shadow-2xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Pratik Bilgi Menüsü
                </h2>
                <p className="mt-1 max-w-2xl text-sm text-slate-600">
                  Sık kullanılan mevzuat, hesaplama ve bilgi başlıklarına
                  buradan hızlıca ulaşabilirsiniz. Zamanla her başlık için ayrı
                  sayfalar ve detaylı içerikler eklenecektir.
                </p>
              </div>
              <button
                type="button"
                className="rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white hover:bg-slate-800"
                onClick={() => setOpen(false)}
              >
                Kapat
              </button>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {ALPHA_MENU_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href ?? "#pratik-bilgiler"}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-800 shadow-sm hover:border-red-400 hover:shadow-md transition"
                >
                  <span>{item.label}</span>
                  <span className="text-xs text-slate-400">›</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
