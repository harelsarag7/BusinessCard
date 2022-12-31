import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { cardModel } from "../../../../../Models/cardModel";
import { cardFunctions } from "../../../../../Services/cards";
import { userFunctions } from "../../../../../Services/user";
import CardTemplate1 from "../../CreateCard/CardTemplate/CardTemplate1/CardTemplate1";
import CardTemplate2 from "../../CreateCard/CardTemplate/CardTemplate2/CardTemplate2";
import "./UserCard.css";

type CardComponentType = ({ card }: { card: cardModel}) => JSX.Element;

const Components: Record<number, CardComponentType> = {
    1: CardTemplate1,
    2: CardTemplate2
}

function UserCard(cardId: any): JSX.Element {
    const idNum: any= cardId.cardId;
    const [card, setCard] = useState<cardModel | undefined>(undefined)

    const Component = Components[card?.templateNum ?? 1];
    const navigate = useNavigate()
        
    useEffect(() => {
        cardFunctions.getCard(idNum).then(card => {
            setCard(card);
                console.log(card);
         });
     }, [])


     function navigateToCard() {
        navigate(`/card/`+ card?.id);

     }
    return (
        <div className="UserCard">
            <div className="user-card-clickable" onClick={navigateToCard}>
                <div className="user-card-container">
                    <Component key={card?.id} card={card ?? {}}/>
                </div>
            </div>
            <div>
                <Button onClick={navigateToCard} className="edit-or-share-user-card" variant="outlined" color="primary">Edit or Share</Button>
            </div>
            {/* <div className="iphone-x">
                <i>Speaker</i>
                <b>Camera</b>
                <s>10:24</s>
                
                <span>Left action button</span>
                <span>Right action button</span>
            </div> */}


        </div>
    );
}

export default UserCard;
