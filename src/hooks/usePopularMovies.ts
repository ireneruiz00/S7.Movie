import { useQuery } from '@tanstack/react-query';
import { getPopularMovies } from '../api/movies';
import type { MovieListResponse } from '../api/movies';

export const usePopularMovies = (page: number) => {
  return useQuery<MovieListResponse>({
    queryKey:['popularMovies', page], 
    queryFn:() => getPopularMovies(page),
})
}