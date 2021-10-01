import React from 'react'
import FaqItem from '../components/FaqItem'
import Questions from '../data/Questions'

export default function Faq() {
    return (
        <div className="sm:py-12 py-5">
        <div>
            <div className="container mx-auto">
                <div className="text-center pb-3 md:pb-10 xl:pb-20">
                    <p className="text-gray-600 text-base lg:text-lg uppercase leading-tight mb-4">get quick answers</p>
                    <h1 className="px-2 xl:px-0 xl:text-5xl md:text-3xl text-2xl font-extrabold text-gray-800">Frequently Asked Questions</h1>
                </div>
                <div className="w-10/12 mx-auto">
                    <ul>
                        {
                            Questions.map((item) => (
                                <FaqItem title={item.question} children={item.answer}/>
                            ))
                        }
                    </ul>
                </div>
            </div>

        </div>

    </div>
    )
}
