import type { Metadata } from "next";
import { DivisionPage } from "@/components/DivisionPage";
import { printHubPage } from "@/data/division-pages";
const title="Startek Print Hub | Printing, Signage & Branding Solutions";
const description="Startek Print Hub provides printing, signage, packaging, promotional products and physical branding solutions for businesses.";
export const metadata:Metadata={title,description,alternates:{canonical:"/print-hub"},openGraph:{title,description,type:"website",url:"/print-hub",images:[]},twitter:{card:"summary",title,description,images:[]}};
export default function PrintHubPage(){return <DivisionPage data={printHubPage}/>}
