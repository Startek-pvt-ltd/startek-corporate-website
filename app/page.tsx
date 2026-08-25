import { Link } from "@/components/AppLink";
import { ArrowRight,ArrowUpRight,Boxes,Layers3,MapPin,ScanLine } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { DivisionCard } from "@/components/DivisionCard";
import { Reveal } from "@/components/Reveal";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { capabilities,divisions,reasons } from "@/data/site";

const capabilityIcons=[MapPin,Layers3,Boxes,ScanLine];
const flow=["Strategy","Digital","Technology","Physical Brand","Growth"];

export default function Home(){return <main><Navbar/><Hero/>
  <section className="section ecosystem" id="solutions"><div className="container"><Reveal><SectionHeading eyebrow="The Startek Ecosystem" title="One Brand. Three Specialized Divisions." copy="Startek combines digital marketing, software development and physical branding into one integrated business ecosystem."/></Reveal><div className="division-grid">{divisions.map((division,i)=><Reveal key={division.id} delay={i*.08}><DivisionCard division={division} index={i}/></Reveal>)}</div></div></section>

  <section className="section connected"><div className="container connected-layout"><Reveal><SectionHeading eyebrow="Connected Solutions" title="One Partner. Every Touchpoint." copy="From the first strategic decision to the final customer experience, our divisions work as one system — creating clarity, consistency and momentum."/></Reveal><Reveal delay={.12}><div className="flow-panel"><div className="flow-path" aria-label="Startek integrated delivery flow">{flow.map((item,i)=><div className="flow-step" key={item}><span>0{i+1}</span><strong>{item}</strong>{i<flow.length-1&&<ArrowRight aria-hidden="true"/>}</div>)}</div><div className="flow-note"><span>One connected ecosystem</span><p>Strategy informs the campaign. The campaign drives the platform. The platform meets the physical brand. Every touchpoint is designed to move the business forward.</p></div></div></Reveal></div></section>

  <section className="capability-strip" aria-label="Startek capabilities"><div className="container capability-grid">{capabilities.map((item,i)=>{const Icon=capabilityIcons[i];return <Reveal key={item} delay={i*.06}><div className="capability-item"><Icon size={21}/><span>0{i+1}</span><strong>{item}</strong></div></Reveal>})}</div></section>

  <section className="section work" id="work"><div className="container"><Reveal><div className="heading-row"><SectionHeading eyebrow="Selected Work" title="Case Studies in Preparation" copy="We are preparing an approved selection of Startek projects for publication, with clear context, process and outcomes."/><Link className="text-link" href="/work">Visit Our Work <ArrowUpRight size={16} aria-hidden="true"/></Link></div></Reveal><div className="showcase-state home-showcase"><span>Portfolio publishing in progress</span><div><strong>Digital Strategy</strong><strong>Web &amp; Applications</strong><strong>Print &amp; Physical Branding</strong></div></div></div></section>

  <section className="section why" id="about"><div className="container why-layout"><Reveal><SectionHeading eyebrow="Why Startek" title="Built Differently." copy="A modern partner built to connect thinking, making and measurable business progress."/></Reveal><div className="reasons-grid">{reasons.map((reason,i)=><Reveal key={reason.title} delay={i*.06}><article className="reason-card"><span>0{i+1}</span><h3>{reason.title}</h3><p>{reason.text}</p></article></Reveal>)}</div></div></section>

  <section className="section process-section"><div className="container"><Reveal><SectionHeading eyebrow="Our Process" title="From Idea to Impact." copy="A clear, collaborative path from initial discovery to long-term growth."/></Reveal><ProcessTimeline/></div></section>

  <section className="section credibility-section"><div className="container"><Reveal><SectionHeading eyebrow="Working Principles" title="Credibility Is Built Into the Process" copy="We avoid unsupported promises. Every engagement begins with clear requirements, agreed scope and practical next steps."/></Reveal><div className="credibility-grid"><article><span>01</span><h3>Clear Scope</h3><p>Objectives, deliverables and responsibilities are defined before execution begins.</p></article><article><span>02</span><h3>Connected Delivery</h3><p>Digital, development and physical touchpoints are coordinated around one business direction.</p></article><article><span>03</span><h3>Practical Communication</h3><p>Progress, decisions and constraints are communicated clearly throughout the work.</p></article></div></div></section>

  <section className="section insights" id="insights"><div className="container"><Reveal><SectionHeading eyebrow="Thinking Forward" title="Insights Publishing Soon" copy="We are preparing practical perspectives across digital growth, technology and physical brand execution."/></Reveal><div className="insight-topics" aria-label="Planned insight topics"><span>Digital Growth</span><span>Web &amp; Technology</span><span>Brand Execution</span></div></div></section>
  <CTASection/><Footer/>
</main>}
