import "./App.css";
import Football from "./components/Events/Football";
import Cars from "./components/Lists/Cars";
import Grocery from "./components/Lists/Grocery";
//import FruitBasket from "./components/Events/FruitBasket";
//import Header from './components/Header';
// import LandingPage from './components/LandingPage';
// import A from './components/Props/A';

function App() {
  //const fruits = ["mango", "apple", "banana", "kiwi"];
  return (
    <div className="App">
      {/* Lecture One To Three  */}
      {/* <h1>Hi How Are You</h1>
      <LandingPage></LandingPage>
      <A></A> */}
      {/* Lecture 4 */}
      {/* <Football isGoal={false} /> */}
      {/* <FruitBasket fruits={fruits}/> */}
      <Cars></Cars>
      <Grocery></Grocery>
    </div>
  );
}
export default App;
