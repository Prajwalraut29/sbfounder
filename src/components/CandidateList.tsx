import { Lock, Bookmark, CheckCircle, Maximize2 } from 'lucide-react';

const CandidateList = () => {
    return (
        <div className="p-4">
            <div className="text-sm text-gray-600 mb-4">Today</div>
            <div className="border border-gray-200 rounded-lg p-4 mb-4 relative bg-[#f8f8f8]">
                <div className="absolute right-4 top-4">
                    <Bookmark className="h-5 w-5 text-gray-400" />
                </div>
                <div className="flex items-start">
                    {/* Image with proper spacing */}


                    {/* Content column with consistent left alignment */}
                    <div className="flex-1 flex flex-col">
                        <div className='flex'>
                            <div className="w-12 h-12 rounded-full overflow-hidden mr-4 flex-shrink-0 ml-2">
                                <img
                                    src="https://randomuser.me/api/portraits/men/32.jpg"
                                    alt="Candidate"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className='flex flex-col'>
                                <div className="flex items-center mb-1">
                                    <Lock className="h-4 w-4 mr-2 text-gray-500" />
                                    <span className="text-gray-600 text-sm">Profile Locked</span>
                                </div>
                                <div>
                                    <p className="text-gray-800 text-xl">Bengaluru, India • 8 Years of Exp.</p>

                                </div>
                            </div>


                        </div>


                        <div className="mt-4">
                            <div className="text-sm text-gray-500 mb-1">
                                Recent Experience
                            </div>
                            <div className="flex items-center">
                                <p className='font-semibold text-xl pr-2'>Lead Designer </p>  •  <p className='pl-2'>Lollypop Designs</p>
                            </div>
                            <div className="text-sm text-gray-600">
                                Jan 2022 - Present • 2 years 8 months
                            </div>
                        </div>

                        <div className="mt-4">
                            <div className="text-sm text-gray-500 mb-1">Educations</div>
                            <div className='flex items-center'>
                                <p className='font-semibold text-xl pr-2'>MA, Graphic Design </p> • <p className='pl-2'>Kingston University London • 2022</p>
                            </div>

                        </div>

                        <div className="mt-4 flex flex-wrap gap-2">
                            <div className=" text-green-800 text-sm px-3 py-1 rounded-full flex items-center bg-[#e7f4da]">
                                <CheckCircle className="h-3 w-3 mr-1 text-green-600 " />
                                Visual Design
                            </div>
                            <div className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">
                                Prototyping
                            </div>
                            <div className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">
                                Problem Solving
                            </div>
                            <div className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">
                                +3
                            </div>
                        </div>

                        <div className="mt-4 text-right">
                            <button className="border border-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-50 inline-block ">
                                <div className='flex items-center'>
                                    <Maximize2 className="h-4 w-4 mr-2 text-gray-500" />  View Application
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CandidateList;