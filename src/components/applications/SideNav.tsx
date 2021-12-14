import React from 'react'
import { Link } from 'react-router-dom'

interface Props{
    children: any,
    tabs: {id: number, title: string}[],
    selected: string,
    setSelected: (title: string) => void
}

const SideNav: React.FC<Props> = ({tabs, selected, setSelected, children}) => {
    return (
        <div className="w-full flex ">

            <div style={{ backgroundColor: '#FBF3F3' }} className="w-1/5 p-10">
                <div className='flex flex-col space-y-4 text-md'>
                    {
                        tabs.map((tab) => {
                            const active = (tab.title === selected ? 'text-green-500 font-semibold' : '')

                            return(
                                <Link 
                                    className={'hover:text-green-500 transition duration-150' + active}
                                    to="#"
                                    onClick={() => {
                                        setSelected(tab.title)
                                    }}
                                    >
                                    {tab}
                                </Link>
                            )
                        })
                    }
                </div>
            </div>

            <div className="w-4/5">
                <div className='p-10'>
                    {children}
                </div>
            </div>

        </div>
    )
}

export default SideNav;