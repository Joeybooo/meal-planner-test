import { gql } from '@apollo/client';

export const QUERY_RECIPES = gql `
    query recipes($username: String) {
        recipes(username: $username) {
            _id
            recipeText
            createdAt
            username
            reactionCount
            reactions {
                _id
                createdAt
                username
                reactionBody
            }
        }
    }
`;