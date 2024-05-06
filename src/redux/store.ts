import service, { bookReducer } from "./service";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    ...bookReducer,
  },

  middleware: (defaultMiddleware: any) => {
    return defaultMiddleware().concat(...service.map((api) => api.middleware));
  },
});

// store.subscribe(() => {
//   saveState("user", store.getState()?.userReducer);
// });
