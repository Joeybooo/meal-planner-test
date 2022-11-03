import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_RECIPE } from '../../utils/mutations';

import { QUERY_RECIPES, QUERY_ME } from '../../utils/queries';

const RecipeForm = () => {
    const [recipeText, setText] = useState('');
    const [characterCount, setCharacterCount] = useState(0);

    const [addRecipe, { error }] = useMutation(ADD_RECIPE, {
        update(cache, { data: { addRecipe } }) {
            try {
                const { me } = cache.readQuery({ query: QUERY_ME });
                cache.writeQuery({
                  query: QUERY_ME,
                  data: { me: { ...me, recipes: [...me.recipes, addRecipe] } },
                });
              } catch (e) {
                console.warn("First Recipe")
              }
              const { recipes } = cache.readQuery({ QUERY_RECIPES });
              cache.writeQuery({
                query: QUERY_RECIPES,
                data: { recipes: [addRecipe, ...recipes]},
              });
  }
});

    const handleChange = event => {
        if (event.target.value.length <= 1000) {
          setText(event.target.value);
          setCharacterCount(event.target.value.length);
        }
      }

      const handleFormSubmit = async event => {
        event.preventDefault();
      
        try {
          await addRecipe({
            variables: { recipeText }
          });
          setText('');
          setCharacterCount(0);
        } catch (e) {
          console.error(e);
        }
      };

  return (
    <div>
        <p className={`m-0 ${characterCount === 1000 ? 'text-error' : ''}`}>
            Character Count: {characterCount}/1000
            {error && <span className="ml-2">Something went wrong...</span>}
        </p>
      <form className="flex-row justify-center justify-space-between-md align-stretch" onSubmit={handleFormSubmit}>
        <textarea
         placeholder="What Recipe Would You Like To Share?"
            value={recipeText}
            className="form-input col-12 col-md-9"
            onChange={handleChange}
        ></textarea>
        <button className="btn col-12 col-md-3" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default RecipeForm;