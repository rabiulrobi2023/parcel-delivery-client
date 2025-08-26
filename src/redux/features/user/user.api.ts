import { baseApi } from "@/redux/baseApi";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    allUsers: builder.query({
      query: () => ({
        url: "/user",
        method: "GET",
      }),
      transformResponse: (res)=>res.data
    }),
  }),
});

export const {useAllUsersQuery} = userApi
