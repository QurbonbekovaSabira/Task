import { bookApi } from "./post-book";
import { authApi } from "./auth";

export const bookReducer = {
  [bookApi.reducerPath]: bookApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
};

export default [authApi, bookApi];
