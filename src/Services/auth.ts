import axios from "axios";
import { cardModel } from "../Models/cardModel";
import { userModel } from "../Models/userModel";

class AuthFunctions {



    // async login( { username, password} : userModel ): Promise<Response | userModel> {
    //     let user: userModel = {
    //         username,
    //         password,
    //     }
    //     try {
    //         const response: Response | userModel    = await fetch(`http://localhost:3040/api/auth/login`, {
    //           mode: "cors",
    //           method: "POST",
    //           headers : {
    //              "Content-Type": "application/json",                                                                                                
    //              "Access-Control-Origin": "*"
    //           },
    //           body: JSON.stringify(user)
    //           })
              
    //           return response;
    //     } catch (e) {
    //        console.log(e);
    //         console.log("wrong username or password");
    //        return user;
    //     }
    // }
    async login(username: string, password: string): Promise<string>{
        try{ 
            const { data } = await axios.post(`http://localhost:3040/api/auth/login`, {
                 username, password 
                });
                
            return data;
        } catch(e) {
            // console.error(e);
            return ``;
        } 
    }
    async register( {firstName, lastName, email, phone, username, password} : userModel): Promise<string>{
        console.log({firstName, lastName, email, phone, username, password});
        
        try{ 
            const { data } = await axios.post(`http://localhost:3040/api/auth/register`, {
                firstName, lastName, email, phone, username, password
                });
                
            return data;
        } catch(e) {
            // console.error(e);
            return ``;
        } 
    }
  
}
export const authFunctions = new AuthFunctions();
