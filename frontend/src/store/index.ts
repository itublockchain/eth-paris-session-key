import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import themeSlice from "./slicers/theme";
import cardSlice from "./slicers/card";
import gameSlice from "./slicers/game";

export const store = configureStore({
  reducer: {
    theme: themeSlice,
    card: cardSlice,
    game: gameSlice,
  },
  middleware: (getDefaultMiddleware) => {
    const customizedMiddleware = getDefaultMiddleware({
      serializableCheck: false,
    });
    return customizedMiddleware;
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
