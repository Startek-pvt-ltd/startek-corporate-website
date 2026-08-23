import Link from "next/link";
import Image from "next/image";
import { ArrowDown,ArrowRight,ArrowUpRight,BarChart3,Blocks,BriefcaseBusiness,Building2,Cloud,Compass,Database,Flag,Gift,Gauge,LayoutPanelTop,Mail,Megaphone,MessageCircle,MousePointer2,Package,PenTool,Plug,RefreshCw,Search,ShoppingCart,Signpost,Sparkles,Target,TrendingUp,Users,Video,Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { DivisionPageData } from "@/data/division-pages";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { DivisionProcess } from "./DivisionProcess";
import { FAQ } from "./FAQ";
import { brandAssets,divisionSocialLinks,type BrandKey } from "@/data/company";

const iconMap:Record<string,LucideIcon>={message:MessageCircle,target:Target,megaphone:Megaphone,search:Search,sparkles:Sparkles,pen:PenTool,video:Video,trending:TrendingUp,compass:Compass,mail:Mail,chart:BarChart3,users:Users,building:Building2,layout:LayoutPanelTop,cart:ShoppingCart,blocks:Blocks,mouse:MousePointer2,database:Database,refresh:RefreshCw,plug:Plug,gauge:Gauge,cloud:Cloud,wrench:Wrench,briefcase:BriefcaseBusiness,signpost:Signpost,package:Package,gift:Gift,flag:Flag};

export function DivisionPage({data}:{data:DivisionPageData}){const brandKey=(data.theme==="web"?"web-hub":data.theme==="print"?"print-hub":"digital") satisfies Exclude<BrandKey,"startek">;const contactHref=`/contact?division=${brandKey}`;const brand=brandAssets[brandKey];const socials=divisionSocialLinks[brandKey];return <main className={`division-page theme-${data.theme}`}><Navbar/>
  <section className="division-hero" id="home"><div className="division-hero-grid" aria-hidden="true"/><div className="division-hero-signal" aria-hidden="true"><i/><i/><i/><span/></div><Image className="division-brand-logo" src={brand.logo} alt={`${brand.name} official logo`} width={640} height={640} sizes="(max-width: 820px) 180px, 300px"/><div className="container division-hero-inner"><Reveal><p className="eyebrow"><span>+</span>{data.eyebrow}</p><h1>{data.headline.split("\n").map((line,i)=><span key={line}>{line}{i<data.headline.split("\n").length-1&&<br/>}</span>)}</h1><p>{data.heroText}</p><div className="hero-actions"><Link className="button" href={contactHref}>{data.primaryCta}<ArrowUpRight size={16} aria-hidden="true"/></Link><Link className="text-link" href="#work">{data.secondaryCta}<ArrowDown size={15} aria-hidden="true"/></Link></div></Reveal></div><div className="division-hero-label" aria-hidden="true"><span>{data.theme.toUpperCase()}</span><i/></div></section>

  <section className="section division-overview"><div className="container division-overview-layout"><Reveal><SectionHeading eyebrow="Positioning" title={data.overviewTitle} copy={data.overviewText}/></Reveal><div className="division-capabilities">{data.capabilities.map((item,i)=><Reveal key={item} delay={i*.06}><div><span>0{i+1}</span><strong>{item}</strong><ArrowUpRight size={15}/></div></Reveal>)}</div></div></section>

  <section className="section division-services" id="services"><div className="container"><Reveal><SectionHeading eyebrow={`${data.brand} Services`} title={data.servicesTitle} copy={data.theme==="print"?"A coordinated range of print and physical brand solutions, selected around the application, quantity and specification.":"Specialist services that can work independently or combine into one focused solution."}/></Reveal><div className={`division-service-grid ${data.theme==="print"?"category-grid":""}`}>{data.services.map((service,i)=>{const Icon=iconMap[service.icon]||Sparkles;return <Reveal key={service.title} delay={(i%4)*.04}><article className="division-service-card"><div className="service-card-top"><Icon size={21}/><span>{String(i+1).padStart(2,"0")}</span></div><h3>{service.title}</h3><p>{service.description}</p>{service.items&&<div className="category-items">{service.items.map(item=><span key={item}>{item}</span>)}</div>}</article></Reveal>})}</div></div></section>

  <section className="section division-value"><div className="container"><Reveal><SectionHeading eyebrow={data.valueEyebrow} title={data.valueTitle}/></Reveal><div className={`division-value-grid count-${data.valueItems.length}`}>{data.valueItems.map((item,i)=><Reveal key={item.title} delay={i*.05}><article><span>0{i+1}</span><div className="value-icon" aria-hidden="true"><i/></div><h3>{item.title}</h3><p>{item.text}</p></article></Reveal>)}</div></div></section>

  <section className="section division-work" id="work"><div className="container"><Reveal><div className="heading-row"><SectionHeading eyebrow="Selected Work" title={data.projectsTitle} copy={data.projectsText}/><Link className="text-link" href="/work">{data.projectsCta}<ArrowUpRight size={16} aria-hidden="true"/></Link></div></Reveal><div className="showcase-state"><span>Portfolio publishing in progress</span><div>{data.services.slice(0,4).map(service=><strong key={service.title}>{service.title}</strong>)}</div></div></div></section>

  <section className="section division-process-section"><div className="container"><Reveal><SectionHeading eyebrow="Our Process" title={data.processTitle} copy="A transparent, collaborative path shaped around the requirements of each project."/></Reveal><DivisionProcess steps={data.process}/></div></section>

  {data.technology&&<section className="section technology-section"><div className="container technology-layout"><Reveal><SectionHeading eyebrow="Technology Stack" title={data.technology.title} copy={data.technology.text}/></Reveal><Reveal delay={.1}><div className="technology-grid">{data.technology.items.map((item,i)=><div key={item}><span>{String(i+1).padStart(2,"0")}</span><strong>{item}</strong></div>)}</div></Reveal></div></section>}

  {data.quoteCta&&<section className="quote-cta"><div className="quote-cta-grid" aria-hidden="true"/><div className="container quote-cta-inner"><div><p className="eyebrow"><span>+</span>Project Quotation</p><h2>{data.quoteCta.title}</h2><p>{data.quoteCta.text}</p></div><Link className="button" href={contactHref}>{data.quoteCta.button}<ArrowRight size={16}/></Link></div></section>}

  <section className="division-socials" aria-label={`${data.brand} official social channels`}><div className="container"><div><p className="eyebrow"><span>+</span>Official channels</p><h2>Follow {data.brand}</h2></div><div className="division-social-links">{socials.map(link=><Link href={link.href} key={link.label} target="_blank" rel="noopener noreferrer" aria-label={`${data.brand} on ${link.label}`}>{link.label}<ArrowUpRight size={15} aria-hidden="true"/></Link>)}</div></div></section>

  <section className="section faq-section"><div className="container faq-layout"><Reveal><SectionHeading eyebrow="Frequently Asked Questions" title="Clear Answers Before We Begin" copy={`Practical information about working with ${data.brand}.`}/></Reveal><Reveal delay={.08}><FAQ items={data.faqs}/></Reveal></div></section>

  <section className="division-final-cta" id="contact"><div className="division-final-grid" aria-hidden="true"/><div className="container"><Reveal><p className="eyebrow"><span>+</span>{data.brand}</p><h2>{data.finalTitle}</h2><p>{data.finalText}</p><div className="cta-actions"><Link className="button" href={contactHref}>{data.finalPrimary}<ArrowUpRight size={16}/></Link><Link className="outline-button" href={contactHref}>{data.finalSecondary}<ArrowRight size={16}/></Link></div></Reveal></div></section>
  <Footer/>
</main>}
