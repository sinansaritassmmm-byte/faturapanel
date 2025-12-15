// app/components/InfografikKdvTevkifat.tsx

export default function InfografikKdvTevkifat() {
  return (
    <section className="w-full rounded-3xl bg-gradient-to-br from-red-600 via-fuchsia-600 to-blue-600 px-6 py-10 text-white shadow-xl md:px-10 md:py-12">
      {/* Üst Başlık */}
      <header className="mb-8 text-center md:mb-10">
        <p className="text-sm font-semibold tracking-widest uppercase opacity-90">
          Pratik Bilgiler
        </p>
        <h1 className="mt-2 text-2xl font-bold md:text-3xl">
          KDV Tevkifatlı Faturalarda Yevmiye Kaydı
        </h1>
        <p className="mt-2 text-sm md:text-base opacity-90">
          Tevkifat mantığının ve satıcı / alıcı kayıtlarının sade bir özeti.
        </p>
      </header>

      {/* 1. Satır: Tanım + Oran */}
      <div className="mb-8 grid gap-6 md:grid-cols-[1.4fr,1fr]">
        {/* Tevkifat nedir */}
        <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
          <div className="mb-3 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-lg">
              🧾
            </div>
            <h2 className="text-lg font-semibold">KDV Tevkifatı Nedir?</h2>
          </div>
          <p className="text-sm leading-relaxed md:text-base">
            KDV tevkifatı, hesaplanan katma değer vergisinin tamamının
            satıcı tarafından beyan edilmesi yerine,{" "}
            <strong>belirli bir kısmının alıcı tarafından sorumlu sıfatıyla</strong>{" "}
            beyan edilmesini ifade eder. Böylece KDV&apos;nin bir bölümü
            satıcının 1 No&apos;lu KDV beyannamesiyle, kalan bölümü ise alıcının
            2 No&apos;lu KDV beyannamesiyle beyan edilir.
          </p>
        </div>

        {/* Oran kartı */}
        <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide opacity-80">
            Tevkifat Oranı
          </p>
          <p className="text-3xl font-bold">
            10 / 2 <span className="text-sm font-normal opacity-90">(örnek)</span>
          </p>
          <p className="mt-3 text-sm leading-relaxed md:text-base opacity-90">
            Tevkifat oranı, işlemin türüne göre Tebliğ&apos;de belirlenir. Buradaki
            örnekte KDV&apos;nin <strong>10&apos;da 2&apos;lik kısmı</strong> alıcı tarafından
            sorumlu sıfatıyla beyan edilmektedir.
          </p>
        </div>
      </div>

      {/* 2. Satır: Sayısal Örnek */}
      <div className="mb-8 rounded-2xl bg-white/10 p-5 backdrop-blur">
        <h2 className="mb-3 text-lg font-semibold">Örnek İşlem</h2>

        <div className="grid gap-4 md:grid-cols-4 text-sm md:text-base">
          <div className="rounded-xl bg-black/10 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide opacity-80">
              Hizmet / Mal Bedeli
            </p>
            <p className="mt-1 text-lg font-semibold">10.000 TL</p>
          </div>
          <div className="rounded-xl bg-black/10 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide opacity-80">
              KDV Oranı
            </p>
            <p className="mt-1 text-lg font-semibold">%20</p>
            <p className="mt-1 text-xs opacity-80">Hesaplanan KDV: 2.000 TL</p>
          </div>
          <div className="rounded-xl bg-black/10 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide opacity-80">
              Satıcı Tarafından Hesaplanacak KDV
            </p>
            <p className="mt-1 text-lg font-semibold">1.600 TL</p>
            <p className="mt-1 text-xs opacity-80">
              (10.000 × %20 × 8/10)
            </p>
          </div>
          <div className="rounded-xl bg-black/10 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide opacity-80">
              Alıcı Tarafından Tevkif Edilecek KDV
            </p>
            <p className="mt-1 text-lg font-semibold">400 TL</p>
            <p className="mt-1 text-xs opacity-80">
              (10.000 × %20 × 2/10)
            </p>
          </div>
        </div>

        <p className="mt-4 text-xs md:text-sm opacity-85">
          Toplam KDV tutarı 2.000 TL olup bunun 1.600 TL&apos;si satıcı tarafından
          1 No&apos;lu KDV beyannamesi ile, 400 TL&apos;si ise alıcı tarafından 2 No&apos;lu
          KDV beyannamesi ile beyan edilir.
        </p>
      </div>

      {/* 3. Satır: Yevmiye Kayıtları */}
      <div className="mb-8 grid gap-6 md:grid-cols-2">
        {/* Satıcı kaydı */}
        <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
          <div className="mb-3 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-lg">
              🧾
            </div>
            <h2 className="text-lg font-semibold">Satıcı Yevmiye Kaydı</h2>
          </div>

          <div className="rounded-xl bg-black/10 p-4 font-mono text-xs md:text-sm">
            <p>120 ALICILAR&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11.600</p>
            <p className="mt-1">    600 HİZMET GELİRLERİ&nbsp;&nbsp;&nbsp;&nbsp;10.000</p>
            <p>    391 HESAPLANAN KDV&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1.600</p>
          </div>

          <p className="mt-3 text-xs md:text-sm opacity-90">
            Satıcı, fatura tutarı olarak <strong>11.600 TL</strong> (10.000 + 1.600)
            düzenler ve yalnızca 1.600 TL&apos;lik KDV tutarını kendi 1 No&apos;lu KDV
            beyannamesinde beyan eder.
          </p>
        </div>

        {/* Alıcı kaydı */}
        <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
          <div className="mb-3 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-lg">
              🧾
            </div>
            <h2 className="text-lg font-semibold">Alıcı Yevmiye Kaydı</h2>
          </div>

          <div className="rounded-xl bg-black/10 p-4 font-mono text-xs md:text-sm">
            <p>740 / 770 GİDER HESABI&nbsp;&nbsp;&nbsp;10.000</p>
            <p>191 İNDİRİLECEK KDV&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1.600</p>
            <p>360 ÖDENECEK VERGİ VE FONLAR&nbsp;&nbsp;&nbsp;400</p>
            <p className="mt-1">
              &nbsp;&nbsp;&nbsp;&nbsp;320 SATICILAR&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11.600
            </p>
          </div>

          <p className="mt-3 text-xs md:text-sm opacity-90">
            Alıcı, tevkif edilen <strong>400 TL</strong> KDV&apos;yi 2 No&apos;lu KDV
            beyannamesi ile beyan eder; indirim konusu yapılacak KDV toplamı
            1.600 TL&apos;dir.
          </p>
        </div>
      </div>

      {/* Alt not */}
      <p className="mt-4 text-center text-[11px] leading-relaxed opacity-80">
        Bu örnek, KDV tevkifat mantığını basitçe göstermek amacıyla
        hazırlanmıştır. Gerçek işlemlerde tevkifat oranı, kapsam ve özel
        şartlar için güncel KDV Genel Tebliğleri ve ilgili mevzuat mutlaka
        dikkate alınmalıdır.
      </p>
    </section>
  );
}
