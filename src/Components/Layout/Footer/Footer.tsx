import "./Footer.css";

function Footer(): JSX.Element {
    return (
        



        // <div className="Footer">
            
 <footer className="footer">
        <div className="start-learning">
            <div className="footer-start">
                <div className="texts">
                    <h2 className="section-title">Start Shoping now</h2>
                    <h3 className="section-sub-heading">
                        <span>Only</span><strong> $15 </strong>
                        <span>for a</span> <strong>One year</strong>
                        <span> memberships</span>
                    </h3>
                </div>
                <a href="#" className="button">
                    <span className="label">Join the club</span>
                </a>
                <img className="illustration" src="https://static.vecteezy.com/system/resources/previews/011/996/200/original/ecommerce-icon-empty-shopping-cart-3d-illustration-free-png.png" alt="illustration" width="120" height="94"/>
            </div>
        </div>
        <div className="inner">
            {/* <div className="column is-logo">
                <a href="#" className="main-logo">
                    <div className="logo">
                        <img src="logo.png" alt="stackfindover"/>
                    </div>
                    <div className="logo-info">
                        <div className="text">Stackfindover</div>
                        <span className="copyright">© 2021. All rights reserved.</span>
                    </div>
                </a>
            </div> */}
            <div className="column is-nav">
                <div className="column-title">Navigation</div>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Login</a></li>
                    <li><a href="#">Join</a></li>
                </ul>
            </div>
            <div className="column is-nav">
                <div className="column-title">Contact</div>
                <ul>
                    <li><a href="#"><i className="fa fa-envelope-open"></i> Harel@fullstack.com</a></li>
                    <li><a href="#"><i className="fa fa-twitter"></i>@Harel_Fullstack_Developer</a></li>
                    {/* <li><a href="#"><i className="fa fa-linkedin"></i>Linkedin</a></li> */}
                </ul>
                <div className="column-title">Other</div>
                <ul>
                    <li><a href="#">Quiz</a></li>
                </ul>
            </div>
            <div className="column is-nav">
                <div className="column-title">Blog</div>
                <ul>
                    <li><a href="#">What is Clothes</a></li>
                    <li><a href="#">What is Shoes</a></li>
                    <li><a href="#">How to Buy in this site</a></li>
                </ul>
            </div>
        </div>
    </footer>
        // </div>
        
    );
}

export default Footer;
