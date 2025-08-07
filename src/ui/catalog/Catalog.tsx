import { IMovie } from "@/types/movie.interface";
import SkeletonLoader from "./CatalogLoader";
import { MovieItem } from "./movieItem/MovieItem";

interface ICatalog {
  movies: IMovie[];
  isLoading?: boolean;
}
export const Catalog = ({ movies, isLoading }: ICatalog) => {
  if (isLoading) return <SkeletonLoader />;
  return (
    <section>
      {movies.length ? (
        <div>
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
