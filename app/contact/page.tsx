import type { Metadata } from "next";
import { Link } from "@/components/AppLink";
import { ArrowUpRight,Clock3,Mail,MapPin,Phone } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { InnerHero } from "@/components/InnerHero";
import { ContactForm } from "@/components/ContactForm";
import { consultationUrl,officialEmail,socialLinks } from "@/data/company";

export const metadata:Metadata={title:"Contact Startek | Start a Project",description:"Contact Startek to discuss digital marketing, web development, software solutions, printing, signage, packaging or integrated business solutions.",alternates:{canonical:"/contact"},openGraph:{title:"Contact Startek | Start a Project",description:"Discuss a digital, development, print or integrated project with Startek.",type:"website",url:"/contact",images:[]},twitter:{card:"summary",title:"Contact Startek | Start a Project",description:"Discuss a digital, development, print or integrated project with Startek.",images:[]}};

const contactCards=[
  {icon:Mail,title:"Email",text:officialEmail,href:`mailto:${officialEmail}`},
  {icon:Phone,title:"Phone",text:"070 593 5320",href:"tel:+94705935320"},
  {icon:MapPin,title:"Location",text:"STARTEK (PVT) LTD",href:"#location"},
  {icon:Clock3,title:"Availability",text:"9:00 AM – 11:00 PM",href:""},
];
const mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.3854688859565!2d80.04390537463941!3d6.844307719352933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae24d002655c8f3%3A0x1da324409b59c5c4!2sSTARTEK%20(PVT)%20LTD!5e0!3m2!1sen!2slk!4v1787929096715!5m2!1sen!2slk";

export default function ContactPage(){return <><Navbar/><main><InnerHero eyebrow="Contact Startek" title={"Let's build\nsomething useful."} text="Tell us where you want to go. We’ll help identify the right combination of strategy, digital, development and production support." label="Project enquiries"/><section className="section contact-section"><div className="container"><div className="contact-layout"><div className="contact-primary"><div className="section-heading"><p className="eyebrow"><span>+</span>Project enquiry</p><h2>Start with the brief.</h2><p className="section-copy">Share the essentials below. Required fields are marked with an asterisk.</p></div><ContactForm/></div><aside className="contact-aside"><div><p className="eyebrow"><span>+</span>Direct contact</p><h2>Let&apos;s talk.</h2><p>Reach Startek directly, schedule a consultation or use the project enquiry form to tell us what you are planning.</p></div><div className="contact-booking"><p>Prefer a scheduled conversation?</p><Link className="button" href={consultationUrl} target="_blank" rel="noopener noreferrer">Book Business Consultation <ArrowUpRight size={16} aria-hidden="true"/></Link></div><div className="contact-card-grid">{contactCards.map(card=><article key={card.title}><card.icon size={18} aria-hidden="true"/><span>{card.title}</span>{card.href?<Link href={card.href}>{card.text}</Link>:<strong>{card.text}</strong>}</article>)}</div><div className="contact-social"><p>Official social channels</p>{socialLinks.map(link=><Link href={link.href} key={link.label} target="_blank" rel="noopener noreferrer" aria-label={`Startek on ${link.label}`}>{link.label}<ArrowUpRight size={15} aria-hidden="true"/></Link>)}</div></aside></div><div className="contact-map" id="location"><div><p className="eyebrow"><span>+</span>Our location</p><h2>Find Startek.</h2></div><iframe src={mapEmbedUrl} width="600" height="450" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="strict-origin-when-cross-origin" title="STARTEK (PVT) LTD location on Google Maps"/></div></div></section></main><Footer/></>}
