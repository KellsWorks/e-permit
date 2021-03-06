import { Fragment, useEffect, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import CookieService from '../services/CookieService'
import UrlService from '../services/UrlService'
import Avatar from '../assets/avatar.jpg'
import SubmitButton from '../components/SubmitButton'
import { XIcon } from '@heroicons/react/outline'

export default function ChangeProfile() {
    
  const [open, setOpen] = useState(false)

  const cancelButtonRef = useRef(null)

  const [user, setUser] = useState("")

  const [uploadedImage, setUpLoadedImage] = useState('')

  const [setSelectedImage] = useState('')

  const [onLoad, setOnLoad] = useState(false)

  useEffect(() => {
      fetch(UrlService.userUrl(),{
          method: 'post',
          headers: {'Content-Type':'application/json'},
          body: JSON.stringify({ id: CookieService.get('user_id') })
          }).then(response => {
              return response.json()
          }).then(data => {
              setUser(data.user.user_avatar)
        }).catch((error) => {
            console.log(error)
        })
  }, [])

  const handleSubmit = () => {

    const formData = new FormData();

        formData.append("avatar", uploadedImage);
        formData.append("id", CookieService.get('user_id'))

        const requestOptions = {
            method: 'post',
            headers: {
                'Access-Control-Allow-Origin' : 'http://localhost:8000', 
                'Content-Type':'application/json'
            },
            body: formData,
            redirect: 'follow'
        };

        fetch(UrlService.changeAvatar(), requestOptions)
        .then(response => response.json())
        .then(result => {
            setOnLoad(false)
            })
        .catch(error => {
            console.log('error', error)
            setOnLoad(false)
        });

  }

  return (
    <div>
      <img onClick={() => {setOpen(!open)}} src={"http://127.0.0.1:8000/storage/images/profile/" + user } placeholder={Avatar} className="w-20 h-20 rounded-full border border-green-500 object-cover" alt="avatar"/>
      <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" initialFocus={cancelButtonRef} onClose={setOpen}>
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>


          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <form onSubmit={(e) => {
              e.preventDefault()
              handleSubmit()
            }}>
            <div className="inline-block align-bottom bg-white rounded-none text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="w-full mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <div className='flex justify-between'>
                      <Dialog.Title as="h3" className="text-lg leading-6 font-semibold text-gray-900">
                        Change profile picture
                      </Dialog.Title>
                      <button onClick={() => setOpen(false)}
                      ref={cancelButtonRef}>
                        <XIcon className='w-4 h-4'/>
                      </button>
                    </div>
                    <div className="mt-2 w-full">
                      <div className="w-full">
                        <div className="mt-1 flex items-center">
                        <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                            <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                        </span>
                        </div>
                    </div>

                    <div className="w-full">
                        <label className="w-full text-sm font-medium text-gray-700">Preview</label>
                        <div className="w-full mt-1 flex px-6 pt-5 pb-6 border-2 hover:border-yellow-500 transition duration-150 border-gray-300 border-dashed rounded-none">
                        <div className="w-full space-y-1 text-center">
                            <svg
                            className="mx-auto h-12 w-12 text-gray-400"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 48 48"
                            aria-hidden="true"
                            >
                            <path
                                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            </svg>
                            <div className="flex justify-center text-sm text-gray-600">
                            <label
                                htmlFor="file-upload"
                                className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                            >
                                <span className="text-center">Upload a file</span>
                                <input 
                                  id="file-upload" 
                                  name="file-upload" 
                                  type="file" 
                                  className="sr-only" 
                                  onChange={(item) => {
                                      setUpLoadedImage(item.target.files[0])
                                      setSelectedImage(URL.createObjectURL(item.target.files[0]))
                                  }}
                                  />
                            </label>
                            <p className="pl-1 text-center">or drag and drop</p>
                            </div>
                            <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                        </div>
                        </div>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6">
                <SubmitButton text="Update" onLoad={onLoad}/></div>
            </div>
            </form>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
    </div>
  )
}
