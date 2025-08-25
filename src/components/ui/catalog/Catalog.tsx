import { IMovie } from "@/types/movie.types";
import { MovieItem } from "./movieItem/MovieItem";
import s from "./Catalog.module.scss";
import Loader from "../loader/Loader";

interface ICatalog {
  movies: IMovie[];
  isLoading?: boolean;
}
export const Catalog = ({ movies, isLoading }: ICatalog) => {
  if (isLoading) return <Loader />;
  return (
    <section className={s.content}>
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
