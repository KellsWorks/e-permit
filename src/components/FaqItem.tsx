import React, { useState } from 'react'

interface Props {
    title: string
}

const FaqItem: React.FC<Props> = ({ title, children }) => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <li className="py-6 border-gray-200 border-solid border-b">
        <div className="flex justify-between items-center">
            <h2 className="text-gray-800 text-base w-10/12">{title}</h2>
            <button data-menu onClick={()=> setIsOpen(!isOpen)} className="cursor-pointer">
                <svg
                    viewBox="0 0 24 24"
                    className={`w-5 h-5 text-gray-600 transition transform duration-200 ${
                    isOpen ? 'transform rotate-180' : ''
                    }`}
                >
                    <polyline
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    points="2,7 12,17 22,7"
                    strokeLinejoin="round"
                    />
                </svg>
            </button>
        </div>
        {isOpen && (
            <p className="pt-2 p-3 mt-2 md:pt-3 lg:pt-5 text-gray-800 bg-gray-100 text-sm md:text-base xl:text-lg rounded-b-lg">{children}</p>
        )}
    </li>
  );
};

export default FaqItem
