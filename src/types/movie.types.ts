export interface IMovie {
  id: string;
  title: string;
  image: string;
  releaseDate: Date;
  price: number;
  rating: number;
  ageRating: string;
  developer: string;
  publisher: string;
  genres: Genre[];
  createdAt: Date;
  updatedAt: Date;
}

export enum Genre {
  Action = "Action",
  Comedy = "Comedy",
  Thriller = "Thriller",
  Horror = "Horror",
  Fantasy = "Fantasy",
}

export type TypePaginationMovies = {
  length: number;
  movies: IMovie[];
};
