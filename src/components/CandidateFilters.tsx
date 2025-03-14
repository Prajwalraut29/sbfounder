import { useState } from 'react'
import { Search, ArrowUpDown } from 'lucide-react'
const CandidateFilters = () => {
    const [activeFilter, setActiveFilter] = useState('All')
    const filters = [
        'All',
        'Unlocked',
        'Interviewing',
        'Accepted',
        'Rejected',
        'Saved',
    ]
    return (
        <div className="p-4 ">
            <div className="flex flex-wrap gap-2 mb-4">
                {filters.map((filter) => (
                    <button
                        key={filter}
                        className={`px-4 py-2 rounded-full text-sm ${activeFilter === filter ? 'bg-green-100 text-green-800 border border-green-200' : 'bg-[#f8f8f8] text-gray-600 hover:bg-gray-100 border border-transparent'}`}
                        onClick={() => setActiveFilter(filter)}
                    >
                        {filter}
                    </button>
                ))}
            </div>
            <div className="flex justify-between items-center w-full">
                {/* Search Input */}
                <div className="relative w-72">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search Candidate"
                        className="pl-12 pr-4 py-2 rounded-full border border-gray-200 w-full focus:outline-none focus:ring-1 focus:ring-green-500"
                    />
                </div>

                {/* Sort Options */}
                <div className="flex items-center">
                    <ArrowUpDown className="h-5 w-8 mr-2 text-gray-400" />
                    <span className="text-sm text-gray-600 mr-2">Sort by</span>
                    <select className="border border-gray-200 rounded py-2 px-5 text-sm focus:outline-none">
                        <option>Newest</option>
                        <option>Oldest</option>
                        <option>Relevance</option>
                    </select>
                </div>
            </div>

        </div>
    )
}
export default CandidateFilters
