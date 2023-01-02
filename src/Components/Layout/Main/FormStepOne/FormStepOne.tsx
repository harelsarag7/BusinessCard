import "./FormStepOne.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { cardModel } from "../../../../Models/cardModel";
import { cardFunctions } from "../../../../Services/cards";
import { userFunctions } from "../../../../Services/user";

function FormStepOne( {card}: { card: any}, onclick: () => void ): JSX.Element {
    // const navigate = useNavigate()
    const { register, handleSubmit } = useForm<cardModel | any>();

    async function createCardFunction( { businessName, businessDescription, image, phone, email, templateNum }: cardModel){
        // async function createCardFunction( { card }: { card : cardModel} ){
            // console.log("template: " + templateNum);
            //  templateNum = Number(templateNum)
             card = {
                businessName, businessDescription, image, phone, email, templateNum
            }
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
    return (
        <div className="FormStepOne">
			       <form onSubmit={handleSubmit(createCardFunction)}>
                    <div className="input-container">
                        <label htmlFor="">Business Name:</label>
                        <input type="text" placeholder="Business Name:" {...register("businessName")} />
                        <label htmlFor="">Business Description:</label>
                        <input type="text" placeholder="Business Description:" {...register("businessDescription")} />
                    </div>
                    <div className="input-container">
                        <label htmlFor="">Phone number:</label>
                        <input type="text" placeholder="Phone:" {...register("phone")} />
                        <label htmlFor="">Email:</label>
                        <input type="email" placeholder="Email:" {...register("email")} />
                    </div>
                <div>
                
                
                <select  id="select" required {...register("templateNum")}>
                    <option value="1" >template 1</option>
                    <option value="2">template 2</option>
                </select>
                
                </div>



                <button type="submit"><span>Create</span></button>
                <button onClick={onclick}><span>Next</span></button>
                </form>

        </div>
    );
}

export default FormStepOne;
