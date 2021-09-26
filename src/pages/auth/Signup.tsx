import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../../icon.png'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

export default function Signup() {

    const [startDate, setStartDate] = useState(new Date());

    const [value, setValue] = useState("")
    
    return (
        <div className="min-h-screen px-5 flex items-center justify-center bg-white dark:bg-black">
        <div className="max-w-md w-full mb-10">
          <div>
              <img src={Icon} alt="favicon" className="w-24 h-24 mx-auto sm:mt-5"/>
            <h2 className="text-center text-3xl font-extrabold text-gray-900 dark:text-gray-300 mt-4">Create a new account</h2>

          </div>
          <form className="mt-2 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded shadow-sm -space-y-px">
              <div>
                <label className="block text-gray-700 dark:text-gray-300">Full name<span className="text-red-500">*</span></label>
                <input
                  id="username"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="dark:bg-transparent dark:border-gray-800 dark:text-gray-300 p-3 appearance-none rounded-none  block w-full border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
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
                  className="dark:bg-transparent dark:border-gray-800 dark:text-gray-300 p-3 appearance-none rounded-none  block w-full border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                  placeholder="Your email address"
                />
              </div>

              <div>
                <label className="block text-gray-700 dark:text-gray-300">Date of birth<span className="text-red-500">*</span></label>
                <DatePicker 
                selected={startDate} 
                onChange={(date: any) => setStartDate(date)}
                className="w-full py-3 px-2 focus:outline-none border rounded-sm focus:ring-green-500 focus:border-green-500 focus:z-10"
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

              <div>
                <label className="block text-gray-700 dark:text-gray-300">Physical address<span className="text-red-500">*</span></label>
                <input
                  id="physical-address"
                  name="physical"
                  type="text"
                  autoComplete="address"
                  required
                  className="dark:bg-transparent dark:border-gray-800 dark:text-gray-300 p-3 appearance-none rounded-none  block w-full border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                  placeholder="Your physical address"
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
                  className="dark:bg-transparent dark:border-gray-800 dark:text-gray-300 p-3 appearance-none rounded-none  block w-full border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                  placeholder="Country of origin"
                />
              </div>

              <div>
                <label className="block text-gray-700 dark:text-gray-300">Password<span className="text-red-500">*</span></label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="dark:bg-transparent dark:border-gray-800 dark:text-gray-300 p-3 appearance-none rounded-none  block w-full border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>

              <div>
                <label className="block text-gray-700 dark:text-gray-300">Confirm password<span className="text-red-500">*</span></label>
                <input
                  id="confirm-password"
                  name="c-password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="dark:bg-transparent dark:border-gray-800 dark:text-gray-300 p-3 appearance-none rounded-none  block w-full border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                  placeholder="Confirm password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              
              <div>
                  <p className="text-center text-sm justify-center  dark:text-gray-300">
                  By continuing to sign up, you agree to Alembi user <span className="text-green-500 underline font-medium">Privacy Policy</span>
                  </p>
              </div>

            </div>

            <div>
              <button
                type="submit"
                className="group w-full flex justify-center p-4 border border-transparent text-sm font-medium rounded-none text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Continue to sign up
              </button>
            </div>

            <div>
                <p className="text-center justify-center text-sm  dark:text-gray-300">
                    Already a member? <span className="text-green-500 hover:text-green-700">
                        <Link to="/sign-in">Sign in</Link>
                    </span>
                </p>
            </div>

          </form>
        </div>
      </div>
    )
}
