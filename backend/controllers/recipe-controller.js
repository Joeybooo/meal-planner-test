const { Recipe } = require('../models');

const recipeController = {
    // get all recipe
    getAllRecipe(req, res) {
        Recipe.find({})
            .then(dbRecipeData => res.json(dbRecipeData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    // get one recipe by id
    getRecipeById({ params }, res ) {
        Recipe.findOne({_id: params.id })
            .then(dbRecipeData => {
                // if no recipe found send 404
                if (dbRecipeData) {
                    res.status(404).json({ message: 'No Recipe found'});
                    return;
                }
                res.json(dbRecipeData);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },
    
    // Create Recipe
    createRecipe({ body }, res){
        Recipe.create(body)
            .then(dbRecipeData => res.json(dbRecipeData))
            .catch(err => res.status(400).json(err));
    },

    // Update recipe
    updateRecipe({ params, body }, res) {
        Recipe.findOneAndUpdate({_id: params.id}, body, {new: true})
            .then(dbRecipeData => {
                if (!dbRecipeData) {
                    res.status(404).json({ message: 'No Recipe found'});
                    return;
                }
                res.json(dbRecipeData);
            })
            .catch(err => resizeTo.status(400).json(err));
    },

    // Delete Recipe
    deleteRecipe({ params }, res) {
        Recipe.findOneAndDelete({_id: params.id })
        .then(dbRecipeData => {
            if (!dbRecipeData) {
                res.status(404).json({ message: 'No Recipe found'});
                return;
            }
            res.json(dbRecipeData);
        })
        .catch(err => resizeTo.status(400).json(err));
    }
};

module.exports = recipeController;