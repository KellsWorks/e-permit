import axios from "axios"
import UrlService from "./UrlService"

interface Credentials{
    name: string; email: string; phone: string; password: string; country: string; physical_address: string; date_of_birth: string;
}

class RegisterService {
    

    async processRegister(credentials: Credentials){

        try {

            console.log(credentials)

            let response = await axios.post(UrlService.registerUrl(), credentials)

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