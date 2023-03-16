import { request, gql } from 'graphql-request';
const GraphQL_URL = 'http://localhost:9000/graphql';

export async function getJob(id) {
  const query = gql`query JobQuery($id: ID!){
  job(id: $id) {
    id
    title
    description
    company {
      id
      name
    }
  }
}
    `;
  const variables = { id };

  const { job } = await request(GraphQL_URL, query, variables);
  return job;
}

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

  const { jobs } = await request(GraphQL_URL, query);
  return jobs;
}

export async function getCompanies(id) {
  console.log("id", id);
  const query = gql`query Company($id: ID!){
  company(id: $id) {
    id
    name
    description
  }
}`;
  const variables = { id };
  const { company} = await request(GraphQL_URL, query, variables);
  return company;
}