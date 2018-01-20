import { CompanyType } from './company-type';

export type Props = {
  defaultValues: null | CompanyType,
};

export type State = {
  form: CompanyType,
  error: string,
};
