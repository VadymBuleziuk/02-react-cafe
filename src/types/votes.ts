export interface Votes {
  good: number;
  bad: number;
  neutral: number;
}
export type VoteType = keyof Votes;
