let apiDomain = ''

if(process.env.NODE_ENV === 'production'){

    apiDomain = 'https://api.dnpw.jobfindermw.com/api/dnpw/v1/'

}else{

    apiDomain = 'http://localhost:8000/api/'

}

class UrlService {

    static loginUrl(){

        return apiDomain + 'auth/login'

    }

    static registerUrl(){

        return apiDomain + 'auth/register'
        
    }

    static userUrl(){

        return apiDomain + 'profile/user/me'
        
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

    /* CITES APPLICATION */
    static createCitesApplication(){

        return apiDomain + 'applications/cites/create'

    }

    static mainUrl(){

        return 'https://api.dnpw.jobfindermw.com'
        
    }
}

export default UrlService