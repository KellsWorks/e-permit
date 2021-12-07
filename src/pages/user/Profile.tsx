import { MapIcon } from '@heroicons/react/outline'
import User from '../../assets/avatar.jpg'
export default function Profile() {

    return (
        <div className="sm:px-24 px-5 py-5 sm:py-10">
            <div className="rounded-sm shadow-md mt-10 p-10 hover:shadow-lg flex">
                <img src={User} alt="user" className="rounded-full object-cover w-16 h-16" />
                <div>
                    <h3 className='ml-5 mb-2'>Good morning, Kells Kamuzu</h3>
                    <div className="ml-5 flex space-x-2">
                        <div className="flex space-x-1 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-500" viewBox="0 0 512 512"><title>Pin</title><circle cx="256" cy="96" r="64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path d="M272 164a9 9 0 00-9-9h-14a9 9 0 00-9 9v293.56a32.09 32.09 0 002.49 12.38l10.07 24a3.92 3.92 0 006.88 0l10.07-24a32.09 32.09 0 002.49-12.38z"/><circle cx="280" cy="72" r="24"/></svg>
                            <p>Blantyre, Malawi</p>
                        </div>
                        <div className="flex space-x-2">
                            <MapIcon className='w-6 h-6'/>
                            <p>Blantyre, Malawi</p>
                        </div>
                        <div className="flex space-x-2">
                            <MapIcon className='w-6 h-6'/>
                            <p>Blantyre, Malawi</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="rounded-sm mt-10 p-5 shadow-md hover:shadow-lg">
                <div className="flex space-x-2 border-b-2 w-full m-5">
                    <button className="border-b-2 border-green-500 text-green-500">
                        Personal information
                    </button>
                    <button>
                        Contact information
                    </button>
                    <button>
                        Permits & licenses
                    </button>
                </div>
            </div>
        </div>
    )
}
