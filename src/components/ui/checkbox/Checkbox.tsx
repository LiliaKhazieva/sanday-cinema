import { FC, PropsWithChildren } from "react";
import s from "./Checkbox.module.scss";
import cn from "clsx";

interface ICheckBox {
  isChecked: boolean;
  onClick: () => void;
  className?: string;
}

const Checkbox: FC<PropsWithChildren<ICheckBox>> = ({
  isChecked,
  onClick,
  className,
  children,
}) => {
  return (
    <button className={cn(s.content, className)} onClick={onClick}>
      <div className={cn(s.checkbox, { [s.active]: isChecked })} />
      <span>{children}</span>
    </button>
  );
};

export default Checkbox;
