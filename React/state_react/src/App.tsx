import FavouriteMovies from "./components/exercises/exercise_array";
import ToggleTheme from "./components/exercises/exercise_boolean";
import MirrorInput from "./components/exercises/exercise_input";
import MyCounter from "./components/exercises/exercise_number";
import ProfileCard from "./components/exercises/exercise_object";
import Greeting from "./components/exercises/exercise_string";

function App() {
  return (
    <div className="">
      <h1>State in React</h1>
      <hr />
      <Greeting />
      <hr />
      <MirrorInput />
      <hr />
      <MyCounter />
      <hr />
      <ToggleTheme />
      <hr />
      <ProfileCard />
      <hr />
      <FavouriteMovies />
      {/* <Counter />
      <hr />
      <MyInput />
      <hr />
      <LikeButtonComponent />
      <hr />
      <AgeCounterComponent />
      <hr />
      <ContactFormComponent />
      <hr />
      <ListComponent /> */}
    </div>
  );
}

export default App;
