import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Cards } from "restapi/types";

export interface GameState {
  address: string | null;
  allCards: Array<Array<Cards>>;
  user: 0 | 1;
}

const initialState: GameState = {
  address: null,
  allCards: [],
  user: 0,
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
    setUserNumber: (state, action: PayloadAction<0 | 1>) => {
      state.user = action.payload;
    },
  },
});

export const { setGameAddress, setAllCards, setUserNumber } = gameSlice.actions;
export default gameSlice.reducer;
