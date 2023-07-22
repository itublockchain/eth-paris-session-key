import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Cards } from "restapi/types";
export type CardInfo = {
  id: number;
  heal: number;
  power: number;
};
const cardInfo: Array<Cards> = [
  { id: 0, health: 4, power: 3 },
  { id: 1, health: 6, power: 2 },
  { id: 2, health: 2, power: 7 },
  { id: 3, health: 1, power: 9 },
  { id: 4, health: 9, power: 1 },
];

const cardInfo2: Array<Cards> = [
  { id: 0, health: 4, power: 3 },
  { id: 1, health: 6, power: 2 },
  { id: 2, health: 2, power: 7 },
  { id: 3, health: 1, power: 9 },
  { id: 4, health: 9, power: 1 },
];

export interface CardState {
  attackerCard: number;
  defenderCard: number;
  attackerCards: Array<Cards>;
  defenderCards: Array<Cards>;
}

const initialState: CardState = {
  attackerCard: -1,
  defenderCard: -1,
  attackerCards: cardInfo,
  defenderCards: cardInfo2,
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
    setAttackerCards: (state, action: PayloadAction<Array<Cards>>) => {
      state.attackerCards = action.payload;
    },
    setDefenderCards: (state, action: PayloadAction<Array<Cards>>) => {
      state.defenderCards = action.payload;
    },
  },
});

export const {
  setAttackerCard,
  setDefenderCard,
  setAttackerCards,
  setDefenderCards,
} = cardSlice.actions;
export default cardSlice.reducer;
