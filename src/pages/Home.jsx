import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";

function Home() {
  return (
    <>
      <Navigation></Navigation>
      <div class="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 min-h-screen flex items-center justify-center">
        <div class="text-center">
          <h1 class="text-4xl  text-white mb-4">
            Shop Free With <span className="font-bold ">Dokan.</span>
          </h1>
          <p class="text-lg text-white mb-8">
            React based web app implementing react routers, context api, custom hooks, localstorage & more.
          </p>
          <Link to={'/shop'}><button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Get Started
          </button></Link>
        </div>
      </div>
    </>
  );
}

export default Home;
