import Image from "next/image";
import { clients } from "@/data/site";

export function ClientMarquee() {
  const items = [...clients, ...clients];

  return (
    <div className="marquee" role="region" aria-label="Trusted client logos">
      <div className="marquee-track">
        {items.map((client, index) => (
          <div className="client-logo" key={client.name + "-" + index} aria-hidden={index >= clients.length}>
            <Image src={client.logo} alt={`${client.name} logo`} width={700} height={700} sizes="(max-width: 580px) 180px, 220px" />
          </div>
        ))}
      </div>
    </div>
  );
}
