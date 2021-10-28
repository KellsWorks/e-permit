let apiDomain = ''

if(process.env.NODE_ENV === 'production'){

    apiDomain = 'https://api.dnpw.jobfindermw.com/api/dnpw/v1/'

}else{

    apiDomain = 'http://127.0.0.1:8000/api/dnpw/v1/'

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

    static changeAvatar(){

        return apiDomain + 'user/update-avatar'
        
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