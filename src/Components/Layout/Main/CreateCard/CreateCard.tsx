// import { useForm } from "react-hook-form";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { cardModel } from "../../../../Models/cardModel";
import { cardFunctions } from "../../../../Services/cards";
import "./CreateCard.css";


function CreateCard(): JSX.Element {
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm<cardModel | any>();

    async function createCardFunction( { businessName, businessDescription, image, phone, email, template }: cardModel){
    // async function createCardFunction( { card }: { card : cardModel} ){
        // console.log(businessName);
         template = Number(template)
       await cardFunctions.createCard({businessName, businessDescription, image, phone, email, template}).then((res) => {
        navigate("/card/"+ res.id);
       })
       
    }

    return (
        <div className="CreateCard">
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
                    <div className="input-container">
                        <label htmlFor="">Image:</label>
                        <input type="file" placeholder="Image:" {...register("image")} />
                    </div>

                {/* Choose Template (Component)*/}
                <div>
                    <input {...register("template")} type="radio" checked value={"1"} name="" id="template1" />
                    <label htmlFor="template1">Template 1</label>
                    <br/>
                    <input {...register("template")} type="radio" value={"2"} name="" id="template2" />
                    <label htmlFor="template2">Template 2</label>
                </div>



                <button type="submit"><span>Create</span></button>
                </form>


        </div>
    );
}

export default CreateCard;
