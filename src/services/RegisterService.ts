import axios from "axios"
import UrlService from "./UrlService"

interface Credentials{
    name: string; email: string; phone: string; password: string; country: string; physical_address: string; date_of_birth: string;
}

class RegisterService {
    

    async processRegister(credentials: Credentials){

        try {

            const instance = axios.create({
                baseURL: "http://api.dnpw.jobfindermw.com/",
                withCredentials: false,
                headers: {
                    'Access-Control-Allow-Origin' : '*',
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