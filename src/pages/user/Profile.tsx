import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, DocumentIcon, HomeIcon, PresentationChartBarIcon, SaveAsIcon, SelectorIcon, SupportIcon, UserCircleIcon } from '@heroicons/react/outline'
import { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'

const tabs = [
    {
        title: 'Home',
        icon: <HomeIcon className='w-4 h-4 mr-2'/>
    },
    {
        title: 'Applications',
        icon: <PresentationChartBarIcon className='w-4 h-4 mr-2'/>
    },
    {
        title: 'Licenses & permits',
        icon: <SaveAsIcon className='w-4 h-4 mr-2'/>
    },
    {
        title: 'My account',
        icon: <UserCircleIcon className='w-4 h-4 mr-2'/>
    },
    {
        title: 'Help',
        icon: <SupportIcon className='w-4 h-4 mr-2'/>
    }
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

    const active = 'font-bold text-green-500'

    return (
        <div className="w-full flex bg-gray-100">

            <div className="w-80 pl-10 pr-10 pt-10 pb-80 bg-white border-r">
                <div className='flex flex-col space-y-4 text-md'>
                    {
                        tabs.map((tab) => (
                            <Link 
                                    className={tab.title === selected ? 'flex space-x-4 hover:text-green-500 transition duration-150 items-center' + active : 'flex space-x-4 hover:text-green-500 transition duration-150 items-center'}
                                    to="#"
                                    onClick={() => {
                                        setSelected(tab.title)
                                    }}
                                    >
                                    {tab.icon}
                                    {tab.title}
                                </Link>
                        ))
                    }
                </div>
            </div>

            <div className="w-full p-5">
                <div className={selected === "Home" ? "block" : "hidden"} id="link2">
                    <h3 className="border-b border-green-500 pb-3 text-gray-600 text-2xl">
                        Hello, Kelvin Chidothi
                    </h3>
                    <p className="mt-2 mb-2 text-sm border-b pb-2">
                        The DNPW E-permit portal is the official permit and license application platform for the Department of National Parks and Wildlife of the Government of Malawi. You can apply for all licenses including import, export and re-export permits under the international CITES treaty. 
                    </p>
                    <h3 className="uppercase text-green-500 mb-2 mt-2">
                        CREATE A NEW LICENSE APPLICATION
                    </h3>
                    <div className="p-3 flex bg-white border">
                        <p className="text-sm">
                            Create a new license or permit application as provided for under the Wildlife Regulation Legislation for Malawi, incliding bird, hunting, game and trophy licenses.
                        </p>
                        <button className="bg-green-500 text-sm py-1 px-2 text-white flex items-center">
                            <DocumentIcon className='w-4 h-4'/>
                            <span>CREATE LICENSE APPLICATION</span>
                        </button>
                    </div>
                    <h3 className="uppercase text-green-500 mb-2 mt-2">
                        CREATE A CITES IMPORT, EXPORT OR RE-EXPORT  APPLICATION
                    </h3>
                    <div className="p-3 flex bg-white border">
                        <p className="text-sm">
                            Create a new import, export or re-export license for wildlife or wildlife products as provided for in the international CITES treaty.
                        </p>
                        <button className="bg-green-500 text-sm py-1 px-2 text-white flex items-center">
                            <DocumentIcon className='w-4 h-4'/>
                            <span>CREATE CITES APPLICATION</span>
                        </button>
                    </div>
                </div>
                <div className={selected === "Applications" ? "block" : "hidden"} id="link2">
                    <h3 className="border-b pb-2 text-gray-600 text-2xl border-green-500 truncate text-md">
                        Create a New CITES Application
                    </h3>
                    <p className="mt-2 mb-2">
                        All international trade in wildlife and wildlife products is regulated by the Convention on International Trade in Endangered Species of Wild Fauna and Flora (CITES) Treaty, to which Malawi is party. In order to fulfil its obligations under the CITES Treaty, Malawi issues permits to allow applicants to import, export and re-export wildlife products. Note that this portal does not offer applications for CITES permits and all international import/export applications must be made directly through the DNPW. 
                    </p>
                    <div className="p-10 mt-2 bg-white border">
                        <h1>Select type of CITES Application</h1>
                        <div className="flex flex-col">
                            <label className="inline-flex items-center mt-3 text-sm">
                                <input type="radio" className="form-radio h-5 w-5"/><span className="ml-2 text-gray-700">Import license</span>
                            </label>

                            <label className="inline-flex items-center mt-3 text-sm">
                                <input type="radio" className="form-radio h-5 w-5 "/><span className="ml-2 text-gray-700">Export license</span>
                            </label>

                            <label className="inline-flex items-center mt-3 text-sm">
                                <input type="radio" className="form-radio h-5 w-5"/><span className="ml-2 text-gray-700">Re-export license</span>
                            </label>

                            <label className="inline-flex items-center mt-3 text-sm">
                                <input type="radio" className="form-radio h-5 w-5"/><span className="ml-2 text-gray-700">Other</span>
                            </label>
                        </div>
                    </div>
                </div>
                <div className={selected === "Licenses & permits" ? "block" : "hidden"} id="link2">
                    <h3 className="border-b pb-2 text-gray-600 text-2xl border-green-500">
                        Licenses & permits
                    </h3>
                    <div className="flex justify-between pt-2 pb-2">
                        <div className="border-b mt-3 pb-2 flex space-x-8">
                            <button className="uppercase text-sm text-gray-500 transition duration-150 hover:text-green-500">
                                ACTIVE
                            </button>
                            <button className="uppercase text-sm text-gray-500 transition duration-150 hover:text-green-500">
                                Approval pending
                            </button>
                            <button className="uppercase text-sm text-gray-500 transition duration-150 hover:text-green-500">
                                Requires modification
                            </button>
                            <button className="uppercase text-sm text-black flex space-x-2">
                                <span>Draft</span>
                                <div className="w-5 h-5 rounded-full text-white bg-green-500 text-center text-sm">
                                    4
                                </div>
                            </button>
                            <button className="uppercase text-sm text-gray-500 transition duration-150 hover:text-green-500">
                                Denied
                            </button>
                            <button className="uppercase text-sm text-gray-500 transition duration-150 hover:text-green-500">
                                Paused
                            </button>
                        </div>
                        <div>
                            <button className="py-2 px-4 bg-green-500 text-white uppercase text-xs font-semibold">
                                Create a new application
                            </button>
                    </div>

                    
                    </div>

                    <div className="bg-white border p-5">
                        <div className="flex justify-between">
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
                    
                </div>
                <div className={selected === "My account" ? "block" : "hidden"} id="link2">
                    <div className="w-full flex space-x-4">
                        <div className="w-2/5 bg-white border p-10">
                            <div className="flex flex-col items-center">
                               <img className='justify-center w-40 h-40 rounded-full object-cover' src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="user" />
                               <p className='text-md mt-2 text-black text-lg font-semibold'>Kelvin Chidothi</p>
                            </div>
                        </div>
                        <div className="w-3/5">
                            <div className="bg-white border pt-10 pl-10 pr-10 flex space-x-6">
                                <button className='uppercase pb-3 text-sm text-gray-500'>Active applications</button>
                                <button className='uppercase pb-3 text-sm text-gray-500 border-b-2 border-green-500 bottom-0'>Drafts</button>
                            </div>
                            <div className="mt-10 flex space-x-6">
                                <div className="bg-white border p-5">
                                    <img className='w-40 h-40' src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIHBhETEhIQDxASEBESERAQGBsPEBUSFREiFhUVFRMYKCggGBolGxUTITEhJSktLi4uFx8zODMsNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAAAwQFAgEGB//EADYQAQABAQQGCAYBBAMAAAAAAAABAgMEESEFEzFRUpESNEFxcoGh0RUjYWOxwRQyQvDxIpLh/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AP0bW1cVXOTW1cVXOXIDrW1cVXOTW1cVXOXIDrW1cVXOTW1cVXOXIDrW1cVXOTW1cVXOXIDrW1cVXOTW1cVXOXIDrW1cVXOTW1cVXOXIDrW1cVXOTW1cVXOXIDrW1cVXOTW1cVXOXIDrW1cVXOTW1cVXOXIDrW1cVXOTW1cVXOXIDrW1cVXOTW1cVXOXIDrW1cVXOTW1cVXOXIDrW1cVXOTW1cVXOXIDrW1cVXOTW1cVXOXIDrW1cVXORyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABEdKcs+7NYs7lXX2Yd+QK40bPRnFV/195TxdrOwjOI76px/IMmiibScome7NYs9H11bcKe+f1C7Xf6LOMsZ+lMZK1ppOZ/ppiO/MEtGjIiM6pnuyZ1pRq7SY3TMNPR95m3mYqwxjOJ2Kuk6OjeceKIn9ewKgAAAAAAAAAAAAAAAAluthN4tMInDCMZloWejqKduNXpHoDKS2d1rtNlM985R6tayiiivCnoxO6NqYGZZ6Mmf6qojuzWaLjZ2cYzn9apyWcY3+qGu7UVznGPfVM/sHNV6s7CMImO6mFe00nw0+dXtCx/DsuGOc+5/DsuGOc+4M+0vtdfbh3ZObvd6rzXOHnVLS/h2XDHOfdNZUU2NOFOERt24gzbfR9VnRjExVhtjZKm+gxjfCv8Aw7LhjnPuDPuFfQvVO6cp8/8A3Bc0rR0rGJ3T6T/kJYulnE7I5z7prSKbSiYnCYnaDAGzFys5/t9Z91XSF2psbKJpjDPDbj2fUFAAAAAAAAAAAAAAFjR9fQvUfXLns9VzSuOojCcsc+WTMpq6NUTunFtXmnXXScO2nGPyDO0Z1uO6fwn0vOVO7P8ASDRnW47p/CbS+2jz/QM4egPB6A8HoDxLYXeq3n/jGzt2QjbGjsP4kYb5x78f9Azbe6VWFOMxGG+M0DftsNTVjswnHkwAT3KcL3T3r+lerR4o/Es+59ao8TQ0r1aPFH4kGUAAAAAAAAAAAAAA2NHV9O6x9MmOv6Jrwqqp3xEx5ZT+gc3OjV6RmN3S5djvS+2jz/SeaOjpKJ30Tzj/ACEGl9tHn+gZ6zcrr/ImccYpjdvVqY6VURG2cobt3stTYxTu29/aDJvV1m7zvp7J99yB9DMdKMJziexl3u4TRnTnHbHbHvAKQuaPuuumZqj/AIxlHZjLu9aP6OdGccPb5bwUEtheKrCcp74nYi2AJ7e91W9OE4RG6MoV3oCW59ao8TQ0r1aPFH4ln3PrVHiaGlerR4o/EgygAAAAAAAAAAAAAE1yr1d5pn64T55ITYDfqoxrid2PrH+lDS+2jz/S9Y16yypnfESo6W20ef6B5ouw6VU1T2ZR372kiutPQu1Phj1zSgAAAAr3m6U2/wBKt8ftlW9hVYVZx3T2S3XldEV04TGMbpB8+L16uE0Z0Zxu7Y91EEtz61R4mhpXq0eKPxLPufWqPE0NK9WjxR+JBlAAAAAAAAAAAAAAAA1tF19K7Ybpw8tvuh0v/Z5otG20WVrMTOETHbsxj/JaNVrRXGc0T3zEgpWOkehZRE044RhjEu/ikcE80/yvt+h8r7foCD4pHBPM+KRwTzT/ACvt+h8r7foCD4pHBPM+KRwTzT/K+36Hyvt+gIPikcE8z4pHBPNP8r7fofK+36Ag+KRwzzVb1b02+cUzTVvx297R+V9v0Plfb9AZlz61R4l/SvVo8UfiU1NdnROU0R3YQq6Ttaa7GIiYmeljln2AzgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/9k=" alt="placeholder" />
                                    <div className="justify-between flex mt-3">
                                        <p className='text-sm text-gray-500'>Re-export license </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={selected === "Help" ? "block" : "hidden"} id="link2">
                    Help tab
                </div>
            </div>

        </div>
    )
}
