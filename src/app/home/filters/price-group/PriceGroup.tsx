import { Range } from "@/components/ui/range/Range";
import { FilterWrapper } from "../FilterWrapper";
import { useFilters } from "../useFilters";

const PriceGroup = () => {
  const { queryParams, updatetQueryParams } = useFilters();

  return (
    <FilterWrapper title="Price">
      <Range
        max={100}
        fromInitialValue={
          queryParams.minPrice ? Number(queryParams.minPrice) : undefined
        }
        toInitialValue={
          queryParams.maxPrice ? Number(queryParams.maxPrice) : undefined
        }
        onChangeFromValue={(value) =>
          updatetQueryParams("minPrice", value.toString())
        }
        onChangeToValue={(value) =>
          updatetQueryParams("maxPrice", value.toString())
        }
      ></Range>
    </FilterWrapper>
  );
};

export default PriceGroup;
