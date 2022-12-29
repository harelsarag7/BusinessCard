import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { cardModel } from "../../../../../Models/cardModel";
import { cardFunctions } from "../../../../../Services/cards";
import "./CardTemplate1.css";

function CardTemplate1( { businessName } : cardModel ): JSX.Element {
    let id = useParams();
    const [card, setCard] = useState<cardModel | undefined>(undefined)

    const CardClass = "CardTemplate" + card?.template;
    const mailTo = "mailto:" + card?.email;
    const phoneTo = "tel:" + card?.phone;
    console.log(CardClass);
    
    useEffect(() => {
       const idNum: any= id.id
        cardFunctions.getCard(idNum).then(res => {
            setCard(res);
        });
    }, [])

    return (
        <div className={CardClass}>
            {card?.template == 1? "Card is 1" : card?.template === 2? " WRONG Card template is 2" : "No template"}
            {card? 
            // <div className="card-template-container ">

            //     <div>
            //         {card.businessName}
            //     </div>
            //     <div>
            //         {card.businessDescription}
            //     </div>
            //     <div className="phone-container" >
            //         <div className="phone-card"></div>
            //         {card.phone}
            //     </div>
            //     <div>
            //         {card.email}
            //     </div>
            //     <div>
            //         {card.instagram? card.instagram : "No instgram"}
            //     </div>
            // </div>



            <div className="business-card">
                        <div className="logo">
                            {/* <!-- Insert your logo here --> */}
                        </div>
                        <div className="info">
                            <h1 className="name">{card.businessName}</h1>
                            {/* <h2 className="title">Your Title</h2> */}
                            <p className="description">{card.businessDescription}</p>
                        </div>
                        <div className="contact-info">
                            <div className="contact-item">
                                <a href={mailTo}>
                                    <svg className="icon icon-email" width="40" height="40" viewBox="0 0 24 24">
                                    {/* <!-- Email icon SVG code --> */}
                                        <path className="cls-2" d="M19,4H5A3,3,0,0,0,2,7V17a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V7A3,3,0,0,0,19,4Zm-.67,2L12,10.75,5.67,6ZM19,18H5a1,1,0,0,1-1-1V7.25l7.4,5.55a1,1,0,0,0,.6.2,1,1,0,0,0,.6-.2L20,7.25V17A1,1,0,0,1,19,18Z"/>
                                    </svg>
                                    {/* {card.email} */}
                                </a>
                            </div>
                            <div className="contact-item">
                                <a href={phoneTo}>
                                    <div className="icon icon-phone"  >

                                    </div>
                                    {/* <svg className="icon icon-phone"  width="240" height="240" viewBox="0 0 24 24">
                                        <path className="phone-svg-path"/>
                                    </svg> */}
                                    {/* <svg className="icon icon-phone" width="40" height="40" viewBox="0 0 580 580">
                                        <!-- Phone icon SVG code -->
                                        
                                      <path className="phone-svg-path" d="M451,374c-15.88-16-54.34-39.35-73-48.76C353.7,313,351.7,312,332.6,326.19c-12.74,9.47-21.21,17.93-36.12,14.75s-47.31-21.11-75.68-49.39-47.34-61.62-50.53-76.48,5.41-23.23,14.79-36c13.22-18,12.22-21,.92-45.3-8.81-18.9-32.84-57-48.9-72.8C119.9,44,119.9,47,108.83,51.6A160.15,160.15,0,0,0,83,65.37C67,76,58.12,84.83,51.91,98.1s-9,44.38,23.07,102.64,54.57,88.05,101.14,134.49S258.5,406.64,310.85,436c64.76,36.27,89.6,29.2,102.91,23s22.18-15,32.83-31a159.09,159.09,0,0,0,13.8-25.8C465,391.17,468,391.17,451,374Z"/>
                                     </svg> */}
                                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 560 560"><title>ionicons-v5-g</title><path d="M478.94,370.14c-5.22-5.56-23.65-22-57.53-43.75-34.13-21.94-59.3-35.62-66.52-38.81a3.83,3.83,0,0,0-3.92.49c-11.63,9.07-31.21,25.73-32.26,26.63-6.78,5.81-6.78,5.81-12.33,4-9.76-3.2-40.08-19.3-66.5-45.78s-43.35-57.55-46.55-67.3c-1.83-5.56-1.83-5.56,4-12.34.9-1.05,17.57-20.63,26.64-32.25a3.83,3.83,0,0,0,.49-3.92c-3.19-7.23-16.87-32.39-38.81-66.52-21.78-33.87-38.2-52.3-43.76-57.52A3.9,3.9,0,0,0,138,32.2,322.35,322.35,0,0,0,82,57.65,338,338,0,0,0,33.35,92a3.83,3.83,0,0,0-1.26,3.74c2.09,9.74,12.08,50.4,43.08,106.72,31.63,57.48,53.55,86.93,100,133.22S252,405.21,309.54,436.84c56.32,31,97,41,106.72,43.07a3.86,3.86,0,0,0,3.75-1.26A337.73,337.73,0,0,0,454.35,430a322.7,322.7,0,0,0,25.45-56A3.9,3.9,0,0,0,478.94,370.14Z"/></svg> */}

                                </a>
                            </div>
                            <div className="contact-item">
                            <svg className="icon icon-whatsapp" width="24" height="24" viewBox="0 0 24 24">
                                {/* <!-- WhatsApp icon SVG code --> */}
                            </svg>
                            <a href="https://wa.me/1234567890">123-456-7890</a>
                            </div>
                            <div className="contact-item">
                            <svg className="icon icon-facebook" width="24" height="24" viewBox="0 0 10004 10004">
                                {/* <!-- Facebook icon SVG code --> */}
                            </svg>
                            <a href="https://www.facebook.com/yourpage">Your Facebook Page</a>
                            </div>
                        </div>
            </div>
            : <></>}

        </div>
    );
}

export default CardTemplate1;
