import "./FormStepInfo.css";
import { useForm } from "react-hook-form";
import { cardModel } from "../../../../../Models/cardModel";
import { useDispatch, useSelector } from "react-redux";
import { info } from "../../../../../App/cardSlice";
import { ButtonGroup, Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import CardTemplate2 from "../../CreateCard/CardTemplate/CardTemplate2/CardTemplate2";
import CardTemplate1 from "../../CreateCard/CardTemplate/CardTemplate1/CardTemplate1";


type CardComponentType = ({ card }: { card: cardModel}) => JSX.Element;

const Components: Record<number, CardComponentType> = {
    1: CardTemplate1,
    2: CardTemplate2
}

interface clicksForm2Model {
    onclick: () => void;
    stepBackButton: () => void;
}


function FormStepInfo( { onclick, stepBackButton}: clicksForm2Model ): JSX.Element {
    const { register, handleSubmit } = useForm<cardModel | any>();
    const dispatch = useDispatch();
    const cardRedux : any = useSelector((state: any) => state.card);

     function createCardFunction(  card: cardModel){
        dispatch(info( card))
        onclick();
    }
    const [card, setCard] = useState<cardModel>()
    const Component = Components[cardRedux.card?.templateNum ?? cardRedux ?? 2 ];
    
    
    useEffect(() => {
        console.log(cardRedux.card);

        setCard(cardRedux.card)
        
    }, [cardRedux])

        function onBusiName(event : any) {
        let name = event.target.value;
        console.log(name);
        setCard({
            businessName: name,
            businessDescription : card?.businessDescription,
            email : card?.email,
            phone : card?.phone,
            website: card?.website,
            facebook: card?.facebook,
            location: card?.location,


        })
    };
        function onBusiDesc(event : any) {
        let description = event.target.value;
        console.log(description);
        setCard({
            businessName: card?.businessName,
            businessDescription : description,
            email : card?.email,
            phone : card?.phone,
            website: card?.website,
            facebook: card?.facebook,
            location: card?.location,


        })
    };
    
        function onBusiEmail(event : any) {
        let emailTo = event.target.value;
        console.log(emailTo);
        setCard({
            businessName: card?.businessName,
            businessDescription: card?.businessDescription,
            email : emailTo,
            phone : card?.phone,
            website: card?.website,
            facebook: card?.facebook,
            location: card?.location,

        })
    };
        function onBusiPhone(event : any) {
        let phoneTo = event.target.value;
        console.log(phoneTo);
        setCard({
            businessName: card?.businessName,
            businessDescription: card?.businessDescription,
            email : card?.email,
            phone : phoneTo,
            website: card?.website,
            facebook: card?.facebook,
            location: card?.location,

        })
    };
        function onBusiWebsite(event : any) {
        let websiteTo = event.target.value;
        console.log(websiteTo);
        setCard({
            businessName: card?.businessName,
            businessDescription: card?.businessDescription,
            email : card?.email,
            phone : card?.phone,
            website: websiteTo,
            facebook: card?.facebook,
            location: card?.location,

        })
    };
        function onBusiFacbook(event : any) {
        let facebookTo = event.target.value;
        console.log(facebookTo);
        setCard({
            businessName: card?.businessName,
            businessDescription: card?.businessDescription,
            email : card?.email,
            phone : card?.phone,
            website: card?.website,
            facebook: facebookTo,
            location: card?.location,
        })
    };
        function onBusiLocation(event : any) {
        let locationTo = event.target.value;
        console.log(locationTo);
        setCard({
            businessName: card?.businessName,
            businessDescription: card?.businessDescription,
            email : card?.email,
            phone : card?.phone,
            website: card?.website,
            facebook: card?.facebook,
            location: locationTo,
        })
    };

    
    return (
        <div className="FormStepInfo">

			       <form onSubmit={handleSubmit(createCardFunction)}>
                    <div className="input-container">
                      
                        <label htmlFor="">Business Name:</label>
                        <input onInput={(name) => onBusiName(name)}  defaultValue={cardRedux.card? cardRedux.card.businessName : ""} type="text" placeholder="Business Name:" {...register("businessName")} />
                     
                        <label htmlFor="">Business Description:</label>
                        <input onInput={(description) => onBusiDesc(description) } defaultValue={cardRedux.card? cardRedux.card.businessDescription : ""} type="text" placeholder="Business Description:" {...register("businessDescription")} />
                
                    </div>
                    <div className="input-container">

                        <label  htmlFor="">Phone number:</label>
                        <input  onInput={(phone) => onBusiPhone(phone)} defaultValue={cardRedux.card? cardRedux.card.phone : ""} type="text" placeholder="Phone:" {...register("phone")} />
                      
                        <label htmlFor="">Email:</label>
                        <input onInput={(email) => onBusiEmail(email)}  defaultValue={cardRedux.card? cardRedux.card.email : ""} type="email" placeholder="Email:" {...register("email")} />
                      
                      
                        <label htmlFor="">Location:</label>
                        <input onInput={(location) => onBusiLocation(location)}  defaultValue={cardRedux.card? cardRedux.card.location : ""} type="text" placeholder="Adress:" {...register("location")} />
                      
                        <label htmlFor="website">Website:</label>
                        <input id="website" onInput={(website) => onBusiWebsite(website)}  defaultValue={cardRedux.card? cardRedux.card.website : ""} type="str=ring" placeholder="Web site link:" {...register("website")} />
                      
                        <label htmlFor="facebook">Facebook:</label>
                        <input id="facebook" onInput={(facebook) => onBusiFacbook(facebook)}  defaultValue={cardRedux.card? cardRedux.card.facebook : ""} type="str=ring" placeholder="Facebook link:" {...register("facebook")} />
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
                <div className="online-template">
                    {/* <img src={imgTemplate2} alt="" /> */}
                    <Component key={1} card={card ?? {}}/>
                
                </div>
{/* } */}
        </div>
    );
}

export default FormStepInfo;
