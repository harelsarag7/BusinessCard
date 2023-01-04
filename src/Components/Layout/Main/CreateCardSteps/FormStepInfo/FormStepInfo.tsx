import "./FormStepInfo.css";
import { useForm } from "react-hook-form";
import { cardModel } from "../../../../../Models/cardModel";
import { useDispatch, useSelector } from "react-redux";
import { info } from "../../../../../App/cardSlice";
import { ButtonGroup, Button } from "@mui/material";
import { useEffect } from "react";




import imgTemplate2 from "../FormStepTemplate/template2Demo.png"




interface clicksForm2Model {
    onclick: () => void;
    stepBackButton: () => void;
}


function FormStepInfo( { onclick, stepBackButton}: clicksForm2Model ): JSX.Element {
    const { register, handleSubmit } = useForm<cardModel | any>();
    const dispatch = useDispatch();
    const cardRedux : { card : cardModel} = useSelector((state: any) => state.card);

     function createCardFunction( { businessName, businessDescription,  phone, email }: cardModel){
        dispatch(info({ businessName, businessDescription,  phone, email }))
        onclick();
    }

    useEffect(() => {
        console.log(cardRedux);
        
    }, [])

    return (
        <div className="FormStepInfo">

			       <form onSubmit={handleSubmit(createCardFunction)}>
                    <div className="input-container">
                        <label htmlFor="">Business Name:</label>
                        <input  defaultValue={cardRedux.card? cardRedux.card.businessName : ""} type="text" placeholder="Business Name:" {...register("businessName")} />
                        <label htmlFor="">Business Description:</label>
                        <input  defaultValue={cardRedux.card? cardRedux.card.businessDescription : ""} type="text" placeholder="Business Description:" {...register("businessDescription")} />
                    </div>
                    <div className="input-container">
                        <label htmlFor="">Phone number:</label>
                        <input  defaultValue={cardRedux.card? cardRedux.card.phone : ""} type="text" placeholder="Phone:" {...register("phone")} />
                        <label htmlFor="">Email:</label>
                        <input defaultValue={cardRedux.card? cardRedux.card.email : ""} type="email" placeholder="Email:" {...register("email")} />
                    </div>
        
                <div className="next-back-form1">

                <ButtonGroup
                disableElevation
                variant="outlined"
                aria-label="Disabled elevation buttons"
                >
                <Button onClick={stepBackButton}>Back</Button>
                <Button type="submit">Next</Button>
                </ButtonGroup>
                    </div>
                </form>
                <div>
                    <img src={imgTemplate2} alt="" />
                </div>
{/* } */}
        </div>
    );
}

export default FormStepInfo;
