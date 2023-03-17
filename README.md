## graphQl
GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. GraphQL provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools.

Send a GraphQL query to your API and get exactly what you need, nothing more and nothing less. GraphQL queries always return predictable results. Apps using GraphQL are fast and stable because they control the data they get, not the server.

## Features of GraphQL
We can decide which fields we want from the server
Each client can decide which fields they want and leave out those not needed

GraphyQl is designed to prevent "overfetching"
"overfetching": basically fetching more data then you need


## Important
You cannot use single qoute in the graphQL

## code snippet

## How we can use the import statement in the nodejs course
Adding type as module in the package.json ("type": "module")

## Package installed: apollo-server and graphql
graphql: contains the core graphql
apollo-server: serving over http

## GraphQL over HTTP
graphql: contains the core graphql
apollo-server: serving over http

## Apollo Sandbox
This apollo sanbox is the graphQL client

## Tools, packages and Technology used
React: Router, useState, props, useEffect
Nodejs
Expressjs
jwt
bulma for css
fakebase: used the local json file
vs code for development
graphql: A graphql vs code extension
"graphql": "^16.6.0"
"graphql-request": "^5.2.0"


## How to write the gql
Fetch the Jobs list

Specific Job based on ID:
````
query JobQuery($id: ID!){
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

Jobs list:
````
query {
  jobs {
    id
    title
    company {
      name
    }
  }
}
````
query JobQuery($id: ID!){
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
````


````
query Company($id: ID!){
  company(id: $id) {
    id
    name
    description
  }
}
````

## Mutations
Mutation is used for modifying the data or say creating any resourse


````
mutation {
  createJob(title: "Job One", 
  companyId: "pVbRRBQtMVw6lUAkj1k43",
  description: "Test") {
    id
    title
    company {
      id
      name
    }
  }
}
````

## Input Types
You can have the mutation accept the single value with the help of custom input type

Regular types are called as the output types because they can only be returned by the query or the mutation
While, Input types can only be used as arguments, passed to the query or mutation 

We need to pass the input which is of type CreateJobInput in CreateJobMutation as it takes one argument
````
mutation CreateJobMutation($input: CreateJobInput!){
  createJob(input: $input) {
    id
    title
    company {
      id
      name
    }
  }
}
````


