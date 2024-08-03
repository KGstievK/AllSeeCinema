import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getMovieInfo: build.query<
      INFOMOVIE.GetInfoMovieResponse,
      INFOMOVIE.GetInfoMovieRequest
    >({
      query: () => ({
        url: "/movie/",
        method: "GET",
      }),
      providesTags: ["infomovie"],
    }),
  }),
});
export const { useGetMovieInfoQuery } = api;
