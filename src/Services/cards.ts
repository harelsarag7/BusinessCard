import jwtDecode from "jwt-decode";
import { cardModel } from "../Models/cardModel";
import { userModel } from "../Models/userModel";
import { userFunctions } from "./user";

class CardFunctions {

   async getAllCards(): Promise<cardModel[] | undefined> {
       try {
         const response =  await fetch(`http://localhost:3040/api/cards`, {
            mode: "cors",
         }).then(res => res.json());
         console.log(response);
         
          return response;
          
       } catch (e){
           return undefined
       }
   }

   async getCardByUserid(): Promise<cardModel[] | undefined> {
      let userid = await userFunctions.getUserId();
      
      try {
         const response =  await fetch(`http://localhost:3040/api/cards/${userid}`, {
            mode: "cors",
         }).then(res => res.json());
         console.log(response);
         
          return response;
          
       } catch (e){
           return undefined
       }
   }

   async createCard( {userid, businessName, businessDescription, image, phone, email, templateNum} : cardModel ): Promise<cardModel> {
         // let id = 4;
      let card: cardModel = {
         // id,
         userid,
         businessName,
         businessDescription,
         image,
         phone,
         email,
         templateNum
      }
      try {
         const details: cardModel = await fetch(`http://localhost:3040/api/cards`, {
            mode: "cors",
            method: "POST",
            headers : {
               "Content-Type": "application/json",                                                                                                
               "Access-Control-Origin": "*"
            },
            body:  JSON.stringify(card)
         }).then(res => res.json());

            
         return details;
      } catch (e) {
         console.log(e);
         console.log("Failed to create card");
         return card;
      }

   }


   async getCard(userid: number | undefined) {
      try {
         const response =  await fetch(`http://localhost:3040/api/card/${userid}`, {
            mode: "cors",
         }).then(res => res.json());
         // console.log("harel:  " + response);
          return response;
          
       } catch (e){
           return undefined
       }
   }
}
export const cardFunctions = new CardFunctions();
