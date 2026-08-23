import type { Metadata } from "next";
import { DivisionPage } from "@/components/DivisionPage";
import { digitalPage } from "@/data/division-pages";
const title="Startek Digital | Digital Marketing Solutions Sri Lanka";
const description="Startek Digital provides social media marketing, paid advertising, creative content, SEO, brand strategy and digital growth solutions for modern businesses.";
export const metadata:Metadata={title,description,alternates:{canonical:"/digital"},openGraph:{title,description,type:"website",url:"/digital",images:[]},twitter:{card:"summary",title,description,images:[]}};
export default function DigitalPage(){return <DivisionPage data={digitalPage}/>}
