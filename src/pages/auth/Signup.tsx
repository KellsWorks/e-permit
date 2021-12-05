import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { ChevronRightIcon, ExclamationCircleIcon } from '@heroicons/react/outline';
import RegisterService from '../../services/RegisterService';

interface Props{
  buttonText: string
}

export default function Signup() {

    const [currentStep, setCurrentStep] = useState(1)

    const [startDate, setStartDate] = useState(new Date());

    const [value, setValue] = useState("")

    const [name, setName] = useState("")

    const [email, setEmail] = useState("")

    const [physicalAddress, setPhysicalAddress] = useState("")

    const [nationality, setNationality] = useState("")

    const [password, setPassword] = useState("")

    const [confirmPassword, setConfirmPassword] = useState("")

    const [onLoad, setOnLoad] = useState(false)

    const [message, setMessage] = useState("")

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
      history.push('/sign-in')
    }else{
      setOnLoad(false)
      setMessage('Something went wrong, please try again.')
    }
    }
    
    const WizardButton: React.FC<Props> = ({buttonText}) => {
      return (
          <button
          onClick={() => {setCurrentStep(currentStep+1)}}
           className="w-full flex bg-green-500 space-x-1 justify-between sm:items-center p-2 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-green-500 transition duration-150 rounded-sm sm:w-48">
              <p className="text-md text-white">
                  {buttonText}
              </p>
              <ChevronRightIcon className="w-6 h-6 text-white"/>
          </button>
      )
  }
    return (
      <div className="min-h-screen sm:px-24 px-5 py-10 bg-white dark:bg-black">
        {(() => {
        if (currentStep === 1) {
          return (
            <div>
          <h3 className="text-md text-green-500 border-green-500 font-medium border-b pb-2 w-56">
            Create a new account
          </h3>
          <p className="mt-3 mb-3 text-sm">
            An account is required to apply for any permit/license including CITES. You can use this account to track your application progress and to send inquiries to DNPW regarding your application.
          </p>
          {/* <p className="text-center text-red-500 bg-gray-100 m-2 font-medium text-sm">
            Errors and feedback will load here
          </p> */}
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
                  className="sm:w-1/2 w-full dark:bg-transparent dark:border-gray-800 dark:text-gray-300 p-3 appearance-none rounded-none  block border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                  placeholder="Your first and last name"
                />
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-300">Nationality<span className="text-red-500">*</span></label>
                <input
                  id="nationality"
                  name="nationality"
                  type="text"
                  autoComplete="country"
                  required
                  value={nationality}
                  onChange={(e) => setNationality(e.target.value)}
                  className="dark:bg-transparent dark:border-gray-800 dark:text-gray-300 p-3 appearance-none rounded-none  block sm:w-1/2 w-full border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                  placeholder="Country of origin"
                />
              </div>

              <div className='w-full'>
                <label className="block text-gray-700 dark:text-gray-300">Date of birth<span className="text-red-500">*</span></label>
                <DatePicker 
                selected={startDate} 
                onChange={(date: any) => setStartDate(date)}
                className="sm:w-1/2 w-full py-3 px-2 focus:outline-none border rounded-sm focus:ring-green-500 focus:border-green-500 focus:z-10"
                 />
              </div>

              <div className='sm:w-1/2'>
              <WizardButton buttonText="Save and continue"/>
            </div>
              </div>
          </div>
        </div>
          )
        } else if (currentStep === 2) {
          return (
            <div>
          <h3 className="text-md text-green-500 border-green-500 font-medium border-b pb-2 w-56">
            Create a new account
          </h3>
          <p className="mt-3 mb-3 text-sm">
            An account is required to apply for any permit/license including CITES. You can use this account to track your application progress and to send inquiries to DNPW regarding your application.
          </p>
          {/* <p className="text-center text-red-500 bg-gray-100 m-2 font-medium text-sm">
            Errors and feedback will load here
          </p> */}
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
              <div className="sm:w-1/2 rounded shadow-sm space-y-2">
              <div>
                <label className="block text-gray-700 dark:text-gray-300">Postal address<span className="text-red-500">*</span></label>
                <input
                  id="username"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full dark:bg-transparent dark:border-gray-800 dark:text-gray-300 p-3 appearance-none rounded-none  block border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                  placeholder="Your first and last name"
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
                  className="dark:bg-transparent dark:border-gray-800 dark:text-gray-300 p-3 appearance-none rounded-none  block w-full border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                  placeholder="Your email address"
                />
              </div>

              <div>
                <label className="block text-gray-700 dark:text-gray-300">Phone number<span className="text-red-500">*</span></label>
                <PhoneInput
                    placeholder="Enter your phone number"
                    value={value}
                    className="border py-3 px-2 focus:outline-none"
                    onChange={setValue}/>
              </div>

              
            </div>
            <div className="sm:w-1/2 w-full rounded shadow-sm space-y-2">
              
              <div>
                <label className="block text-gray-700 dark:text-gray-300">Country of residence<span className="text-red-500">*</span></label>
                <input
                  id="nationality"
                  name="nationality"
                  type="text"
                  autoComplete="country"
                  required
                  value={nationality}
                  onChange={(e) => setNationality(e.target.value)}
                  className="dark:bg-transparent dark:border-gray-800 dark:text-gray-300 p-3 appearance-none rounded-none  block w-full border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                  placeholder="Country of origin"
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
                  className="dark:bg-transparent dark:border-gray-800 dark:text-gray-300 p-3 appearance-none rounded-none  block w-full border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                  placeholder="Your physical address"
                />
              </div>

        
            </div>
            
            </div>
            <div className='flex space-x-2 mt-3'>
                <button 
                  onClick={() => {setCurrentStep(currentStep-1)}}
                  className="p-2 bg-gray-700 text-white rounded-sm">
                    Previous
                </button>
              <WizardButton buttonText={'Save and proceed'}/> 
            </div>
            </div>
        </div>
          )
        } else {
          return (
            <div>
          <h3 className="text-md text-green-500 border-green-500 font-medium border-b pb-2 w-56">
            Create a new account
          </h3>
          <p className="mt-3 mb-3 text-sm">
            An account is required to apply for any permit/license including CITES. You can use this account to track your application progress and to send inquiries to DNPW regarding your application.
          </p>
          <div className="border-l-4 border border-red-500 flex space-x-3 p-2 mb-2 items-center">
            <ExclamationCircleIcon className='w-4 h-4 text-red-500'/>
            <p className="text-sm text-red-500 font-medium">The passwords do not match</p>
          </div>
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

             <div className="space-y-2">
              
              <div className='w-full sm:w-1/2'>
                <label className="block text-gray-700 dark:text-gray-300">Password<span className="text-red-500">*</span></label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  maxLength={8}
                  minLength={8}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="dark:bg-transparent dark:border-gray-800 dark:text-gray-300 p-3 appearance-none rounded-none  block w-full border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>

              <div className='w-full sm:w-1/2'>
                <label className="block text-gray-700 dark:text-gray-300">Confirm password<span className="text-red-500">*</span></label>
                <input
                  id="confirm-password"
                  name="c-password"
                  type="password"
                  autoComplete="current-password"
                  required
                  maxLength={8}
                  minLength={8}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="dark:bg-transparent dark:border-gray-800 dark:text-gray-300 p-3 appearance-none rounded-none  block w-full border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                  placeholder="Confirm password"
                />
              </div>

              <div className='w-1/2 flex space-x-2'>
                
              <button 
              onClick={() => {setCurrentStep(currentStep-1)}}
              className="p-2 bg-gray-700 text-white rounded-sm">
                Previous
              </button>
              <WizardButton buttonText={'Finish'}/> 
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
