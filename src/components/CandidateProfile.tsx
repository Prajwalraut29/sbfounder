import React from 'react'
import { Calendar, Share2, CheckCircle, Linkedin, Globe, Bookmark } from 'lucide-react'
const CandidateProfile = ({
    activeTab,
    setActiveTab,
    fitStatus,
    setFitStatus
}) => {
    const tabs = ['Profile', 'Resume', 'Notes', 'Message']
    return (
        <div className="p-2">
            <div className="flex justify-between items-center mb-6">
                <div className="flex space-x-8 border-b border-gray-200 w-full">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            className={`pb-3 px-1 text-xl ${activeTab === tab
                                ? 'text-[#707070] border-b-2 border-[#707070] font-medium'
                                : 'text-[#707070]'
                                }`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
                <div className="flex items-center text-green-700 font-medium space-x-2 border-b border-gray-200 mt-5">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                        <path
                            fillRule="evenodd"
                            d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2-2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                            clipRule="evenodd"
                        />
                    </svg>
                    <div className=''>
                        <p className="text-md whitespace-nowrap">4/5 Reveals Left</p>

                    </div>
                </div>
            </div>

            <div className="flex justify-between items-center mb-6">
                <div className="flex items-center">
                    <span className="text-gray-600 mr-2">Application Status</span>
                    <div className="relative">
                        <select className="appearance-none bg-[#f5f5f5] border border-gray-200 rounded-md pl-4 pr-10 py-1 focus:outline-none focus:ring-1 focus:border-green-500">
                            <option>Interview</option>
                            <option>Applied</option>
                            <option>Screening</option>
                            <option>Offer</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    fillRule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
                <button className="flex items-center text-gray-700  rounded-md px-4 py-1 hover:bg-gray-50">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>Send Calendar Invite</span>
                </button>
            </div>
            <div className="border border-gray-200 rounded-lg bg-white">
                {/* Header with Profile title and action buttons */}
                <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
                    <h2 className="text-lg font-semibold text-gray-800">Profile</h2>
                    <div className="flex items-center space-x-4">
                        <button className="p-2">
                            <Share2 className="h-5 w-5 text-gray-500" />
                        </button>
                        <button className={`flex items-center px-4 py-2 rounded-md ${fitStatus === 'bad' ? 'bg-red-100 text-red-800' : 'bg-white text-gray-700 border border-gray-300'}`}
                            onClick={() => setFitStatus('bad')}>
                            <div className="mr-2">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                </svg>
                            </div>
                            Not a Good Fit
                        </button>
                        <button className={`flex items-center px-4 py-2 rounded-md ${fitStatus === 'good' ? 'bg-gray-800 text-white' : 'bg-white text-gray-700 border border-gray-300'}`}
                            onClick={() => setFitStatus('good')}>
                            <div className="mr-2">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                            </div>
                            Good Fit
                        </button>
                        <button className="p-2 bg-green-50 rounded-md">
                            <Bookmark className="h-5 w-5 text-green-600" />
                        </button>
                    </div>
                </div>

                {/* Main content */}
                <div className="p-6">
                    {/* Profile info section */}
                    <div className="flex items-start">
                        <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Pritesh Srivastava" className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <div className="flex items-center mb-1">
                                <h3 className="text-xl font-semibold text-gray-800 mr-2">Pritesh Srivastava</h3>
                                <div className="bg-yellow-100 rounded-full p-1">
                                    <CheckCircle className="h-4 w-4 text-yellow-500" />
                                </div>
                            </div>
                            <p className="text-gray-600">Bengaluru, India • 8 Years of Exp.</p>
                        </div>
                        <div className="ml-auto flex space-x-2">
                            <button className="p-2 border border-gray-200 bg-gray-100 rounded-md">
                                <Linkedin className="h-5 w-5 text-gray-500" />
                            </button>
                            <button className="p-2 border border-gray-200 bg-gray-100 rounded-md">
                                <Globe className="h-5 w-5 text-gray-500" />
                            </button>
                        </div>
                    </div>

                    {/* Skills section */}
                    <div className="mt-8">
                        <h4 className="text-sm text-gray-500 mb-3">Skills</h4>
                        <div className="flex flex-wrap gap-2">
                            <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md text-sm">Visual Design</span>
                            <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md text-sm">Prototyping</span>
                            <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md text-sm">Problem Solving</span>
                            <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md text-sm">Information Architecture</span>
                            <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md text-sm">Business Strategy</span>
                            <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md text-sm">Figma</span>
                        </div>
                    </div>

                    {/* Experience section */}
                    <div className="mt-8">
                        <h4 className="text-sm text-gray-500 mb-3">Recent Experience</h4>

                        <div className="mb-6">
                            <h5 className="text-lg">
                                <span className="font-medium">Lead Designer</span> Lollypop Designs
                            </h5>
                            <p className="text-gray-600 text-sm mt-1">Jan 2022 - Present • 2 years 8 months</p>
                            <p className="text-gray-600 text-sm mb-3">Bengaluru, India</p>
                            <p className="text-gray-700 text-sm">
                                Developed a successful, scalable pellet-less shooting experience in collaboration with product managers, coaches, and athletes. Also, recognised by EnAble India, a non-profit organisation that has been empowering people with disabilities. Developed a successful, scalable pellet-less shooting experience in collaboration with product managers, coaches, and athletes. Also, recognised by EnAble India, a non-profit organisation that has been empowering people with disabilities.
                            </p>
                        </div>

                        <div>
                            <h5 className="text-lg">
                                <span className="font-medium">Intern Designer</span> Santander Bank
                            </h5>
                            <p className="text-gray-600 text-sm mt-1">Jan 2021 - Mar 2021 • 3 months</p>
                            <p className="text-gray-600 text-sm">London, UK</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CandidateProfile
