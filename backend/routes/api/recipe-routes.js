const router = require('express').Router();
const {
    getAllRecipe,
    getRecipeById,
    createRecipe,
    updateRecipe,
    deleteRecipe
} = require('../../controllers/recipe-controller');

// Get all router
router 
    .route('/')
    .get(getAllRecipe)
    .post(createRecipe);

// Get one, put, delete router
router
    .route('/:id')
    .get(getRecipeById)
    .put(updateRecipe)
    .delete(deleteRecipe);

module.exports = router;