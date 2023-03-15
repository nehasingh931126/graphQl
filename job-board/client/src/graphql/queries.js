import { request, gql } from 'graphql-request';
const GraphQL_URL = 'http://localhost:9000/graphql';

export async function getJobs() {
    const query = gql`query {
  jobs {
    id
    title
    company {
      name
    }
  }
}
    `;

    const {jobs} = await request(GraphQL_URL, query);
    console.log(jobs);
    return jobs;
}