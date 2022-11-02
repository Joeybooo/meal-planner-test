import { useQuery } from "@apollo/client";
import RecipeList from "../components/RecipeList";
import { QUERY_RECIPES, QUERY_ME_BASIC } from '../utils/queries';
import Auth from '../utils/auth';
import FriendList from '../components/Friends';

const Home = () => {
    const { loading, data } = useQuery(QUERY_RECIPES);
    const { data: userData } = useQuery(QUERY_ME_BASIC);
    const recipes = data?.recipes || [];
    console.log(recipes);
    const loggedIn = Auth.loggedIn();

    return(
        <main>
            <div className="flex-row justify-space-between">
                <div className="col-12 mb-3 ${loggedIn && 'col-lg-8'}">
                    {loading ? (
                        <div>Loading...</div>
                    ) : (
                    <RecipeList recipes={recipes} title="Recipes" />
                    )}
                </div>
                {loggedIn && userData ? (
                    <div className="col-12 col-lg-3 mb-3">
                        <FriendList
                            username={userData.me.username}
                            friendCount={userData.me.friendCount}
                            friends={userData.me.friends}
                        />
                    </div>
                ) : null}
            </div>
        </main>
    );
};

export default Home;