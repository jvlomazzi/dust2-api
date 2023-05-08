export class Team {
  ranking: number; //TODO: change to number
  name: string;
  points: number;
  rankingChange: string;
  lineUp: Player[];
}

export class Player {
  nickname: string;
  nationality?: string;
};
