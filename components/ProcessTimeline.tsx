import { process } from "@/data/site";
export function ProcessTimeline(){return <div className="process-timeline"><div className="process-line" aria-hidden="true"/>{process.map(step=><article key={step.number}><span className="process-node" aria-hidden="true"/><p>{step.number}</p><h3>{step.title}</h3><span>{step.text}</span></article>)}</div>}
