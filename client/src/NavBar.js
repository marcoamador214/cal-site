import React from "react";
import { Link } from "react-router-dom";



function NavBar ({currentUser,setCurrentUser}){
    function handleLogOutClick(){
        fetch("/logout", {method:"DELETE"}).then((r)=>{
            if(r.ok){
                setCurrentUser(null);
            }
        })
    }
    return (
        
        <>
        <Link exact to ="/"> Games Display</Link>

<Link to="/RatedGames">RatedGames</Link>
<button variant= "outline" onClick={handleLogOutClick}>
    Logout
</button>
</>

    )
    }

    export default NavBar;