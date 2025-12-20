import type { Metadata } from "next";
import "./globals.css";

import Navbar from "./Navbar";
import Footer from "./Footer";

export const metadata: Metadata = {
  title: "Sinan Sarıtaş | SMMM",
  description:
    "İstanbul Sarıyer’de Serbest Muhasebeci Mali Müşavir Sinan Sarıtaş. Vergi, e-defter, e-fatura, SGK ve danışmanlık hizmetleri.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
