import React from 'react';
import Recipes from '../Recipes/recipes';
import Today from '../Today/today'


function HomePage() {
    return (
        <div>
            <Recipes></Recipes>
            <Today></Today>
        </div>
    );
}

export default HomePage;