import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Football from "./components/Events/Football";
import Cars from "./components/Lists/Cars";
import Grocery from "./components/Lists/Grocery";
import Contact from "./components/Routing/Contact";
import Home from "./components/Routing/Home";
import Error from "./components/Routing/Error";
import LandingPage from "./components/Routing/LandingPage";
import Post from "./components/Routing/Post";
//import FruitBasket from "./components/Events/FruitBasket";
//import Header from './components/Header';
// import LandingPage from './components/LandingPage';
// import A from './components/Props/A';

// function App() {
//   //const fruits = ["mango", "apple", "banana", "kiwi"];
//   return (
//     // <div className="App">
//     //   {/* Lecture One To Three  */}
//     //   {/* <h1>Hi How Are You</h1>
//     //   <LandingPage></LandingPage>
//     //   <A></A> */}
//     //   {/* Lecture 4 */}
//     //   {/* <Football isGoal={false} /> */}
//     //   {/* <FruitBasket fruits={fruits}/> */}
//     //   <Cars></Cars>
//     //   <Grocery></Grocery>
//     // </div>
//     //Router 22-01-2023
//     <div className="App">

// 
//   );
// }
function App(){
    return(
     
      <BrowserRouter>
      {/* <nav>
          <ul>
            <li>
              <Link to="/home">Go To Home</Link>
            </li>
            <li>
              <Link to="/contactus">Contact Page</Link>
            </li>
            <li>
              <Link to="/error">Error</Link>
            </li>
          </ul>
      </nav> */}
      
      <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/home" element={<Home />}></Route>
          <Route exact path="/contactus" element={<Contact />}></Route>
          <Route exact path="blog/:id" element={<Post />}></Route>
          <Route exact path="*" element={<Error></Error>}></Route>
      </Routes>
      </BrowserRouter>
    
    );
}
export default App;
