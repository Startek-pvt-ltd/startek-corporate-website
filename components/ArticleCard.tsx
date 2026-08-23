import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Article } from "@/data/site";
export function ArticleCard({article,index}:{article:Article;index:number}){return <article className="article-card"><Link href={article.href}><div className={`article-visual ${article.tone}`}><span>0{index+1}</span><div className="article-symbol" aria-hidden="true"/></div><div className="article-info"><div><span>{article.category}</span><time>{article.date}</time></div><h3>{article.title}</h3><p>{article.excerpt}</p><span className="read-link">Read Insight <ArrowUpRight size={16}/></span></div></Link></article>}
