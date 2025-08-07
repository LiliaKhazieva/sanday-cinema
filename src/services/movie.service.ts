import axios from "axios";
import { TypeMovieDataFilters } from "./movie.types";
import { axiosClassic } from "@/api/api";
import { TypePaginationMovies } from "@/types/movie.interface";

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
