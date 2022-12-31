import { decode } from "jsonwebtoken";
import jwtDecode from "jwt-decode";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { cardModel } from "../../../../Models/cardModel";
import { userModel } from "../../../../Models/userModel";
import { cardFunctions } from "../../../../Services/cards";
import { userFunctions } from "../../../../Services/user";
import UserCard from "./UserCard/UserCard";
import "./UserDashboard.css";

function UserDashboard(  ): JSX.Element {
    const [token, setToken] = useState<string | undefined>()
    const [user1, setUser] = useState<any>()
    const [cards, setCards] = useState<cardModel[] | undefined>(undefined)
    // const user = useSelector((state: any) => state.auth)

    
    useEffect(() => {
        let token1: any = window.localStorage.getItem(`userToken`);
        if(!token1){
            setUser(undefined)
        }else {

            setToken(token1?.toString())
            const user = jwtDecode<{ user: userModel}>(token1);
            if(user){
                setUser(user)
            }
        }

        cardFunctions.getCardByUserid().then(cards => {
            if(cards?.length === 0){
                setCards(undefined)
                
            } else {

                setCards(cards)
            }
            
        })
    
    }, [])


    return (
        <div className="UserDashboard">
            {/* {token?  <h1> Hello </h1> :  "Please Sign" } */}

                <div className="welcome-dashboard">{user1? <h1> Welcome {user1.username}</h1> : `Please Login`}</div>
            <div className="dashboard-all-cards">
                {cards? cards.map(card => ( <UserCard key={card.id} cardId={card.id}/>))
                 : 
                <div>
                    <p> No cards yet </p>
                </div>
                }
                
            
            </div>


        </div>
    );
}

export default UserDashboard;
