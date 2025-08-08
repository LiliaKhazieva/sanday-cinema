import { useEffect, useState } from "react";
import s from "./Range.module.scss";
import cn from "clsx";
import { useDebounce } from "@/hooks/useDebounce";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

interface IRange {
  min?: number;
  max?: number;
  fromInitialValue?: number;
  toInitialValue?: number;
  onChangeFromValue: (value: number) => void;
  onChangeToValue: (value: number) => void;
}

export function Range({
  min = 0,
  max,
  fromInitialValue = 0,
  toInitialValue = max,
  onChangeFromValue,
  onChangeToValue,
}: IRange) {
  const [fromValue, setFromValue] = useState(fromInitialValue);
  const [toValue, setToValue] = useState(toInitialValue);

  const debouncedFromValue = useDebounce(fromValue, 500);
  const debouncedToValue = useDebounce(toValue, 500);

  useEffect(() => {
    onChangeFromValue(debouncedFromValue);
  }, [debouncedFromValue]);

  useEffect(() => {
    onChangeToValue(debouncedToValue);
  }, [debouncedToValue]);

  return (
    <div style={{ width: "100%" }}>
      <Slider
        range
        min={min}
        max={max}
        defaultValue={[fromInitialValue, toInitialValue]}
        onChange={(value) => {
          if (typeof value === "object") {
            setFromValue(value[0]);
            setToValue(value[1]);
          }
        }}
        trackStyle={{ backgroundColor: "lightblue", height: 5 }}
        railStyle={{ backgroundColor: "#fff", height: 5 }}
        handleStyle={{
          borderColor: "lightblue",
          height: 15,
          width: 15,
          backgroundColor: "lightblue",
        }}
      />
      <div
        style={{
          fontSize: "14px",
          display: "flex",
          justifyContent: "space-between",
          paddingTop: "5px",
          opacity: 0.7,
        }}
      >
        <span>Oт: {fromInitialValue}$</span>
        <span>До: {toInitialValue}$</span>
      </div>
    </div>
  );
}
