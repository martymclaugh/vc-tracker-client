import gql from 'graphql-tag';

export const fetchAllCompanies = gql`
  query getCompanies {
    getCompanies {
    	id,
  		name,
      description,
      slug,
      budget,
      timeline,
      raised,
    }
  }
`;
