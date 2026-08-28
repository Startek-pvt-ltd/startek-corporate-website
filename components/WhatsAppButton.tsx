import { FaWhatsapp } from "react-icons/fa6";
import { Link } from "@/components/AppLink";
import { whatsappUrl } from "@/data/company";

export function WhatsAppButton() {
  return (
    <Link
      className="whatsapp-float"
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact Startek on WhatsApp"
      title="Contact Startek on WhatsApp"
    >
      <FaWhatsapp size={31} aria-hidden="true" />
    </Link>
  );
}
