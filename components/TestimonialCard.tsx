import { Quote } from "lucide-react";
import type { Testimonial } from "@/data/site";
export function TestimonialCard({testimonial}:{testimonial:Testimonial}){return <article className="testimonial-card"><div className="testimonial-top"><Quote size={28}/><span>Sample Content</span></div><blockquote>“{testimonial.quote}”</blockquote><div className="testimonial-person"><span aria-hidden="true">SC</span><div><strong>{testimonial.name}</strong><small>{testimonial.role} · {testimonial.company}</small></div></div></article>}
