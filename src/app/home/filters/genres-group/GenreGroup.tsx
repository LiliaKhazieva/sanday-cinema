import Checkbox from "@/components/ui/checkbox/Checkbox";
import { FilterWrapper } from "../FilterWrapper";
import { useFilters } from "../useFilters";
import { GENRE_VARIANTS } from "./genres-variants.data";

const GenreGroup = () => {
  const { queryParams, updatetQueryParams } = useFilters();

  return (
    <FilterWrapper title="Genre">
      {GENRE_VARIANTS.map((genre) => (
        <Checkbox
          isChecked={queryParams.genres?.includes(genre) || false}
          onClick={() => {
            const currentGenres = queryParams.genres
              ? queryParams.genres.split("|")
              : [];
            if (currentGenres.includes(genre)) {
              const newArray = currentGenres.filter((g) => g !== genre);
              updatetQueryParams("genres", newArray.join("|"));
            } else {
              updatetQueryParams("genres", [...currentGenres, genre].join("|"));
            }
          }}
          key={genre}
        >
          {genre}
        </Checkbox>
      ))}
    </FilterWrapper>
  );
};

export default GenreGroup;
