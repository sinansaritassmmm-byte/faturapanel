export type VergiKalemi = {
  gun: number;
  baslik: string;
  aciklama?: string;
};

export function vergiTakvimiForMonth(date = new Date()): VergiKalemi[] {
  const month = date.getMonth(); // 0-11
  const year = date.getFullYear();

  // Genel kurallar (resmi erteleme/CBK hariç):
  // KDV + Muhtasar/Prim Hizmet: takip eden ayın 26'sı
  // BA/BS: takip eden ayın son günü (çoğu mükellef için)
  // Damga: ilgili beyannameye göre değişir, burada örnek bilgi
  const list: VergiKalemi[] = [
    {
      gun: 26,
      baslik: "KDV Beyannamesi",
      aciklama: "Takip eden ayın 26’sı (resmi ertelemeler ayrıca duyurulur).",
    },
    {
      gun: 26,
      baslik: "Muhtasar ve Prim Hizmet Beyannamesi",
      aciklama: "Takip eden ayın 26’sı.",
    },
    {
      gun: 17,
      baslik: "Geçici Vergi Beyannamesi",
      aciklama:
        "3 aylık dönemlerde, ilgili dönemi izleyen 2. ayın 17’si (genel kural).",
    },
    {
      gun: new Date(year, month + 1, 0).getDate(),
      baslik: "BA / BS Formları",
      aciklama: "Takip eden ayın son günü (zorunlu mükellefler için).",
    },
  ];

  // Gün sırasına göre diz
  return list.sort((a, b) => a.gun - b.gun);
}
