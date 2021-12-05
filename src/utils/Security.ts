class Security{

    static checkPassword(password: string){

        var regex = {
            'capital' : /[A-Z]/,
            'digit'   : /[0-9]/,
            'except'  : /[aeiou]/,
            'full'    : /^[@#][A-Za-z0-9]{7,13}$/
        }

        return regex.capital.test(password) && 
            regex.digit.test(password) && 
            !regex.except.test(password) && 
            regex.full.test(password)
            
    }
}

export default Security