import { clients } from "@/data/site";

export function ClientMarquee() {
  const items = [...clients, ...clients];

  return (
    <div className="marquee" role="region" aria-label="Client logo placeholders">
      <div className="marquee-track">
        {items.map((client, index) => (
          <div className="client-logo" key={client + "-" + index} aria-hidden={index >= clients.length}>
            <span>{client}</span>
            <small>Placeholder</small>
          </div>
        ))}
      </div>
    </div>
  );
}
