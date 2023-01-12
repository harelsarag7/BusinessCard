import axios from "axios";
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

   async createCard( {userid, businessName, businessDescription, location,image, phone, email, templateNum, website, facebook} : cardModel ): Promise<cardModel> {
         // let id = 4;
      let card: cardModel = {
         // id,
         userid,
         businessName,
         businessDescription,
         location,
         image,
         phone,
         email,
         templateNum,
         website,
         facebook
      }
      try {
         const details: cardModel = await fetch(`http://localhost:3040/api/cards`, {
            mode: "cors",
            method: "POST",
            headers : {
               "Content-Type": "application/json",                                                                                                
               "Access-Control-Origin": "*",
               "authentication": "Bearer " + window.localStorage.getItem("userToken")
               
            },
            
            body:  JSON.stringify(card),
            
         }).then(res => res.json());

            console.log(details);
            
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


   async deleteCard(id : number | undefined): Promise<string>{
      console.log("delete service: " + id);
      if(!id){
         console.log("no card");
         return "";
      }
      try{ 
          const { data } = await axios.delete(`http://localhost:3040/api/cards/${id}`);
              
          return data;
      } catch(e) {
          return ``;
      } 
  }

}
export const cardFunctions = new CardFunctions();
