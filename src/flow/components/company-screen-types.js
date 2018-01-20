import { CompanyType } from '../shared/company-type';

export type Props = {
  destroyCompany: () => void;
  data: {
    getCompany: CompanyType,
    refetch: () => void,
    loading: boolean,
  },

};

export type State = {
  display: string,
};
