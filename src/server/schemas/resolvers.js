const { User, Recipe } = require('../models');

const resolvers = {
    Query: {
      recipes: async () => {
        const params = username ? { username } : {};
        return Recipe.find(params).sort({ createdAt: -1 });
      }
    }
  };
  
  module.exports = resolvers;