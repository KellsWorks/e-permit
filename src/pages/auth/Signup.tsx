import { useState } from 'react'

import { useHistory } from 'react-router-dom'

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import { CountryDropdown } from 'react-country-region-selector';

import 'react-phone-number-input/style.css'

import PhoneInput from 'react-phone-number-input'

import { ChevronLeftIcon, ChevronRightIcon, EyeIcon, EyeOffIcon } from '@heroicons/react/outline';

import RegisterService from '../../services/RegisterService';

import Oval from 'react-loading-icons/dist/components/oval';

import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

interface Props{
  buttonText: string,
  onProcessing: boolean
}

export default function Signup() {

    const [currentStep, setCurrentStep] = useState(1)

    const [startDate, setStartDate] = useState(new Date());

    const [value, setValue] = useState("")

    const [name, setName] = useState("")

    const [email, setEmail] = useState("")

    const [physicalAddress, setPhysicalAddress] = useState("")

    const [postAddress, setPostAddress] = useState("")

    const [nationality, setNationality] = useState("")
    const [countryOfOrigin, setCountryOfOrigin] = useState("")

    const [password, setPassword] = useState("")
    const [passwordShown, setPasswordShown] = useState(false)

    const [confirmPassword, setConfirmPassword] = useState("")
    const [confirmPasswordShown, setConfirmPasswordShown] = useState(false)

    const [onLoad, setOnLoad] = useState(false)

    const [stepOneError, setStepOneError] = useState("")
    const [stepOneLoad, setStepOneLoad] = useState(false)

    const [stepTwoError, setStepTwoError] = useState("")
    const [stepTwoLoad, setStepTwoLoad] = useState(false)

    const [stepThreeError, setStepThreeError] = useState("")

    const history =  useHistory()

    const handleSubmit = async () => {

      setOnLoad(true)

      const postData = {

      name: name,

      email: email,

      date_of_birth: startDate.toLocaleDateString(),

      country: nationality,

      phone: value,

      physical_address: physicalAddress,

      password: password

    }

    const response = await RegisterService.processRegister(postData)

    if(response === 'You have registered successfully!'){
      setOnLoad(false)

      toast.success(response, {
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined, 
        bodyStyle: {borderRadius: 0}  
      })

      history.push('/sign-in')
    }else{
      setOnLoad(false)
      toast.error('Something went wrong, please try again.', {
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined, 
        bodyStyle: {borderRadius: 0}  
      })
    }
    }

    function processStepOne(){
      if(name !== '' && nationality !== ''){
        setStepOneError('')
        return true
      }else{
        setStepOneError('Please enter the fields marked (*)')
        return false
      }
    }

    function processStepTwo(){
      if(email !== '' && countryOfOrigin !== '' && physicalAddress !== '' && value !== ''){
        return true
      }else{
        setStepTwoError('Please enter the fields marked (*)')
        return false
      }
    }

    function processStepThree(){
      if(password !== '' && confirmPassword !== ''){
        if(password === confirmPassword){
          
          var regex = {
              'capital' : /[A-Z]/,
              'digit'   : /[0-9]/,
              'except'  : /[aeiou]/,
          }

          if(regex.capital.test(password) && regex.digit.test(password) && regex.except.test(password)){

            setStepThreeError(''
            )
            handleSubmit()
            return true
          }else{
            setStepThreeError('Please check that your password meets the described criteria')
            return false
          }
        }else{
          setStepThreeError('Passwords do not match')
          return false
        }
      }else{
        setStepThreeError('Please check that your password meets the described criteria')
        return false
      }
    }
      
    const WizardButton: React.FC<Props> = ({buttonText, onProcessing}) => {
      return (
          <button
            onClick={() => {

              if(currentStep === 1){
                 setStepOneLoad(true)

                if(processStepOne() === true){
                  setCurrentStep(currentStep+1)
                  setStepOneLoad(false)
                  
                }else{
                  setStepOneLoad(false)
                }
              }else if(currentStep === 2){
                setStepTwoLoad(true)

                if(processStepTwo() === true){
                  setCurrentStep(currentStep+1)
                  setStepTwoLoad(false)
                }else{
                  
                  setStepTwoLoad(false)
                }
              }
              else if(currentStep === 3){

                if(processStepThree() === true){
                  console.log(true)
                }else{
                  console.log(false)
                }
              }

              }
            }

            className="w-full flex bg-green-500 space-x-1 justify-between sm:items-center p-2 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-blue-400 transition duration-150 rounded-none sm:w-48">
              <p className="text-md text-white">
                  {buttonText}
              </p>
              {
                onProcessing ? 
                <Oval className="w-5 h-5"/> :
                <ChevronRightIcon className="w-6 h-6 text-white"/>
              }
          </button>
      )
  }

    return (
      <div className="min-h-screen sm:px-24 px-5 py-10 bg-white dark:bg-black">
        {(() => {
        if (currentStep === 1) {
          return (
            <div>
          <h3 className="text-md text-green-500 border-green-500 font-medium border-b-2 pb-2 w-56">
            Create a new account
          </h3>
          <p className="mt-3 mb-3 text-sm">
            An account is required to apply for any permit/license including CITES. You can use this account to track your application progress and to send inquiries to DNPW regarding your application.
          </p> 
          {
            stepOneError !== '' ?
            <div className="p-2 bg-red-800 items-center text-red-100 leading-none lg:rounded-full flex lg:inline-flex sm:w-full" role="alert">
              <span className="flex rounded-full bg-red-500 uppercase px-2 py-1 text-xs font-bold mr-3">Error</span>
              <span className="font-semibold mr-2 text-left flex-auto">{stepOneError}</span>
            </div> :
          <></>
          }
          <div style={{ backgroundColor: '#FBF3F3' }} className="rounded-sm p-10">
            <div className="flex">
              <div className="rounded-full w-6 text-center bg-green-500 text-white">
                1
              </div>
              <p className='ml-3 text-green-500 font-medium'>User information</p>
            </div>
            <p className="mt-2 mb-2 text-sm">
              Provide your personal details (as they appears on your ID or passport). Fields marked (*) are required.
            </p>

             <div className="w-full space-y-2">
              <div>
                <label className="block text-gray-700 dark:text-gray-300">Full name<span className="text-red-500">*</span></label>
                <input
                  id="username"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="sm:w-1/2 w-full dark:bg-transparent dark:border-gray-800 dark:text-gray-300 p-3 appearance-none rounded-none  block border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-400 focus:border-blue-400 focus:z-10 sm:text-sm"
                  placeholder="Your first and last name"
                />
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-300">Nationality<span className="text-red-500">*</span></label>
                <div
                className="bg-white dark:border-gray-800 dark:text-gray-300 p-3 appearance-none rounded-none  block sm:w-1/2 w-full border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-400 focus:border-blue-400 focus:z-10 sm:text-sm"
                >
                  <CountryDropdown classes='outline-none w-full focus:outline-none focus:ring-blue-400 focus:border-blue-400' value={nationality} onChange={(e) => setNationality(e)}/>
                </div>

              </div>


              <div className='w-full'>
                <label className="block text-gray-700 dark:text-gray-300">Date of birth<span className="text-red-500">*</span></label>
                <DatePicker 
                selected={startDate} 
                onChange={(date: any) => setStartDate(date)}
                className="sm:w-1/2 w-full py-3 px-2 focus:outline-none border rounded-sm focus:ring-blue-400 focus:border-blue-400 focus:z-10"
                 />
              </div>

              <div className='sm:w-1/2'>
              <WizardButton buttonText="Save and continue" onProcessing={stepOneLoad}/>
            </div>
              </div>
          </div>
        </div>
          )
        } else if (currentStep === 2) {
          return (
            <div>
          <h3 className="text-md text-green-500 border-green-500 font-medium border-b-2 pb-2 w-56">
            Create a new account
          </h3>
          <p className="mt-3 mb-3 text-sm">
            An account is required to apply for any permit/license including CITES. You can use this account to track your application progress and to send inquiries to DNPW regarding your application.
          </p>
          {
            stepTwoError !== '' ?
            <div className="sm:w-full p-2 bg-red-800 items-center text-red-100 leading-none lg:rounded-full flex lg:inline-flex" role="alert">
              <span className="flex rounded-full bg-red-500 uppercase px-2 py-1 text-xs font-bold mr-3">Error</span>
              <span className="font-semibold mr-2 text-left flex-auto">{stepTwoError}</span>
            </div> :
          <></>
          }
          <div style={{ backgroundColor: '#FBF3F3' }} className="rounded-sm p-10">
            <div className="flex">
              <div className="rounded-full w-6 text-center bg-green-500 text-white">
                2
              </div>
              <p className='ml-3 text-green-500 font-medium'>Contact details</p>
            </div>
            <p className="mt-2 mb-2 text-sm">
              Provide your most up-to-date contact details and a working email. Fields marked (*) are required.
            </p>
            <div className="sm:flex flex-row w-full sm:space-x-4 space-y-4">
              <div className="sm:w-1/2 space-y-2">
              <div>
                <label className="block text-gray-700 dark:text-gray-300">Postal address<span className="text-red-500">*</span></label>
                <input
                  type="text"
                  autoComplete="name"
                  required
                  value={postAddress}
                  onChange={(e) => setPostAddress(e.target.value)}
                  className="w-full dark:bg-transparent dark:border-gray-800 dark:text-gray-300 p-3 appearance-none rounded-none  block border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-400 focus:border-blue-400 focus:z-10 sm:text-sm"
                  placeholder="Post office address"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 dark:text-gray-300">Email<span className="text-red-500">*</span></label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="dark:bg-transparent dark:border-gray-800 dark:text-gray-300 p-3 appearance-none rounded-none  block w-full border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-400 focus:border-blue-400 focus:z-10 sm:text-sm"
                  placeholder="Your email address"
                />
              </div>

              <div>
                <label className="block text-gray-700 dark:text-gray-300">Phone number<span className="text-red-500">*</span></label>
                <PhoneInput
                    placeholder="Enter your phone number"
                    value={value}
                    style={{ outline: 'none' }}
                    className="border py-3 px-2 focus:outline-none"
                    onChange={setValue}/>
              </div>

              
            </div>
            <div className="sm:w-1/2 w-full space-y-2">
              
              <div>
                <label className="block text-gray-700 dark:text-gray-300">Country of residence<span className="text-red-500">*</span></label>
                <CountryDropdown
                  value={countryOfOrigin}
                  onChange={(value) => setCountryOfOrigin(value)}
                  classes="dark:bg-transparent dark:border-gray-800 dark:text-gray-300 p-3 appearance-none rounded-none  block w-full border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-400 focus:border-blue-400 focus:z-10 sm:text-sm"
                />
              </div>

              <div>
                <label className="block text-gray-700 dark:text-gray-300">Physical address<span className="text-red-500">*</span></label>
                <input
                  id="physical-address"
                  name="physical"
                  type="text"
                  autoComplete="address"
                  required
                  value={physicalAddress}
                  onChange={(e) => setPhysicalAddress(e.target.value)}
                  className="dark:bg-transparent dark:border-gray-800 dark:text-gray-300 p-3 appearance-none rounded-none  block w-full border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-400 focus:border-blue-400 focus:z-10 sm:text-sm"
                  placeholder="Your physical address"
                />
              </div>

        
            </div>
            
            </div>
            <div className='flex space-x-2 mt-3'>
              <button 
                onClick={() => {setCurrentStep(currentStep-1)}}
                className="flex items-center p-2 bg-gray-700 text-white rounded-none hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 transition duration-150">
                  <ChevronLeftIcon className='w-5 h-5 text-white'/>
                <p>Previous</p>
              </button>
              <WizardButton buttonText={'Save and proceed'} onProcessing={stepTwoLoad}/> 
            </div>
            </div>
        </div>
          )
        } else {
          return (
            <div>
          <h3 className="text-md text-green-500 border-green-500 font-medium border-b-2 pb-2 w-56">
            Create a new account
          </h3>
          <p className="mt-3 mb-3 text-sm">
            An account is required to apply for any permit/license including CITES. You can use this account to track your application progress and to send inquiries to DNPW regarding your application.
          </p>
          {
            stepThreeError !== '' ?
            <div className="sm:w-full p-2 bg-red-800 items-center text-red-100 leading-none lg:rounded-full flex lg:inline-flex" role="alert">
              <span className="flex rounded-full bg-red-500 uppercase px-2 py-1 text-xs font-bold mr-3">Error</span>
              <span className="font-semibold mr-2 text-left flex-auto">{stepThreeError}</span>
            </div> :
          <></>
          }
          <div style={{ backgroundColor: '#FBF3F3' }} className="rounded-sm p-10">
            <div className="flex">
              <div className="rounded-full w-6 text-center bg-green-500 text-white">
                3
              </div>
              <p className='ml-3 text-green-500 font-medium'>Password and security</p>
            </div>
            <p className="mt-2 mb-2 text-sm">
              Set a password for you account here. The password must:
            </p>

            <ul className="list-disc text-sm m-3">
              <li>Be at least 8 characters long</li>
              <li>Not be a dictionary word or be similar to your name/email</li>
              <li>Contain at least a non-alphabet character e.g. #/@%-</li>
              <li>Contain at least one UPPERCASE letter</li>
            </ul>

             <div className="">
              
              <div className='w-full sm:w-1/2 relative'>
                <label className="block text-gray-700 dark:text-gray-300">Password<span className="text-red-500">*</span></label>
                <input
                  id="password"
                  name="password"
                  autoComplete="current-password"
                  required
                  type={passwordShown ? "text" : "password"}
                  maxLength={12}
                  minLength={8}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="dark:bg-transparent dark:border-gray-800 dark:text-gray-300 p-3 appearance-none rounded-none  block w-full border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-400 focus:border-blue-400 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
                <button onClick={(e) => {
                  passwordShown ? setPasswordShown(false) : setPasswordShown(true)
                }}>
                  {
                    passwordShown ? <EyeOffIcon className="w-5 h-6 text-gray-900 absolute right-0 top-0 mt-9 mr-4"/>:
                    <EyeIcon className="w-5 h-6 text-gray-900 absolute right-0 top-0 mt-9 mr-4"/>
                  }
                </button>
              </div>

              <div className='w-full sm:w-1/2 relative'>
                <label className="block text-gray-700 dark:text-gray-300">Confirm password<span className="text-red-500">*</span></label>
                <input
                  id="confirm-password"
                  name="c-password"
                  type={confirmPasswordShown ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  maxLength={12}
                  minLength={8}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="dark:bg-transparent dark:border-gray-800 dark:text-gray-300 p-3 appearance-none rounded-none  block w-full border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-400 focus:border-blue-400 focus:z-10 sm:text-sm"
                  placeholder="Confirm password"
                />
                <button onClick={(e) => {
                  confirmPasswordShown ? setConfirmPasswordShown(false) : setConfirmPasswordShown(true)
                }}>
                  {
                    confirmPasswordShown ? <EyeOffIcon className="w-5 h-6 text-gray-900 absolute right-0 top-0 mt-9 mr-4"/>:
                    <EyeIcon className="w-5 h-6 text-gray-900 absolute right-0 top-0 mt-9 mr-4"/>
                  }
                </button>
              </div>

              <div className='w-1/2 flex space-x-2'>
                
              <button 
              onClick={() => {setCurrentStep(currentStep-1)}}
              className="flex items-center p-2 bg-gray-700 text-white rounded-none hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 transition duration-150">
                <ChevronLeftIcon className='w-5 h-5 text-white'/>
                <p>Previous</p>
              </button>
              <WizardButton buttonText={'Finish'} onProcessing={onLoad}/> 
            </div>
              </div>
          </div>
        </div>
          )
        }
      })()}
      
      </div>
    )
}
