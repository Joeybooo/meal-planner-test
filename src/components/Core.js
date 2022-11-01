import HomePage from "./CorePageComponents/Home"
import Calander from "./CorePageComponents/Calander"
import CreateRecipes from "./CorePageComponents/Createrecipes"
import SearchRecipes from "./CorePageComponents/SearchRecipes"
import SignOut from "./CorePageComponents/Signout"
import Header from "./CorePageComponents/Header"
import Footer from './CorePageComponents/Footer'
import Tabs from "./CorePageComponents/Tabs"

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
    heading: "Sign-Out",
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