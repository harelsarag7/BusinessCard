// import "./FormStepTemplate.css";

// function FormStepTemplate(): JSX.Element {
//     return (
//         <div className="FormStepTemplate">
			
//         </div>
//     );
// }

// export default FormStepTemplate;


import "./FormStepTemplate.css";
import { useForm } from "react-hook-form";
import { cardModel } from "../../../../../Models/cardModel";
import { useDispatch, useSelector } from "react-redux";
import { ButtonGroup, Button } from "@mui/material";
import { template } from "../../../../../App/cardSlice";

interface clicksForm2Model {
    onclick: () => void;
    stepBackButton: () => void;
}

function FormStepTemplate( { onclick, stepBackButton}: clicksForm2Model ): JSX.Element {
    const { register, handleSubmit } = useForm<cardModel | any>();
    const dispatch = useDispatch();
    const cardRedux : { card : cardModel} = useSelector((state: any) => state.card);

     function selectTemplate( template: number ){
        // let templateNum = Number (template);
        // dispatch(template(templateNum));
        onclick()
    }

    function stepBack(){
        stepBackButton();
    }

    return (
        <div className="FormStepTemplate">

			       <form onSubmit={handleSubmit(selectTemplate)}>
                    <div className="input-container">
                        <label htmlFor="">Template:</label>
                        <input  defaultValue={cardRedux.card? cardRedux.card.templateNum : ""} type="number" placeholder="Template:" {...register("template")} />
                        {/* <label htmlFor="">Business Description:</label>
                        <input  defaultValue={cardRedux.card? cardRedux.card.businessDescription : ""} type="text" placeholder="Business Description:" {...register("businessDescription")} />
                    </div>
                    <div className="input-container">
                        <label htmlFor="">Phone number:</label>
                        <input  defaultValue={cardRedux.card? cardRedux.card.phone : ""} type="text" placeholder="Phone:" {...register("phone")} />
                        <label htmlFor="">Email:</label>
                        <input defaultValue={cardRedux.card? cardRedux.card.email : ""} type="email" placeholder="Email:" {...register("email")} /> */}
                    </div>
        
                <div className="next-back-form-template">

                <ButtonGroup
                disableElevation
                variant="outlined"
                aria-label="Disabled elevation buttons"
                >
                <Button onMouseLeave={() => stepBackButton()} >Back</Button>
                <Button type="submit">Next</Button>
                </ButtonGroup>
                    </div>
                </form>
{/* } */}
        </div>
    );
}

export default FormStepTemplate;
