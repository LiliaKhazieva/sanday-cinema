import { useDebounce } from "@/hooks/useDebounce";
import { useEffect, useState } from "react";
import { useFilters } from "../useFilters";
import { Search } from "lucide-react";

export function SearchField() {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const { updatetQueryParams } = useFilters();

  useEffect(() => {
    updatetQueryParams("seachTerm", debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  return (
    <div>
      <Search />
      <input
        type="search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search..."
      />
    </div>
  );
}

export default SearchField;
