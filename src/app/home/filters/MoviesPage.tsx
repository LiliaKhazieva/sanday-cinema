"use client";

import { useQuery } from "@tanstack/react-query";
import { useFilters } from "./useFilters";
import { MovieService } from "@/services/movie.service";
import SortDropdown from "../sort/SortDropdown";
import { Catalog } from "@/components/ui/catalog/Catalog";
import Pagination from "../pagination/Pagination";

export function MoviesPage() {
  const { queryParams, isFilterUpdated, updatetQueryParams } = useFilters();

  const { data, isPending, isFetching, isLoading, isRefetching } = useQuery({
    queryKey: ["movie", queryParams],
    queryFn: () => MovieService.getAll(queryParams),
    // enabled: isFilterUpdated,
  });
  return (
    <div>
      <h1 style={{ marginBottom: "10px" }}>Movies</h1>
      <SortDropdown />
      <Catalog
        movies={data?.movies || []}
        isLoading={isLoading || isFetching || isRefetching || isPending}
      />
      <Pagination
        changePage={(page) => updatetQueryParams("page", page.toString())}
        currentPage={queryParams.page?.toString()}
        numberPages={
          (data?.length && data?.length / Number(queryParams?.perPage)) || 1
        }
      />
    </div>
  );
}
