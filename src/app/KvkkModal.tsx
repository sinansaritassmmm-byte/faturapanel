"use client";
import { useState } from "react";

export default function KvkkModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Tetikleyen Buton */}
      <button
        onClick={() => setOpen(true)}
        className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
      >
        KVKK Aydınlatma Metni
      </button>

      {/* Modal Alanı */}
      {open && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-[9999]">
          <div className="bg-white max-w-3xl w-full max-h-[80vh] overflow-y-auto p-6 rounded-lg shadow-xl">
            
            {/* Başlık */}
            <h2 className="text-2xl font-bold mb-4">KVKK Aydınlatma Metni</h2>

            {/* İçerik */}
            <div className="space-y-4 text-gray-800 leading-relaxed">
              <p>
                6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) uyarınca,
                veri sorumlusu sıfatıyla Serbest Muhasebeci Mali Müşavir
                <strong> Sinan Sarıtaş </strong> olarak; mükelleflerimin ve ilgili kişilerin kişisel
                verilerini yalnızca mevzuata uygun olarak işlemekteyim.
              </p>

              <h3 className="font-semibold text-lg">1. Veri Sorumlusu</h3>
              <p>
                Veri sorumlusu: Sinan Sarıtaş — Serbest Muhasebeci Mali Müşavir<br />
                Adres: TARABYA MAH. ARABA YOLU CAD. NO: 194 B İÇ KAPI NO: 5, SARIYER / İSTANBUL
              </p>

              <h3 className="font-semibold text-lg">
                2. İşlenen Kişisel Veriler ve Toplama Yöntemi
              </h3>
              <p>
                Kimlik, iletişim, finans, vergi, muhasebe kayıtları, işlem bilgisi; ofis görüşmeleri,
                elektronik posta, telefon, WhatsApp ve resmi kurum sistemleri (GİB, SGK vb.) üzerinden
                elde edilen veriler.
              </p>

              <h3 className="font-semibold text-lg">
                3. Kişisel Verilerin İşlenme Amaçları
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Vergi, muhasebe, SGK ve bordro hizmetlerinin yürütülmesi,</li>
                <li>Beyanname ve bildirim süreçlerinin işletilmesi,</li>
                <li>Sözleşmesel yükümlülüklerin yerine getirilmesi,</li>
                <li>Muhasebe kayıtlarının mevzuata uygun tutulması,</li>
                <li>Taleplerin değerlendirilmesi ve hukuki süreçlerin yürütülmesi.</li>
              </ul>

              <h3 className="font-semibold text-lg">4. Kişisel Verilerin Aktarılması</h3>
              <p>
                Kişisel veriler; yasal yükümlülük kapsamında GİB, SGK, mahkemeler ve hizmet alınan
                yazılım firmalarına aktarılabilir.
              </p>

              <h3 className="font-semibold text-lg">5. Saklama Süreleri</h3>
              <p>
                Kişisel veriler mevzuatta öngörülen süre boyunca saklanır; süre dolunca silinir,
                yok edilir veya anonim hale getirilir.
              </p>
            </div>

            {/* Kapatma Butonu */}
            <div className="mt-6 text-right">
              <button
                onClick={() => setOpen(false)}
                className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-800"
              >
                Kapat
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
