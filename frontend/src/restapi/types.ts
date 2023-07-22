export type DefaultAxiosErrorResponse = {
  message: string;
  statusCode: number;
};

export type Cards = {
  id: number;
  health: number;
  power: number;
  isTaken?: boolean;
  isAlive?: boolean;
  address?: string;
};

export const GameStatus = ["NOTSTARTED", "STARTED", "FINISHED"];
export enum GameStatusEnum {
  NOTSTARTED = "NOTSTARTED",
  STARTED = "STARTED",
  FINISHED = "FINISHED",
}
