import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
import { Md5 } from "ts-md5";

export const bookApi = createApi({
  reducerPath: "post-book",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_APP_URL }),

  endpoints: (build) => ({
    postBook: build.query({
      query: () => {
        const str = localStorage.getItem("str");
        return {
          method: "GET",
          redirect: "follow",
          url: `/books`,
          headers: {
            "Content-Type": "application/json",
            Key: "hjk121",
            Sign: Md5.hashStr(`${str}`),
          },
        };
      },
    }),
  }),
});

export const { usePostBookQuery } = bookApi;
