import { Fragment, useEffect, useState } from 'react'
import { Popover, Transition, Menu } from '@headlessui/react'
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChevronDownIcon,
  CollectionIcon,
  GlobeIcon,
  LogoutIcon,
  MenuIcon,
  NewspaperIcon,
  QuestionMarkCircleIcon,
  ShieldCheckIcon,
  SupportIcon,
  TableIcon,
  XIcon,
} from '@heroicons/react/outline'

import Icon from '../../icon.png'
import { Link, useHistory } from 'react-router-dom'
import CookieService from '../../services/CookieService'
import UrlService from '../../services/UrlService'

const menuHeaderLists = [
  {
    name: 'Application Guide',
    description: 'Get a better understanding of where your traffic is coming from.',
    href: '/application-guide',
    icon: NewspaperIcon,
  },
  {
    name: 'Licenses & Permits',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '/licenses-and-permits',
    icon: ShieldCheckIcon,
  },
  { name: 'International Regulation', description: "Your customers' data will be safe and secure.", href: '/international-regulations', icon: GlobeIcon },
  {
    name: 'Wildlife Act',
    description: "Connect with third-party tools that you're already using.",
    href: '/wildlife',
    icon: TableIcon,
  },
  {
    name: 'FAQ',
    description: 'Build strategic funnels that will drive your customers to convert',
    href: '/faq',
    icon: QuestionMarkCircleIcon,
  },
]

const menuFooterLists = [
  {
    name: 'About us',
    description: 'Get all of your questions answered in our forums or contact support.',
    href: '#contactUs',
    icon: SupportIcon,
  },
  {
    name: 'Contact us',
    description: 'Learn how to maximize our platform to get the most out of it.',
    href: '#contactUs',
    icon: BookmarkAltIcon,
  },
  {
    name: 'DNPW Website',
    description: 'See what meet-ups and other events we might be planning near you.',
    href: 'https://wildlifemw.net',
    icon: CalendarIcon,
  },
  { name: 'Usage Policy', description: 'Understand how we take your privacy seriously.', href: '#', icon: ShieldCheckIcon },
]

export default function LandingPageHeader() {

  const history = useHistory()

  const signOut = () => {

    CookieService.remove('access_token')
    localStorage.clear()

    history.push('/sign-in')

  }

  const [user, setUser] = useState("")
  const [name, setName] = useState("")

  useEffect(() => {

      fetch(UrlService.userUrl(),{
          method: 'post',
          headers: {'Content-Type':'application/json'},
          body: JSON.stringify({ user_id: CookieService.get('user_id') })
          }).then(response => {
              return response.json()
          }).then(data => {
            setName(data.data.name)
            setUser(data.data.registrations.avatar)
        }).catch((error) => {
            console.log(error)
        })
  }, [])

  return (
    <Popover className="relative bg-green-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link to="/" className="flex items-center">
              <img
                className="h-8 w-auto sm:h-10"
                src={Icon}
                alt="favicon"
              />
              <h3 className="sm:hidden font-semibold ml-3 text-white hover:text-gray-300 transition duration-150">DNPW E-Permitting</h3>
              
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-green-600 rounded-sm p-2 inline-flex items-center justify-center text-white hover:text-gray-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden md:flex space-x-10">
            
            <Link to="/application-guide" className="text-base font-medium text-white hover:text-gray-200">
                Application Guide
            </Link>

            <Link to="/licenses-and-permits" className="text-base font-medium text-white hover:text-gray-200">
                Licenses & Permits
            </Link>

            <Link to="/international-regulations" className="text-base font-medium text-white hover:text-gray-200">
                International Regulation
            </Link>

            <Link to="/wildlife" className="text-base font-medium text-white hover:text-gray-200">
                Wildlife Act
            </Link>

            <Link to="/faq" className="text-base font-medium text-white hover:text-gray-200">
                FAQ
            </Link>

          </Popover.Group>
          {
            CookieService.get("access_token") ? <div className="hidden md:flex items-center space-x-4">
              
              <Menu as="div" className="ml-3 relative">
                <div className='flex'>
                  {/* <BellIcon className='w-8 h-8'/> */}
                   <img className="h-8 w-8 rounded-full focus:ring-0 focus:outline-none" src={user !== '' ? "http://localhost:8000/storage/profiles/" + user : 'data:image/jpeg;base64,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' } alt="avatar" />
                  <Menu.Button className="max-w-xs flex items-center text-sm focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-gray-800 focus:ring-white">
                    <span className="sr-only">Open user menu</span>
                    <div className="ml-2 flex items-center space-x-1">
                    <p className='text-white'>{name}</p>
                    <ChevronDownIcon className='w-3 h-3 text-white'/>
                  </div>
                  </Menu.Button>
                  
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-sm shadow-lg py-1 bg-white border ring-0 ring-black ring-opacity-5 focus:outline-none">
                      
                      <Menu.Item>
                          <Link to="/profile"
                            className="flex items-center space-x-2  px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition duration-150"
                          >
                            <CollectionIcon className='w-4 h-4'/>
                            <p>Dashboard</p>
                          </Link>
                      </Menu.Item><Menu.Item>
                          <Link to="#"
                            onClick={() => {signOut()}}
                            className="flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 hover:bg-red-500 hover:text-white transition duration-150"
                          >
                            <LogoutIcon className='w-4 h-4'/>
                            <p>Log out</p>
                          </Link>
                      </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>
              </div>
            : <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <Link to="/sign-in" className="whitespace-nowrap text-base font-medium text-white hover:text-gray-200">
              Sign in
            </Link>
            <Link
              to="/sign-up"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-sm shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-700"
            >
              Sign up
            </Link>
          </div>
          }
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-sm border shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <Link to="/" className="flex items-center">
                  <img
                    className="h-8 w-auto sm:h-10"
                    src={Icon}
                    alt="favicon"
                  />
                  <h3 className="sm:hidden font-semibold ml-3 text-gray-600 hover:text-gray-300 transition duration-150">DNPW E-Permitting</h3>
                  
                </Link>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-sm p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {menuHeaderLists.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="-m-3 p-3 flex items-center rounded-sm hover:bg-gray-50"
                    >
                      <item.icon className="flex-shrink-0 h-6 w-6 text-green-600" aria-hidden="true" />
                      <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                {menuFooterLists.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              {
                CookieService.get("access_token") ?
                <div>
                <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <Link
                  to="/permit-application"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Start application
                </Link>
                <Link
                  to="/profile"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Profile
                </Link>
                
              </div>
              <Link
                  to="#"
                  onClick={() => signOut()}
                  className="w-full mt-3 flex items-center justify-center px-4 py-2 border border-transparent rounded-sm shadow-sm text-base font-medium text-white bg-red-600 hover:bg-red-700"
                >
                  Log out
                </Link>
              </div> : <div>
                <Link
                  to="/sign-up"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-sm shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-700"
                >
                  Sign up
                </Link>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  Existing member?{' '}
                  <Link to="/sign-in" className="text-green-600 hover:text-green-500">
                    Sign in
                  </Link>
                </p>
              </div>
              }
              
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
