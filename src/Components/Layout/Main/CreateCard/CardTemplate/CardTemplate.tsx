import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { cardModel } from "../../../../../Models/cardModel";
import { cardFunctions } from "../../../../../Services/cards";
import "./CardTemplate.css";
import CardTemplate1 from "./CardTemplate1/CardTemplate1";

function CardTemplate(  ): JSX.Element {
    let id = useParams();
    const [card, setCard] = useState<cardModel | undefined>(undefined)

    const CardClass = "CardTemplate" + card?.template;
    const mailTo = "mailto:" + card?.email;
    const phoneTo = "tel:" + card?.phone;
    console.log(CardClass);
    
    useEffect(() => {
       const idNum: any= id.id
        cardFunctions.getCard(idNum).then(res => {
            setCard(res);
        });
    }, [])

    return (
        <div className={CardClass}>
            {card?.template == 1? <CardTemplate1 key={card.id} card={card}/>
             : card?.template === 2? " WRONG Card template is 2"
              : "No template"}

        </div>
    );
}

export default CardTemplate;
