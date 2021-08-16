export interface MoviePreviewResponse {
  page: number;
  results: [MoviePreview];
  total_pages: number;
  total_results: number;
}

export interface MoviePreview {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  genres: string[];
}
