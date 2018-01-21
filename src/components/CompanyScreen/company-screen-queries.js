import gql from 'graphql-tag';

export const fetchCompany = gql`
  query getCompany($id: ID, $order_by: String, $size: Int, $ascending: String) {
    getCompany(id: $id) {
    	id,
  		name,
      description,
      slug,
      budget,
      timeline,
      raised,
      updated_at,
      ventureCapitalists(order_by: $order_by, size: $size, ascending: $ascending) {
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
