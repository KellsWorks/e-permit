let apiDomain = ''

if(process.env.NODE_ENV === 'production'){

    apiDomain = 'https://dpnw-epermit.mw'

}else{

    apiDomain = 'http://192.168.43.200:322/api/dnpw/v1/'

}

class UrlService {

    static loginUrl(){

        return apiDomain + 'auth/login'

    }

    static registerUrl(){

        return apiDomain + 'auth/register'
        
    }

    static userUrl(){

        return apiDomain + 'user/me'
        
    }

    static forgotPassword(){

        return apiDomain + 'auth/forgot-password'
        
    }

    static resetPassword(){

        return apiDomain + 'auth/reset-password'
        
    }

    static supportMessage(){

        return apiDomain + 'support/message'
        
    }

    static permitApplication(){

        return apiDomain + 'permit-application/create'
        
    }

    static mainUrl(){

        return 'http://127.0.0.1:8000'
        
    }
}

export default UrlService