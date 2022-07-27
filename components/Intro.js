import { ChevronDoubleDownIcon } from "@heroicons/react/outline"

function Intro() {
    return (
        <div className="bg-gray-800 h-screen bg-cover flex justify-center items-center bg-fixed">
                <img src="Images/van.jpg" className="w-1/3 rounded-2xl opacity-60 lg:block hidden shadow-2xl"></img>
            <div className="flex flex-col lg:pl-20 items-center lg:items-start">
                <h1 className="text-[#FFFBFE] font-bold text-4xl lg:text-6xl">PRIME PLUMBING</h1>
                <h1 className="text-[#FFFBFE] font-bold text-3xl lg:text-5xl mt-3 text-center">WE DO PLUMBING SO YOU CAN DO LIFE</h1>
            </div>
            <ChevronDoubleDownIcon className="h-16 absolute mt-80 lg:mt-96 text-white hover:scale-110 transition duration-200 ease-out cursor-pointer" />
        </div>
    );
}

export default Intro;