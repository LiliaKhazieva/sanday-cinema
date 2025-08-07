import { EnumMovieSort } from "@/services/movie.types";
import { ISelectItem } from "@/ui/select/select.interface";

export const SORT_SELECT_DATA: ISelectItem<EnumMovieSort>[] = [
  {
    key: EnumMovieSort.HIGH_PRICE,
    label: "High price",
  },
  {
    key: EnumMovieSort.LOW_PRICE,
    label: "Low price",
  },
  {
    key: EnumMovieSort.NEWEST,
    label: "Newest",
  },
  {
    key: EnumMovieSort.OLDEST,
    label: "Oldest",
  },
];
