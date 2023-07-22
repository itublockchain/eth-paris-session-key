import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export type CardInfo = {
  id: number;
  heal: number;
  power: number;
};
const cardInfo: Array<CardInfo> = [
  { id: 0, heal: 4, power: 3 },
  { id: 1, heal: 6, power: 2 },
  { id: 2, heal: 2, power: 7 },
  { id: 3, heal: 1, power: 9 },
  { id: 4, heal: 9, power: 1 },
];

export interface CardState {
  attackerCard: number;
  defenderCard: number;
  attackerCards: Array<CardInfo>;
  defenderCards: Array<CardInfo>;
}

const initialState: CardState = {
  attackerCard: -1,
  defenderCard: -1,
  attackerCards: cardInfo,
  defenderCards: cardInfo,
};

export const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    setAttackerCard: (state, action: PayloadAction<number>) => {
      state.attackerCard = action.payload;
    },

    setDefenderCard: (state, action: PayloadAction<number>) => {
      state.defenderCard = action.payload;
    },
  },
});

export const { setAttackerCard, setDefenderCard } = cardSlice.actions;
export default cardSlice.reducer;
