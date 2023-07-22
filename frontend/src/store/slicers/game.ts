import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface GameState {
  address: string | null;
}

const initialState: GameState = {
  address: null,
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setGameAddress: (state, action: PayloadAction<string | null>) => {
      state.address = action.payload;
    },
  },
});

export const { setGameAddress } = gameSlice.actions;
export default gameSlice.reducer;
