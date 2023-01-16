import "./FormStepInfo.css";
import { useForm } from "react-hook-form";
import { cardModel } from "../../../../../Models/cardModel";
import { useDispatch, useSelector } from "react-redux";
import { info } from "../../../../../App/cardSlice";
import { ButtonGroup, Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import CardTemplate2 from "../../CreateCard/CardTemplate/CardTemplate2/CardTemplate2";
import CardTemplate1 from "../../CreateCard/CardTemplate/CardTemplate1/CardTemplate1";
import axios from "axios";

type CardComponentType = ( { card } : { card: cardModel } ) => JSX.Element;

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

    const [upload, setUpload] = useState<any>(null)

    function createCardFunction(  card: cardModel){
        let newCard: any = {...card};
        card.image = newCard.image[0].name
        // console.log(card);
        
        dispatch(info( card))
        onclick();
    }
    const [card, setCard] = useState<cardModel>()
    const Component = Components[cardRedux?.templateNum ?? cardRedux ?? 2 ];
    
   
    useEffect(() => {
        console.log(cardRedux);
        setCard(cardRedux)
    }, [upload])






        function sendImage(img: any) {
            // setUpload(URL.createObjectURL(img.target.files[0]));
            // setCard(...card, upload)
            // card?.upload = upload
            // return
            // let imga : any = document.getElementById("img");
            // imga.src = img.target.files[0]
            console.log(img.target.files[0]);
            let file = img.target.files[0];
            window.localStorage.setItem("image", file)
            const url = 'http://localhost:3040/api/uploadFile';
            const formData = new FormData();
            formData.append('file', file);
            // formData.append('businessName', "Harel Business");
            formData.append('fileName', file.name);
            const config = {
              headers: {
                'content-type': 'multipart/form-data',
              },
            };
            axios.post(url, formData, config).then((response) => {
              console.log(response.data);
            });
        }





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
            upload: card?.upload,



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
            upload: card?.upload,



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
            upload: card?.upload,


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
            upload: card?.upload,


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
            upload: card?.upload,


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
            upload: card?.upload,

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
            upload: card?.upload,

        })
    };
        function onBusiImg(event : any) {
        let img = URL.createObjectURL(event.target.files[0]);
        sendImage(event);
        console.log(img);
        setCard({
            businessName: card?.businessName,
            businessDescription: card?.businessDescription,
            email : card?.email,
            phone : card?.phone,
            website: card?.website,
            facebook: card?.facebook,
            location: card?.location,
            upload: img,
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
                        <input id="website" onInput={(website) => onBusiWebsite(website)}  defaultValue={cardRedux.card? cardRedux.card.website : ""} type="string" placeholder="Web site link:" {...register("website")} />
                      
                        <label htmlFor="facebook">Facebook:</label>
                        <input id="facebook" onInput={(facebook) => onBusiFacbook(facebook)}  defaultValue={cardRedux.card? cardRedux.card.facebook : ""} type="string" placeholder="Facebook link:" {...register("facebook")} />
                    </div>

                        <label htmlFor="Image">Your photo or logo:</label>
                        {/* <input id="Image" onInput={(image) => onBusiFacbook(image)}  defaultValue={cardRedux.card? cardRedux.card.facebook : ""} type="string" placeholder="Facebook link:" {...register("facebook")} /> */}
                        {/* <input id="Image"  type="file" onInput={( e) => sendImage(e )}  {...register("image")} /> */}
                        <input id="Image"  type="file" onInput={(img) => onBusiImg(img)}  {...register("image")} />
                        {/* <input id="Image"  type="file" onInput={( e) => sendImage(e )}  onChange={(e : any) => setFile(e.target.files[0])}  {...register("image")} /> */}
                        <img id="img" src={upload} width={200} alt="" />
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
                    <Component key={1}  card={card ?? {}}/>
                
                </div>
{/* } */}
        </div>
    );
}

export default FormStepInfo;
