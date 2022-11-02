// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
type Recipe {
    _id: ID
    recipeText: String
    createdAt: String
    username: String
    reactionCount: Int
}

type Query {
    recipes(username: String): [Recipe]
  }
`;

// export the typeDefs
module.exports = typeDefs;