export type News = {
  id: number;
  title: string;
  date: Date;
  url: string;
  totalComments: number;
};

export type DTO = {
  id?: number;
  date?: Date;
};