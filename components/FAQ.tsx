"use client";
import { useState } from "react";
import { Minus,Plus } from "lucide-react";
export function FAQ({items}:{items:{question:string;answer:string}[]}){const [open,setOpen]=useState(0);return <div className="faq-list">{items.map((item,i)=>{const active=open===i;return <div className={`faq-item ${active?"active":""}`} key={item.question}><h3><button onClick={()=>setOpen(active?-1:i)} aria-expanded={active} aria-controls={`faq-answer-${i}`}><span>{item.question}</span>{active?<Minus size={18}/>:<Plus size={18}/>}</button></h3><div className="faq-answer" id={`faq-answer-${i}`} hidden={!active}><p>{item.answer}</p></div></div>})}</div>}
