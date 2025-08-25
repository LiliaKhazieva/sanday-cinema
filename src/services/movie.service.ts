import { TypeMovieDataFilters } from "./movie.types";

import { TypePaginationMovies } from "@/types/movie.types";
import { axiosClassic } from "@/api/axios";

export const MovieService = {
  async getAll(queryData = {} as TypeMovieDataFilters) {
    const { data } = await axiosClassic<TypePaginationMovies>({
      url: "movies",
      method: "GET",
      params: queryData,
    });
    return data;
  },
};
