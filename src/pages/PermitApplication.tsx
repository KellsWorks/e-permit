import { QuestionMarkCircleIcon } from '@heroicons/react/outline';

import { useEffect, useState } from 'react'

import { Link } from 'react-router-dom';

import SubmitButton from '../components/SubmitButton';
import CookieService from '../services/CookieService';
import UrlService from '../services/UrlService';


export default function PermitApplication() {

    const [openTab, setOpenTab] = useState(1);

    const [stepOneComplete] = useState(false)

    const [onLoad, setOnLoad] = useState(false)

    const [name, setName] = useState("")

    const [email, setEmail] = useState("")

    const [phone, setPhone] = useState("")

    const [country, setCountry] = useState("")

    const [countryOfExport, setCountryOfExport] = useState("")

    /* */
    const [avatar, setAvatar] = useState("")
    /* */

    const [physicalAddress, setPhysicalAddress] = useState("")

    const [idNumber, setIdNumber] = useState("")

    const [permitType, setPermitType] = useState("Local permit")

    const [isLocal, setIsLocal] = useState(true)

    const [transactionPurpose, setTransactionPurpose] = useState("Export")

    const [scientificName, setScientificName] = useState("")

    const [specimenDescription, setSpecimenDescription] = useState("")

    const [successMessage, setSuccessMessage] = useState("")

    useEffect(() => {
      fetch(UrlService.userUrl(),{
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({ id: CookieService.get('user_id') })
            }).then(response => {
                return response.json()
            }).then(data => {
              console.log(data.user);
              setAvatar(data.user.user_avatar)
          }).catch((error) => {
              console.log(error)
          })
          
    }, [])

    const handleSubmit = () => {

      permitType === "Local permit" ? setIsLocal(true) : <></>

      setOnLoad(true)

      fetch(UrlService.permitApplication(),{
        method: 'post',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({ 
          user_id: CookieService.get('user_id'),
          email: email, name: name, phone: phone,
          country: country, avatar: avatar,
          physical_address: physicalAddress,
          id_no: idNumber,
          is_local: isLocal,
          permit_type: permitType,
          transaction_purpose: transactionPurpose,
          scientific_name: scientificName,
          specimen_description: specimenDescription,
          quality: 'High'
        })
        }).then(response => {
            return response.json()
        }).then(data => {
            console.log(data)
            setSuccessMessage(data.message)
            setOnLoad(false)
      }).catch((error) => {
          console.log(error)
          setOnLoad(false)
      })

    }
    
    return (
        <div className="bg-white">
            <div className="bg-yellow-300 sm:px-32 px-5 sm:py-10 py-5">
            <p className="text-lg font-bold text-gray-700">
                Start application
            </p>
            <p className="text-gray-700">
                Please follow through the application guide. It takes 5 - 7 minutes to finish. Click <Link className="text-blue-400 font-bold underline" to="/licenses-and-permits">here</Link> to view licence guide and scope of permit application.
            </p>
        </div>

        <div className="border sm:m-10 m-5 sm:p-10 p-5 rounded-sm">
            <ul className="sm:flex flex-row mx-auto">
                <Link to="#tab1" className={(openTab === 1
                    ? "border  rounded-sm p-5 w-full flex border-green-400"
                    : "border  rounded-sm p-5 w-full flex")}
                    onClick={e => {
                    e.preventDefault();
                    setOpenTab(1);
                    }}
                    data-toggle="tab"
                    href="#link3"       
                    >
                    {
                stepOneComplete ? <svg xmlns="http://www.w3.org/2000/svg" className="text-green-500 h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg> :
                    <div className={(openTab === 1 ? "rounded-full text-green-500 font-semibold h-10 w-10 flex items-center justify-center border border-green-500" : "rounded-full font-semibold h-10 w-10 flex items-center justify-center border ")}>
                        1
                    </div> }
                    <div className="ml-2">
                        <p className={(openTab === 1 ? "font-semibold text-green-500" : "font-semibold")}>
                            Basic information
                        </p>
                        <p>Name, email, nationality etc.</p>
                    </div>
                </Link>
                <Link to="#tab2" className={(openTab === 2
                    ? "border rounded-sm p-5 w-full flex border-green-400"
                    : "border rounded-sm p-5 w-full flex")}
                    onClick={e => {
                    e.preventDefault();
                    setOpenTab(2);
                    }}
                    data-toggle="tab"
                    href="#link2"       
                    >
                    <div className={(openTab === 2 ? "rounded-full text-green-500 font-semibold h-10 w-10 flex items-center justify-center border border-green-500" : "rounded-full font-semibold h-10 w-10 flex items-center justify-center border ")}>
                        2
                    </div>
                    <div className="ml-2">
                        <p className={(openTab === 2 ? "font-semibold text-green-500" : "font-semibold")}>
                            Permit information
                        </p>
                        <p>Type, Purpose, Country of export etc.</p>
                    </div>
                </Link>
                <Link to="#tab3" className={(openTab === 3
                    ? "border rounded-sm p-5 w-full flex border-green-400"
                    : "border rounded-sm p-5 w-full flex")}
                    onClick={e => {
                    e.preventDefault();
                    setOpenTab(3);
                    }}
                    data-toggle="tab"
                    href="#link3"       
                    >
                    <div className={(openTab === 3 ? "rounded-full text-green-500 font-semibold h-10 w-10 flex items-center justify-center border border-green-500" : "rounded-full font-semibold h-10 w-10 flex items-center justify-center border ")}>
                        3
                    </div>
                    <div className="ml-2">
                        <p className={(openTab === 3 ? "font-semibold text-green-500" : "font-semibold")}>
                            Additional information
                        </p>
                        <p>Description, attach files etc.</p>
                    </div>
                </Link>
            </ul>

            <form onSubmit={(event) => {
              event.preventDefault()
              handleSubmit()
            }}>
            <div className="sm:mt-10 mt-5 p-2">
                <div className="tab-content tab-space">
                    <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <div>
                        <div className="mb-5 text-center">
                            <div className="mx-auto w-32 h-32 mb-2 border rounded-full relative bg-gray-100 shadow-inset">
                                <img className="object-cover w-full h-32 rounded-full" src={"http://localhost:8000/storage/images/profile/" + avatar } alt="user-avatar" />
                            </div>

                        </div>

                      <div className="mb-5">
                          <label htmlFor="fullname" className="font-bold mb-1 text-gray-700 block">Full name</label>
                          <input type="text"
                              name="fullname"
                              id="fullname"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              className="w-full px-4 py-2 rounded-sm border border-gray-200 focus:border-blue-500 fucus:ring-0 focus:outline-none text-gray-600 font-medium"
                              placeholder="Enter your name"/>
                      </div>

                      <div className="mb-5">
                          <label htmlFor="email" className="font-bold mb-1 text-gray-700 block">Email</label>
                          <input
                              type="email"
                              id="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              className="w-full px-4 py-2 rounded-sm border border-gray-200 focus:border-blue-500 fucus:ring-0 focus:outline-none text-gray-600 font-medium"
                              placeholder="Enter your email address"/>
                      </div>

                      <div className="mb-5">
                          <label htmlFor="phone" className="font-bold mb-1 text-gray-700 block">Mobile phone number</label>
                          <input
                              type="phone"
                              id="phone"
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                              className="w-full px-4 py-2 rounded-sm border border-gray-200 focus:border-blue-500 fucus:ring-0 focus:outline-none text-gray-600 font-medium"
                              placeholder="Enter your phone number"/>
                      </div>

                      <div className="mb-5">
                          <label htmlFor="country" className="font-bold mb-1 text-gray-700 block">Country</label>
                          <input
                              type="text"
                              id="country"
                              name="country"
                              value={country}
                              onChange={(e) => setCountry(e.target.value)}
                              className="w-full px-4 py-2 rounded-sm border border-gray-200 focus:border-blue-500 fucus:ring-0 focus:outline-none text-gray-600 font-medium"
                              placeholder="Your country of origin"/>
                      </div>

                      <div className="mb-5">
                          <label htmlFor="address" className="font-bold mb-1 text-gray-700 block">Address</label>
                          <input
                              type="text"
                              id="physical_address"
                              name="physical_address"
                              value={physicalAddress}
                              onChange={(e) => setPhysicalAddress(e.target.value)}
                              className="w-full px-4 py-2 rounded-sm border border-gray-200 focus:border-blue-500 fucus:ring-0 focus:outline-none text-gray-600 font-medium"
                              placeholder="Your current physical address"/>
                      </div>
                    </div> 

                <div className="mb-5">
                    <label htmlFor="national_id" className="font-bold mb-1 text-gray-700 block">National ID Number</label>
                    <input
                        type="text"
                        id="national_id"
                        name="national_id"
                        value={idNumber}
                        onChange={(e) => setIdNumber(e.target.value)}
                        className="w-full px-4 py-2 rounded-sm border border-gray-200 focus:border-green-500 fucus:ring-0 focus:outline-none text-gray-600 font-medium"
                        placeholder="Enter your national ID number"/>
                </div>
                
            </div>

            <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                <p className="mb-2">
                    The Department of National Parks and Wildlife (DNPW) is the Malawi Government agency mandated by law to conserve, manage and regulate the sustainable use of wildlife resources in and outside protected areas. In order to execute this mandate, the department issues various forms of permits and licenses for different wildlife and wildlife products.
                </p>
                <label className="font-bold mb-1 text-gray-700 block">Select permit type</label>
                <div className="col-span-6 sm:col-span-3">
                    <select
                        value={permitType}
                        onChange={(e) => setPermitType(e.target.value)}
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        >
                    <option>Local permit</option>
                    <option>International permit</option>
                    </select>
                </div>
                <label className="font-bold mb-1 mt-2 text-gray-700 block">Select permit purpose</label>
                <div className="col-span-6 sm:col-span-3">
                    <select
                        value={transactionPurpose}
                        onChange={(e) => setTransactionPurpose(e.target.value)}
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        >
                    <option>Export</option>
                    <option>Re-Export</option>
                    <option>Import</option>
                    <option>Others</option>
                    </select>
                </div>
                    <label className="font-bold mb-1 text-gray-700 block">Country of export</label>
                    <div className="col-span-6 sm:col-span-3">
                        <input
                            type="text"
                            value={countryOfExport}
                            onChange={(e)=> {setCountryOfExport(e.target.value)}}
                            className="w-full px-4 py-1 rounded-sm border border-gray-200 focus:border-blue-500 fucus:ring-0 focus:outline-none font-medium"
                            placeholder="Type in the country of export"/>
                    </div>  
                    <div className="flex space-x-3 items-center mt-2">
                        <QuestionMarkCircleIcon className="h-4 w-4"/>
                        <Link to="/licences-and-permits" className="text-sm">Check pricing</Link>
                    </div>
            </div>

            <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                  <div className="w-full">
                    <div className="col-span-3 sm:col-span-2">
                      <label className="font-bold mb-1 text-gray-700 block">
                        Scientific name
                      </label>
                      <div className="mt-1 flex rounded-sm shadow-sm">
                        <span className="inline-flex items-center px-3 rounded-sm border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                          Including Genus
                        </span>
                        <input
                          type="text"
                          value={scientificName}
                          onChange={(e) => setScientificName(e.target.value)}
                          className="w-full px-4 py-1 rounded-sm border border-gray-200 focus:border-blue-500 fucus:ring-0 focus:outline-none font-medium"
                          placeholder="For example Acinonyx jubatus for Cheetah"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="about" className="font-bold mb-1 text-gray-700 block">
                      Description of species including identifying marks or numbers
                    </label>
                    <div className="mt-1">
                      <textarea
                        value={specimenDescription}
                        onChange={(e) => setSpecimenDescription(e.target.value)}
                        rows={3}
                        className="w-full px-4 py-1 rounded-sm border border-gray-200 focus:border-blue-500 fucus:ring-0 focus:outline-none font-medium"
                        placeholder="Type the description here"
                      />
                    </div>
                    <p className="mt-2 text-sm text-gray-500">
                      Brief description of specie including identification marks or numbers (age/sex if live).
                    </p>
                  </div>

                  <div>
                    <label className="font-bold mb-1 text-gray-700 block">Attachment files</label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 hover:border-yellow-500 transition duration-150 border-gray-300 border-dashed rounded-sm">
                      <div className="space-y-1 text-center">
                        <svg
                          className="mx-auto h-12 w-12 text-gray-400"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div className="flex text-sm text-gray-600">
                          <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                          >
                            <span>Upload a file</span>
                            <input onChange={() => {
                              // setAttachments(e.target.files)
                            }} multiple={false} id="file-upload" name="file-upload" type="file" className="sr-only" />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                      </div>
                    </div>
                  </div>
                </div>
            </div>

            </div>
                <div className="flex justify-between">
                    {
                        openTab === 1 ? <></> : <button onClick={() => setOpenTab(openTab-1)} className="border-gray-300 border  flex px-4 py-2 rounded-sm mt-2 justify-right">Previous
                        </button>
                    }
                    {
                        openTab === 3 ? <SubmitButton text="Submit permit application" onLoad={onLoad}/> : <button onClick={
                            () => {
                                setOpenTab(openTab+1)
                            }
                        } className="border text-green-500 border-green-500  flex px-4 py-2 rounded-sm mt-2 justify-right">Next
                        </button>
                    }
                </div>
                <p className="text-blue-500 text-center mt-2">
                  {successMessage}
                </p>
            </div>
            </form>
        </div>
        </div>
    )
}
