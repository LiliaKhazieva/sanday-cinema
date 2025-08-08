import { FilterWrapper } from "../FilterWrapper";
import { useFilters } from "../useFilters";
import s from "./Switcher.module.scss";

export function Switcher() {
  const { queryParams, updatetQueryParams } = useFilters();

  const isAdultOnly = queryParams.isAdultOnly === "true";

  console.log(isAdultOnly);

  return (
    <FilterWrapper title="Adult only">
      <button
        style={{
          backgroundColor: `${isAdultOnly ? "#FF6738" : "#6c6088"}`,
        }}
        className={s.switcher}
        onClick={() => updatetQueryParams("isAdultOnly", !isAdultOnly + "")}
      >
        <span
          className={s.wave}
          style={{
            transform: `${isAdultOnly ? "translateX(30px)" : "translateX(0)"}`,
          }}
        />
      </button>
    </FilterWrapper>
  );
}
