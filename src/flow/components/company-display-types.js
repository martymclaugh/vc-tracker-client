export type Props = {
  name: string,
  budget: number,
  raised: number,
  timeline: Date,
  description: string,
  onEditClick: () => void,
};

export type State = {
  display: string,
};
