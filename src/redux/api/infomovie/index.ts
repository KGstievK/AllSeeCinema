import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getMovie: build.query<
      INFOMOVIE.GetInfoMovieResponse,
      INFOMOVIE.GetInfoMovieRequest
    >({
      query: () => ({
        url: "/movie/",
        method: "GET",
      }),
      providesTags: ["infomovie"],
    }),
    postMovie: build.mutation<
      INFOMOVIE.PostInfoMovieResponse,
      INFOMOVIE.PostInfoMovieRequest
    >({
      query: () => ({
        url: "/movie/",
        method: "POST",
      }),
      invalidatesTags: ["infomovie"],
    }),
  }),
});
export const { useGetMovieQuery, usePostMovieMutation } = api;
