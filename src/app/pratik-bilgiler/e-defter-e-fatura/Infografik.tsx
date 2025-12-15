export default function Infografik() {
  return (
    <section className="mx-auto mt-10 max-w-4xl rounded-3xl bg-gradient-to-br from-red-600 via-fuchsia-600 to-blue-600 px-6 py-8 text-white shadow-xl md:px-10 md:py-10">
      {/* Üst Başlık */}
      <header className="mb-8 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] opacity-90">
          Pratik Bilgiler
        </p>
        <h1 className="mt-2 text-2xl font-bold md:text-3xl">
          E-Defter &amp; E-Fatura Nedir?
        </h1>
        <p className="mt-2 text-sm md:text-base opacity-90">
          Temel kavramlar ve zorunluluk kapsamı – sade ve görsel bir özet.
        </p>
      </header>

      {/* 1. Satır: Tanımlar */}
      <div className="mb-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
          <h2 className="mb-2 text-lg font-semibold">📘 E-Defter Nedir?</h2>
          <p className="text-sm leading-relaxed md:text-base">
            Vergi Usul Kanunu kapsamındaki{" "}
            <strong>yevmiye</strong> ve <strong>büyük defter</strong> kayıtlarının
            elektronik ortamda oluşturulması, saklanması ve ibraz edilmesidir.
          </p>
        </div>

        <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
          <h2 className="mb-2 text-lg font-semibold">📄 E-Fatura Nedir?</h2>
          <p className="text-sm leading-relaxed md:text-base">
            Kağıt fatura ile aynı hukuki niteliklere sahip elektronik faturadır.
            Düzenleme, iletim ve saklama Gelir İdaresi Başkanlığı sistemi
            üzerinden dijital ortamda yürütülür.
          </p>
        </div>
      </div>

      {/* 2. Satır: Kimler zorunlu? */}
      <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
        <h2 className="mb-4 text-lg font-semibold">Kimler E-Defter / E-Fatura Kullanmak Zorundadır?</h2>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-xl bg-black/10 p-4">
            <p className="mb-1 text-[11px] font-semibold uppercase tracking-wide opacity-80">
              Ciro Sınırı
            </p>
            <p className="text-sm leading-relaxed">
              İlgili tebliğlerde yer alan <strong>brüt satış hasılatı</strong>{" "}
              sınırını aşan mükellefler belirlenen tarihten itibaren e-Fatura ve
              e-Defter uygulamalarına geçmekle yükümlüdür.
            </p>
          </div>

          <div className="rounded-xl bg-black/10 p-4">
            <p className="mb-1 text-[11px] font-semibold uppercase tracking-wide opacity-80">
              Sektörel Zorunluluklar
            </p>
            <p className="text-sm leading-relaxed">
              Akaryakıt, otomotiv, e-ticaret, maden, inşaat taahhüt gibi bazı
              faaliyet alanlarında cirodan bağımsız olarak e-Belge
              zorunluluğu getirilebilmektedir.
            </p>
          </div>

          <div className="rounded-xl bg-black/10 p-4">
            <p className="mb-1 text-[11px] font-semibold uppercase tracking-wide opacity-80">
              E-Arşiv Fatura
            </p>
            <p className="text-sm leading-relaxed">
              Belirli tutarın üzerindeki satışlarda ve internet üzerinden
              yapılan bazı işlemlerde, e-Arşiv Fatura düzenleme zorunluluğu
              bulunmaktadır.
            </p>
          </div>
        </div>

        <p className="mt-3 text-[11px] opacity-80">
          * Güncel ciro sınırları ve kapsam için GİB tebliğleri mutlaka kontrol edilmelidir.
        </p>
      </div>

      <p className="mt-6 text-center text-[11px] leading-relaxed opacity-85">
        Bu görsel yalnızca genel bilgilendirme amaçlıdır. Uygulama öncesinde
        güncel Gelir İdaresi Başkanlığı tebliğleri ve ilgili mevzuat mutlaka dikkate alınmalıdır.
      </p>
    </section>
  );
}
