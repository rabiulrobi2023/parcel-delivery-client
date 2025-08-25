import { baseApi } from "@/redux/baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    userRegistration: builder.mutation({
      query: (userInfo) => ({
        url: "user/register",
        method: "POST",
        data: userInfo,
      }),
    }),
    userLogin: builder.mutation({
      query: (loginInfo) => ({
        url: "auth/login",
        method: "POST",
        data: loginInfo,
      }),
    }),
    getMe: builder.query({
      query: () => ({
        url: "user/me",
        method: "GET",
      }),
      providesTags: ["USER"],
    }),
    logout: builder.mutation({
      query: () => ({
        url: "auth/logout",
        method: "POST",
      }),invalidatesTags:["USER"]
    }),
  }),
});

export const {
  useUserRegistrationMutation,
  useUserLoginMutation,
  useGetMeQuery,
  useLogoutMutation,
} = authApi;
