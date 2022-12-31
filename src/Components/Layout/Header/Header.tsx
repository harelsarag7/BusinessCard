import Tooltip from "@mui/joy/Tooltip/Tooltip";
import { Avatar, Menu, MenuItem } from "@mui/material";
import deepOrange from "@mui/material/colors/deepOrange";
import jwtDecode from "jwt-decode";
import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { userModel } from "../../../Models/userModel";
import { userFunctions } from "../../../Services/user";
import Login from "../Main/Auth/Login/Login";
import NavBar from "./CategoriesNavBar/NavBar";
import "./Header.css";

function Header(): JSX.Element {

    const [user1, setUser] = useState<userModel | undefined>(undefined)
    

    // const user = useSelector((state: any) => state.auth)

    useEffect(() => {
        
        let token1: any = window.localStorage.getItem(`userToken`);
        
        if(!token1){
            setUser(undefined)
        } else {
                const user: any = jwtDecode<{ user: userModel}>(token1);
                
                   const userDetails = userFunctions.getUserById(user.sub).then(res => {
                    
                    setUser(res)
                   });
                }
                
    }, [])


    const [anchorEl, setAnchorEl] = React.useState(null);

    function handleClick(event: any) {
      if (anchorEl !== event.currentTarget) {
        setAnchorEl(event.currentTarget);
      }
    }
  
    function handleClose() {
      setAnchorEl(null);
    }
  
    function logout(){ 
        localStorage.clear();
        window.location.reload();
    }    

    return (
        <div className="Header">
            <div className="container">
               
                <div className="logo"><img src="https://img.freepik.com/free-vector/luxury-logo-gradient-design-illustration_483537-1038.jpg?w=826&t=st=1672169434~exp=1672170034~hmac=e8727c25f84d40e9e0581461832a30168a6c70190978fc05b693233dc56a4e23" alt="" /></div>
		    	
                <div className="categories-container">
			        <div className="categories">
                        <NavBar/>
                    </div>
                 </div>

                 <div>
                 <div>{user1? 
                 <div>
                 {/* <p>Welcome {user1.firstName}</p> */}
                {/* <Tooltip  onClick={logout} title="Logout" color="danger" size="lg" variant="outlined" id="logout-header"> */}
                         <Avatar 
                         aria-owns={anchorEl ? "simple-menu" : undefined}
                        aria-haspopup="true"
                        onClick={handleClick}
                        onMouseOver={handleClick} sx={{ bgcolor: deepOrange[500] }}>{user1.firstName?.charAt(0).toLocaleUpperCase()}</Avatar>

                         <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                            MenuListProps={{ onMouseLeave: handleClose }}
                        >
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>My account</MenuItem>
                            <MenuItem onClick={logout}>Logout</MenuItem>
                        </Menu>
                {/* </Tooltip> */}
                 {/* <button onClick={logout}>Logout</button> */}
                 </div>
                 : <Login/>
                        }</div>
                </div>

            </div>
        </div>
    );
}

export default Header;
