import { ExclamationCircleIcon } from '@heroicons/react/outline'
import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import SubmitButton from '../../components/SubmitButton'
import Icon from '../../icon.png'
import AuthService from '../../services/AuthService'

export default function SignIn() {

  const [email, setEmail] = useState("")

  const [password, setPassword] = useState("")

  const [isChecked, setIsChecked] = useState(false)

  const [onLoad, setOnLoad] = useState(false)

  const [showAlert, setShowAlert] = useState("")

  const [error, setError] = useState(false)

  const history = useHistory()

  const handleSubmit  = async () => {

    setOnLoad(true)

    const postData = {
      email: email,
      password: password
    }

    const response = await AuthService.doUserLogin(postData)

    console.log('====================================');
    console.log(response);
    console.log('====================================');

    if(response){
      AuthService.handleLoginSuccess(response, isChecked)
      history.push('/')
    }else{
      setOnLoad(false)
      setError(true)
      setShowAlert('Credentials do not match our records')
    }
  }

  return (
      <div className="min-h-screen px-5 flex items-center justify-center bg-white dark:bg-black">
      <div className="max-w-md w-full mb-10">
        <div className="justify-center items-center">
            <img src={Icon} alt="favicon" className="w-24 h-24 mx-auto"/>
          <h2 className="text-center text-3xl font-extrabold dark:text-gray-300 text-gray-900">Welcome back</h2>

          <p className="text-center mt-2 font-medium dark:text-gray-300">
            Sign in to start your session
          </p>

        </div>

        <form className="mt-2 space-y-6" onSubmit={(event)=> {
          event.preventDefault()
          handleSubmit()
        }}>

          <input type="hidden" name="remember" defaultValue="true" />

          {error && (
            <div className="flex items-center font-semibold">
              <ExclamationCircleIcon className="text-red-500 w-5 h-5"/>
              <p className="text-red-500 mb-2 mt-2 ml-3">
              {showAlert}
              </p>
            </div>
          )}

          <div className="rounded shadow-sm -space-y-px">
            <div>
              <label className="block text-gray-700 dark:text-gray-300">Email</label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="dark:bg-transparent dark:border-gray-800 dark:text-gray-300 p-3 appearance-none rounded-none  block w-full border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-300">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="dark:bg-transparent dark:border-gray-800 dark:text-gray-300 p-3 appearance-none rounded-none  block w-full border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                checked={isChecked}
                onChange={(e) => setIsChecked(!isChecked)}
                className="h-4 w-4 dark:bg-transparent bg-white text-blue-600 focus:ring-blue-500 dark:border-gray-900 border-gray-300 rounded-none"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900 dark:text-gray-300">
                Keep me signed in
              </label>
            </div>

            <div className="text-sm">
              <Link to="/forgot-password" className="font-medium text-blue-600 hover:text-blue-500">
                Forgot Password?
              </Link>
            </div>
          </div>

          <div>
            <SubmitButton text="Continue to sign in" onLoad={onLoad}/>
          </div>

          <div>
              <p className="text-center justify-center text-sm dark:text-gray-300">
                Don’t you have an account? <span className="text-green-500 hover:text-green-700">
                <Link to="/sign-up">Sign up</Link>
                </span>
              </p>
          </div>
        </form>
      </div>
    </div>
  )
}
