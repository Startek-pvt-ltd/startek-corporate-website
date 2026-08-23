"use client";
import { motion,useReducedMotion } from "framer-motion";
import { process } from "@/data/site";
export function ProcessTimeline(){const reduce=useReducedMotion();return <div className="process-timeline"><motion.div className="process-line" initial={reduce?false:{scaleX:0}} whileInView={{scaleX:1}} viewport={{once:true,margin:"-120px"}} transition={{duration:1.2,ease:[.22,1,.36,1]}}/>{process.map((step,i)=><motion.article key={step.number} initial={reduce?false:{opacity:0,y:22}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.09}}><span className="process-node"/><p>{step.number}</p><h3>{step.title}</h3><span>{step.text}</span></motion.article>)}</div>}
