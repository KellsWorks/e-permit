/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react'
import { Link } from 'react-router-dom'
import SubmitButton from '../../components/SubmitButton'
import UrlService from '../../services/UrlService'

export default function Cta() {

    const [successMessage, setSuccessMessage] = useState("")

    const [email, setEmail] = useState("")

    const [name, setName] = useState("")

    const [message, setMessage] = useState("")

    const [onLoad, setOnLoad] = useState(false)

    const handleSubmit = () => {
        setOnLoad(true)

        fetch(UrlService.supportMessage(),{
          method: 'post',
          headers: {'Content-Type':'application/json'},
          body: JSON.stringify({ email: email, name: name, message: message })
          }).then(response => {
              return response.json()
          }).then(data => {
              setSuccessMessage(data.message)
              setOnLoad(false)
              setName("")
              setEmail("")
              setMessage("")
        }).catch((error) => {
            console.log(error)
            setSuccessMessage("An error occurred!")
            setOnLoad(false)
        })
    }

    return (
        <div>
            <section className="text-gray-600 bg-green-500 body-font">
                <div className="container px-5 sm:py-14 py-5 mx-auto flex items-center md:flex-row flex-col">
                <div className="flex flex-col md:pr-10 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-left text-center">
                    <h2 className="text-xs text-white tracking-widest font-medium title-font mb-1">APPLY FOR YOUR PERMIT NOW!</h2>
                    <h1 className=" font-medium title-font text-white">Create an account with DNPW E-Permitting and start applying for permits. Returning users proceed to sign-in.</h1>
                </div>
                <div className="flex md:ml-auto md:mr-0 mx-auto items-center flex-shrink-0 space-x-4">
                    <Link to="/permit-application"  className="bg-transparent transition duration-150 text-white font-medium hover:text-yellow-400 py-2 px-4 border-2 outline-none focus:outline-none hover:border-yellow-400 rounded-none">
                        Start your application
                    </Link>
                </div>
                </div>
            </section>
            <section  id="contact-us" className="text-gray-600 body-font relative">
                <div className="container px-5 py-14 mx-auto flex sm:flex-nowrap flex-wrap">
                <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-sm overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                    <iframe width="100%" height="100%" className="absolute inset-0" frameBorder="0" title="map"  scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Lilongwe&ie=UTF8&t=&z=14&iwloc=B&output=embed"></iframe>
                    <div className="bg-white relative flex flex-wrap py-6 rounded-sm shadow-md">
                    <div className="lg:w-1/2 px-6">
                        <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                        <p className="mt-1">XYY House, City Centre, Lilongwe, Malawi</p>
                    </div>
                    <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                        <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                        <a href="mailto:info@dnpw.gov.mw" className="text-green-500 leading-relaxed">info@dnpw.gov.mw</a>
                        <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                        <p className="leading-relaxed">+265 99 000 22 11</p>
                    </div>
                    </div>
                </div>
                <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                    <h2 className="text-gray-900 mb-1 font-semibold text-2xl uppercase">Get in touch with us</h2>
                    <p className="leading-relaxed mb-5 text-gray-600">Send us a message to get in touch with us.</p>
                    
                    <form onSubmit={(e) => {
                        e.preventDefault()
                        handleSubmit()
                    }}>
                        <div className="relative mb-4">
                        <label htmlFor="name" className="leading-7 text-md text-gray-600">Full name</label>
                        <input 
                        placeholder="Enter your full name" 
                        type="text" 
                        id="name" 
                        name="name"
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value)
                        }}
                        required
                        className="w-full focus:border-green-500 bg-white rounded-sm border border-gray-300 focus:ring-0 text-sm outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                    </div>

                    <div className="relative mb-4">
                        <label htmlFor="email" className="leading-7 text-md text-gray-600">Email address</label>
                        <input 
                        placeholder="Enter your email address" 
                        type="email" 
                        id="email" 
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                        name="email"
                        required
                        className="w-full focus:border-green-500 bg-white rounded-sm border border-gray-300 focus:ring-0 text-sm outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                    </div>

                    <div className="relative mb-4">
                        <label htmlFor="message" className="leading-7 text-md text-gray-600">Message</label>
                        <textarea 
                        placeholder="Type your message here" 
                        id="message"
                        value={message}
                        onChange={(e) => {
                            setMessage(e.target.value)
                        }} 
                        name="message" 
                        required
                        className="w-full focus:border-green-500 bg-white rounded-sm border border-gray-300 focus:ring-0 h-32 text-sm outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                    </div>

                    <p className="text-xs text-gray-500 mb-3">By submitting, you agree to our <Link to="/privacy-policy-and-terms-of-service" className="underline text-blue-500">terms of service</Link></p>

                    <SubmitButton text="Send message" onLoad={onLoad}/>
                    {
                        successMessage === "An error occurred!" ? 
                        <p className="text-red-500 font-medium text-sm mt-1 mb-1 text-center">
                            {successMessage}
                        </p>
                        :
                        <p className="text-blue-500 font-medium text-sm mt-1 mb-1 text-center">
                            {successMessage}
                        </p> 
                    }
                    

                    </form>

                </div>
                </div>
            </section>
        </div>
    )
}
