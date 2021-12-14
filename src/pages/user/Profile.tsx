import { 
    Listbox, 
    Transition 
} from '@headlessui/react'

import { 
    CheckIcon, 
    ChevronLeftIcon, 
    ChevronRightIcon, 
    DocumentIcon, 
    HomeIcon, 
    LocationMarkerIcon, 
    PresentationChartBarIcon, 
    SaveAsIcon, 
    SelectorIcon, 
    SupportIcon, 
    UserCircleIcon, 
    UserIcon
 } from '@heroicons/react/outline'

import { 
    Fragment, 
    useState } from 'react'

import { Oval } from 'react-loading-icons'

import { Link } from 'react-router-dom'

import { CountryDropdown } from 'react-country-region-selector';

import getHour from '../../utils/Hours'

interface Props{
  buttonText: string,
  onProcessing: boolean
}

const tabs = [
    {
        title: 'Home',
        icon: <HomeIcon className=' w-6 h-6 mr-2'/>
    },
    {
        title: 'Applications',
        icon: <PresentationChartBarIcon className=' w-6 h-6 mr-2'/>
    },
    {
        title: 'Licenses & permits',
        icon: <SaveAsIcon className=' w-6 h-6 mr-2'/>
    },
    {
        title: 'My account',
        icon: <UserCircleIcon className=' w-6 h-6 mr-2'/>
    },
    {
        title: 'Help',
        icon: <SupportIcon className=' w-6 h-6 mr-2'/>
    }
]

const permitTabs = [
    {
        id: 1,
        title: 'active',
        count: 0
    },
    {
        id: 2,
        title: 'approval pending',
        count: 1
    },
    {
        id: 3,
        title: 'requires modification',
        count: 2
    },
    {
        id: 4,
        title: 'draft',
        count: 0
    },
    {
        id: 5,
        title: 'denied',
        count: 0
    },
    {
        id: 6,
        title: 'accepted',
        count: 0
    },
]

