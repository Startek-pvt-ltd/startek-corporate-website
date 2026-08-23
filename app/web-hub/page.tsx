import type { Metadata } from "next";
import { DivisionPage } from "@/components/DivisionPage";
import { webHubPage } from "@/data/division-pages";
const title="Startek Web Hub | Web Development & Digital Solutions";
const description="Startek Web Hub builds high-performance websites, e-commerce platforms, web applications and digital systems for modern businesses.";
export const metadata:Metadata={title,description,alternates:{canonical:"/web-hub"},openGraph:{title,description,type:"website",url:"/web-hub",images:[]},twitter:{card:"summary",title,description,images:[]}};
export default function WebHubPage(){return <DivisionPage data={webHubPage}/>}
