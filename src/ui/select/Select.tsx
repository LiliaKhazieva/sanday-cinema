import React from "react";
import s from "./Select.module.scss";
import { ISelect } from "./select.interface";
import { useClickOutside } from "@/hooks/useClickOutside";
import { ul } from "framer-motion/client";

export function Select<K>({ data, onChange, value, title }: ISelect<K>) {
  const { isShow, setIsShow, ref } = useClickOutside(false);
  return (
    <div ref={ref}>
      <button
        onClick={() => {
          setIsShow(!isShow);
        }}
      >
        {title}
        {value?.label || "Select"}
      </button>
      {isShow && (
        <ul role="listbox">
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
