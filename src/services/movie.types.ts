export type TypeMovieDataFilters = {
  sort?: EnumMovieSort;
  seachTerm?: string;
  genres?: string;
  rating?: string;
  minPrice?: string;
  maxPrice?: string;
  isAdultOnly?: "true" | "false";
  page?: string | number;
  perPage?: string | number;
};

export enum EnumMovieSort {
  LOW_PRICE = "LOW_PRICE",
  HIGH_PRICE = "HIGH_RPICE",
  OLDEST = "OLDEST",
  NEWEST = "NEWEST",
}

export type TypeParamsFilters = {
  searchParams: TypeMovieDataFilters;
};
