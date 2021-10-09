/* eslint-disable jsx-a11y/anchor-is-valid */

import { Fragment } from 'react'
import { Popover, Transition, Menu } from '@headlessui/react'
import {
  BookmarkAltIcon,
  CalendarIcon,
  GlobeIcon,
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

const solutions = [
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
const resources = [
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

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}


export default function LandingPageHeader() {

  const history = useHistory()

  const signOut = () => {

    CookieService.remove('access_token')
    localStorage.clear()

    history.push('/sign-in')

  }

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
            <button className="bg-green-800 p-1 rounded-full text-gray-300 hover:text-white focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-gray-800 focus:ring-white">
              <span className="sr-only">View notifications</span>

              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>

            </button>
            <button className="bg-green-800 p-1 rounded-full text-gray-300 hover:text-white focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-gray-800 focus:ring-white">
              <span className="sr-only">View notifications</span>

              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>

            </button>
            <Menu as="div" className="ml-3 relative">
              <div>
                <Menu.Button className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-gray-800 focus:ring-white">
                  <span className="sr-only">Open user menu</span>
                  <img className="h-8 w-8 rounded-full focus:ring-0 focus:outline-none" src={user.imageUrl} alt="avatar" />
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
                        <Link to="/permit-application"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 transition duration-150"
                        >
                          Start application
                        </Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to="/profile"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 transition duration-150"
                        >
                          Profile
                        </Link>
                    </Menu.Item><Menu.Item>
                        <Link to="#"
                          onClick={() => {signOut()}}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-500 hover:text-white transition duration-150"
                        >
                          Log out
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
                {solutions.map((item) => (
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
              {resources.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div>
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
          </div>
        </div>
      </Popover.Panel>
    </Transition>
  </Popover>
  )
}
