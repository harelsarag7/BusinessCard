import Tooltip from "@mui/joy/Tooltip/Tooltip";
import { Avatar, Menu, MenuItem } from "@mui/material";
import deepOrange from "@mui/material/colors/deepOrange";
import jwtDecode from "jwt-decode";
import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userModel } from "../../../Models/userModel";
import { userFunctions } from "../../../Services/user";
import Login from "../Main/Auth/Login/Login";
import NavBar from "./CategoriesNavBar/NavBar";
import "./Header.css";
import { logout } from "../../../App/authSlice";

function Header(): JSX.Element {

    // const [user1, setUser] = useState<userModel | undefined>(undefined)
    const dispatch = useDispatch();

    const userRedux = useSelector((state: any) => state.auth)

    useEffect(() => {
        console.log(userRedux);
    }, [userRedux])


    const [anchorEl, setAnchorEl] = React.useState(null);

    function handleClick(event: any) {
      if (anchorEl !== event.currentTarget) {
        setAnchorEl(event.currentTarget);
      }
    }
  
    function handleClose() {
      setAnchorEl(null);
    }
  
    function logoutButton(){ 
        dispatch(logout());
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
                 <div>{userRedux? 
                 <div className="avatar-header" >
                         <Avatar 
                         aria-owns={anchorEl ? "simple-menu" : undefined}
                        aria-haspopup="true"
                        onClick={handleClick}
                        onMouseOver={handleClick}   sx={{ bgcolor: deepOrange[500] }}>{userRedux.username?.charAt(0).toLocaleUpperCase()}

                         <Menu 
                            id="simple-menu"
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                            
                            MenuListProps={{ onMouseLeave: handleClose }}
                        >
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>My account</MenuItem>
                            <MenuItem onClick={logoutButton}>Logout</MenuItem>
                        </Menu>
                            </Avatar>
                 </div>
                 : <Login/>
                        }</div>
                </div>

            </div>
        </div>
    );
}

export default Header;
