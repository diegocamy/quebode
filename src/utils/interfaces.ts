export interface Response {
  status: string;
  data: {
    limit: number;
    movies: Movie[];
    movie_count: number;
    page_number: number;
  };
  status_message: string;
}

export interface Movie {
  id: number;
  genres: string[];
  large_cover_image: string;
  medium_cover_image: string;
  small_cover_image: string;
  rating: number;
  runtime: number;
  summary: string;
  sinopsis: string;
  description_full: string;
  title: string;
  title_long: string;
  torrents: any[]; //todo
}
