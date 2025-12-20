import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni | Sinan Sarıtaş SMMM",
  description:
    "Sinan Sarıtaş Serbest Muhasebeci Mali Müşavir olarak 6698 sayılı KVKK kapsamındaki aydınlatma metni.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
