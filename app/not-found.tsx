import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata:Metadata={title:"Page Not Found | Startek",robots:{index:false,follow:false}};

export default function NotFound(){return <><Navbar/><main className="not-found" id="home"><div className="not-found-grid" aria-hidden="true"/><div className="container"><p className="eyebrow"><span>+</span>Navigation error</p><h1>404 — Page Not Found</h1><p>The page you&apos;re looking for doesn&apos;t exist or may have moved.</p><Link className="button" href="/"><ArrowLeft size={16} aria-hidden="true"/>Back to Startek</Link></div></main><Footer/></>}
