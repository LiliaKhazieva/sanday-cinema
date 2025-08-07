import { EnumMovieSort } from "@/services/movie.types";
import { IStore } from "./store.types";
import { create } from "zustand";

const initialQueryParams: Pick<IStore, "queryParams"> = {
  queryParams: {
    sort: EnumMovieSort.NEWEST,
    searchTerm: "",
    page: 1,
    perPage: 9,
    isAdultOnly: "true",
  },
};

export const useFiltersStore = create<IStore>((set) => ({
  ...initialQueryParams,
  isFilterUpdated: false,
  updatetQueryParam: ({ key, value }) =>
    set((state) => ({
      queryParams: { ...state.queryParams, [key]: value },
      isFilterUpdated: true,
    })),
  reset: () => set(() => ({ ...initialQueryParams, isFilterUpdated: true })),
}));
