import { FilterWrapper } from "../FilterWrapper";
import { useFilters } from "../useFilters";

export function Switcher() {
  const { queryParams, updatetQueryParams } = useFilters();

  const isAdultOnly = queryParams.isAdultOnly === "true";

  return (
    <FilterWrapper title="Adult only">
      <button
        onClick={() => updatetQueryParams("isAdultOnly", !isAdultOnly + "")}
      >
        <span></span>
      </button>
    </FilterWrapper>
  );
}
