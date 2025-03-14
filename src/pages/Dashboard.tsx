import { CompanyProfile } from '../components/CompanyProfile'
import { JobsHeader } from '../components/JobsHeader'
import JobsList from '../components/JobsList'
import { Sidebar } from '../components/Sidebar'
const Dashboard = () => {
    return (
        <div className="flex w-full h-full">
            {/* Left Sidebar - Company Profile */}
            <div className="w-80 min-w-80 border-r border-gray-200 overflow-y-auto">
                <CompanyProfile />
            </div>
            {/* Middle Section - Banner and Jobs */}
            <div className="flex-1 overflow-y-auto">
                <JobsHeader />
                <JobsList />
            </div>
            {/* Right Sidebar - Interview Schedule */}
            <div className="w-80 min-w-80 border-l border-gray-200 overflow-y-auto">
                <Sidebar />
            </div>
        </div>
    )
}

export default Dashboard