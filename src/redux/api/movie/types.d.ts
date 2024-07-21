namespace MOVIE {
	type GetMovieResponse = {
		title: string
		title_ru: string
		title_ky: string
		title_en: string
		description: string
		description_ru: string
		description_ky: string
		description_en: string
		image: string
		created: string
		slug: string
		movie: number
	};

	type GetMovieRequest = void;
}


