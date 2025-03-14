import { MoreHorizontalIcon } from 'lucide-react'
export const JobsHeader = () => {
    return (
        <div className="bg-white">
            <div className="relative">
                <div className="w-full h-48 bg-black overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                        alt="Company Banner"
                        className="w-full h-full object-cover opacity-50"
                    />
                    <div className="absolute inset-0 flex items-center justify-center text-white">
                        <div className="text-center">
                            <div className="text-xl">
                                <span className="font-semibold">"Simplicity</span>{' '}
                                <span className="italic">is the</span>
                                <br />
                                <span className="italic">ultimate sophistication."</span>
                            </div>
                            <div className="text-xs mt-2 italic">- Leonardo da Vinci</div>
                        </div>
                    </div>
                    <div className="absolute top-4 right-4 flex gap-2">
                        <button className="p-2 bg-white bg-opacity-10 rounded-full">
                            <MoreHorizontalIcon className="h-5 w-5 text-black" />
                        </button>
                        <button className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium">
                            Edit Profile
                        </button>
                    </div>
                </div>
            </div>
            <div className="border-b border-gray-200">
                <div className="flex">
                    <button className="px-6 py-4 text-gray-600 hover:text-gray-900">
                        Dashboard
                    </button>
                    <button className="px-6 py-4 text-gray-900 font-medium border-b-2 border-[#bee18f]">
                        Jobs
                    </button>
                    <button className="px-6 py-4 text-gray-600 hover:text-gray-900">
                        Messages
                    </button>
                    <button className="px-6 py-4 text-gray-600 hover:text-gray-900">
                        Activity
                    </button>
                    <button className="px-6 py-4 text-gray-600 hover:text-gray-900">
                        Schedule
                    </button>
                    <button className="px-6 py-4 text-gray-600 hover:text-gray-900">
                        Manage
                    </button>
                    <button className="px-6 py-4 text-gray-600 hover:text-gray-900">
                        API
                        <span className="ml-2 text-xs bg-[#bee18f] text-[#4a5b43] px-2 py-0.5 rounded-full">
                            Coming Soon
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}
