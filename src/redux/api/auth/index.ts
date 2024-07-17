import { api as index } from '..';

const api = index.injectEndpoints({
	endpoints: (build) => ({
		getMe: build.query<AUTH.GetMeResponse, AUTH.GetMeRequest>({
			query: () => ({
				url: '',
				method: 'GET'
			}),
			providesTags: ['auth']
		}),
		postLogin: build.mutation<AUTH.PostLoginResponse, AUTH.PostLoginRequest>({
			query: (data) => ({
				url: '',
				method: 'POST',
				body: data
			}),
			invalidatesTags: ['auth']
		}),
		postRegistration: build.mutation<
			AUTH.PostRegistrationResponse,
			AUTH.PostRegistrationRequest
		>({
			query: (data) => ({
				url: '',
				method: 'POST',
				body: data
			}),
			invalidatesTags: ['auth']
		}),
		postLogout: build.mutation<AUTH.PostLogoutResponse, AUTH.PostLogoutRequest>(
			{
				query: () => ({
					url: '',
					method: 'POST'
				}),
				invalidatesTags: ['auth']
			}
		),
		patchRefreshToken: build.mutation<
			AUTH.PatchRefreshResponse,
			AUTH.PatchRefreshRequest
		>({
			query: () => ({
				url: '',
				method: 'PATCH'
			}),
			invalidatesTags: ['auth']
		}),
		postForgotPassword: build.mutation<
			AUTH.PostForgotPasswordResponse,
			AUTH.PostForgotPasswordRequest
		>({
			query: (data) => ({
				url: '',
				method: 'POST',
				body: data
			}),
			invalidatesTags: ['auth']
		}),
		patchResetPassword: build.mutation<
			AUTH.PatchResetPasswordResponse,
			AUTH.PatchResetPasswordRequest
		>({
			query: (data) => ({
				url: '',
				method: 'PATCH',
				body: data
			}),
			invalidatesTags: ['auth']
		})
	})
});
export const {
	useGetMeQuery,
	usePostLoginMutation,
	usePostRegistrationMutation,
	usePostLogoutMutation,
	usePatchRefreshTokenMutation,
	usePostForgotPasswordMutation,
	usePatchResetPasswordMutation
} = api;
