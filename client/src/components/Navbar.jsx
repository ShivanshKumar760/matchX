import logo from "../images/matchXTitle.png";
import icon from "../images/matchXLogo.png";
const Navbar=({minimal,authToken,setShowModal,showModal,setIsSignUp})=>{
    const handleClick=()=>{
        setShowModal((prevState)=>{
            return true;
        })
        setIsSignUp((prevState)=>{
            return false;
        })
    }
    return(
        <nav>
            <div className="logo-container">
                <img className="logo" src={minimal?logo:icon} alt=""/>
            </div>
            {!authToken && !minimal &&
            <button className="nav-button button-30" onClick={handleClick} disabled={showModal}>
                Log in
            </button>}
        </nav>  
    )
};
export default Navbar;