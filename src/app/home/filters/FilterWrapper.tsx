import { div } from "framer-motion/client";
import { PropsWithChildren, ReactNode } from "react";

interface IFilterWrapper {
  title: string;
  children: ReactNode;
}

export function FilterWrapper({ title, children }: IFilterWrapper) {
  return (
    <div>
      <div>{title}</div>
      <div>{children}</div>
    </div>
  );
}
