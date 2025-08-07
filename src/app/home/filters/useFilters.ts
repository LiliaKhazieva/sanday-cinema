import { TypeMovieDataFilters } from "@/services/movie.types";
import { useFiltersStore } from "@/store/store";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export function useFilters() {
  const pathname = usePathname();
  const seachParams = useSearchParams();
  const { replace } = useRouter();

  const { queryParams, isFilterUpdated, updatetQueryParam } = useFiltersStore();

  useEffect(() => {
    seachParams.forEach((value, key) => {
      updatetQueryParam({
        key: key as keyof TypeMovieDataFilters,
        value,
      });
    });
  }, []);

  const updatetQueryParams = (
    key: keyof TypeMovieDataFilters,
    value: string
  ) => {
    const newParams = new URLSearchParams(seachParams.toString());
    if (value) {
      newParams.set(key, String(value));
    } else {
      newParams.delete(key);
    }
    replace(pathname + `?${newParams.toString()}`);
    updatetQueryParam({ key, value });
  };

  return { updatetQueryParams, queryParams, isFilterUpdated };
}
