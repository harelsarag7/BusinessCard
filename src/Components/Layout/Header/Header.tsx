import NavBar from "./CategoriesNavBar/NavBar";
import "./Header.css";

function Header(): JSX.Element {
    return (
        <div className="Header">
            <div className="container">
               
                <div className="logo"><img src="https://img.freepik.com/free-vector/luxury-logo-gradient-design-illustration_483537-1038.jpg?w=826&t=st=1672169434~exp=1672170034~hmac=e8727c25f84d40e9e0581461832a30168a6c70190978fc05b693233dc56a4e23" alt="" /></div>
		    	
                <div className="categories-container">
			        <div className="categories">
                        <NavBar/>
                    </div>
                 </div>

                 <div><button className="login-btn-header">Login</button></div>

            </div>
        </div>
    );
}

export default Header;
