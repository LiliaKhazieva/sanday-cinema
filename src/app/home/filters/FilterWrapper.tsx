import { div } from "framer-motion/client";
import { PropsWithChildren, ReactNode } from "react";

interface IFilterWrapper {
  title: string;
  children: ReactNode;
}

export function FilterWrapper({ title, children }: IFilterWrapper) {
  return (
    <div>
      <div style={{ marginBottom: "10px" }}>{title}</div>
      <div>{children}</div>
    </div>
  );
}
