const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");
const cors = require("cors");

const app = express();
app.use(cors());

// Construct a schema, using GraphQL schema language
const typeDefs = gql`

  type User{
    id: ID!
    name: String!
    email: String!
    password: String!
    role: String!
  }

  type Query {
    users : [User]
    user(id: ID!) : User
  }
`;

const users = [
  { id: "1", name: "Alice", email: "alice@example.com" },
  { id: "2", name: "Bob", email: "bob@example.com" },
];
// Provide resolver functions for your schema fields

const resolvers = {
  Query: {
    users: () => users,
    user: (parent, args) => {
      return users.find((user) => user.id === args.id);
    },
  },
};

async function startApolloServer(){
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();
  server.applyMiddleware({ app });


  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () =>
    console.log(`Server ready at http://localhost:${PORT}/graphql`)
  );
}

startApolloServer();