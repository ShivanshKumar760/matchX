import Navbar from "../components/Navbar";
const Home=()=>{
    const authToken=false;
    const handleClick=()=>{
        console.log("Clicked!");
    }
    return (
        <div className="overlay">
        <Navbar minimal={false} authToken={authToken}/>
        <div className="home">
            <h1>Swipe Right!</h1>
            <button className="primary-button" onClick={handleClick}>
                {authToken?"Logout":"Sign-Up"}
            </button>
        </div>
        </div>
    )
};

export default Home;
