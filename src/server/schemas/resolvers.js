const { User, Recipe } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
      me: async (parent, args, context) => {
        if (context.user) {
          const userData = await User.findOne({ _id: context.user._id })
            .select('-__v -password')
            .populate('recipes')
            .populate('friends');
  
          return userData;
        }
  
        throw new AuthenticationError('Not logged in');
      },
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
    },

    Mutation: {
      addUser: async (parent, args) => {
        const user = await User.create(args);
        const token = signToken(user);

        return { token, user };
      },
      login: async (parent, {email, password }) => {
        const user = await User.findOne({ email });
        if (!user) {
          throw new AuthenticationError('Inccorect Email or Username');
        }

        const correctPw = await user.isCOrrectPassword(password);

        if (!correctPw) {
          throw new AuthenticationError('Incorrect Password');
        }

        const token = signToken(user);
        return { token, user };
      },
      addRecipe: async (parent, args, context)=> {
        if (context.user) {
          const recipe = await Recipe.create({ ...args, username: context.user.username });

          await User.findByIdAndUpdate (
            {_id: context.user._id },
            {$push: { recipes: recipe._id } },
            { new: true }
          );

          return recipe;
        }

        throw new AuthenticationError('You need to be logged in to add your recipe!')
      },
      addReaction: async (parent, { recipeId, reactionBody }, context) => {
        if (context.user) {
          const updatedRecipe = await Recipe.findOneAndUpdate(
            { _id: recipeId },
            { $push: { reactions: { reactionBody, username: context.user.username } } },
            { new: true, runValidators: true }
          );
      
          return updatedRecipe;
        }
      
        throw new AuthenticationError('You need to be logged in to comment!');
      },
      addFriend: async (parent, { friendId }, context) => {
        if (context.user) {
          const updatedUser = await User.findOneAndUpdate(
            { _id: context.user._id },
            { $addToSet: { friends: friendId } },
            { new: true }
          ).populate('friends');
      
          return updatedUser;
        }
      // can change message to be something more funny meal related later
        throw new AuthenticationError('You need to be logged in to make a new friend!');
      }
    }
  };
  
  module.exports = resolvers;