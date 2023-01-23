// client/src/components/App.js
import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import './App.css'

import NavBar from './NavBar';
import Login from './Login';
import Header from "./Header";
import Gallery from "./Gallery";
import Intro from "./Intro";
import Awards from "./Awards";
import RatedGames from './RatedGames.js';


function App() {
 const [currentUser,setCurrentUser]=useState("");


 useEffect(()=> { 
  fetch("/me").then((r)=> {
    if(r.ok){
      r.json().then((user)=>setCurrentUser(user));
    }
  });
 },[]);

 if(!currentUser) {
 
  return <Login onLogin ={setCurrentUser}/>}


  return (
    
    <div className="App">
      <Switch>
        <Route exact path="/" >
          <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser} />
          <Header/>
          <Gallery/>
          <Intro/>
          <Awards/>
        </Route>
        
        <Route path ="/RatedGames">    
          <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser}  />
          <RatedGames currentUser={currentUser}/>
        </Route>

      </Switch>
    </div>
      
       
   
    
  );
}

export default App;