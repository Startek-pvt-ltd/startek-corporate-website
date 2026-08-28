import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@/components/AppLink";
import { Footer } from "@/components/Footer";
import { InnerHero } from "@/components/InnerHero";
import { Navbar } from "@/components/Navbar";

export const metadata:Metadata={title:"Insights | Startek",description:"Practical perspectives on digital growth, web technology, branding and physical brand execution from across the Startek ecosystem.",alternates:{canonical:"/insights"},openGraph:{title:"Insights | Startek",description:"Practical perspectives from across the Startek ecosystem.",type:"website",url:"/insights",images:[]},twitter:{card:"summary",title:"Insights | Startek",description:"Practical perspectives from across the Startek ecosystem.",images:[]}};

const categories=[
  {title:"Digital Growth",text:"Marketing strategy, social media, advertising, content and brand growth."},
  {title:"Web & Technology",text:"Web development, software, performance, UX and emerging technology."},
  {title:"Brand & Print",text:"Brand consistency, printing, signage, packaging and physical customer experiences."},
];

export default function InsightsPage(){return <><Navbar/><main><InnerHero eyebrow="Insights" title={"Ideas for\nwhat's next."} text="Practical perspectives on digital growth, web technology, branding and physical brand execution from across the Startek ecosystem."/><section className="section insights-page-section"><div className="container"><div className="section-heading"><p className="eyebrow"><span>+</span>Explore by category</p><h2>Ideas Across the Ecosystem.</h2></div><div className="work-category-grid insights-category-grid">{categories.map((category,index)=><article key={category.title}><span>{String(index+1).padStart(2,"0")}</span><h2>{category.title}</h2><p>{category.text}</p></article>)}</div><div className="insights-empty-state"><span>Editorial programme</span><h2>Startek Insights is being prepared for publication.</h2><p>We&apos;ll use this space to share practical guides, technical perspectives and business insights from across our specialist divisions.</p><Link className="text-link" href="/contact">Discuss a Topic With Startek <ArrowUpRight size={16} aria-hidden="true"/></Link></div></div></section></main><Footer/></>}
