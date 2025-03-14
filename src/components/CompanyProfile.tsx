import { ChevronDownIcon } from 'lucide-react'
export const CompanyProfile = () => {
    return (
        <div className="p-6">
            <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center overflow-hidden mb-4 mr-26">
                    <div className="text-white text-xs">
                        <div className="uppercase font-bold mb-1">Brand</div>
                        <div className="text-[8px]">English Logo</div>
                    </div>
                </div>
                <div>
                    <div className="flex items-center justify-center">
                        <h1 className="text-2xl font-bold text-gray-800">Acme Corp Ltd</h1>
                        <ChevronDownIcon className="h-5 w-5 ml-2" />
                    </div>
                    <p className="text-gray-600 mt-1">@acmecorp • Bengaluru, India</p>
                    <p className="mt-6 font-medium pr-28 ">Keep it Real.</p>
                    <div className="flex justify-center mt-6 gap-8">
                        <div className="text-center">
                            <span className="block font-bold">200</span>
                            <span className="text-sm text-gray-600">Posts</span>
                        </div>
                        <div className="text-center">
                            <span className="block font-bold">380</span>
                            <span className="text-sm text-gray-600">Followers</span>
                        </div>
                        <div className="text-center">
                            <span className="block font-bold">1003</span>
                            <span className="text-sm text-gray-600">Following</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
