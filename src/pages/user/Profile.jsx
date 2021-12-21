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
    MinusCircleIcon, 
    MinusIcon, 
    PlusCircleIcon, 
    PlusIcon, 
    PresentationChartBarIcon, 
    SaveAsIcon, 
    SelectorIcon, 
    SupportIcon, 
    UserCircleIcon, 
    UserIcon,
    DocumentSearchIcon,
    CashIcon
 } from '@heroicons/react/outline'

import { 
    Fragment, 
    useEffect, 
    useState } from 'react'

import { Oval } from 'react-loading-icons'

import { Link } from 'react-router-dom'

import { CountryDropdown } from 'react-country-region-selector';

import getHour from '../../utils/Hours'
import CookieService from '../../services/CookieService'
import UrlService from '../../services/UrlService'
import moment from 'moment'
import { toast } from 'react-toastify'
// import CitesApplicationService from '../../services/CitesApplicationService'

import DeactivateAccount from '../../components/DeactivateAccount'

const getRandomString = (length) => {
    var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var result = '';
    for ( var i = 0; i < length; i++ ) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
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
        title: 'rejected',
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

const peoples = [
  {
    name: 'Jane Cooper',
    title: 'Regional Paradigm Technician',
    department: 'Optimization',
    role: 'Admin',
    email: 'jane.cooper@example.com',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  // More people...
]

const categories = [
  {
    id: 1,
    name: 'Bird license',
  },
  {
    id: 2,
    name: 'Game license',
  },
  {
    id: 3,
    name: 'Hunting license',
  },
  {
    id: 4,
    name: 'Special license',
  },
  {
    id: 5,
    name: 'Visitors license',
  },{
    id: 6,
    name: 'Animal in captivity license',
  },
  {
    id: 7,
    name: 'Game ranching license',
  },
  {
    id: 8,
    name: 'Game farming license',
  },
  {
    id: 9,
    name: 'Professional hunter license',
  },
]


export default function Profile() {

    const [selected, setSelected] = useState('Home')

    const [selectedCategory, setSelectedCategory] = useState(categories[3])

    const [select, setSelect] = useState(people[3])

    const active = 'font-bold text-white bg-green-400'

    /*Permits and licenses tab*/

    const [permitTabSelected, setPermitTabSelected] = useState(1)

    /*Applications tab */
    const [applicationType, setApplicationType] = useState("cites")

    const [citesSteps, setCitesSteps] = useState(1)

    const [localsSteps, setLocalsSteps] = useState(1)

    /*Cites */
    const [importLicense, setImportLicense] = useState(false)
    const [exportLicense, setExportLicense] = useState(false)
    const [reExportLicense, setReExportLicense] = useState(false)
    const [OtherLicense, setOtherLicense] = useState(false)

    /*** Step 2 */
    const [importerName, setImporterName] = useState("")
    const [importerAddress, setImporterAddress] = useState("")
    const [countryOfExport, setCountryOfExport] = useState("")
    const [exporterName, setExporterName] = useState("")
    const [exporterAddress, setExporterAddress] = useState("")
    const [countryOfImport, setCountryOfImport] = useState("")
    const [citesPurposeOfTransaction, setCitesPurposeOfTransaction] = useState("")

    /***Step 3 */
    const [speciesNumber, setSpeciesNumber] = useState(1)

    const [inputList, setInputList] = useState([
        { scientificName: "", 
        specimenDescription: "",
        appendixNumber: "",
        quality: "",
        totalQuotaExported: "",
        operation: ""
    }]);

    const handleInputChange = (e, index) => {
        
        const { name, value } = e.target;

        const list = [...inputList];

        list[index][name] = value;

        setInputList(list);
    };

   const handleAddClick = () => {
        setInputList([...inputList, { scientificName: "", 
        specimenDescription: "",
        appendixNumber: "",
        quality: "",
        totalQuotaExported: "",
        operation: "" }]);
    };

    const handleRemoveClick = index => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    };

    /***Step 4 - Cites Attachments */

    const [citesAttachment, setCitesAttachment] = useState()

    /***Last step */
    const handleCitesApplication = () => {

        const formData = new FormData()

        formData.append('applicant_id', CookieService.get('user_id'))
        formData.append('type', 'License')
        formData.append('importer_id_number', CookieService.get('user_id'))
        formData.append('applicant_id', '')
        formData.append('country_of_import', countryOfImport)
        formData.append('exporter_name', exporterName)
        formData.append('exporter_address', exporterAddress)
        formData.append('exporter_identification', '')
        formData.append('exporter_id_number', '')
        formData.append('country_of_export', countryOfExport)
        formData.append('purpose', citesPurposeOfTransaction)
        formData.append('date_submitted', new Date().getDate())
        formData.append('proof_of_payment', 'Bank deposit')
        formData.append('waybill', 'Waybill')
        formData.append('importer_identification', '')
        formData.append('importer_address', importerAddress)
        formData.append('importer_name', importerName)
        formData.append('file', citesAttachment)

        console.log(formData);

        const requestOptions = {
            method: 'post',
            headers: {
                'Access-Control-Allow-Origin' : 'http://localhost:8000', 
                "Content-Type": "multipart/form-data"
            },
            body: formData,
            redirect: 'follow'
        };

        fetch(UrlService.createCitesApplication(), requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result);
            })
        .catch(error => {
            console.log('error', error)
        });
        
    }
    /*Local forms */
    const [localName, setLocalName] = useState("")
    const [localPostalAddress, setLocalPostalAddress] = useState("")
    const [areaOfApplication, setAreaOfApplication] = useState("")
    const [localAttachment, setLocalAttachment] = useState()
    /* */
    const [fireArmsNumber, setFireArmsNumber] = useState(1)

    const [fireArmsList, setFireArmsList] = useState([
        { fireArmType: "", 
        fireArmLicenseNumber: ""
    }]);
    const handleFireArmChange = (e, index) => {
        
        const { name, value } = e.target;

        const list = [...fireArmsList];

        list[index][name] = value;

        setFireArmsList(list);
    };

   const handleAddFirearm = () => {
        setFireArmsList([...fireArmsList, { fireArmType: "", 
        fireArmLicenseNumber: "", }]);
    };

    const handleRemoveFirearm = index => {
        const list = [...fireArmsList];
        list.splice(index, 1);
        setFireArmsList(list);
    };

    /****Local species */
    const [localSpeciesNumber, setLocalSpeciesNumber] = useState(1)

    const [localSpeciesList, setLocalSpeciesList] = useState([
        { name: "", 
          number: ""
        }
    ]);

    const handleLocalSpeciesChange = (e, index) => {
        
        const { name, value } = e.target;

        const list = [...localSpeciesList];

        list[index][name] = value;

        setLocalSpeciesList(list);
    };

   const handleAddLocalSpecies = () => {
        setLocalSpeciesList([...localSpeciesList, { name: "", 
        number: "", }]);
    };

    const handleRemoveLocalSpecies = index => {
        const list = [...localSpeciesList];
        list.splice(index, 1);
        setLocalSpeciesList(list);
    };
    /* User */
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [avatar, setAvatar] = useState("")
    const [membership, setMembership] = useState("")

    const WizardButton = ({buttonText, onProcessing}) => {
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
              else if(citesSteps === 4){
                  setCitesSteps(5)
              }else if(citesSteps === 5){
                  toast.success('Thank you submitting the application. Please regularly check your email and portal for notifications.', {
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
            }
            type={citesSteps === 5 ? "submit" : "button"}
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

  const WizardButtonLocal = ({buttonText, onProcessing}) => {
      return (
          <button
            onClick={() => {

              if(localsSteps === 1){
                  setLocalsSteps(2)
              }else if(localsSteps === 2){
                setLocalsSteps(3)
              }
              else if(localsSteps === 3){
                  setLocalsSteps(4)
              }
              else if(localsSteps === 4){
                  setLocalsSteps(5)
              }
              else if(localsSteps === 5){
                  setLocalsSteps(6)
              }
              else if(localsSteps === 6){
                  toast.success('Thank you submitting the application. Please regularly check your email and portal for notifications.', {
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

  /*Http Requests */
  useEffect(() => {

      fetch(UrlService.userUrl(),{
          method: 'post',
          headers: {'Content-Type':'application/json'},
          body: JSON.stringify({ user_id: CookieService.get('user_id') })
          }).then(response => {
              return response.json()
          }).then(data => {
              setName(data.data.name)
              setEmail(data.data.email)
              setAvatar(data.data.registrations.avatar)
              setMembership(data.data.created_at)
        }).catch((error) => {
            console.log(error)
        })
  }, [])

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
                        {/* { Number(getHour) < 12 ? 'Good morning' : 'Good evening'}, {name} */}
                        Good morning, {name}
                    </h3>
                    <p className="mt-2 mb-2 text-sm border-b pb-2">
                        The DNPW E-permit portal is the official permit and license application platform for the Department of National Parks and Wildlife of the Government of Malawi. You can apply for all licenses including import, export and re-export permits under the international CITES treaty. 
                    </p>
                    <h3 className="uppercase text-green-500 mb-2 mt-2">
                        CREATE A NEW LICENSE APPLICATION
                    </h3>
                    <div className="py-2 px-3" style={{ backgroundColor: '#FBF3F3' }}>
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
                    <div className="py-2 px-3" style={{ backgroundColor: '#FBF3F3' }}>
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
                        <form noValidate onSubmit={(e) => {
                            e.preventDefault()
                            handleCitesApplication()
                        }}>
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
                                            <input 
                                            type="radio" 
                                            className="form-radio" 
                                            checked={importLicense}  
                                            onChange={() => setImportLicense(!importLicense)}
                                            />
                                            <span className="ml-2">Import license</span>
                                        </label>

                                        <label className="inline-flex items-center">
                                            <input 
                                            type="radio" 
                                            className="form-radio" 
                                            value="Export license"
                                            checked={exportLicense}  
                                            onChange={() => setExportLicense(!exportLicense)}
                                            />
                                            <span className="ml-2">Export license</span>
                                        </label>

                                        <label className="inline-flex items-center">
                                            <input 
                                            type="radio" 
                                            className="form-radio" 
                                            value="Re-export license"
                                            checked={reExportLicense}  
                                            onChange={() => setReExportLicense(!reExportLicense)}
                                            />
                                            <span className="ml-2">Re-export license</span>
                                        </label>

                                        <label className="inline-flex items-center">
                                            <input 
                                            type="radio" 
                                            className="form-radio" 
                                            value="Other"
                                            checked={OtherLicense}  
                                            onChange={() => setOtherLicense(!OtherLicense)}
                                            />
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
                            <div style={{ backgroundColor: '#FBF3F3' }} className="p-10">
                                <div className='mb-3 flex w-full space-x-3'>
                                <div className="border-r border-dotted w-1/2">
                                    <div className="mb-4 pr-3 space-y-2">
                                        <label htmlFor="">Importer full name:</label>
                                        <input
                                            type="text"
                                            autoComplete="name"
                                            required
                                            value={importerName}
                                            onChange={(e) => setImporterName(e.target.value)}
                                            className="dark:bg-transparent dark:border-gray-800 dark:text-gray-300 py-2 px-3 appearance-none rounded-none  block w-full border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-400 focus:border-blue-400 focus:z-10 sm:text-sm"
                                            placeholder="Enter the full name of the importer"
                                            />
                                    </div>
                                    <div className="mb-4 pr-3 space-y-2">
                                        <label htmlFor="">Importer address:</label>
                                        <textarea
                                            autoComplete="address"
                                            required
                                            value={importerAddress}
                                            onChange={(e) => setImporterAddress(e.target.value)}
                                            className="dark:bg-transparent dark:border-gray-800 dark:text-gray-300 py-2 px-3 appearance-none rounded-none  block w-full border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-400 focus:border-blue-400 focus:z-10 sm:text-sm"
                                            placeholder="Full address of importer"
                                            />
                                    </div>
                                    <div className="mb-4 pr-3 space-y-2">
                                        <label htmlFor="">Country of import:</label>
                                        <div
                                        className="w-full bg-white dark:border-gray-800 dark:text-gray-300 appearance-none rounded-none  block border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-400 focus:border-blue-400 focus:z-10 sm:text-sm"
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
                                            value={exporterName}
                                            onChange={(e) => setExporterName(e.target.value)}
                                            className="dark:bg-transparent dark:border-gray-800 dark:text-gray-300 py-2 px-3 appearance-none rounded-none  block w-full border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-400 focus:border-blue-400 focus:z-10 sm:text-sm"
                                            placeholder="Enter the full name of the importer"
                                            />
                                    </div>
                                    <div className="mb-4 pr-3 space-y-2">
                                        <label htmlFor="">Exporter address:</label>
                                        <textarea
                                            autoComplete="address"
                                            required
                                            value={exporterAddress}
                                            onChange={(e) => setExporterAddress(e.target.value)}
                                            className="dark:bg-transparent dark:border-gray-800 dark:text-gray-300 py-2 px-3 appearance-none rounded-none  block w-full border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-400 focus:border-blue-400 focus:z-10 sm:text-sm"
                                            placeholder="Full address of importer"
                                            />
                                    </div>
                                    <div className="mb-4 pr-3 space-y-2">
                                        <label htmlFor="">Country of export:</label>
                                        <div
                                        className="w-full bg-white dark:border-gray-800 dark:text-gray-300 appearance-none rounded-none  block border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-400 focus:border-blue-400 focus:z-10 sm:text-sm"
                                        >
                                        <CountryDropdown classes='outline-none w-full focus:outline-none focus:ring-blue-400 focus:border-blue-400' 
                                        value={countryOfImport} 
                                        onChange={(e) => setCountryOfImport(e)}/>
                                        </div>
                                    </div>
                                </div>
                                </div>
                                <div>
                                    <h2>Purpose of transaction</h2>
                                    <textarea
                                            autoComplete="address"
                                            required
                                            value={citesPurposeOfTransaction}
                                            onChange={(e) => setCitesPurposeOfTransaction(e.target.value)}
                                            className="mt-2 focus-within:dark:bg-transparent h-32 dark:border-gray-800 dark:text-gray-300 py-2 px-3 appearance-none rounded-none  block w-full border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-400 focus:border-blue-400 focus:z-10 sm:text-sm"
                                            placeholder="Purpose of making the transaction"
                                            />
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
                                {
                                    Array(speciesNumber).fill(speciesNumber).map((item, i) => (
                                        <div key={item.id} className="flex w-full space-x-3 p-2 border-b">
                                            <div className="border-r border-dotted w-1/2">
                                                    <div className="mb-4 pr-3 space-y-2">
                                                        <label htmlFor="">Scientific name (genus and species) and common name of animal or plant:</label>
                                                        <input
                                                            type="text"
                                                            autoComplete="name"
                                                            required
                                                            className="dark:bg-transparent dark:border-gray-800 dark:text-gray-300 py-2 px-3 appearance-none rounded-none  block w-full border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-400 focus:border-blue-400 focus:z-10 sm:text-sm"
                                                            placeholder="Foe example: Acinonyx jubatus for cheetah"
                                                            onChange={(e) => handleInputChange(e, i)}
                                                            value={item.scientificName}
                                                            name="scientificName"
                                                            />
                                                    </div>
                                                    <div className="mb-4 pr-3 space-y-2">
                                                        <label htmlFor="">Appendix No. and source:</label>
                                                        <input
                                                            type="text"
                                                            required
                                                            disabled
                                                            className="dark:bg-transparent dark:border-gray-800 dark:text-gray-300 py-2 px-3 appearance-none rounded-none  block w-full border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-400 focus:border-blue-400 focus:z-10 sm:text-sm"
                                                            value={getRandomString(15)}
                                                            onChange={(e) => handleInputChange(e, i)}
                                                            name="appendixNumber"
                                                            />
                                                    </div>
                                                    <div className="mb-4 pr-3 space-y-2">
                                                        <label htmlFor="">Total quota exported:</label>
                                                        <input
                                                            type="text"
                                                            required
                                                            className="dark:bg-transparent dark:border-gray-800 dark:text-gray-300 py-2 px-3 appearance-none rounded-none  block w-full border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-400 focus:border-blue-400 focus:z-10 sm:text-sm"
                                                            onChange={(e) => handleInputChange(e, i)}
                                                            value={item.totalQuotaExported}
                                                            name="totalQuotaExported"
                                                            />
                                                    </div>
                                                </div> 
                                                <div className="w-1/2">
                                                    <div className="mb-4 pr-3 space-y-2">
                                                        <label htmlFor="">Description of specimens, including identifying marks and numbers (age, sex if live):</label>
                                                        <input
                                                            type="text"
                                                            required
                                                            className="dark:bg-transparent dark:border-gray-800 dark:text-gray-300 py-2 px-3 appearance-none rounded-none  block w-full border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-400 focus:border-blue-400 focus:z-10 sm:text-sm"
                                                            onChange={(e) => handleInputChange(e, i)}
                                                            value={item.specimenDescription}
                                                            name="specimenDescription"
                                                            />
                                                    </div>
                                                    <div className="mb-4 pr-3 space-y-2">
                                                        <label htmlFor="">Quality (including units):</label>
                                                        <input
                                                            type="text"
                                                            required
                                                            className="dark:bg-transparent dark:border-gray-800 dark:text-gray-300 py-2 px-3 appearance-none rounded-none  block w-full border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-400 focus:border-blue-400 focus:z-10 sm:text-sm"
                                                            onChange={(e) => handleInputChange(e, i)}
                                                            value={item.quality}
                                                            name="quality"
                                                            />
                                                    </div>
                                                    <div className="mb-4 pr-3 space-y-2">
                                                        <label htmlFor="">No. of the operation or date of acquisition (for pre-Convention specimens):</label>
                                                        <input
                                                            type="text"
                                                            required
                                                            className="dark:bg-transparent dark:border-gray-800 dark:text-gray-300 py-2 px-3 appearance-none rounded-none  block w-full border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-400 focus:border-blue-400 focus:z-10 sm:text-sm"
                                                            onChange={(e) => handleInputChange(e, i)}
                                                            value={item.operation}
                                                            name="operation"
                                                            />
                                                    </div>
                                                </div> 

                                                
                                                
                                            </div>
                                    ))
                                }
                                <div className="flex justify-between mt-2">
                                    <button 
                                    onClick={() => { 
                                        handleAddClick()
                                        setSpeciesNumber(speciesNumber + 1)
                                    }}
                                    className="justify-right border-2 border-blue-400 rounded-full text-center p-2">
                                        <PlusIcon className='w-5 h-5 text-blue-400'/>
                                    </button>
                                    {
                                        speciesNumber === 1 ? <></> : <button 
                                        onClick={() => { 
                                            handleRemoveClick()
                                            setSpeciesNumber(speciesNumber - 1)
                                        }}
                                        className="justify-right border-2 rounded-full border-red-400 text-center p-2">
                                            <MinusIcon className='w-5 h-5 text-red-400'/>
                                        </button>
                                    }
                                </div>
                                {
                                    reExportLicense ? 
                                    <div>
                                    <div className="w-full border-t pt-3">
                                        <p className="text-back text-md font-semibold">For Re-Exporting only</p>
                                    </div>
                                    <div className="w-full flex space-x-2 mt-2">
                                        <div className="w-1/3">
                                            <div className="mb-4 pr-3 space-y-2">
                                                <label htmlFor="">Country of origin (if re-exporting):</label>
                                                <div
                                                className="w-full bg-white dark:border-gray-800 dark:text-gray-300 py-2 px-3 appearance-none rounded-none  block border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-400 focus:border-blue-400 focus:z-10 sm:text-sm"
                                                >
                                                <CountryDropdown classes='outline-none w-full focus:outline-none focus:ring-blue-400 focus:border-blue-400' 
                                                value={countryOfExport} 
                                                onChange={(e) => setCountryOfExport(e)}/>
                                                </div>
                                            </div>
                                            <div className="mb-4 pr-3 space-y-2">
                                                <label htmlFor="">Country of last re-export:</label>
                                                <div
                                                className="w-full bg-white dark:border-gray-800 dark:text-gray-300 py-2 px-3 appearance-none rounded-none  block border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-400 focus:border-blue-400 focus:z-10 sm:text-sm"
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
                                                className="dark:bg-transparent dark:border-gray-800 dark:text-gray-300 py-2 px-3 appearance-none rounded-none  block w-full border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-400 focus:border-blue-400 focus:z-10 sm:text-sm"
                                                value={Math.random(5)}
                                                />
                                        </div>
                                        <div className="mb-4 pr-3 space-y-2">
                                            <label htmlFor="">Certificate number:</label>
                                            <input
                                                type="text"
                                                autoComplete="name"
                                                required
                                                className="dark:bg-transparent dark:border-gray-800 dark:text-gray-300 py-2 px-3 appearance-none rounded-none  block w-full border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-400 focus:border-blue-400 focus:z-10 sm:text-sm"
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
                                                className="dark:bg-transparent dark:border-gray-800 dark:text-gray-300 py-2 px-3 appearance-none rounded-none  block w-full border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-400 focus:border-blue-400 focus:z-10 sm:text-sm"
                                                placeholder=""
                                                />
                                        </div>
                                        <div className="mb-4 pr-3 space-y-2">
                                            <label htmlFor="">Date:</label>
                                            <input
                                                type="text"
                                                autoComplete="name"
                                                required
                                                className="dark:bg-transparent dark:border-gray-800 dark:text-gray-300 py-2 px-3 appearance-none rounded-none  block w-full border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-400 focus:border-blue-400 focus:z-10 sm:text-sm"
                                                placeholder=""
                                                />
                                        </div>
                                        
                                        </div>
                                        
                                    </div>
                                </div> : <></>
                                }
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
                            <h3 className='text-2xl border-b border-green-500 text-green-500 '>Create a New CITES Application</h3>
                            <p className="mt-2 mb-2">
                                Attach any relevant documents in support of your application:
                            </p>
                            <div style={{ backgroundColor: '#FBF3F3' }} className="p-10">
                                <h3 className="text-gray-700">
                                    Attach supporting documents (5MB or less):
                                </h3>
                                <div className="mb-4 pr-3 space-y-2">
                                    <input
                                        type="file"
                                        required
                                        className="form-select dark:bg-transparent dark:border-gray-800 dark:text-gray-300 mt-2 py-1 px-2 appearance-none rounded-none  block w-full border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-400 focus:border-blue-400 focus:z-10 sm:text-sm"
                                        onChange={(e) => {
                                            setCitesAttachment(e.target.files[0])
                                            console.log(citesAttachment);
                                        }}
                                        />
                                </div>
                            </div>
                            <div className="w-full flex justify-between mt-3">

                                <button 
                                    onClick={() => {setCitesSteps(citesSteps-1)}}
                                    className="flex items-center p-2 bg-gray-700 text-white rounded-none hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 transition duration-150">
                                    <ChevronLeftIcon className='w-5 h-5 text-white'/>
                                    <p>Previous</p>
                                </button>

                                <WizardButton buttonText="Save & proceed" onProcessing={false}/>

                            </div>
                        </div>
                        <div className={citesSteps === 5 ? "block bg-white border p-5" : "hidden bg-white border p-5"}>
                            <h3 className='text-2xl border-b border-green-500 text-green-500 '>Confirm Application Details and submit:</h3>
                            <p className="mt-2 mb-2">
                                Attach any relevant documents in support of your application:
                            </p>
                            <div style={{ borderColor: '#F9D5D5', borderWidth: 1 }} className="p-2">
                                <div className="flex space-x-2">
                                    <h3 className='text-black font-semibold'>APPLICATION TYPE:</h3>
                                    <h3>
                                        { importLicense ? ' CITES IMPORT' : ''}
                                        { exportLicense ? ' CITES EXPORT' : ''}
                                        { reExportLicense ? ' CITES RE-EXPORT' : ''}
                                        { OtherLicense ? ' CITES OTHERS' : ''}
                                    </h3>
                                </div>
                                <div className="flex">
                                    <p className=''>Country of import: {countryOfImport} | Country of Export: {countryOfExport}</p>
                                </div>

                                <div style={{ borderTopColor: '#F9D5D5' }} className="pt-5 border-t border-dotted mt-2 flex w-full.space-x-2">
                                    <div className="w-1/3">
                                       <h3 className="font-semibold">Importer details:</h3>
                                       <p className="mt-">
                                           {importerName}, 
                                           {importerAddress}
                                       </p>
                                    </div>
                                    <div className="w-1/3">
                                        <h3 className="font-semibold">Exporter details:</h3>
                                        <p>
                                           {exporterName}, 
                                           {exporterAddress} 
                                        </p>
                                    </div>
                                    <div className="w-1/3">
                                        <h3 className="font-semibold">Management Authority:</h3>
                                        <p>Department of National Parks and Wildlife, P.O. Box 30131, Lilongwe 3, Malawi.</p>
                                    </div>
                                </div>
                                <div style={{ borderTopColor: '#F9D5D5' }} className="pt-2 border-t border-dotted mt-2">
                                    <h3 className="font-semibold">Purpose of transaction:</h3>
                                    <p className="mt-2">{citesPurposeOfTransaction}</p>
                                </div>
                                <div style={{ borderTopColor: '#F9D5D5' }} className="pt-2 border-t border-dotted mt-2">
                                    <h3 className="font-semibold">Schedule:</h3>
                                    <div className="flex flex-col">
                                        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                            <div className=" overflow-hidden border-b border-gray-200">
                                                <table className="min-w-full divide-y divide-gray-200">
                                                <thead className="bg-gray-50">
                                                    <tr>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-sm font-semibold uppercase"
                                                    >
                                                        sn.
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-sm font-semibold uppercase"
                                                    >
                                                        name
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-sm font-semibold uppercase"
                                                    >
                                                        description
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-sm font-semibold uppercase"
                                                    >
                                                        Appendix No. & Source
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-sm font-semibold uppercase"
                                                    >
                                                        Quality
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-sm font-semibold uppercase"
                                                    >
                                                       Total Exported/Quota
                                                    </th>
                                                    </tr>
                                                </thead>
                                                <tbody className="bg-white divide-y divide-gray-200">
                                                    {inputList.map((input) => (
                                                    <tr key={input.appendixNumber}>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                         {input.index + 1}
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                         {input.scientificName}
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                         {input.specimenDescription}
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                         {getRandomString(12)}
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                         {input.quality}
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                         {input.totalQuotaExported}
                                                        </td>
                                                    </tr>
                                                    ))}
                                                </tbody>
                                                </table>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                </div>
                            </div>
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
                        </form>
                    </div> : 
                    <div>
                        <div className={localsSteps === 1 ? "block bg-white border p-5" : "hidden bg-white border p-5"}>

                            <h3 className='text-2xl border-b border-green-500 text-green-500 '>Create a New Licence Application</h3>
                            <p className="mt-2 mb-2 text-sm">
                                All wildlife and wildlife products in Malawi are regulated by the National Parks and Wildlife Act. The act gives the mandate to the Department of National Parks and Wildlife to grant various permits and licenses pertaining to wildlife and wildlife products. Details of the various licenses and permits can be found here.
                            </p>

                            <div style={{ backgroundColor: '#FBF3F3' }} className="p-10">
                                <h3 className="text-md font-semibold text-gray-700">
                                    Select category of license or permit:
                                </h3>
                                <Listbox value={selectedCategory} onChange={setSelectedCategory}>
                                {({ open }) => (
                                    <>
                                    <div className="relative mt-2">
                                        <Listbox.Button className="relative w-64 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-500 rounded-none pl-3 pr-10 py-2 text-left cursor-default focus:outline-none sm:text-sm">
                                        <span className="flex items-center">
                                            <span className="ml-3 block truncate dark:text-gray-300">{selectedCategory.name}</span>
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
                                        <Listbox.Options className="absolute z-10 mt-1 w-64 bg-white dark:bg-gray-700 shadow-lg max-h-56 rounded-none py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                                            {categories.map((category) => (
                                            <Listbox.Option
                                                key={category.id}
                                                className={({ active }) =>
                                                (
                                                    active ? 'text-white bg-green-400' : 'text-gray-900' +
                                                    'cursor-default select-none relative py-2 pl-3 pr-9'
                                                )
                                                }
                                                value={category}
                                                >

                                                {({ selected, active }) => (
                                                <>
                                                    <div className="flex items-center">
                                                    <span
                                                        className={(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                                                    >
                                                        {category.name}
                                                    </span>
                                                    </div>

                                                    {selected ? (
                                                    <span
                                                        className={(
                                                        active ? 'text-white' : 'text-blue-600',
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

                            <div className="w-full flex justify-between mt-3">

                                <WizardButtonLocal buttonText="Save & proceed" onProcessing={false}/>

                            </div>
                        </div>
                        <div className={localsSteps === 2 ? "block bg-white border p-5" : "hidden bg-white border p-5"}>
                            <div className={selectedCategory.name === 'Bird license' ? "block" : "hidden"}>
                                
                                <h3 className='text-2xl border-b border-green-500 text-green-500 '>Create a New Licence Application</h3>
                                
                                <p className="mt-2 mb-2 text-sm">
                                    All wildlife and wildlife products in Malawi are regulated by the National Parks and Wildlife Act. The act gives the mandate to the Department of National Parks and Wildlife to grant various permits and licenses pertaining to wildlife and wildlife products. Details of the various licenses and permits can be found here.
                                </p>

                                <div style={{ backgroundColor: '#FBF3F3' }} className="p-10">

                                    <div className="w-1/3">
                                    <div className="mb-4 pr-3 space-y-2">
                                    <label htmlFor="">Full name</label>
                                    <input
                                        type="text"
                                        autoComplete="name"
                                        required
                                        className="dark:bg-transparent dark:border-gray-800 dark:text-gray-300 py-2 px-3 appearance-none rounded-none  block w-full border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-400 focus:border-blue-400 focus:z-10 sm:text-sm"
                                        placeholder={name}
                                        onChange={(e) => {setLocalName(e.target.value)}}
                                        />
                                        </div>
                                    </div>
                                    <div className="w-2/3">
                                    <div className="mb-4 pr-3 space-y-2">
                                    <label htmlFor="">Postal address</label>
                                    <input
                                        type="text"
                                        autoComplete="name"
                                        required
                                        className="dark:bg-transparent dark:border-gray-800 dark:text-gray-300 py-2 px-3 appearance-none rounded-none  block w-full border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-400 focus:border-blue-400 focus:z-10 sm:text-sm"
                                        onChange={(e) => {setLocalPostalAddress(e.target.value)}}
                                        />
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full flex justify-between mt-3">

                                    <button 
                                        onClick={() => {setLocalsSteps(localsSteps-1)}}
                                        className="flex items-center p-2 bg-gray-700 text-white rounded-none hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 transition duration-150">
                                        <ChevronLeftIcon className='w-5 h-5 text-white'/>
                                        <p>Previous</p>
                                    </button>

                                    <WizardButtonLocal buttonText="Save & proceed" onProcessing={false}/>

                                </div>
                            </div>
                            <div className={selectedCategory.name === 'Animal in captivity license' ? "block" : "hidden"}>
                                *Step 2 - Animal in captivity license
                                <div className="w-full flex justify-between mt-3">

                                    <button 
                                        onClick={() => {setLocalsSteps(localsSteps-1)}}
                                        className="flex items-center p-2 bg-gray-700 text-white rounded-none hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 transition duration-150">
                                        <ChevronLeftIcon className='w-5 h-5 text-white'/>
                                        <p>Previous</p>
                                    </button>

                                    <WizardButtonLocal buttonText="Save & proceed" onProcessing={false}/>

                                </div>
                            </div>
                            <div className={selectedCategory.name === 'Game farming license' ? "block" : "hidden"}>
                                *Step 2 - Game farming license
                                <div className="w-full flex justify-between mt-3">

                                    <button 
                                        onClick={() => {setLocalsSteps(localsSteps-1)}}
                                        className="flex items-center p-2 bg-gray-700 text-white rounded-none hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 transition duration-150">
                                        <ChevronLeftIcon className='w-5 h-5 text-white'/>
                                        <p>Previous</p>
                                    </button>

                                    <WizardButtonLocal buttonText="Save & proceed" onProcessing={false}/>

                                </div>
                            </div>
                            <div className={selectedCategory.name === 'Professional hunter license' ? "block" : "hidden"}>
                                *Step 2 - Professional hunter license
                                <div className="w-full flex justify-between mt-3">

                                    <button 
                                        onClick={() => {setLocalsSteps(localsSteps-1)}}
                                        className="flex items-center p-2 bg-gray-700 text-white rounded-none hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 transition duration-150">
                                        <ChevronLeftIcon className='w-5 h-5 text-white'/>
                                        <p>Previous</p>
                                    </button>

                                    <WizardButtonLocal buttonText="Save & proceed" onProcessing={false}/>

                                </div>
                            </div>
                        </div>
                        <div className={localsSteps === 3 ? "block bg-white border p-5" : "hidden bg-white border p-5"}>
                            <div className={selectedCategory.name === 'Bird license' ? "block" : "hidden"}>
                                
                                <h3 className='text-2xl border-b border-green-500 text-green-500 '>Create a New Licence Application</h3>
                                
                                <p className="mt-2 mb-2 text-sm">
                                   Note that a license cannot be issued unless the applicant has firearms appropriate for the species to be hunted and has valid firearms licenses for the said firearms. This condition does not apply where a special license is sought to take or hunt species that do require usage of a firearm e.g. insects, small birds. Provide details of licensed firearms in your possession:
                                </p>

                                <div style={{ backgroundColor: '#FBF3F3' }} className="p-10">
                                    {
                                        Array(fireArmsNumber).fill(fireArmsNumber).map((item, index) => (
                                            <div key={item.item} className="w-full flex space-x-3">
                                        <div className="w-1/2">
                                            <h3>Type of firearm:</h3>
                                            <div className='flex space-x-2 mt-2'>
                                                <p>{item.index}</p>
                                                    <div className="mb-4 space-y-2 w-full">
                                                        <input
                                                            type="text"
                                                            autoComplete="name"
                                                            required
                                                            className="px-3 py-1 dark:bg-transparent dark:border-gray-800 dark:text-gray-300 appearance-none rounded-none  block w-full border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-400 focus:border-blue-400 focus:z-10 sm:text-sm"
                                                            onChange={(e) => handleFireArmChange(e, index)}
                                                            value={item.fireArmType}
                                                            />
                                                    </div>
                                                </div>
                                        </div>
                                        <div className="w-1/2">
                                            <h3>Firearm License No.</h3>
                                            <div className='flex space-x-2 mt-2'>
                                                    <div className="mb-4 space-y-2 w-full">
                                                        <input
                                                            type="text"
                                                            required
                                                            className="px-3 py-1 dark:bg-transparent dark:border-gray-800 dark:text-gray-300 appearance-none rounded-none  block w-full border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-400 focus:border-blue-400 focus:z-10 sm:text-sm"
                                                            onChange={(e) => handleFireArmChange(e, index)}
                                                            value={item.fireArmLicenseNumber}
                                                            />
                                                    </div>
                                                    <div className="flex space-x-2">
                                                        <Link to="#" onClick={() => {
                                                            handleAddFirearm()
                                                            setFireArmsNumber(fireArmsNumber + 1)
                                                            }}><PlusCircleIcon className="w-4 h-4 text-blue-400"/></Link>
                                                        <Link to="#" onClick={() => {
                                                            handleRemoveFirearm()
                                                            setFireArmsNumber(fireArmsNumber - 1)}
                                                            }><MinusCircleIcon className="w-4 h-4 text-red-400"/></Link>
                                                    </div>
                                                </div>
                                        </div>
                                    </div>
                                        ))
                                    }
                                </div>

                                
                            </div>
                            <div className="w-full flex justify-between mt-3">

                                <button 
                                    onClick={() => {setLocalsSteps(localsSteps-1)}}
                                    className="flex items-center p-2 bg-gray-700 text-white rounded-none hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 transition duration-150">
                                    <ChevronLeftIcon className='w-5 h-5 text-white'/>
                                    <p>Previous</p>
                                </button>

                                <WizardButtonLocal buttonText="Save & proceed" onProcessing={false}/>

                            </div>
                        </div>
                        <div className={localsSteps === 4 ? "block bg-white border p-5" : "hidden bg-white border p-5"}>
                            <div className={selectedCategory.name === 'Bird license' ? "block" : "hidden"}>
                                
                                <h3 className='text-2xl border-b border-green-500 text-green-500 '>Create a New Licence Application</h3>
                                
                                <p className="mt-2 mb-2 text-sm">
                                   Specify the area for which you are applying the license and details of species (Species are required for hunting and special licenses only)
                                </p>
                                <div style={{ backgroundColor: '#FBF3F3' }} className="p-10">
                                    <div>
                                        <h3>Area for which you are applying:</h3>
                                        <div className="mt-2 border-b border-dotted pb-4 space-y-2 w-full">
                                            <input
                                                type="text"
                                                autoComplete="name"
                                                required
                                                className="px-3 py-1 dark:bg-transparent dark:border-gray-800 dark:text-gray-300 appearance-none rounded-none  block w-full border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-400 focus:border-blue-400 focus:z-10 sm:text-sm"
                                                placeholder=""
                                                value={areaOfApplication}
                                                onChange={(e) => {setAreaOfApplication(e.target.value)}}
                                                />
                                        </div>
                                    </div>
                                    <div>
                                        <h3>Specify names and numbers of species (for hunting and special licenses only). Click on + to add more.</h3>
                                        {
                                        Array(localSpeciesNumber).fill(localSpeciesNumber).map((item, index) => (
                                            <div key={item.item} className="w-full flex space-x-3">
                                        <div className="w-1/2">
                                            <h3>Species name:</h3>
                                            <div className='flex space-x-2 mt-2'>
                                                <p>{item.index}</p>
                                                    <div className="mb-4 space-y-2 w-full">
                                                        <input
                                                            type="text"
                                                            required
                                                            className="px-3 py-1 dark:bg-transparent dark:border-gray-800 dark:text-gray-300 appearance-none rounded-none  block w-full border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-400 focus:border-blue-400 focus:z-10 sm:text-sm"
                                                            onChange={(e) => handleLocalSpeciesChange(e, index)}
                                                            value={item.name}
                                                            />
                                                    </div>
                                                </div>
                                        </div>
                                        <div className="w-1/2">
                                            <h3>Number applied for:</h3>
                                            <div className='flex space-x-2 mt-2'>
                                                    <div className="mb-4 space-y-2 w-full">
                                                        <input
                                                            type="text"
                                                            required
                                                            className="form-input px-3 py-1 dark:bg-transparent dark:border-gray-800 dark:text-gray-300 appearance-none rounded-none  block w-full border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-400 focus:border-blue-400 focus:z-10 sm:text-sm"
                                                            onChange={(e) => handleLocalSpeciesChange(e, index)}
                                                            value={item.number}
                                                            />
                                                    </div>
                                                    <div className="flex space-x-2">
                                                        <Link to="#" onClick={() => {
                                                            handleAddLocalSpecies()
                                                            setLocalSpeciesNumber(localSpeciesNumber + 1)
                                                        }
                                                            }><PlusCircleIcon className="w-4 h-4 text-blue-400"/></Link>
                                                        <Link to="#" onClick={() => {
                                                            handleRemoveLocalSpecies()
                                                            setLocalSpeciesNumber(localSpeciesNumber - 1)}
                                                            }><MinusCircleIcon className="w-4 h-4 text-red-400"/></Link>
                                                    </div>
                                                </div>
                                        </div>
                                    </div>
                                        ))
                                    }
                                    </div>
                                </div>
                            </div>
                            <div className="w-full flex justify-between mt-3">

                                <button 
                                    onClick={() => {setLocalsSteps(localsSteps-1)}}
                                    className="flex items-center p-2 bg-gray-700 text-white rounded-none hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 transition duration-150">
                                    <ChevronLeftIcon className='w-5 h-5 text-white'/>
                                    <p>Previous</p>
                                </button>

                                <WizardButtonLocal buttonText="Save & proceed" onProcessing={false}/>

                            </div>
                        </div>
                        <div className={localsSteps === 5 ? "block bg-white border p-5" : "hidden bg-white border p-5"}>

                            <h3 className='text-2xl border-b border-green-500 text-green-500 '>Create a New Licence Application</h3>
                                
                            <p className="mt-2 mb-2 text-sm">
                                Attach any relevant documents in support of your application:
                            </p>

                            <div className={selectedCategory.name === 'Bird license' ? "block" : "hidden"}>
                                <div style={{ backgroundColor: '#FBF3F3' }} className="p-10">
                                <h3 className="text-gray-700">
                                    Attach supporting documents (5MB or less):
                                </h3>
                                <div className="mb-4 pr-3 space-y-2">
                                    <input
                                        type="file"
                                        required
                                        className="dark:bg-transparent dark:border-gray-800 dark:text-gray-300 mt-2 py-1 px-2 appearance-none rounded-none  block w-full border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-400 focus:border-blue-400 focus:z-10 sm:text-sm"
                                        // value={localAttachment}
                                        // onChange={(e) => {setLocalAttachment(e.target.files[0])}}
                                        />
                                </div>
                            </div>
                            </div>
                            <div className="w-full flex justify-between mt-3">

                                <button 
                                    onClick={() => {setLocalsSteps(localsSteps-1)}}
                                    className="flex items-center p-2 bg-gray-700 text-white rounded-none hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 transition duration-150">
                                    <ChevronLeftIcon className='w-5 h-5 text-white'/>
                                    <p>Previous</p>
                                </button>

                                <WizardButtonLocal buttonText="Save & proceed" onProcessing={false}/>

                            </div>
                        </div>
                        <div className={localsSteps === 6 ? "block bg-white border p-5" : "hidden bg-white border p-5"}>
                            <h3 className='text-2xl border-b border-green-500 text-green-500 '>Create a New Licence Application</h3>
                                
                            <p className="mt-2 mb-2 text-sm">
                                Confirm application details and submit:
                            </p>
                            <div className={selectedCategory.name === 'Bird license' ? "block" : "hidden"}>
                                <div style={{ borderColor: '#F9D5D5', borderWidth: 1 }} className="p-2">
                                <div className="flex space-x-2">
                                    <h3 className='text-black font-semibold'>APPLICATION TYPE:</h3>
                                    <h3 className='uppercase'> {selectedCategory.name}</h3>
                                </div>

                                <div style={{ borderTopColor: '#F9D5D5' }} className="pt-5 border-t border-dotted mt-2 flex w-full.space-x-2">
                                    <div className="w-1/3">
                                       <h3 className="font-semibold">Importer details</h3>
                                       <p className="mt-">
                                           {localName},
                                           { localPostalAddress}
                                       </p>
                                    </div>
                                    
                                    <div className="w-1/3">
                                        <h3 className="font-semibold">Postal address</h3>
                                        <p>Department of National Parks and Wildlife, P.O. Box 30131, Lilongwe 3, Malawi.</p>
                                    </div>

                                    <div className="w-1/3">
                                        <h3 className="font-semibold">Identification number</h3>
                                        <p>National Id Number: *****WE1</p>
                                    </div>
                                </div>
                                <div style={{ borderTopColor: '#F9D5D5' }} className="pt-2 border-t border-dotted mt-2">
                                    <h3 className="font-semibold">Firearms and licenses:</h3>
                                    {
                                        fireArmsList.map((item, index) => (
                                            <p key={index} className="mt-2">{item.name} [License no: {item.number}]</p>
                                        ))
                                    }
                                </div>
                                <div style={{ borderTopColor: '#F9D5D5' }} className="pt-2 border-t border-dotted mt-2">
                                    <h3 className="font-semibold">Schedule:</h3>
                                    <div className="flex flex-col">
                                        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                            <div className=" overflow-hidden border-b border-gray-200">
                                                <table className="min-w-full divide-y divide-gray-200">
                                                <thead className="bg-gray-50">
                                                    <tr>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-sm font-semibold uppercase"
                                                    >
                                                        sn.
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-sm font-semibold uppercase"
                                                    >
                                                        species name
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-sm font-semibold uppercase"
                                                    >
                                                        number applied for:
                                                    </th>
                                                    
                                                    </tr>
                                                </thead>
                                                <tbody className="bg-white divide-y divide-gray-200">
                                                    {localSpeciesList.map((specie, index) => (
                                                    <tr key={specie.name}>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="flex items-center">
                                                            <div className="flex-shrink-0 h-10 w-10">
                                                             {index}
                                                            </div>
                                                        </div>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            <div className="text-sm text-gray-900">{specie.name}</div>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            <div className="text-sm text-gray-900">{specie.number}</div>
                                                        </td>
                                                    </tr>
                                                    ))}
                                                </tbody>
                                                </table>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                </div>
                            </div>
                            </div>
                            <div className="w-full flex justify-between mt-3">

                                <button 
                                    onClick={() => {setLocalsSteps(localsSteps-1)}}
                                    className="flex items-center p-2 bg-gray-700 text-white rounded-none hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 transition duration-150">
                                    <ChevronLeftIcon className='w-5 h-5 text-white'/>
                                    <p>Previous</p>
                                </button>

                                <WizardButtonLocal buttonText="Finish" onProcessing={false}/>

                            </div>
                        </div>
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
                            No applications available
                        </div>
                        <div className={permitTabSelected === 2 ? "block" : "hidden"}>
                            No applications available
                        </div>
                        <div className={permitTabSelected === 3 ? "block" : "hidden"}>
                            No applications available
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
                                            (
                                                active ? 'text-white bg-green-600' : 'text-gray-900' +
                                                'cursor-default select-none relative py-2 pl-3 pr-9'
                                            )
                                            }
                                            value={person}
                                        >
                                            {({ selected, active }) => (
                                            <>
                                                <div className="flex items-center">
                                                <span
                                                    className={(selected ? 'font-semibold' : 'font-normal', 'ml-3 block')}
                                                >
                                                    {person.name}
                                                </span>
                                                </div>

                                                {selected ? (
                                                <span
                                                    className={(
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
                            No applications available
                        </div>
                        <div className={permitTabSelected === 5 ? "block" : "hidden"}>
                            No applications available
                        </div>
                        <div className={permitTabSelected === 6 ? "block" : "hidden"}>
                            No applications available
                        </div>
                        </div>
                    </div>
                </div>
                <div className={selected === "My account" ? "block p-5" : "hidden p-5"} id="link2">
                    <div className="w-full sm:flex sm:space-x-4">
                        <div className="sm:w-2/5 ">
                            <div className="bg-white border p-10 flex flex-col items-center">
                               <img className='justify-center w-40 h-40 rounded-full object-cover' src={avatar !== '' ? "http://localhost:8000/storage/profiles/" + avatar : 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIHBhETEhIQDxASEBESERAQGBsPEBUSFREiFhUVFRMYKCggGBolGxUTITEhJSktLi4uFx8zODMsNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAAAwQFAgEGB//EADYQAQABAQQGCAYBBAMAAAAAAAABAgMEESEFEzFRUpESNEFxcoGh0RUjYWOxwRQyQvDxIpLh/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AP0bW1cVXOTW1cVXOXIDrW1cVXOTW1cVXOXIDrW1cVXOTW1cVXOXIDrW1cVXOTW1cVXOXIDrW1cVXOTW1cVXOXIDrW1cVXOTW1cVXOXIDrW1cVXOTW1cVXOXIDrW1cVXOTW1cVXOXIDrW1cVXOTW1cVXOXIDrW1cVXOTW1cVXOXIDrW1cVXOTW1cVXOXIDrW1cVXOTW1cVXOXIDrW1cVXOTW1cVXOXIDrW1cVXOTW1cVXOXIDrW1cVXORyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABEdKcs+7NYs7lXX2Yd+QK40bPRnFV/195TxdrOwjOI76px/IMmiibScome7NYs9H11bcKe+f1C7Xf6LOMsZ+lMZK1ppOZ/ppiO/MEtGjIiM6pnuyZ1pRq7SY3TMNPR95m3mYqwxjOJ2Kuk6OjeceKIn9ewKgAAAAAAAAAAAAAAAAluthN4tMInDCMZloWejqKduNXpHoDKS2d1rtNlM985R6tayiiivCnoxO6NqYGZZ6Mmf6qojuzWaLjZ2cYzn9apyWcY3+qGu7UVznGPfVM/sHNV6s7CMImO6mFe00nw0+dXtCx/DsuGOc+5/DsuGOc+4M+0vtdfbh3ZObvd6rzXOHnVLS/h2XDHOfdNZUU2NOFOERt24gzbfR9VnRjExVhtjZKm+gxjfCv8Aw7LhjnPuDPuFfQvVO6cp8/8A3Bc0rR0rGJ3T6T/kJYulnE7I5z7prSKbSiYnCYnaDAGzFys5/t9Z91XSF2psbKJpjDPDbj2fUFAAAAAAAAAAAAAAFjR9fQvUfXLns9VzSuOojCcsc+WTMpq6NUTunFtXmnXXScO2nGPyDO0Z1uO6fwn0vOVO7P8ASDRnW47p/CbS+2jz/QM4egPB6A8HoDxLYXeq3n/jGzt2QjbGjsP4kYb5x78f9Azbe6VWFOMxGG+M0DftsNTVjswnHkwAT3KcL3T3r+lerR4o/Es+59ao8TQ0r1aPFH4kGUAAAAAAAAAAAAAA2NHV9O6x9MmOv6Jrwqqp3xEx5ZT+gc3OjV6RmN3S5djvS+2jz/SeaOjpKJ30Tzj/ACEGl9tHn+gZ6zcrr/ImccYpjdvVqY6VURG2cobt3stTYxTu29/aDJvV1m7zvp7J99yB9DMdKMJziexl3u4TRnTnHbHbHvAKQuaPuuumZqj/AIxlHZjLu9aP6OdGccPb5bwUEtheKrCcp74nYi2AJ7e91W9OE4RG6MoV3oCW59ao8TQ0r1aPFH4ln3PrVHiaGlerR4o/EgygAAAAAAAAAAAAAE1yr1d5pn64T55ITYDfqoxrid2PrH+lDS+2jz/S9Y16yypnfESo6W20ef6B5ouw6VU1T2ZR372kiutPQu1Phj1zSgAAAAr3m6U2/wBKt8ftlW9hVYVZx3T2S3XldEV04TGMbpB8+L16uE0Z0Zxu7Y91EEtz61R4mhpXq0eKPxLPufWqPE0NK9WjxR+JBlAAAAAAAAAAAAAAAA1tF19K7Ybpw8tvuh0v/Z5otG20WVrMTOETHbsxj/JaNVrRXGc0T3zEgpWOkehZRE044RhjEu/ikcE80/yvt+h8r7foCD4pHBPM+KRwTzT/ACvt+h8r7foCD4pHBPM+KRwTzT/K+36Hyvt+gIPikcE8z4pHBPNP8r7fofK+36Ag+KRwzzVb1b02+cUzTVvx297R+V9v0Plfb9AZlz61R4l/SvVo8UfiU1NdnROU0R3YQq6Ttaa7GIiYmeljln2AzgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/9k=' } alt="user"/>
                               <h2 className='text-md mt-2 text-black text-lg font-semibold'>{name}</h2>
                               <p className='text-gray-500'>{email}</p>
                               <button className="w-full border border-gray-500 py-1 mt-2 transition duration-150 hover:bg-gray-500 hover:text-white text-gray-500">
                                   Preview your profile
                               </button>
                               <p className="text-sm mt-2">
                                   You have not verified your email address, <button className='text-blue-400 transition duration-150 hover:text-blue-500'>click here</button>
                               </p>
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
                                       <p className='font-semibold text-sm'>{moment(membership).fromNow()}</p>
                                   </div>
                               </div>
                            </div>

                            <div className='bg-white border mt-2 p-10'>
                                <div className="flex items-center">
                                    <div className="-mr-5 bg-gray-200 rounded-full items-center p-5 border-gray-100 border-2">
                                        <DocumentSearchIcon className='w-10 h-10 text-gray-400'/>
                                    </div>
                                    <div className="-mr-5 bg-gray-200 rounded-full items-center p-5 border-gray-100 border-2">
                                        <SupportIcon className='w-10 h-10 text-gray-400'/>
                                    </div>
                                    <div className="bg-gray-200 rounded-full items-center p-5 border-gray-100 border-2">
                                        <CashIcon className='w-10 h-10 text-gray-400'/>
                                    </div>
                                </div>
                                <h3 className='mt-2 font-semibold'>Learn to understand DNPW E-prtmit</h3>
                                <p className="mt-2 mb-2">Get to know about licenses and permits, prices, wildlife act and more</p>
                                <button className="w-full text-white bg-green-400 py-2 px-3 focus:ring-2 focus:ring-green-500 focus:ring-offset-2">Start learning</button>
                            </div>
                        </div>
                        <div className="sm:w-3/5 bg-white border">
                            <div className="bg-white border pt-10 pl-10 pr-10 flex space-x-6">
                                <button className='uppercase pb-3 text-sm text-gray-500'>Personal information</button>
                                <button className='uppercase pb-3 text-sm border-b-2 border-green-500 bottom-0 text-black'>Account</button>
                            </div>
                            
                            <div className='p-5'>
                                <div className='flex justify-between border-b pb-2 text-sm'>
                                    <h3 className='font-semibold uppercase'>Username</h3>
                                    <p>{name}</p>
                                </div>
                                <div className='flex justify-between border-b pb-2 text-sm mt-1'>
                                    <h3 className='font-semibold uppercase'>Email address</h3>
                                    <p>{email}</p>
                                </div>
                                <div className='flex justify-between border-b pb-2 text-sm mt-1'>
                                    <h3 className='font-semibold uppercase'>Password</h3>
                                    <p>***********</p>
                                </div>
                                <button className="w-full text-white bg-green-400 py-2 px-3 focus:ring-2 focus:ring-green-500 focus:ring-offset-1">Change password</button>
                                <DeactivateAccount/>
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
