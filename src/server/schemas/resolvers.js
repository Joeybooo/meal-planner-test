const { User, Recipe } = require('../models');

const resolvers = {
    Query: {
      users: async () => {
        return User.find()
          .select('-_v -password')
          .populate('friends')
          .populate('recipes')
      },
      user: async (parent, { username }) => {
        return User.findOne({ username })
          .select('-_v -passowrd')
          .populate('friends')
          .populate('recipes')
      },
      recipes: async () => {
        const params = username ? { username } : {};
        return Recipe.find(params).sort({ createdAt: -1 });
      },
      recipe: async (parent, {_id}) => {
        return Recipe.findOne({_id});
      }
    }
  };
  
  module.exports = resolvers;