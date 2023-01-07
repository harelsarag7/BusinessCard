import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cardModel } from "../../../../../Models/cardModel";
import { cardFunctions } from "../../../../../Services/cards";
import "./FormPublish.css";
import PublishIcon from '@mui/icons-material/Publish';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ButtonGroup, Button } from "@mui/material";


 
interface clicksForm2Model {
    onclick: () => void;
    stepBackButton: () => void;
}

function FormPublish(  { onclick, stepBackButton}: clicksForm2Model): JSX.Element {
    const navigate = useNavigate();
    const notlogged = () => toast.error("Must be logged in!", {
        position: toast.POSITION.TOP_CENTER
    });
    const cardRedux : { card : cardModel} = useSelector((state: any) => state.card);
    const userRedux = useSelector((state: any) => state.auth)

    async function createCardFunction(){
             if(!userRedux){
                console.log("must be logged, please sign up");
                notlogged();
                return
             }

             cardRedux.card.userid = userRedux.sub.toString()
             console.log(cardRedux.card);
             
           await cardFunctions.createCard( cardRedux.card ).then((res) => {
            console.log(res);
            
            navigate("/card/"+ res.id);
           })
        }


    return (
        <div className="FormPublish">
            {userRedux? 
            <div>Hey <strong> {userRedux.username}</strong> click to publish now !</div>
           : "login or register to pulish"}
            <button className="publish-btn" onClick={createCardFunction}> <PublishIcon/> Publish</button>
            <ToastContainer />


            <div className="next-back-form1">

                <ButtonGroup
                disableElevation
                variant="outlined"
                aria-label="Disabled elevation buttons"
                >
                <Button onClick={() => stepBackButton()}>Back</Button>
                <Button disabled >Next</Button>
                </ButtonGroup>
            </div>
        </div>

        
    );
}

export default FormPublish;
