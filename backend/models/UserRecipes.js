const { Schema, model } = require('mongoose');

const RecipeSchema = new Schema({
    // User recipe
    recipeName: { 
        type: String
    },
    // User Name
    creayedBy: {
        type: String
    },
    // Created Date
    createdAt: {
        type: Date,
        default: Date.now
    },
    // Ingridents 
    Ingridents: [], 
    // Directions
    directions: {
        type: String
    }
});

// Create recipe model
const UserRecipe = model('Recipe', RecipeSchema);

// Export model
module.exports = UserRecipe;