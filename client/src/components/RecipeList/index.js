import React from "react";

const RecipeList = ({ recipes, title }) => {
    if (!RecipeList.lenght) {
        return <h3> No Recipes Yet! Login or Signup to add your own</h3>;
    }

    return (
        <div>
            <h3>{title}</h3>
            {recipes &&
        recipes.map(recipe => (
          <div key={recipe._id} className="card mb-3">
            <p className="card-header">
              <link
                to={`/profile/${recipe.username}`}
                style={{ fontWeight: 700 }}
                className="text-light"
                >
                  {recipe.username}
                </link>{''}
                Recipe made on {recipe.createdAt}
            </p>
            <div className="card-body">
              <link to={`/recipe/$/thought._id`}>
                <p>{recipe.recipeText}</p>
                <p className="mb-0">
                  Reactions: {recipe.reactionCount ? 'see' : 'Start'} Comments!
                </p>
              </link>
            </div>
          </div>
        ))}
        </div>
    );
};

export default RecipeList;