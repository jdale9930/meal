import logo from './logo.svg';
import './App.css';
import SearchPage from "./components/Search/Search"
import MealPlanner from "./components/MealPlanner/MealPlanner"
import Login from "./components/Login/Login"
import {Switch, Route, BrowserRouter, Redirect, NavLink} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <nav>
        <NavLink to = "/login">Login</NavLink>
        <NavLink to = "/search">Search</NavLink>
        <NavLink to = "/mealPlanner">Meal Planner</NavLink>
      </nav>
    <Switch>
      <Route path = "/login" component = {Login}/>
      <Route path = "/search" component = {SearchPage}/>
      <Route path = "/mealPlanner" component = {MealPlanner}/>
      <Route path = "*">
        <Redirect to = "/search"/>  
      </Route>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
