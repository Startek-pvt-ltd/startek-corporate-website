import Image from "next/image";
import { clients } from "@/data/site";

export function ClientMarquee() {
  const items = [...clients, ...clients];

  return (
    <div className="marquee" role="region" aria-label="Trusted client logos">
      <div className="marquee-track">
        {items.map((client, index) => (
          <div className="client-logo" key={client.name + "-" + index} aria-hidden={index >= clients.length}>
            <span className="client-logo-media">
              <Image src={client.logo} alt={`${client.name} logo`} fill sizes="(max-width: 580px) 200px, 250px" />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
