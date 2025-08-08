import { Select } from "@/components/ui/select/Select";
import { useFilters } from "../filters/useFilters";
import { SORT_SELECT_DATA } from "./sort-select.data";
import { EnumMovieSort } from "@/services/movie.types";

const SortDropdown = () => {
  const { queryParams, updatetQueryParams } = useFilters();
  return (
    <div>
      <Select<EnumMovieSort>
        data={SORT_SELECT_DATA}
        onChange={(value) => updatetQueryParams("sort", value.key.toString())}
        value={SORT_SELECT_DATA.find((value) => value.key === queryParams.sort)}
        title="Sort by: "
      />
    </div>
  );
};

export default SortDropdown;
