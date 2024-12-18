import TinderCard from "react-tinder-card";
import { useState } from "react";
import ChatContainer from "../components/ChatContainer";
import {useCookies} from 'react-cookie'
import { useEffect } from "react";
import axios from 'axios'
const Dashboard=()=>{
    const [user, setUser] = useState(null);
    const [lastDirection, setLastDirection] = useState();
    const [cookies, setCookie, removeCookie] = useCookies(['user']);
    const userId = cookies.UserId;
    const characters = [
        {
          name: 'Richard Hendricks',
          url: 'https://i.imgur.com/oPj4A8u.jpeg'
        },
        {
          name: 'Erlich Bachman',
          url: 'https://i.imgur.com/Q9WPlWA.jpeg'
        },
        {
          name: 'Monica Hall',
          url: 'https://i.imgur.com/MWAcQRM.jpeg'
        }
      ]
    const getUser = async () => {
        try {
            const response = await axios.get('http://localhost:3000/user', {
                params: {userId}
            })
            setUser(response.data)
        } catch (error) {
            console.log(error)
        }
    };
    useEffect(() => {
        getUser()

    }, []);
  
    const swiped = (direction, nameToDelete) => {
      console.log('removing: ' + nameToDelete)
      setLastDirection(direction)
    }
  
    const outOfFrame = (name) => {
      console.log(name + ' left the screen!')
    }
    return(
        <>
        {user &&
        <div className="dashboard">
            <ChatContainer user={user}/>
            <div className="swipe-container">
                <div className="card-container">
                {characters.map((character) =>
                <TinderCard className='swipe' key={character.name} onSwipe={(dir) => swiped(dir, character.name)} onCardLeftScreen={() => outOfFrame(character.name)}>
                    <div style={{ backgroundImage: 'url(' + character.url + ')' }} className='card'>
                        <h3>{character.name}</h3>
                    </div>
                </TinderCard>)}
                <div className="swipe-info">
                    {lastDirection?<p>You swiped {lastDirection}</p>:<p></p>}
                </div>
                </div>
            </div>
            {/* <h1>This is Dashboard page!</h1> */}
        </div> }
        </> 
    )
}

export default Dashboard;
