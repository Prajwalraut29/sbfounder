import { Search, Home, Briefcase, User, Bell, Plus } from 'lucide-react';

const NavBar = () => {
    return (
        <header className="w-full border-b border-gray-200 px-4 py-4">
            <div className="flex items-center justify-between w-full mx-auto">
                {/* Left - Logo */}
                <div className="flex items-center">
                    <div className="w-10 h-10">
                        <svg
                            viewBox="0 0 24 24"
                            className="text-green-800"
                            fill="currentColor"
                        >
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                    </div>
                </div>

                {/* Center - Search Bar, Navigation Icons, and Create Job Button */}
                <div className="flex items-center space-x-4 w-full max-w-4xl justify-center">
                    {/* Search Bar */}
                    <div className="relative flex-grow max-w-2xl">
                        <input
                            type="text"
                            placeholder="Search for people or company"
                            className="pl-4 pr-12 py-2 rounded-full border border-gray-200 w-full focus:outline-none focus:ring-1 focus:ring-green-500"
                        />
                        <Search className="absolute right-3 top-2 h-6 w-6 text-[#4d5951]" />
                    </div>

                    {/* Navigation Icons */}
                    <div className="flex items-center space-x-2">
                        <button className="p-2 text-[#4d5951] hover:text-gray-800">
                            <Home className="h-6 w-6" />
                        </button>
                        <button className="p-2 text-[#4d5951] hover:text-gray-800">
                            <Briefcase className="h-6 w-6" />
                        </button>
                        <button className="p-2 text-[#4d5951] hover:text-gray-800">
                            <User className="h-6 w-6" />
                        </button>
                        <button className="p-2 text-[#4d5951] hover:text-gray-800">
                            <Bell className="h-6 w-6" />
                        </button>

                        {/* Create Job Button */}
                        <button className="bg-[#b6e676] hover:bg-[#a9d86e] text-[#2c510d] font-semibold px-4 py-2 rounded-full flex items-center ml-2">
                            <Plus className="h-5 w-5 mr-1" />
                            Create a Job
                        </button>
                    </div>
                </div>

                {/* Right - Empty space for balance */}
                <div className="w-10"></div>
            </div>
        </header>
    );
};

export default NavBar;