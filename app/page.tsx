import Link from "next/link";
import { ArrowRight,ArrowUpRight,Boxes,Layers3,MapPin,ScanLine } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { DivisionCard } from "@/components/DivisionCard";
import { Reveal } from "@/components/Reveal";
import { ProjectCard } from "@/components/ProjectCard";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { ClientMarquee } from "@/components/ClientMarquee";
import { TestimonialCard } from "@/components/TestimonialCard";
import { ArticleCard } from "@/components/ArticleCard";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { articles,capabilities,divisions,projects,reasons,testimonials } from "@/data/site";

const capabilityIcons=[MapPin,Layers3,Boxes,ScanLine];
const flow=["Strategy","Digital","Technology","Physical Brand","Growth"];

export default function Home(){return <main><Navbar/><Hero/>
  <section className="section ecosystem" id="solutions"><div className="container"><Reveal><SectionHeading eyebrow="The Startek Ecosystem" title="One Brand. Three Specialized Divisions." copy="Startek combines digital marketing, software development and physical branding into one integrated business ecosystem."/></Reveal><div className="division-grid">{divisions.map((division,i)=><Reveal key={division.id} delay={i*.08}><DivisionCard division={division} index={i}/></Reveal>)}</div></div></section>

  <section className="section connected"><div className="container connected-layout"><Reveal><SectionHeading eyebrow="Connected Solutions" title="One Partner. Every Touchpoint." copy="From the first strategic decision to the final customer experience, our divisions work as one system — creating clarity, consistency and momentum."/></Reveal><Reveal delay={.12}><div className="flow-panel"><div className="flow-path" aria-label="Startek integrated delivery flow">{flow.map((item,i)=><div className="flow-step" key={item}><span>0{i+1}</span><strong>{item}</strong>{i<flow.length-1&&<ArrowRight aria-hidden="true"/>}</div>)}</div><div className="flow-note"><span>One connected ecosystem</span><p>Strategy informs the campaign. The campaign drives the platform. The platform meets the physical brand. Every touchpoint is designed to move the business forward.</p></div></div></Reveal></div></section>

  <section className="capability-strip" aria-label="Startek capabilities"><div className="container capability-grid">{capabilities.map((item,i)=>{const Icon=capabilityIcons[i];return <Reveal key={item} delay={i*.06}><div className="capability-item"><Icon size={21}/><span>0{i+1}</span><strong>{item}</strong></div></Reveal>})}</div></section>

  <section className="section work" id="work"><div className="container"><Reveal><div className="heading-row"><SectionHeading eyebrow="Featured Work" title="Selected Work" copy="A selection of digital experiences, campaigns and brand solutions created through the Startek ecosystem."/><Link className="text-link" href="/work">View All Work <ArrowUpRight size={16}/></Link></div></Reveal><div className="projects-grid">{projects.map((project,i)=><Reveal key={project.name} className={i===2?"project-wide":""} delay={i*.07}><ProjectCard project={project} index={i}/></Reveal>)}</div></div></section>

  <section className="section why" id="about"><div className="container why-layout"><Reveal><SectionHeading eyebrow="Why Startek" title="Built Differently." copy="A modern partner built to connect thinking, making and measurable business progress."/></Reveal><div className="reasons-grid">{reasons.map((reason,i)=><Reveal key={reason.title} delay={i*.06}><article className="reason-card"><span>0{i+1}</span><h3>{reason.title}</h3><p>{reason.text}</p></article></Reveal>)}</div></div></section>

  <section className="section process-section"><div className="container"><Reveal><SectionHeading eyebrow="Our Process" title="From Idea to Impact." copy="A clear, collaborative path from initial discovery to long-term growth."/></Reveal><ProcessTimeline/></div></section>

  <section className="section clients"><div className="container"><Reveal><SectionHeading eyebrow="Our Clients" title="Trusted By Ambitious Brands" align="center"/><p className="placeholder-note">Logo placeholders — real client identities will be added after approval.</p></Reveal></div><ClientMarquee/></section>

  <section className="section testimonials-section"><div className="container"><Reveal><SectionHeading eyebrow="Client Perspectives" title="What Our Clients Say" copy="Sample content shown to demonstrate the testimonial layout. Real, approved client feedback will replace these cards."/></Reveal><div className="testimonial-track">{testimonials.map((testimonial,i)=><Reveal key={`${testimonial.company}-${i}`} delay={i*.07}><TestimonialCard testimonial={testimonial}/></Reveal>)}</div></div></section>

  <section className="section insights" id="insights"><div className="container"><Reveal><div className="heading-row"><SectionHeading eyebrow="Thinking Forward" title="Ideas, Insights & Technology" copy="Practical perspectives across digital growth, technology and modern brand execution."/><Link className="text-link" href="/contact">Explore Insights <ArrowUpRight size={16}/></Link></div></Reveal><div className="articles-grid">{articles.map((article,i)=><Reveal key={article.title} delay={i*.07}><ArticleCard article={article} index={i}/></Reveal>)}</div></div></section>
  <CTASection/><Footer/>
</main>}
