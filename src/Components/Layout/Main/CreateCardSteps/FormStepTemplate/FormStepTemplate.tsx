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
// import { template } from "../../../../../App/cardSlice";
import imgTemplate2 from "../FormStepTemplate/template2Demo.png"
import { template } from "../../../../../App/cardSlice";
import { useEffect } from "react";

interface clicksForm2Model {
    onclick: () => void;
    stepBackButton: () => void;
}

function FormStepTemplate( { onclick, stepBackButton}: clicksForm2Model ): JSX.Element {
    const { register, handleSubmit } = useForm<cardModel | any>();
    const dispatch = useDispatch();
    const cardRedux : { card : cardModel} = useSelector((state: any) => state.card);

     function selectTemplate( {templateNum}: {templateNum : number }  ){
        dispatch(template(+templateNum))
        onclick()
    }

    useEffect(() => {
        console.log(cardRedux);
    }, [])

    function stepBack(){
        stepBackButton();
    }

    return (
        <div className="FormStepTemplate">

			       <form onSubmit={handleSubmit(selectTemplate)}>
                    <div className="input-container">
                        {/* <label htmlFor="">Template:</label> */}
                        {/* <input  defaultValue={cardRedux.card? cardRedux.card.templateNum : ""} type="number" placeholder="Template:" {...register("template")} /> */}

                        <div>
                            {/* <div>{cardRedux?.card.templateNum}</div> */}
                        {/* <input  defaultValue={cardRedux.card? cardRedux.card.businessName : ""} type="text" placeholder="Business Name:" {...register("businessName")} /> */}
                            <input type="radio" value={1}  id="selectTemplate1"  {...register("templateNum")} />
                            <img src={imgTemplate2} alt="" />
                            </div>

                            <div>
                            <input type="radio" value={2}  id="selectTemplate2"  {...register("templateNum")} />
                            <img src={imgTemplate2} alt="" />
                        </div>
                    </div>
        
                <div className="next-back-form-template">

                <ButtonGroup
                disableElevation
                variant="outlined"
                aria-label="Disabled elevation buttons"
                >
                <Button disabled onClick={() => stepBackButton()} >Back</Button>
                <Button type="submit">Next</Button>
                </ButtonGroup>
                    </div>
                </form>
{/* } */}
        </div>
    );
}

export default FormStepTemplate;
