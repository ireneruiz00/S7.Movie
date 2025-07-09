import api from './tmbd'

export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  release_date: string;
}

export interface MovieListResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export const getPopularMovies = (page: number): Promise<MovieListResponse> => {
  return api.get<MovieListResponse>('/movie/popular', { params: { page } })
            .then(res => res.data);
}