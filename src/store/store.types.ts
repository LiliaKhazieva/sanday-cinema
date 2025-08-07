import { TypeMovieDataFilters } from "@/services/movie.types";

export interface IStore {
  queryParams: TypeMovieDataFilters;
  isFilterUpdated: boolean;
  updatetQueryParam: (data: {
    key: keyof TypeMovieDataFilters;
    value: string;
  }) => void;
  reset: () => void;
}
