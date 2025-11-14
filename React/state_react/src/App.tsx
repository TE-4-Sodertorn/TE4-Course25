import AgeCounterComponent from "./components/age.counter.component";
import ContactFormComponent from "./components/contact.form.component";
import Counter from "./components/counter.component";
import MyInput from "./components/input.component";
import LikeButtonComponent from "./components/like.button.component";
import ListComponent from "./components/list.component";

function App() {
  return (
    <div className="">
      <h1>State in React</h1>
      <hr />
      <Counter />
      <hr />
      <MyInput />
      <hr />
      <LikeButtonComponent />
      <hr />
      <AgeCounterComponent />
      <hr />
      <ContactFormComponent />
      <hr />
      <ListComponent />
    </div>
  );
}

export default App;
