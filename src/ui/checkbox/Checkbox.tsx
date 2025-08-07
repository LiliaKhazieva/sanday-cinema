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
    <button className={cn(s.checkbox, className)} onClick={onClick}>
      <div
        style={{ width: "10px", height: "10px", backgroundColor: "#fff" }}
        className={cn({ [s.active]: isChecked })}
      />
      <span>{children}</span>
    </button>
  );
};

export default Checkbox;
