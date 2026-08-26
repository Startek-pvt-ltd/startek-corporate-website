import type { ComponentProps } from "react";

type LinkProps = ComponentProps<"a">;
const divisionPaths=new Set(["/digital","/web-hub","/print-hub"]);

export function Link({ children,href,target,rel,...props }: LinkProps) {
  const path=typeof href==="string"?href.split(/[?#]/,1)[0]:"";
  const opensDivision=divisionPaths.has(path);
  if(opensDivision)return <a href={href} target="_blank" rel="noopener noreferrer" {...props}>{children}</a>;
  return <a href={href} target={target} rel={rel} {...props}>{children}</a>;
}
