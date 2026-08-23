import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/site";
export function ProjectCard({project,index}:{project:Project;index:number}){return <article className={`project-card project-${index+1}`}><Link href={project.href} aria-label={`View demo case study for ${project.name}`}><div className="project-image"><Image src={project.image} alt={`Abstract sample artwork for ${project.name}`} fill sizes="(max-width: 760px) 100vw, 50vw"/><span className="sample-badge">Demo / Sample Project</span><span className="project-arrow"><ArrowUpRight/></span></div><div className="project-meta"><div><p>{project.category} · {project.division}</p><h3>{project.name}</h3></div><span>{project.year}</span></div><div className="project-services">{project.services.map(s=><span key={s}>{s}</span>)}</div></Link></article>}
