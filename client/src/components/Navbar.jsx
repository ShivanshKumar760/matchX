import logo from "../images/matchXTitle.png";
import icon from "../images/matchXLogo.png";
const Navbar=({minimal,authToken})=>{
    return(
        <nav>
            <div className="logo-container">
                <img className="logo" src={minimal?logo:icon} alt=""/>
            </div>
            {!authToken && !minimal &&<button className="nav-button button-30">Log in</button>}
        </nav>  
    )
};
export default Navbar;