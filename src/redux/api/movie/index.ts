import { api as index } from '..';

const api = index.injectEndpoints({
	endpoints: (build) => ({
		getRating: build.query<GetMovieResponse, GetMovieRequest>({
			query: () => ({
				url: '',
				method: 'GET'
			}),
			providesTags: ['movie']
		})
	})
});
export const { useGetRatingQuery } = api;
