import gql from 'graphql-tag';
import { ventureCapitalistFragment } from '../../graphql/shared-queries';

export const fetchCompany = gql`
  query getCompany($id: ID!) {
    getCompany(id: $id) {
    	id,
  		name,
      description,
      slug,
      budget,
      timeline,
      raised,
      updated_at,
      ventureCapitalists {
        slug,
        name,
        affiliation,
        website,
        contact,
        check_size,
        investments_per_year
        status,
        location,
        potential,
        interests,
      },
    }
  }
`;
