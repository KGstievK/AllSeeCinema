import { api as index } from ".."

const api = index.injectEndpoints({
	endpoints: (builder) => ({
		getRoom: builder.query({
			query: (id) => ({
				url: `/room/${id}`,
				method: "GET",
			}),
			providesTags: ["room"],
		}),
		postRoom: builder.mutation({
			query: (data) => ({
				url: "/room/",
				method: "POST",
				body: data,
			}),
			invalidatesTags: ["room"],
		}),
		deleteRoom: builder.mutation({
			query: (id) => ({
				url: `/room/${id}`,
				method: "DELETE",
			}),
			invalidatesTags: ["room"],
		}),
	}),
})

export const { useGetRoomQuery, usePostRoomMutation, useDeleteRoomMutation } = api
