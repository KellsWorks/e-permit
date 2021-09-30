import React from 'react'
import Pdf from '../assets/pdf.png'
import Wild from '../assets/wildlife-malawi-bg-2.jpg'

export default function Wildlife() {
    return (
        <div style={{ backgroundImage: `url(${Wild})`}} className="bg-random flex items-center justify-center px-5 py-5">
    <div className="w-full mx-auto rounded-sm shadow-sm bg-white">
        <div className="w-full px-5 pt-5 pb-3">
            <div className="rounded-full w-44 h-44 mx-auto border-8 border-gray-300 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
            </div>
        </div>
        <div className="w-full px-5 text-center pb-8 border-b border-gray-300">
            <h1 className="text-2xl font-light text-gray-800 leading-tight">Ready when you are</h1>
            <p className="text-xs text-gray-500">Download the current wildlife act</p>
        </div>
        <ul>
            <li className="w-full px-5 py-2 border-b border-gray-300">
                <div className="w-full flex">
                    <div className="flex">
                        <img src={Pdf} alt="pdf" className="w-10 h-10" />
                        <div className="ml-2">
                            <h3 className="text-sm text-gray-800 leading-tight">Malawi_wildlife_act.pdf</h3>
                            <p className="text-xs text-gray-500">138 MB</p>
                        </div>
                    </div>
                    <div className="w-12 text-right">
                        <i className="mdi mdi-download-circle-outline text-green-500 text-2xl"></i>
                    </div>
                </div>
            </li>
        </ul>
        <div className="w-full px-5 py-5 text-center">
            <button className="bg-green-500 hover:bg-green-600 text-white px-10 py-2 transition-colors">Download</button>
        </div>
    </div>
</div>
    )
}
