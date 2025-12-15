import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sinan Sarıtaş — SMMM | İstanbul Mali Müşavirlik Hizmeti",
  description:
    "Vergi, e-defter, e-fatura, beyanname, defter tasdik, şirket kuruluş ve danışmanlık süreçlerinde profesyonel mali müşavirlik hizmetleri.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body>
        <header className="site-header">
          <div className="container header-wrap">
            <div className="logo">Sinan Sarıtaş — SMMM</div>

            <input id="nav-toggle" type="checkbox" className="nav-toggle" />
            <label htmlFor="nav-toggle" className="nav-toggle-label">
              ☰
            </label>

            <nav>
              <ul>
                <li><a href="/">Anasayfa</a></li>
                <li><a href="/hizmetler">Hizmetler</a></li>
                <li><a href="/pratik-bilgiler">Pratik Bilgiler</a></li>
                <li><a href="/iletisim">İletişim</a></li>
                <li><a href="/kvkk">KVKK</a></li>
              </ul>
            </nav>
          </div>
        </header>

        {children}
      </body>
    </html>
  );
}
