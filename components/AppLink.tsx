import type { ComponentProps } from "react";

type LinkProps = ComponentProps<"a">;

export function Link({ children, ...props }: LinkProps) {
  return <a {...props}>{children}</a>;
}
