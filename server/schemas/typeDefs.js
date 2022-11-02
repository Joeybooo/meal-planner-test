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
    reactions: [Reaction]
}

type Reaction {
  _id: ID
  reactionBody: String
  createdAt: String
  username: String
}

type User {
  _id: ID
  username: String
  email: String
  friendCount: Int
  recipes: [Recipe]
  friends: [User]
}

type Query {
    me: User
    users: [User]
    user(username: String!): User
    recipes(username: String): [Recipe]
    recipe(_id: ID!): Recipe
  }

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addRecipe(recipeText: String!): Recipe
    addReaction(recipeId: ID!, reactionBody: String!): Recipe
    addFriend(friendId: ID!): User
}

type Auth {
  token: ID!
  user: User
}

`;

// export the typeDefs
module.exports = typeDefs;