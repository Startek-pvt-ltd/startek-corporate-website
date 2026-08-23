import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { InnerHero } from "@/components/InnerHero";
import { WorkGallery } from "@/components/WorkGallery";
import { FeaturedCaseStudy } from "@/components/FeaturedCaseStudy";
import { workProjects } from "@/data/work";

export const metadata:Metadata={title:"Our Work | Startek",description:"Explore selected sample projects across digital marketing, web development, software solutions, printing, branding and physical production.",openGraph:{title:"Our Work | Startek",description:"Explore selected sample projects across digital marketing, web development, software solutions, printing, branding and physical production.",images:[]},twitter:{card:"summary",title:"Our Work | Startek",description:"Explore selected sample projects across digital marketing, web development, software solutions, printing, branding and physical production.",images:[]}};

export default function WorkPage(){return <><Navbar/><main><InnerHero eyebrow="Selected work" title={"Ideas made\nreal."} text="Explore how strategy, technology, creativity and production can work together across one connected Startek ecosystem." label="Portfolio · Sample projects"/><section className="section work-gallery-section"><div className="container"><div className="section-heading"><p className="eyebrow"><span>+</span>Project archive</p><h2>Work across every touchpoint.</h2><p className="section-copy">The projects below are clearly marked demonstrations of the kind of integrated thinking and execution Startek can deliver. They do not represent commissioned client work.</p></div><WorkGallery/></div></section><section className="section feature-section"><div className="container"><div className="section-heading"><p className="eyebrow"><span>+</span>Featured case study</p><h2>A connected growth system.</h2></div><FeaturedCaseStudy project={workProjects[0]}/></div></section><section className="page-cta"><div className="container"><div><p className="eyebrow"><span>+</span>Your project</p><h2>Ready to make the next one yours?</h2></div><Link className="button" href="/contact">Start a Project <ArrowUpRight size={16}/></Link></div></section></main><Footer/></>}
