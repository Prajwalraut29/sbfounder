import { useState } from 'react'
import CandidateFilters from './CandidateFilters'
import CandidateList from './CandidateList'
import CandidateProfile from './CandidateProfile'
import JobCandiHead from './JobsCandiHead'

function App() {
    const [activeTab, setActiveTab] = useState('Profile')
    const [fitStatus, setFitStatus] = useState(null)
    return (
        <div className="flex flex-col w-full min-h-screen bg-white">
            <div className="flex flex-col md:flex-row w-full">
                <div className="w-full md:w-1/2 border-r border-gray-200 px-">
                    <JobCandiHead />
                    <CandidateFilters />
                    <CandidateList />
                </div>
                <div className="w-full md:w-1/2">
                    <CandidateProfile
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                        fitStatus={fitStatus}
                        setFitStatus={setFitStatus}
                    />
                </div>
            </div>
        </div>
    )
}

export default App