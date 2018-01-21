export type Props = {
  data: {
    getVentureCapitalist: {
      slug: string,
    },
    refetch: () => void,
    destroyVentureCapitalist: () => void,
    loading: boolean,
  },
};

export type State = {
  display: string,
};
