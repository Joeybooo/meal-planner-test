import { useQuery } from "@apollo/client";
import { QUERY_RECIPES } from "../utils/queries";
import RecipeList from "../components/RecipeList";

const Home = () => {
    const { loading, data } = useQuery(QUERY_RECIPES);
    const recipes = data?.recipes || [];
    console.log(recipes);

    return(
        <main>
            <div className="flex-row justify-space-between">
                <div className="col-12 mb-3">
                    {loading ? (
                        <div>Loading...</div>
                    ) : (
                    <RecipeList recipes={recipes} title="Recipes" />
      )}
                </div>
            </div>
        </main>
    );
};

export default Home;