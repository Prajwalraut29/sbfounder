import { ArrowLeft, Users, Edit } from 'lucide-react'
import { Link } from 'react-router-dom'

const JobCandiHead = () => {
    return (
        <div className="p-4 ">
            <div className="flex items-center mb-6">
                <ArrowLeft className="h-5 w-5 mr-2" />
                <Link to={`/`}>

                    <span className="text-gray-800 font-medium">Back to Dashboard</span>
                </Link>
            </div>
            <div className="flex justify-between items-start mb-4 border-1 border-[#bcbdbf] rounded-lg w-full h-24 p-4">
                <div className=''>
                    <h1 className="text-xl font-semibold text-gray-800">
                        Senior Product Designer
                    </h1>
                    <p className="text-sm text-gray-500">
                        Posted 3 Days Ago • Bengaluru, India
                    </p>
                </div>
                <div className="flex space-x-2">
                    <button className="flex bg-[#f5f5f5] items-center px-4 py-2 border border-gray-200 rounded-md text-gray-700 hover:bg-gray-50">
                        <Users className="h-4 w-4 mr-2" />
                        <span className='font-bold'>Add team member</span>
                    </button>
                    <button className="flex  bg-[#f5f5f5] items-center px-4 py-2 border border-gray-200 rounded-md text-gray-700 hover:bg-gray-50">
                        <Edit className="h-4 w-4 mr-2" />
                        <span className='font-bold'>Edit Job</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default JobCandiHead
