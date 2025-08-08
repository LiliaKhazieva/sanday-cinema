import { useDebounce } from "@/hooks/useDebounce";
import { useEffect, useState } from "react";
import { useFilters } from "../useFilters";
import { Search } from "lucide-react";
import s from "./SearchField.module.scss";

export function SearchField() {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const { updatetQueryParams } = useFilters();

  useEffect(() => {
    updatetQueryParams("seachTerm", debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  return (
    <div className={s.content}>
      <div className={s.icon}>
        <Search size={15} />
      </div>

      <input
        className={s.input}
        type="search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search..."
      />
    </div>
  );
}

export default SearchField;
