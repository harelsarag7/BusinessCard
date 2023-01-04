import { useEffect } from "react";
import { useSelector } from "react-redux";
import { cardModel } from "../../../../../Models/cardModel";
import "./FormPublish.css";

function FormPublish(): JSX.Element {

    const cardRedux : { card : cardModel} = useSelector((state: any) => state.card);


    useEffect(() => {
        console.log(cardRedux);
        
    }, [])
    return (
        <div className="FormPublish">
			{cardRedux.card.templateNum}
        </div>
    );
}

export default FormPublish;
