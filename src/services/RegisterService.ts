import axios from "axios"
import UrlService from "./UrlService"

interface Credentials{
    name: string; 
    email: string; 
    phone: string; 
    password: string; 
    confirm_password: string;
    nationality: string; 
    physical_address: string; 
    dob: string;
    gender: string;
    occupation: string;
    postal_address: string;
    district: string;
    identification: string;
    identification_number: string;
    id_valid_from: string;
    id_valid_to: string;
    notes: string;
}

class RegisterService {
    

    async processRegister(credentials: Credentials){

        try {

            console.log(credentials);
            

            const instance = axios.create({
                baseURL: "http://localhost:8000",
                withCredentials: false,
                headers: {
                    'Access-Control-Allow-Origin' : 'http://localhost:8000"',
                    'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                }
            })

            let response = await instance.post(UrlService.registerUrl(), credentials)

            if(!response.data){
                return response
            }
            return 'You have registered successfully!'

        }catch(error){

            return false
        }

    }

}

export default new RegisterService()