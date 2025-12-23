import { sektorler } from "../sektorData";
import { notFound } from "next/navigation";
import SectorCTA from "@/app/components/SectorCTA";

type Props = {
  params: { slug: string };
};

export default function Page({ params }: Props) {
  const sektor = sektorler[params.slug as keyof typeof sektorler];

  if (!sektor) return notFound();

  return (
    <main className="section">
      <div className="container prose max-w-3xl">

        <h1>{sektor.title}</h1>

        {sektor.intro.map((text, i) => (
          <p key={i}>{text}</p>
        ))}

        <h2>Bu sektörde sunduğumuz başlıca hizmetler</h2>

        <ul>
          {sektor.services.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <SectorCTA />
      </div>
    </main>
  );
}
