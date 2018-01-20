import gql from 'graphql-tag';

export const createCompany = gql`
    mutation createCompany($budget: Int!,  $description: String!, $name: String!, $raised: Int!, $timeline: Date! ) {
      createCompany(
        budget: $budget,
        description: $description,
        name: $name,
        raised: $raised,
        timeline: $timeline,
      ) {
        slug
      }
    }
  `;
