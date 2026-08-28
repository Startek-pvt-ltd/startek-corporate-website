import Image from "next/image";
import { Link } from "@/components/AppLink";
import { ArrowDown,ArrowUpRight } from "lucide-react";
import { brandAssets,consultationUrl } from "@/data/company";

const heroBrands=[
  {key:"digital" as const,href:"/digital",label:"Startek Digital"},
  {key:"web-hub" as const,href:"/web-hub",label:"Startek Web Hub"},
  {key:"print-hub" as const,href:"/print-hub",label:"Startek Print Hub"},
];

export function Hero(){return <section className="hero" id="home"><div className="hero-grid" aria-hidden="true"/><div className="hero-glow" aria-hidden="true"/><div className="circuit circuit-a" aria-hidden="true"><i/><b/><span/></div><div className="circuit circuit-b" aria-hidden="true"><i/><b/><span/></div><div className="hero-inner"><p className="eyebrow"><span>+</span>Digital <i>•</i> Development <i>•</i> Print</p><h1>We build.<br/>We grow.<br/><span>We create.</span></h1><p className="hero-copy">One technology group connecting digital marketing, software development and physical branding to help modern businesses grow.</p><div className="hero-actions"><Link className="button" href={consultationUrl} target="_blank" rel="noopener noreferrer">Book a Consultation <ArrowUpRight size={16} aria-hidden="true"/></Link><Link className="text-link" href="#solutions">Explore Startek <ArrowDown size={15} aria-hidden="true"/></Link></div></div><div className="hero-brands" aria-label="Startek companies"><div className="hero-brands-heading"><span>Startek ecosystem</span><i aria-hidden="true"/></div><div className="hero-brand-grid">{heroBrands.map(({key,href,label})=><Link className="hero-brand-card" href={href} aria-label={`Explore ${label} in a new tab`} key={key}><Image src={brandAssets[key].logo} alt={`${label} official logo`} width={640} height={640} sizes="(max-width: 580px) 30vw, (max-width: 820px) 31vw, 190px"/></Link>)}</div></div><div className="hero-index" aria-hidden="true"><span>01</span><i/></div></section>}
