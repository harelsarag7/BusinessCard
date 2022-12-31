import jwtDecode from "jwt-decode";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { userModel } from "../../../../Models/userModel";
import { userFunctions } from "../../../../Services/user";
import "./NavBar.css";

function NavBar(): JSX.Element {

    
    const [user1, setUser] = useState<userModel | undefined>(undefined)
    
    useEffect(() => {
        
        let token1: any = window.localStorage.getItem(`userToken`);
        
        if(!token1){
            setUser(undefined)
        } else {
                const user: any = jwtDecode<{ user: userModel}>(token1);
                   userFunctions.getUserById(user.sub).then(res => {
                    setUser(res)
                   });
                }
                
    }, [])
    
    return (
        <div className="NavBar">
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/createcard"}>Create Card</NavLink>
                <NavLink to={`/user/${user1?.username}`}>My Cards</NavLink>
                {/* <NavLink to={"/blog"}>Blog</NavLink> */}
        </div>
    );
}

export default NavBar;
