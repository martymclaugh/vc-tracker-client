import { VCType } from '../shared/vc-type';

export type Props = {
  investors: Array<VCType>,
  refetchByOrder: () => void,
};
