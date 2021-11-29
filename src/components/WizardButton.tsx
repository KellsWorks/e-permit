import { ChevronRightIcon } from '@heroicons/react/outline'

export default function WizardButton() {
    return (
        <button className="flex bg-green-500 space-x-1 items-center p-2 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-green-500 transition duration-150 rounded-sm w-48">
            <p className="text-sm text-white">
                Save & proceed
            </p>
            <ChevronRightIcon className="w-6 h-6 text-white"/>
        </button>
    )
}
