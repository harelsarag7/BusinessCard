import "./FormStepOne.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { cardModel } from "../../../../../Models/cardModel";
import { useEffect, useState } from "react";
interface cardObjSteps {
    card: cardModel;
    saveInfo: (c: cardModel) => void;
}


// function FormStepOne( {saveInfo} :{saveInfo:  (ev: any) => void}, {cardObj}:{ cardObj: cardModel}): JSX.Element {
function FormStepOne( {saveInfo, card} :cardObjSteps): JSX.Element {
    // const navigate = useNavigate()
    const { register, handleSubmit } = useForm<cardModel | any>();

    async function createCardFunction( { businessName, businessDescription,  phone, email }: cardModel){
        saveInfo({ businessName, businessDescription,  phone, email })

        // async function createCardFunction( { card }: { card : cardModel} ){
            // console.log("template: " + templateNum);
            //  templateNum = Number(templateNum)
            //  card = {
            //     businessName, businessDescription, image, phone, email, templateNum
            // }
        //   const userid = await userFunctions.getUserId();
        //   console.log(userid);

            // setcard({ businessName, businessDescription, image, phone, email, templateNum })
            // card("d")
            //  if(!userid){
            //     console.log("must be logged, please sign up");
            //     return
            //  }
        //    await cardFunctions.createCard({userid, businessName, businessDescription, image, phone, email, templateNum}).then((res : any) => {
        //     navigate("/card/"+ res.id);
        //    })
        }

        // const [user, setUser] = useState<any>(null);

        
        useEffect(() => {
            // setTimeout(() => setUser({ firstName: 'Mr', lastName: 'Frank', phome: 'Murphy' }), 1000);
                console.log(card);
                
        }, [])
    return (
        <div className="FormStepOne">
                            {/* {user && */}

			       <form onSubmit={handleSubmit(createCardFunction)}>
                    <div className="input-container">
                        <label htmlFor="" >Business Name:</label>
                        <input  defaultValue={card.businessName} type="text" placeholder="Business Name:" {...register("businessName")} />
                        <label htmlFor="">Business Description:</label>
                        <input type="text" placeholder="Business Description:" {...register("businessDescription")} />
                    </div>
                    <div className="input-container">
                        <label htmlFor="">Phone number:</label>
                        <input type="text" placeholder="Phone:" {...register("phone")} />
                        <label htmlFor="">Email:</label>
                        <input type="email" placeholder="Email:" {...register("email")} />
                    </div>
                {/* <div> */}
                
{/*                 
                <select  id="select" required {...register("templateNum")}>
                    <option value="1" >template 1</option>
                    <option value="2">template 2</option>
                </select>
                
                </div> */}



                <button type="submit" ><span>Create</span></button>
                {/* <button onClick={() => next("hey")} ><span>Next</span></button> */}
                </form>
{/* } */}
        </div>
    );
}

export default FormStepOne;
