import {gql, ApolloServer} from 'apollo-server';

const typeDefs = gql`
    schema {
        query: Query
    }

    type Query{
        greeting: String   
    }
`

const resolvers = {
    Query: {
        greeting: ()=>'Hello World!' 
    }
}

console.log(typeDefs);

const server = new ApolloServer({typeDefs, resolvers});
const serverInfo = await server.listen({port: 9000});
console.log(`Server running at ${serverInfo.url}`);