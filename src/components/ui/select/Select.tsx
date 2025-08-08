import React from "react";
import s from "./Select.module.scss";
import { ISelect } from "./select.interface";
import { useClickOutside } from "@/hooks/useClickOutside";
import { ChevronDown } from "lucide-react";

export function Select<K>({ data, onChange, value, title }: ISelect<K>) {
  const { isShow, setIsShow, ref } = useClickOutside(false);
  return (
    <div ref={ref} className={s.container}>
      <button
        className={s.selected}
        onClick={() => {
          setIsShow(!isShow);
        }}
      >
        {title}
        {value?.label || "Select"}
        <ChevronDown size={12} />
      </button>
      {isShow && (
        <ul className={s.list} role="listbox">
          {data.map((item) => (
            <li
              key={item.key?.toString()}
              className=""
              onClick={() => {
                onChange(item);
                setIsShow(false);
              }}
            >
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
