import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    InfoMovie: build.query<
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
export const { useInfoMovieQuery } = api;
