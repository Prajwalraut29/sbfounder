import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
    SearchIcon,
    ArrowUpRightIcon,
    ChevronDownIcon,
    ArrowLeftIcon,
    UserPlusIcon,
    PencilIcon,
    ArrowDownUpIcon,
    BookmarkIcon,
    CheckCircleIcon,
} from 'lucide-react'

// Mock jobs data
const jobsData = [
    {
        id: 1,
        title: 'Senior Product Designer',
        location: 'Bengaluru, India',
        daysAgo: 3,
        applications: 3,
        deadline: 'Jan 31, 2026',
        status: 'active',
    },
    {
        id: 2,
        title: 'UI/UX Design Intern',
        location: 'Delhi, India',
        daysAgo: 8,
        applications: 72,
        status: 'active',
    },
    {
        id: 3,
        title: 'Senior Full Stack Developer',
        location: 'Delhi, India',
        daysAgo: 19,
        applications: 72,
        status: 'active',
    },
]

// JobsList Component
const JobsList = () => {
    const [activeTab, setActiveTab] = useState('open')
    return (
        <div className="px-6 py-4">
            <div className="flex mb-4">
                <button
                    className={`px-8 mr-2 py-2 rounded-full text-sm ${activeTab === 'open' ? 'bg-[#ecf9dd] font-semibold ' : 'text-[#4a5b43] hover:bg-gray-100'}`}
                    onClick={() => setActiveTab('open')}
                >
                    Open
                </button>
                <button
                    className={`px-8 mr-2 py-2 rounded-full text-sm ${activeTab === 'closed' ? 'bg-[#f8f8f8] text-green-800 ' : 'text-gray-600  font-semibold bg-[#f8f8f8] hover:bg-gray-100'}`}
                    onClick={() => setActiveTab('closed')}
                >
                    Closed
                </button>
                <button
                    className={`px-8 mr-2 py-2 rounded-full text-sm ${activeTab === 'draft' ? 'bg-[#f8f8f8] text-green-800  ' : 'text-gray-600  font-semibold bg-[#f8f8f8] hover:bg-gray-100'}`}
                    onClick={() => setActiveTab('draft')}
                >
                    Draft
                </button>
                <div className="ml-auto relative w-[60%]">
                    <input
                        type="text"
                        placeholder="Search Jobs"
                        className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-full text-sm"
                    />
                    <SearchIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4  text-[#4d5951]]" />
                </div>

            </div>
            <div className="space-y-4">
                {jobsData.map((job) => (
                    <div key={job.id} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex items-start justify-between">
                            <div>
                                <div className="flex items-center">
                                    <h3 className="font-medium">{job.title}</h3>
                                    <ArrowUpRightIcon className="h-4 w-4 ml-2 text-gray-500" />
                                </div>
                                <p className="text-sm text-gray-600 mt-1">
                                    Posted {job.daysAgo} Days Ago • {job.location}
                                </p>
                            </div>
                            <div className="flex items-center">
                                {job.deadline && (
                                    <div className="mr-4 text-sm border border-gray-500 py-1 px-3 rounded-2xl">
                                        <span className="text-gray-500">Active Until: </span>
                                        <span>{job.deadline}</span>
                                    </div>
                                )}
                                <Link
                                    to={`/candidate`}
                                    className="bg-[#eef9dd] text-gray-800 font-semibold text-sm px-3 py-1 rounded-full"
                                >
                                    {job.applications} New Applications
                                </Link>
                                <div className="ml-4 flex items-center">
                                    <span className="text-sm text-gray-700 mr-1">Active</span>
                                    <ChevronDownIcon className="h-4 w-4 text-gray-500" />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}


export default JobsList