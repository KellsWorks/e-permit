import { LocationMarkerIcon, MailIcon, PhoneIcon } from '@heroicons/react/outline'
import ChangeProfile from '../../components/ChangeProfile'

export default function UserProfile() {

    return (
        <div className="sm:px-10 px-5 py-5 sm:py-10 w-full flex space-x-2">
            
            <div className="w-3/5">
                <div className="rounded-sm border p-10 flex">
                <ChangeProfile/>
                <div>
                    <h3 className='ml-5 mb-2 text-2xl font-semibold'>Good morning, Kells Kamuzu</h3>
                    <div className="ml-5 flex space-x-2">
                        <div className="flex space-x-2 items-center">
                            <LocationMarkerIcon className='w-4 h-4 text-gray-400'/>
                            <p>Malawi</p>
                        </div>
                        <div className="flex space-x-2 items-center">
                            <PhoneIcon className='w-4 h-4 text-gray-400'/>
                            <p>+265 880 29 56 92</p>
                        </div>
                        <div className="flex space-x-2 items-center">
                            <MailIcon className='w-4 h-4 text-gray-400'/>
                            <p>kchidothi@outlook.com</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="rounded-sm mt-10 p-5 border">
                <div className="flex space-x-6 border-b-2 w-full m-5">
                    <button className="border-b-2 font-semibold border-green-500 text-green-500">
                        General
                    </button>
                    <button>
                        Security
                    </button>
                    <button className='flex space-x-1 items-center'>
                        <p>Permits & licenses</p> 
                        <div className="text-xs rounded-full w-4 text-center bg-yellow-500 text-white">
                            4
                        </div>
                    </button>
                </div>
            </div>
            </div>

            <div className="w-2/5 border p-10">
                <h3 className="text-lg text-gray-700 font-semibold">
                    Notifications
                </h3>
            </div>
        </div>
    )
}
