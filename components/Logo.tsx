import { Link } from "@/components/AppLink";
import Image from "next/image";
export function Logo({priority=false}:{priority?:boolean}){return <Link className="brand" href="/#home" aria-label="Startek home"><span className="brand-mark" aria-hidden="true"><Image src="/startek-mark.webp" alt="" width={32} height={34} priority={priority}/><i /></span><span>STARTEK</span></Link>}
