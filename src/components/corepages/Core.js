import HomePage from './Home';
import Calander from './Calander';
import CreateRecipes from './Createrecipes';
import SearchRecipes from './SearchRecipes';
import SignOut from './Signout';
import Header from '../allpages/Header';
import Tabs from '../allpages/Tabs';
import Footer from '../allpages/Footer';


const data = [
  {
    heading: "Home",
    body: <HomePage />
  },
  {
    heading: "Calander",
    body: <Calander />
  },
  {
    heading: "Search Recipe",
    body: <SearchRecipes />
  },
  {
    heading: "Create Recipe",
    body: <CreateRecipes />
  },
  {
    heading: "Sign-out",
    body: <SignOut />
  }
];

function CorePage() {
    return (
        <div>
          <Header />
          <Tabs data={data} />
          <Footer />
        </div>
      );
}

export default CorePage;