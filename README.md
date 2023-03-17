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

Its good to have input type for each mutation

````
input CreateJobInput {
    title: String!, 
    companyId: ID!, 
    description:String
}

````

Graphql Sandbox:
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


Adding the Alias 

````
mutation CreateJobMutation($input: CreateJobInput!){
  job: createJob(input: $input) {
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
## Update Job

````
mutation {job: updateJob(input: {
  id: "soP9m8MdKeQX_ZXZOCSaL",
  title: "Senior Devops Engineer",
  description: "Some new Task..",
  companyId: "pVbRRBQtMVw6lUAkj1k43"
  }){
    id
  }}
````

## React

### useNavigate
This is the hook provided by the React Router it returns a navigate function

It takes the argument as string where you can pass the path

### How Authentication Works

Client ----------------------------------------> Server
                  Post Login
Client<--------------------------------------- Server 
(save token)                  {token: "xys123"}

This token recieved from the Backend is stored in the local storage or in the cookies
Cookies are slightly more secure

                Post /graphql
           Authentication: Bearer xys123     
Client------------------------------------------>Server 
Client<------------------------------------------- Server
                  {data: ...}

This Authentication token needs to be sent to the Server everytime it request for any resource to the server
If the token is verified then only the server will return what ever data the client asked for

Its better to keep the Authentication step outside the graphQl Api


JSON WEB TOKEN
https://jwt.io/

JWT: Combination of Header + Payload + Signation

Therefore, a JWT typically looks like the following.
xxxxx.yyyyy.zzzzz

## Header
The header typically consists of two parts: the type of the token, which is JWT, and the signing algorithm being used, such as HMAC SHA256 or RSA.

````
{
  "alg": "HS256",
  "typ": "JWT"
}
````
Then, this JSON is Base64Url encoded to form the first part of the JWT.

## Payload
The second part of the token is the payload, which contains the claims. Claims are statements about an entity (typically, the user) and additional data. There are three types of claims: registered, public, and private claims.


Registered claims: These are a set of predefined claims which are not mandatory but recommended, to provide a set of useful, interoperable claims. Some of them are: iss (issuer), exp (expiration time), sub (subject), aud (audience), and others.

Public claims: These can be defined at will by those using JWTs. But to avoid collisions they should be defined in the IANA JSON Web Token Registry or be defined as a URI that contains a collision resistant namespace.

Private claims: These are the custom claims created to share information between parties that agree on using them and are neither registered or public claims.

An example payload could be:

{
  "sub": "1234567890",
  "name": "John Doe",
  "admin": true
}

The payload is then Base64Url encoded to form the second part of the JSON Web Token.


## Signature

To create the signature part you have to take the encoded header, the encoded payload, a secret, the algorithm specified in the header, and sign that.

For example if you want to use the HMAC SHA256 algorithm, the signature will be created in the following way:

````
HMACSHA256(
  base64UrlEncode(header) + "." +
  base64UrlEncode(payload),
  secret)
````

## Middlewares in Nodejs
The middleware in node. js is a function that will have all the access for requesting an object, responding to an object, and moving to the next middleware function in the application request-response cycle.


## epressjwt middleware
This is the package used for validating the Apis with jwt


## Context 
This is used to extract informtaton from our http request
I have used the context to make the relevant data available to the resolver


## Learning while working

````
input['companyId'] = user.companyId; // Donot use this 
return Job.create({ ...input, companyId: user.companyId }); // use this
````


## Links
https://www.npmjs.com/package/express-jwt
https://jwt.io/introduction


