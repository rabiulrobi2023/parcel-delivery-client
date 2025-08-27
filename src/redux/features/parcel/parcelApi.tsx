import type { IResponse } from "@/interfaces/response.interface";
import { baseApi } from "@/redux/baseApi";
import type { IParcel } from "./parcel.interface";

export const parcelApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createParcel: builder.mutation<IResponse, IParcel>({
      query: (parcelInfo) => ({
        url: "parcel",
        method: "POST",
        data: parcelInfo,
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
      }),
      invalidatesTags: ["USER"],
    }),
  }),
});

export const {
useCreateParcelMutation
} = parcelApi;
