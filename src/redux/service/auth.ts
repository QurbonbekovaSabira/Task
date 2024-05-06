interface PostType {
  name: string;
  email: string;
  key: string;
  secret: string;
}

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { json } from "react-router-dom";
import { Md5 } from "ts-md5";

export const authApi = createApi({
  reducerPath: "todoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_APP_URL,
  }),
  endpoints: (build) => ({
    getUser: build.query({
      query: () => {
        return {
          url: "/myself",
        };
      },
    }),

    postUser: build.mutation({
      query: (data: PostType) => {
        const method = "POST";
        const url = "/signup";

        let haah = Md5.hashStr(
          `${method.toUpperCase()}${url}${JSON.stringify({
            ...data,
          })}${data.secret}`
        );
        let str = `${method.toUpperCase()}${url}${JSON.stringify({
          ...data,
        })}${data.secret}`;
        localStorage.setItem("str", str);
        localStorage.setItem("hash", haah);

        return {
          url: "/signup",
          method: "POST",
          body: data,
          headers: {
            Key: "MyKey",
            Sign: Md5.hashStr(
              `${method.toUpperCase()}${url}${JSON.stringify({
                ...data,
              })}${data.secret}`
            ),
            "Content-type": "application/json",
          },
        };
      },
    }),
  }),
});

export const { usePostUserMutation } = authApi;
