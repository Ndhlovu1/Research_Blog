import React from "react"
import TopBar from "./components/topbar/TopBar";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import Settings from "./Pages/Settings/Settings"
import Single from "./Pages/single/Single";
import Write from "./Pages/Write/Write";
import Home from "./Pages/Home/Home"
import {BrowserRouter as Router,Routes,Switch,Route,Link } from "react-router-dom";
import Team from "./components/Post/Team";


function App() { 
  // create a loggedIn User - Go to TopBar for the Links
  const user = true;

  return (
  <Router>
    <TopBar />
    {
      <Routes>
        <Route exact path="/" element = {<Home/>} />

        <Route path="/Register" element = {user ? <Home/> :<Register/>} />

        <Route path="/Profile" element = {user ? <Settings/> : <Register/>} />
        <Route path="/Create" element = {user ? <Write/> : <Register/>} />
        <Route path="/Login" element = {user ? <Home/> : <Login/>} />
        <Route path="/Post/:postId" element = {<Single/>} />
        <Route path="/Team" element={<Team/>}/>
      </Routes>
    }


  </Router> 
  
  ); 
}

 
export default App;
   