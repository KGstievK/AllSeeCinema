namespace INFOMOVIE {
  type Quality = "144p" | "240p" | "360p" | "480p" | "720p" | "1080p" | "4K";

  type GetInfoMovieResponse = {
    title: string;
    title_ru: string;
    title_ky: string;
    title_en: string;
    tagline: string;
    tagline_ru: string;
    tagline_ky: string;
    tagline_en: string;
    description: string;
    description_ru: string;
    description_ky: string;
    description_en: string;
    year: number;
    country: string;
    country_ru: string;
    country_ky: string;
    country_en: string;
    world_premiere: string;
    budget: number;
    fees_in_usa: number;
    fees_in_world: number;
    draft: boolean;
    date: number;
    quality: Quality;
    star: number;
    created: string;
    slug: string;
    category: number;
    actors: number[];
    genres: number[];
    director: number[];
  };

  type GetInfoMovieRequest = void;
  // ?POST===>
  type PostInfoMovieResponse = {
    id: number;
    title: string;
  };

  type PostInfoMovieRequest = void;
}
