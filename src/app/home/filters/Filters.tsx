import GenreGroup from "./genres-group/GenreGroup";
import PriceGroup from "./price-group/PriceGroup";
import RatingGroup from "./ratings-group/RatingGroup";
import { ResetButton } from "./ResetButton";
import SearchField from "./search-field/SearchField";
import { Switcher } from "./switcher/Switcher";

export function Filters() {
  return (
    <div>
      <SearchField />
      <PriceGroup />
      <GenreGroup />
      <RatingGroup />
      <Switcher />
      <ResetButton />
    </div>
  );
}

export default Filters;
