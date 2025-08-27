import { baseApi } from "@/redux/baseApi";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    allUsers: builder.query({
      query: () => ({
        url: "/user",
        method: "GET",
      }),
      transformResponse: (res) => res.data,
      providesTags: ["USER"],
    }),
    deleteUser: builder.mutation({
      query: (userId: string) => ({
        url: `/user/${userId}`,
        method: "PATCH",
      }),
      invalidatesTags: ["USER"],
    }),
    blockUser: builder.mutation({
      query: (userId: string) => ({
        url: `user/block-user/${userId}`,
        method: "PATCH",
      }),
      invalidatesTags: ["USER"],
    }),
    unblockUser: builder.mutation({
      query: (userId: string) => ({
        url: `user/unblock-user/${userId}`,
        method: "PATCH",
      }),
      invalidatesTags: ["USER"],
    }),
  }),
});

export const { useAllUsersQuery, useDeleteUserMutation, useBlockUserMutation,useUnblockUserMutation } =
  userApi;