const people = [
  {
    id: 1,
    name: 'Last 7 days',
    avatar:
      'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 2,
    name: 'Last 14 days',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 3,
    name: 'Last month',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80',
  },
  {
    id: 4,
    name: 'This year',
    avatar:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Profile() {

    const [selected, setSelected] = useState('Home')

    const [select, setSelect] = useState(people[3])

    const active = 'font-bold text-white bg-green-400'

    const [countryOfExport, setCountryOfExport] = useState("")
    const [countryOfImport, setCountryOfImport] = useState("")

    /*Permits and licenses tab*/

    const [permitTabSelected, setPermitTabSelected] = useState(1)

    /*Applications tab */
    const [applicationType, setApplicationType] = useState("cites")

    const [citesSteps, setCitesSteps] = useState(1)

    const WizardButton: React.FC<Props> = ({buttonText, onProcessing}) => {
      return (
          <button
            onClick={() => {

              if(citesSteps === 1){
                  setCitesSteps(2)
              }else if(citesSteps === 2){
                setCitesSteps(3)
              }
              else if(citesSteps === 3){
                  setCitesSteps(4)
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
        <div className="w-full flex bg-gray-100">

            <div className="sm:w-80 w-6 pl-4 pr-4 pt-10 pb-80 bg-white border-r">
                <div className='flex flex-col space-y-4 text-md'>
                    {
                        tabs.map((tab) => (
                            <Link 
                                    className={tab.title === selected ? 'sm:flex sm:space-x-4 p-2 hover:text-white hover:bg-green-400 transition duration-150 items-center' + active : 'sm:flex sm:space-x-4 p-2 hover:text-white hover:bg-green-400 transition duration-150 items-center text-gray-700'}
                                    to="#"
                                    onClick={() => {
                                        setSelected(tab.title)
                                    }}
                                    >
                                    {tab.icon}
                                    <p className='invisible md:visible'>{tab.title}</p>
                                </Link>
                        ))
                    }
                </div>
            </div>

            <div className="sm:w-full sm:p-5">
                <div className={selected === "Home" ? "block p-5 bg-white border" : "hidden p-5 bg-white border"} id="link2">
                    <h3 className="border-b border-green-500 pb-3 text-gray-600 text-2xl">
                        { Number(getHour) <= 12 ? 'Good morning' : 'Good evening'}, Kelvin Chidothi
                    </h3>
                    <p className="mt-2 mb-2 text-sm border-b pb-2">
                        The DNPW E-permit portal is the official permit and license application platform for the Department of National Parks and Wildlife of the Government of Malawi. You can apply for all licenses including import, export and re-export permits under the international CITES treaty. 
                    </p>
                    <h3 className="uppercase text-green-500 mb-2 mt-2">
                        CREATE A NEW LICENSE APPLICATION
                    </h3>
                    <div className="p-3" style={{ backgroundColor: '#FBF3F3' }}>
                        <p className="text-sm">
                            Create a new license or permit application as provided for under the Wildlife Regulation Legislation for Malawi, incliding bird, hunting, game and trophy licenses.
                        </p>
                        <button 
                        onClick={() => {
                            setApplicationType('local')
                            setSelected('Applications')
                        }}
                        className="mt-2  focus:ring-2 focus:ring-green-500 focus:ring-offset-2 bg-green-500 text-sm py-2 px-3 text-white flex items-center space-x-3">
                            <DocumentIcon className='w-4 h-4'/>
                            <span>CREATE LICENSE APPLICATION</span>
                        </button>
                    </div>
                    <h3 className="uppercase text-green-500 mb-2 mt-2">
                        CREATE A CITES IMPORT, EXPORT OR RE-EXPORT  APPLICATION
                    </h3>
                    <div className="p-3" style={{ backgroundColor: '#FBF3F3' }}>
                        <p className="text-sm">
                            Create a new import, export or re-export license for wildlife or wildlife products as provided for in the international CITES treaty.
                        </p>
                        <button 
                        onClick={() => {
                            setApplicationType("cites")
                            setSelected('Applications')
                            console.log(citesSteps);
                            console.log(applicationType);
                            
                            
                        }}
                        className="bg-green-500  focus:ring-2 focus:ring-green-500 focus:ring-offset-2 mt-2 text-sm py-2 px-3 text-white flex items-center space-x-3">
                            <DocumentIcon className='w-4 h-4'/>
                            <span>CREATE CITES APPLICATION</span>
                        </button>
                    </div>
                </div>
                <div className={selected === "Applications" ? "block" : "hidden"} id="link2">
                    { applicationType === "cites" ? 
                    <div>
                        <div className={citesSteps === 1 ? "block bg-white border p-5" : "hidden bg-white border p-5"}>
                            <div>
                                <h3 className='text-2xl border-b border-green-500 text-green-500'>Create a New CITES Application</h3>
                                <p className="mt-2 mb-2 text-sm">
                                    All international trade in wildlife and wildlife products is regulated by the Convention on International Trade in Endangered Species of Wild Fauna and Flora (CITES) Treaty, to which Malawi is party. In order to fulfil its obligations under the CITES Treaty, Malawi issues permits to allow applicants to import, export and re-export wildlife products. Note that this portal does not offer applications for CITES permits and all international import/export applications must be made directly through the DNPW. 
                                </p>
                                <div style={{ backgroundColor: '#FBF3F3' }} className="p-10 mb-3">
                                    
                                    <div>
                                    <span className="text-gray-700">Select type of CITES Application</span>
                                    <div className="mt-2 flex flex-col">
                                        <label className="inline-flex items-center">
                                        <input type="radio" className="form-radio" value="Import license"/>
                                        <span className="ml-2">Import license</span>
                                        </label>
                                        <label className="inline-flex items-center">
                                        <input type="radio" className="form-radio" value="Export license"/>
                                        <span className="ml-2">Export license</span>
                                        </label>
                                        <label className="inline-flex items-center">
                                        <input type="radio" className="form-radio" value="Re-export license"/>
                                        <span className="ml-2">Re-export license</span>
                                        </label>
                                        <label className="inline-flex items-center">
                                        <input type="radio" className="form-radio" value="Other"/>
                                        <span className="ml-2">Other</span>
                                        </label>
                                        
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <WizardButton buttonText="Save and continue" onProcessing={false}/>
                        </div>
                        <div className={citesSteps === 2 ? "block bg-white border p-5" : "hidden bg-white border p-5"}>
                            <h3 className='text-2xl border-b border-green-500 text-green-500 '>Create a New CITES Application</h3>
                            <p className="mt-2 mb-2 text-sm">
                                Provide importer and exporter (re-exporter details)
                            </p>
                            <div style={{ backgroundColor: '#FBF3F3' }} className="p-10 mb-3 flex w-full space-x-3">
                                <div className="border-r border-dotted w-1/2">
                                    <div className="mb-4 pr-3 space-y-2">
                                        <label htmlFor="">Importer full name:</label>
                                        <input
                                            type="text"
                                            autoComplete="name"
                                            required
                                            className="dark:bg-transparent dark:border-gray-800 dark:text-gray-300 p-3 appearance-none rounded-none  block w-full border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-400 focus:border-blue-400 focus:z-10 sm:text-sm"
                                            placeholder="Enter the full name of the importer"
                                            />
                                    </div>
                                    <div className="mb-4 pr-3 space-y-2">
                                        <label htmlFor="">Importer address:</label>
                                        <textarea
                                            autoComplete="address"
                                            required
                                            className="dark:bg-transparent dark:border-gray-800 dark:text-gray-300 p-3 appearance-none rounded-none  block w-full border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-400 focus:border-blue-400 focus:z-10 sm:text-sm"
                                            placeholder="Full address of importer"
                                            />
                                    </div>
                                    <div className="mb-4 pr-3 space-y-2">
                                        <label htmlFor="">Country of import:</label>
                                        <div
                                        className="w-full bg-white dark:border-gray-800 dark:text-gray-300 p-3 appearance-none rounded-none  block border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-400 focus:border-blue-400 focus:z-10 sm:text-sm"
                                        >
                                        <CountryDropdown classes='outline-none w-full focus:outline-none focus:ring-blue-400 focus:border-blue-400' 
                                        value={countryOfExport} 
                                        onChange={(e) => setCountryOfExport(e)}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-1/2">
                                    <div className="mb-4 pr-3 space-y-2">
                                        <label htmlFor="">Exporter full name:</label>
                                        <input
                                            type="text"
                                            autoComplete="name"
                                            required
                                            className="dark:bg-transparent dark:border-gray-800 dark:text-gray-300 p-3 appearance-none rounded-none  block w-full border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-400 focus:border-blue-400 focus:z-10 sm:text-sm"
                                            placeholder="Enter the full name of the importer"
                                            />
                                    </div>
                                    <div className="mb-4 pr-3 space-y-2">
                                        <label htmlFor="">Exporter address:</label>
                                        <textarea
                                            autoComplete="address"
                                            required
                                            className="dark:bg-transparent dark:border-gray-800 dark:text-gray-300 p-3 appearance-none rounded-none  block w-full border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-400 focus:border-blue-400 focus:z-10 sm:text-sm"
                                            placeholder="Full address of importer"
                                            />
                                    </div>
                                    <div className="mb-4 pr-3 space-y-2">
                                        <label htmlFor="">Country of export:</label>
                                        <div
                                        className="w-full bg-white dark:border-gray-800 dark:text-gray-300 p-3 appearance-none rounded-none  block border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-400 focus:border-blue-400 focus:z-10 sm:text-sm"
                                        >
                                        <CountryDropdown classes='outline-none w-full focus:outline-none focus:ring-blue-400 focus:border-blue-400' 
                                        value={countryOfImport} 
                                        onChange={(e) => setCountryOfImport(e)}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between mt-3">
                                <button 
                                onClick={() => {setCitesSteps(citesSteps-1)}}
                                className="flex items-center p-2 bg-gray-700 text-white rounded-none hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 transition duration-150">
                                <ChevronLeftIcon className='w-5 h-5 text-white'/>
                                <p>Previous</p>
                            </button>
                            <WizardButton buttonText="Save and continue" onProcessing={false}/>
                            </div>
                        </div>
                        <div className={citesSteps === 3 ? "block bg-white border p-5" : "hidden bg-white border p-5"}>
                            <h3 className='text-2xl border-b border-green-500 text-green-500 '>Create a New CITES Application</h3>
                            <p className="mt-2 mb-2 text-sm">
                                Specify details of species that you wish to export/import. Click the + icon to add more species.
                            </p>
                            <div style={{ backgroundColor: '#FBF3F3' }} className="p-10">
                                <div className="flex w-full space-x-3 p-2">
                                   <div className="border-r border-dotted w-1/2">
                                        <div className="mb-4 pr-3 space-y-2">
                                            <label htmlFor="">Scientific name (genus and species) and common name of animal or plant:</label>
                                            <input
                                                type="text"
                                                autoComplete="name"
                                                required
                                                className="dark:bg-transparent dark:border-gray-800 dark:text-gray-300 p-3 appearance-none rounded-none  block w-full border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-400 focus:border-blue-400 focus:z-10 sm:text-sm"
                                                placeholder=""
                                                />
                                        </div>
                                        <div className="mb-4 pr-3 space-y-2">
                                            <label htmlFor="">Appendix No. and source:</label>
                                            <input
                                                type="text"
                                                autoComplete="name"
                                                required
                                                className="dark:bg-transparent dark:border-gray-800 dark:text-gray-300 p-3 appearance-none rounded-none  block w-full border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-400 focus:border-blue-400 focus:z-10 sm:text-sm"
                                                placeholder=""
                                                />
                                        </div>
                                        <div className="mb-4 pr-3 space-y-2">
                                            <label htmlFor="">Total quota exported:</label>
                                            <input
                                                type="text"
                                                autoComplete="name"
                                                required
                                                className="dark:bg-transparent dark:border-gray-800 dark:text-gray-300 p-3 appearance-none rounded-none  block w-full border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-400 focus:border-blue-400 focus:z-10 sm:text-sm"
                                                placeholder=""
                                                />
                                        </div>
                                    </div> 
                                    <div className="w-1/2">
                                        <div className="mb-4 pr-3 space-y-2">
                                            <label htmlFor="">Description of specimens, including identifying marks and numbers (age, sex if live):</label>
                                            <input
                                                type="text"
                                                autoComplete="name"
                                                required
                                                className="dark:bg-transparent dark:border-gray-800 dark:text-gray-300 p-3 appearance-none rounded-none  block w-full border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-400 focus:border-blue-400 focus:z-10 sm:text-sm"
                                                placeholder=""
                                                />
                                        </div>
                                        <div className="mb-4 pr-3 space-y-2">
                                            <label htmlFor="">Quality (including units):</label>
                                            <input
                                                type="text"
                                                autoComplete="name"
                                                required
                                                className="dark:bg-transparent dark:border-gray-800 dark:text-gray-300 p-3 appearance-none rounded-none  block w-full border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-400 focus:border-blue-400 focus:z-10 sm:text-sm"
                                                placeholder=""
                                                />
                                        </div>
                                        <div className="mb-4 pr-3 space-y-2">
                                            <label htmlFor="">No. of the operation or date of acquisition (for pre-Convention specimens):</label>
                                            <input
                                                type="text"
                                                autoComplete="name"
                                                required
                                                className="dark:bg-transparent dark:border-gray-800 dark:text-gray-300 p-3 appearance-none rounded-none  block w-full border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-400 focus:border-blue-400 focus:z-10 sm:text-sm"
                                                placeholder=""
                                                />
                                        </div>
                                    </div> 

                                    
                                </div>
                                <div>
                                    <div className="w-full border-t pt-3">
                                        <p className="text-back text-md font-semibold">For Re-Exporting only</p>
                                    </div>
                                    <div className="w-full flex space-x-2 mt-2">
                                        <div className="w-1/3">
                                            <div className="mb-4 pr-3 space-y-2">
                                                <label htmlFor="">Country of origin (if re-exporting):</label>
                                                <div
                                                className="w-full bg-white dark:border-gray-800 dark:text-gray-300 p-3 appearance-none rounded-none  block border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-400 focus:border-blue-400 focus:z-10 sm:text-sm"
                                                >
                                                <CountryDropdown classes='outline-none w-full focus:outline-none focus:ring-blue-400 focus:border-blue-400' 
                                                value={countryOfExport} 
                                                onChange={(e) => setCountryOfExport(e)}/>
                                                </div>
                                            </div>
                                            <div className="mb-4 pr-3 space-y-2">
                                                <label htmlFor="">Country of last re-export:</label>
                                                <div
                                                className="w-full bg-white dark:border-gray-800 dark:text-gray-300 p-3 appearance-none rounded-none  block border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-400 focus:border-blue-400 focus:z-10 sm:text-sm"
                                                >
                                                <CountryDropdown classes='outline-none w-full focus:outline-none focus:ring-blue-400 focus:border-blue-400' 
                                                value={countryOfExport} 
                                                onChange={(e) => setCountryOfExport(e)}/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-1/3">
                                            <div className="mb-4 pr-3 space-y-2">
                                            <label htmlFor="">Permit number:</label>
                                            <input
                                                type="text"
                                                autoComplete="name"
                                                required
                                                className="dark:bg-transparent dark:border-gray-800 dark:text-gray-300 p-3 appearance-none rounded-none  block w-full border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-400 focus:border-blue-400 focus:z-10 sm:text-sm"
                                                placeholder=""
                                                />
                                        </div><div className="mb-4 pr-3 space-y-2">
                                            <label htmlFor="">Certificate number:</label>
                                            <input
                                                type="text"
                                                autoComplete="name"
                                                required
                                                className="dark:bg-transparent dark:border-gray-800 dark:text-gray-300 p-3 appearance-none rounded-none  block w-full border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-400 focus:border-blue-400 focus:z-10 sm:text-sm"
                                                placeholder=""
                                                />
                                        </div>
                                        </div>
                                        <div className="w-1/3">
                                            <div className="mb-4 pr-3 space-y-2">
                                            <label htmlFor="">Date:</label>
                                            <input
                                                type="text"
                                                autoComplete="name"
                                                required
                                                className="dark:bg-transparent dark:border-gray-800 dark:text-gray-300 p-3 appearance-none rounded-none  block w-full border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-400 focus:border-blue-400 focus:z-10 sm:text-sm"
                                                placeholder=""
                                                />
                                        </div>
                                        <div className="mb-4 pr-3 space-y-2">
                                            <label htmlFor="">Date:</label>
                                            <input
                                                type="text"
                                                autoComplete="name"
                                                required
                                                className="dark:bg-transparent dark:border-gray-800 dark:text-gray-300 p-3 appearance-none rounded-none  block w-full border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-400 focus:border-blue-400 focus:z-10 sm:text-sm"
                                                placeholder=""
                                                />
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-3 flex justify-between">

                                <button 
                                    onClick={() => {setCitesSteps(citesSteps-1)}}
                                    className="flex items-center p-2 bg-gray-700 text-white rounded-none hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 transition duration-150">
                                    <ChevronLeftIcon className='w-5 h-5 text-white'/>
                                    <p>Previous</p>
                                </button>

                                <WizardButton buttonText="Save and continue" onProcessing={false}/>
                            </div>
                        </div>
                        <div className={citesSteps === 4 ? "block bg-white border p-5" : "hidden bg-white border p-5"}>
                            *Step four - waiting for UI*
                            <div className="w-full flex justify-between mt-3">

                                <button 
                                    onClick={() => {setCitesSteps(citesSteps-1)}}
                                    className="flex items-center p-2 bg-gray-700 text-white rounded-none hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 transition duration-150">
                                    <ChevronLeftIcon className='w-5 h-5 text-white'/>
                                    <p>Previous</p>
                                </button>

                                <WizardButton buttonText="Finish" onProcessing={false}/>

                            </div>
                        </div>
                    </div> : 
                    <div>
                        Some local application stuff
                    </div>}
                </div>
                <div className={selected === "Licenses & permits" ? "block" : "hidden"} id="link2">
                    
                    <div className="border bg-white p-5">
                        <h3 className="border-b pb-2 text-gray-600 text-2xl border-green-500 ">
                        Licenses & permits
                    </h3>
                    <div className="sm:flex justify-between pt-2 pb-2">
                        <div className="border-b mt-3 pb-2 sm:flex sm:space-x-6">
                            {
                                permitTabs.map((item) => (
                                    <button key={item.title} 
                                    onClick={() => {
                                        setPermitTabSelected(item.id)    
                                    }}
                                    
                                    className={item.id === permitTabSelected ? 'uppercase text-sm text-black flex space-x-2 hover:text-black transition duration-150' : 'uppercase text-sm text-gray-500 flex space-x-2 hover:text-black transition duration-150'}>
                                        <span>{item.title}</span>
                                        {
                                            item.count === 0 ? <></> :
                                            <div className="w-5 h-5 rounded-full text-white bg-green-500 text-center text-sm">
                                                {item.count}
                                            </div>
                                        }
                                    </button>
                                ))
                            }
                        </div>
                        <div>
                            <button 
                                onClick={() => setSelected('Applications')}
                                className="py-2 px-4 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 bg-green-500 text-white uppercase text-xs font-semibold">
                                Create a new application
                            </button>
                    </div>

                    
                    </div>

                    <div style={{ backgroundColor: '#FBF3F3' }} className="p-5">
                        <div className={permitTabSelected === 1 ? "block" : "hidden"}>
                            Tab 1
                        </div>
                        <div className={permitTabSelected === 2 ? "block" : "hidden"}>
                            Tab 2
                        </div>
                        <div className={permitTabSelected === 3 ? "block" : "hidden"}>
                            Tab 3
                        </div>
                        <div className={permitTabSelected === 4 ? "block" : "hidden"}>
                            <div className="sm:flex justify-between">
                        <h1 className='uppercase text-sm'>Draft applications</h1>
                        <Listbox value={select} onChange={setSelect}>
                            {({ open }) => (
                                <>  <div className="mt-1 relative">
                                    <Listbox.Button className="relative w-full bg-white border border-gray-300 rounded-none shadow-none pr-10 py-1 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-gray-300 sm:text-sm">
                                    <span className="flex items-center">
                                        <span className="ml-3 block truncate">{select.name}</span>
                                    </span>
                                    <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                        <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                    </span>
                                    </Listbox.Button>

                                    <Transition
                                    show={open}
                                    as={Fragment}
                                    leave="transition ease-in duration-100"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                    >
                                    <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                                        {people.map((person) => (
                                        <Listbox.Option
                                            key={person.id}
                                            className={({ active }) =>
                                            classNames(
                                                active ? 'text-white bg-green-600' : 'text-gray-900',
                                                'cursor-default select-none relative py-2 pl-3 pr-9'
                                            )
                                            }
                                            value={person}
                                        >
                                            {({ selected, active }) => (
                                            <>
                                                <div className="flex items-center">
                                                <span
                                                    className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block')}
                                                >
                                                    {person.name}
                                                </span>
                                                </div>

                                                {selected ? (
                                                <span
                                                    className={classNames(
                                                    active ? 'text-white' : 'text-indigo-600',
                                                    'absolute inset-y-0 right-0 flex items-center pr-4'
                                                    )}
                                                >
                                                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                </span>
                                                ) : null}
                                            </>
                                            )}
                                        </Listbox.Option>
                                        ))}
                                    </Listbox.Options>
                                    </Transition>
                                </div>
                                </>
                            )}
                            </Listbox>

                        </div>
                    
                        </div>
                        <div className={permitTabSelected === 5 ? "block" : "hidden"}>
                            Tab 5
                        </div>
                        <div className={permitTabSelected === 6 ? "block" : "hidden"}>
                            Tab 5
                        </div>
                        </div>
                    </div>
                </div>
                <div className={selected === "My account" ? "block p-5" : "hidden p-5"} id="link2">
                    <div className="w-full sm:flex sm:space-x-4">
                        <div className="sm:w-2/5 bg-white border p-10">
                            <div className="flex flex-col items-center">
                               <img className='justify-center w-40 h-40 rounded-full object-cover' src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="user" />
                               <h2 className='text-md mt-2 text-black text-lg font-semibold'>Kelvin Chidothi</h2>
                               <p className='text-gray-500'>kchidothi@outlook.com</p>
                               <button className="w-full border border-gray-500 py-1 mt-2 transition duration-150 hover:bg-gray-500 hover:text-white text-gray-500">
                                   Preview your profile
                               </button>
                               <div className="border-t mt-3 w-full pt-4">
                                   <div className="flex justify-between">
                                       <div className="flex space-x-2">
                                           <LocationMarkerIcon className='w-4 h-4'/>
                                           <p className="text-sm">From</p>
                                       </div>
                                       <p className='font-semibold text-sm'>Malawi</p>
                                   </div>
                                   <div className="flex justify-between mt-2">
                                       <div className="flex space-x-2">
                                           <UserIcon className='w-4 h-4'/>
                                           <p className="text-sm">Member since</p>
                                       </div>
                                       <p className='font-semibold text-sm'>20 Nov 2021</p>
                                   </div>
                               </div>
                            </div>
                        </div>
                        <div className="sm:w-3/5 ">
                            <div className="bg-white border pt-10 pl-10 pr-10 flex space-x-6">
                                <button className='uppercase pb-3 text-sm text-gray-500'>Active applications</button>
                                <button className='uppercase pb-3 text-sm text-gray-500 border-b-2 border-green-500 bottom-0'>Drafts</button>
                            </div>
                            <div className="mt-10 flex space-x-6">
                                <div className="bg-white border p-5">
                                    <img className='w-40 h-40' src="data:image/jpeg;base64,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" alt="placeholder" />
                                    <div className="justify-between flex mt-3">
                                        <p className='text-sm text-gray-500'>Re-export license </p>
                                    </div>
                                </div>
                                <div className="bg-white border pl-10 pr-10 pb-5 justify-center pt-12">
                                    <div className="flex items-center justify-center">
                                    <button
                                    onClick={() => setSelected('Applications')}
                                    className="p-0 w-12 h-12 bg-green-300 rounded-full hover:bg-green-500 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none">
                                    <svg viewBox="0 0 20 20" enable-background="new 0 0 20 20" className="w-6 h-6 inline-block">
                                        <path fill="#FFFFFF" d="M16,10c0,0.553-0.048,1-0.601,1H11v4.399C11,15.951,10.553,16,10,16c-0.553,0-1-0.049-1-0.601V11H4.601
                                                                C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H9V4.601C9,4.048,9.447,4,10,4c0.553,0,1,0.048,1,0.601V9h4.399
                                                                C15.952,9,16,9.447,16,10z" />
                                    </svg>
                                    </button>
                                    </div>
                                    <div className="justify-between flex mt-3">
                                        <p className='text-md font-semibold text-gray-500'>Create a new application </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={selected === "Help" ? "block" : "hidden"} id="link2">
                    <div className="border m-5 p-10 bg-white rounded-n">
                        <p className="text-center text-2xl font-semibold text-gray-700">
                            What can we help you with?
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}
