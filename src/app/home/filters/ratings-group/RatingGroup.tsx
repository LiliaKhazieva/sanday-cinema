import Checkbox from "@/ui/checkbox/Checkbox";
import { FilterWrapper } from "../FilterWrapper";
import { useFilters } from "../useFilters";
import { RATING_VARIANTS } from "./rating-variants.data";
import { Star } from "lucide-react";

const RatingGroup = () => {
  const { queryParams, updatetQueryParams } = useFilters();

  return (
    <FilterWrapper title="Rating">
      {RATING_VARIANTS.map((rating) => (
        <Checkbox
          isChecked={queryParams.rating === rating.toString()}
          onClick={() => updatetQueryParams("rating", rating.toString())}
          key={rating}
        >
          <span>
            <Star />
            {">"}
            {rating}
          </span>
        </Checkbox>
      ))}
    </FilterWrapper>
  );
};

export default RatingGroup;
