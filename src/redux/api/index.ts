import { BaseQueryFn, createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const baseQuery = fetchBaseQuery({
	baseUrl: `${process.env.NEXT_PUBLIC_API_URL}`,

	prepareHeaders: (headers) => {
		let token = JSON.parse(String(localStorage.getItem("access")))
		if (token) {
			headers.set("Authorization", `Bearer ${token}`)
		}
		return headers
	},
	// credentials: 'include'
})

const baseQueryExtended: BaseQueryFn = async (args, api, extraOptions) => {
	const result = await baseQuery(args, api, extraOptions)
	return result
}

export const api = createApi({
	reducerPath: "api",
	baseQuery: baseQueryExtended,
	refetchOnReconnect: true,
	refetchOnFocus: false,
	tagTypes: ["auth", "movie", "infomovie", "room"],
	endpoints: () => ({}),
})
