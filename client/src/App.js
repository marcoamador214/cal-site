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
import Roster from './Roster';
import Questions from './Questions';
import Opponents from "./Opponents";


function App() {
 const [currentUser,setCurrentUser]=useState("");
 const [users, setUsers] = useState([]);

 useEffect(() => {

    fetch('/users')
    .then((r) => r.json())
    .then((users) => {
      setUsers(users)
      console.log(users)
    })

},[]);


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
          <Header currentUser={currentUser}/>
          <Gallery/>
          <Intro/>
          <Awards/>
        </Route>
        
        <Route path ="/Roster">    
          <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser}  />
          <Roster/>
        </Route>

        <Route exact path='/Questions'>
          <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser}/>
          <Questions currentUser={currentUser} users={users}/>
        </Route>

        <Route exact path='/Schedule'>
          <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser}/>
          <Opponents/>
        </Route>

      </Switch>
    </div>
      
       
   
    
  );
}

export default App;