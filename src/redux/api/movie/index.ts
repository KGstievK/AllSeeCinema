import { api as index } from '..';

const api = index.injectEndpoints({
	endpoints: (build) => ({
		getMovie: build.query<MOVIE.GetMovieResponse, MOVIE.GetMovieRequest>({
			query: () => ({
				url: '/movie/',
				method: 'GET'
			}),
			providesTags: ['movie']
		})
	})
});
export const { useGetMovieQuery } = api;
