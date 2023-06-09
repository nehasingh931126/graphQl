import { request, gql } from 'graphql-request';
import {getAccessToken} from '../auth';
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
  const query = gql`query Company($id: ID!){
  company(id: $id) {
    id
    name
    description
    jobs {
      id
      title
    }
  }
}`;
  const variables = { id };
  const { company} = await request(GraphQL_URL, query, variables);
  return company;
}

export async function createJob(input) {
  const query = gql`mutation CreateJobMutation($input: CreateJobScehma!){
  job: createJob(input: $input) {
    id
  }
}`;
  const headers = { 'Authorization': `Bearer ` + getAccessToken()};
  const variables = { input };
  console.log(variables);
  const { job } = await request(GraphQL_URL, query, variables, headers);
  return job;
}