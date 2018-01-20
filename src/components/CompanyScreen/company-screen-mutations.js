import gql from 'graphql-tag';

export const updateCompany = gql`
  mutation updateCompany($id: ID, $budget: Int!,  $description: String!, $name: String!, $raised: Int!, $timeline: Date! ) {
    updateCompany(
      id: $id,
      budget: $budget,
      description: $description,
      name: $name,
      raised: $raised,
      timeline: $timeline,
    ) {
      slug,
      updated_at,
    }
  }
`;

export const destroyCompany = gql`
  mutation destroyCompany($id: ID) {
    destroyCompany(
      id: $id,
    ) {
      slug,
      updated_at,
    }
  }
`;
