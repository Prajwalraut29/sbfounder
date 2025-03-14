import { ArrowUpRightIcon, CalendarIcon } from 'lucide-react'
export const Sidebar = () => {
    const interviews = [
        {
            id: 1,
            name: 'Pritesh Srivastava',
            date: '24 May 2024',
            time: '3:30 PM',
        },
        {
            id: 2,
            name: 'Nikita Mansingha',
            date: '24 May 2024',
            time: '3:30 PM',
        },
    ]
    return (
        <div className="p-6 h-full overflow-y-auto">
            <div className="mb-8 border border-gray-200 rounded-lg p-2">
                <div className="flex items-center justify-between ">
                    <div className="flex items-center justify-center border border-gray-200 rounded-lg p-4">
                        <svg
                            className="w-8 h-8 text-[#b6e676] mr-1"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                clipRule="evenodd"
                            />
                        </svg>

                    </div>
                    <div className='flex flex-col justify-center items-start '>
                        <span className="font-medium">5/5 Reveals Left</span>
                        <p className="text-sm text-gray-600 mt-1">Unlock 50 Resumes at ₹399</p>

                    </div>
                </div>
            </div>

            <div className='border border-gray-200 rounded-lg p-2'>
                <div className="flex items-center justify-center mb-4  border-b border-gray-200 rounded-lg p-2">
                    <h3 className="font-medium">Scheduled Interviews</h3>
                    <ArrowUpRightIcon className="h-6 w-6 text-gray-500 text-2xl" />
                </div>
                <div className="text-sm text-gray-600 mb-4">This Week</div>
                <div className="space-y-4">
                    {interviews.map((interview) => (
                        <div key={interview.id} className="flex items-center">
                            <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden mr-3">
                                {interview.id === 1 && (
                                    <img
                                        src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                                        alt={interview.name}
                                        className="w-full h-full object-cover"
                                    />
                                )}
                                {interview.id === 2 && (
                                    <img
                                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                                        alt={interview.name}
                                        className="w-full h-full object-cover"
                                    />
                                )}
                            </div>
                            <div>
                                <div className="font-medium">{interview.name}</div>
                                <div className="flex items-center text-sm text-gray-600">
                                    <CalendarIcon className="h-3 w-3 mr-1" />
                                    <span>
                                        {interview.date} • {interview.time}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}
