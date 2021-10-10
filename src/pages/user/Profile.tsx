/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { PaperClipIcon } from '@heroicons/react/outline'
import ChangeProfile from '../../components/ChangeProfile'
import DeactivateAccount from '../../components/DeactivateAccount'

export default function Profile() {

    return (
        <div className="px-24 py-10 bg-gray-50">
            <div className="flex justify-between">
                <div className="flex">
                    <ChangeProfile/>
                    <div>
                        <h3 className="text-2xl font-semibold m-2">
                            Kelvin Chidothi
                        </h3>
                        <p className="ml-2">Joined on 24th July 2021</p>
                    </div>
                </div>
                <div className="flex space-x-2">
                    <button className="border h-10 bg-white rounded-sm py-1 px-2">
                        Edit profile
                    </button>
                    
                    <DeactivateAccount/>
                </div>
            </div>
            <div className="w-full flex space-x-2 mt-3">
                <div className="border shadow-sm bg-white">
                    <div className="px-4 py-5 sm:px-6">
                        <h3 className="text-lg leading-6 font-semibold text-gray-900">Applicant Information</h3>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500">Personal details and application.</p>
                    </div>
                    <div className="border-t border-gray-100">
                        <dl>
                        <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Full name</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Margot Foster</dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Application for</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Backend Developer</dd>
                        </div>
                        <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Email address</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">margotfoster@example.com</dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Salary expectation</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">$120,000</dd>
                        </div>
                        <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">About</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur
                            qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud
                            pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
                            </dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Attachments</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            <ul role="list" className="border border-gray-200 rounded-md divide-y divide-gray-200">
                                <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                                <div className="w-0 flex-1 flex items-center">
                                    <PaperClipIcon className="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" />
                                    <span className="ml-2 flex-1 w-0 truncate">resume_back_end_developer.pdf</span>
                                </div>
                                <div className="ml-4 flex-shrink-0">
                                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                    Download
                                    </a>
                                </div>
                                </li>
                                <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                                <div className="w-0 flex-1 flex items-center">
                                    <PaperClipIcon className="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" />
                                    <span className="ml-2 flex-1 w-0 truncate">coverletter_back_end_developer.pdf</span>
                                </div>
                                <div className="ml-4 flex-shrink-0">
                                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                    Download
                                    </a>
                                </div>
                                </li>
                            </ul>
                            </dd>
                        </div>
                        </dl>
                    </div>
                </div>
                {/* <div className="w-2/5 bg-white rounded-sm p-3">
                    <h3 className="text-lg font-semibold">
                        Notifications
                    </h3>
                    <div className="py-2">
                          <div className="flex items-center px-4 py-3 border-b border-gray-100 hover:bg-gray-100 -mx-2">
                              <div className="bg-gray-400 rounded-full flex items-center justify-center h-7 w-7 text-white">

                                  <InformationCircleIcon className="w-5 h-5"/>

                              </div>
                              <div className="flex w-full justify-between">
                                  <p className="text-gray-600 text-sm mx-2">
                                    <span className="font-bold">Sara Salah</span> replied on the <span className="font-bold text-blue-500">Upload</span>
                                  </p>
                                  <p className="text-md">
                                      2 July
                                  </p>
                              </div>
                          </div>
                          <div className="flex items-center px-4 py-3 border-b border-gray-100 hover:bg-gray-100 -mx-2">
                              <div className="bg-gray-400 rounded-full flex items-center justify-center h-7 w-7 text-white">

                                  <InformationCircleIcon className="w-5 h-5"/>

                              </div>
                              <div className="flex w-full justify-between">
                                  <p className="text-gray-600 text-sm mx-2">
                                    <span className="font-bold">Sara Salah</span> replied on the <span className="font-bold text-blue-500">Upload</span>
                                  </p>
                                  <p className="text-md">
                                      2 July
                                  </p>
                              </div>
                          </div>
                          <div className="flex items-center px-4 py-3 border-b border-gray-100 hover:bg-gray-100 -mx-2">
                              <div className="bg-gray-400 rounded-full flex items-center justify-center h-7 w-7 text-white">

                                  <InformationCircleIcon className="w-5 h-5"/>

                              </div>
                              <div className="flex w-full justify-between">
                                  <p className="text-gray-600 text-sm mx-2">
                                    <span className="font-bold">Sara Salah</span> replied on the <span className="font-bold text-blue-500">Upload</span>
                                  </p>
                                  <p className="text-md">
                                      2 July
                                  </p>
                              </div>
                          </div>
                          <div className="mt-2">
                              <SubmitButton text="Clear notifications" onLoad={false}/>
                          </div>
                      </div>
                </div> */}
            </div>
        </div>
    )
}
