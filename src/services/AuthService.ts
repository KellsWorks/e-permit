import axios from "axios";
import UrlService from "./UrlService";
import CookieService from "./CookieService"

interface Credentials{
    email: string,
    password: string
}

const expiresAt = 60 * 24

class AuthService{
    async doUserLogin(credentials: Credentials){
        try{
            const response = await axios.post(UrlService.loginUrl(), credentials)
            
            return response.data
        }
        catch(error){
            console.log(error);
            return false
        }
    }

    handleLoginSuccess(response: any, remember: boolean){
        if(!remember){
            const options = {
                path : "/"
            }
            CookieService.set('user_id', response.user.id, options)
            CookieService.set('access_token', response.token, options)
            return true
        }

        let date = new Date()

        date.setDate(date.getTime() + (expiresAt * 60 * 1000))

        const options = {
            path: '/', expires: date
        }

        CookieService.set('access_token', response.token, options)
        return true
    }
}

export default new AuthService();