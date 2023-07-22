import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Cards } from "restapi/types";

export interface GameState {
  address: string | null;
  allCards: Array<Array<Cards>>;
}

const initialState: GameState = {
  address: null,
  allCards: [],
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setGameAddress: (state, action: PayloadAction<string | null>) => {
      state.address = action.payload;
    },
    setAllCards: (state, action: PayloadAction<Array<Array<Cards>>>) => {
      state.allCards = action.payload;
    },
  },
});

export const { setGameAddress, setAllCards } = gameSlice.actions;
export default gameSlice.reducer;
