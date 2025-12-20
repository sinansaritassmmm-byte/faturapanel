import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hizmetler | Sinan Sarıtaş SMMM",
  description:
    "Vergi, e-defter, e-fatura, SGK, bordro, beyanname, raporlama ve danışmanlık hizmetleri. İstanbul Sarıyer’de SMMM Sinan Sarıtaş.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
