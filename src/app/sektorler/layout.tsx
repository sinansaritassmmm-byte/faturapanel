import type { Metadata } from "next";
import type { ReactNode } from "react";
import SectorCTAFromPath from "../components/SectorCTAFromPath";

export const metadata: Metadata = {
  title: "Hizmet Verdiğimiz Sektörler | Sinan Sarıtaş SMMM",
  description:
    "E-ticaret, kargo-kurye, imalat, restoran, serbest meslek ve daha birçok sektör için muhasebe ve mali müşavirlik hizmetleri.",
};

export default function SektorlerLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <SectorCTAFromPath />
    </>
  );
}
