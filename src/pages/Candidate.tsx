import { useState } from 'react'
import CandidateFilters from '../components/CandidateFilters'
import CandidateList from '../components/CandidateList'
import CandidateProfile from '../components/CandidateProfile'
import JobCandiHead from '../components/JobsCandiHead'

function App() {
    const [activeTab, setActiveTab] = useState<string>('Profile');
    const [fitStatus, setFitStatus] = useState<string | null>(null);

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