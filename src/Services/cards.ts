import { cardModel } from "../Models/cardModel";

class CardFunctions {

   async getAllCards(): Promise<cardModel[] | undefined> {
       try {
         const response =  await fetch(`http://localhost:3030/api/cards`, {
            mode: "cors",
         }).then(res => res.json());
          return response;
          
       } catch (e){
           return undefined
       }
   }


   async createCard( { businessName, businessDescription, image, phone, email, template} : cardModel ): Promise<cardModel> {
      let card: cardModel = {
         businessName,
         businessDescription,
         image,
         phone,
         email,
         template
      }
      try {
         const details: cardModel = await fetch(`http://localhost:3030/api/cards`, {
            mode: "cors",
            method: "POST",
            headers : {
               "Content-Type": "application/json",                                                                                                
               "Access-Control-Origin": "*"
            },
            body:  JSON.stringify(card)
         }).then(res => res.json());

            console.log("Success server");
            console.log(details);
            
         return details;
      } catch (e) {
         console.log(e);
         console.log("Failed to create card");
         return card;
      }

   }


   async getCard(id: number | undefined) {
      try {
         const response =  await fetch(`http://localhost:3030/api/cards/${id}`, {
            mode: "cors",
         }).then(res => res.json());
         console.log(response);
         
          return response;
          
       } catch (e){
           return undefined
       }
   }
}
export const cardFunctions = new CardFunctions();
