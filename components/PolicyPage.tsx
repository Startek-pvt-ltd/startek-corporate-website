import { Link } from "@/components/AppLink";
import { ArrowUpRight } from "lucide-react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

type PolicySection={title:string;content:string[]};
export function PolicyPage({eyebrow,title,intro,sections}:{eyebrow:string;title:string;intro:string;sections:PolicySection[]}){return <><Navbar/><main id="home"><section className="legal-hero"><div className="container"><p className="eyebrow"><span>+</span>{eyebrow}</p><h1>{title}</h1><p>{intro}</p></div></section><section className="section legal-section"><div className="container legal-layout"><aside><span>Informational website policy</span><p>Last reviewed: August 2026</p></aside><div className="legal-content">{sections.map(section=><section key={section.title}><h2>{section.title}</h2>{section.content.map(paragraph=><p key={paragraph}>{paragraph}</p>)}</section>)}<div className="legal-contact"><p>Questions about this policy?</p><Link className="text-link" href="/contact">Contact Startek <ArrowUpRight size={16} aria-hidden="true"/></Link></div></div></div></section></main><Footer/></>}
