import { IMovie } from "@/types/movie.interface";
import SkeletonLoader from "./CatalogLoader";
import { MovieItem } from "./movieItem/MovieItem";
import s from "./Catalog.module.scss";

interface ICatalog {
  movies: IMovie[];
  isLoading?: boolean;
}
export const Catalog = ({ movies, isLoading }: ICatalog) => {
  if (isLoading) return <SkeletonLoader />;
  return (
    <section>
      {movies?.length ? (
        <div className={s.list}>
          {movies.map((movie) => (
            <MovieItem key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <div>There are no movies</div>
      )}
    </section>
  );
};
