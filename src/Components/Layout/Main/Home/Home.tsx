import Register from "../Auth/Register/Register";
import "./Home.css";
// import KeyboardArrowRightIcon from '../Home/';
function Home(): JSX.Element {
    return (
        <div className="Home">
			<div>
                <h1>Create your <strong>FREE</strong><br/>Business Card </h1>
                <div className="home-sign-up">
                    {/* <p>Start now </p> */}
                    <div className="emoji"></div>
                    {/* <button>Sign Up</button> */}
                    <Register/>
                </div>
            </div>
        </div>
    );
}

export default Home;
