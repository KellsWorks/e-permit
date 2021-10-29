import React, { useState } from 'react'
import Pdf from '../assets/pdf.png'
import Wild from '../assets/wildlife-malawi-bg-2.jpg'
import UrlService from '../services/UrlService'
import { saveAs } from "file-saver"
import SubmitButton from '../components/SubmitButton'

export default function Wildlife() {

    const [isDownloading, setIsDownloading] = useState(false)
    
    const saveFile = () => {
        setIsDownloading(true)
        saveAs(
        UrlService.mainUrl() + "/documents/Malawi-National-Parks-And-Wildlife-Act-And-Regulations.pdf",
        "Malawi-National-Parks-And-Wildlife-Act-And-Regulations.pdf"
        )

        setTimeout(() => {
            setIsDownloading(false)
        }, 5000);
        
    };

    return (
        <div style={{ backgroundImage: `url(${Wild})`}} className="bg-random flex items-center justify-center px-5 py-5">
    <div className="w-full mx-auto rounded-sm shadow-sm bg-white">
        <ul>
            <li className="w-full px-5 py-2 border-b border-gray-300">
                <div className="w-full flex">
                    <div className="flex">
                        <img src={Pdf} alt="pdf" className="w-10 h-10" />
                        <div className="ml-2">
                            <h3 className="text-sm text-gray-800 leading-tight">Malawi-National-Parks-And-Wildlife-Act-And-Regulations.pdf</h3>
                            <p className="text-xs text-gray-500">25.5 MB</p>
                        </div>
                    </div>
                    <div className="w-12 text-right">
                        <i className="mdi mdi-download-circle-outline text-green-500 text-2xl"></i>
                    </div>
                </div>
            </li>
        </ul>
        <div className="w-full px-5 py-5 text-center">
            <form onSubmit={(e) => {
                e.preventDefault()
                saveFile()
            }}>
                <SubmitButton text="Download" onLoad={isDownloading}/>
            </form>
        </div>
    </div>
</div>
    )
}
