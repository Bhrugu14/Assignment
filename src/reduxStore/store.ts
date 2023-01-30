import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { GetReducer } from "./companySlice";
export const store = configureStore({
  reducer: {
    company: GetReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
