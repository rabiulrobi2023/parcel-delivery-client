import { baseApi } from "@/redux/baseApi";

const authApi = baseApi.injectEndpoints({
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
  }),
});

export const { useUserRegistrationMutation, useUserLoginMutation } = authApi;
