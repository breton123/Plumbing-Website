import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/solid"
import { useState } from "react"

function Services() {
    const [bathrooms, setBathrooms] = useState(false);
    const [kitchens, setKitchens] = useState(false);

    return (
        <div className="pt-20 flex flex-col items-center pb-20">
            <h1 className="text-gray-800 font-bold text-4xl lg:w-1/2 text-center">IF IT HAS ANYTHING TO DO WITH PLUMBING, WE'VE GOT YOU COVERED</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-10">
                <div className="flex flex-col items-center">
                    <img src="Images/plumb2.jpg" className="w-3/4 h-80 object-cover shadow-xl"></img>
                    <h1 className="text-gray-800 font-bold text-center text-3xl mt-3">BATHROOMS</h1>
                    <h1 className="text-gray-800 font-medium text-center text-sm mt-2">REMODELS</h1>
                    <h1 className="text-gray-800 font-medium text-center text-sm">REPAIRS & REPLACEMENTS</h1>
                    <h1 className="text-gray-800 font-medium text-center text-sm">INSTALLATIONS</h1>
                    <ChevronDownIcon onClick={() => {setBathrooms(true)}} className={`${!bathrooms ? "opacity-100" : "hidden"} fill-gray-800 h-8 hover:translate-y-2 transition duration-300 ease-out cursor-pointer`} />
                    <h1 className={`${!bathrooms ? "hidden" : "opacity-100"} text-gray-800 font-medium text-center text-sm transition duration-100 ease-out`}>TOILETS, SINKS & TUBS</h1>
                    <h1 className={`${!bathrooms ? "hidden" : "opacity-100"} text-gray-800 font-medium text-center text-sm transition duration-100 ease-out`}>FAUCETS & VALVES</h1>
                    <h1 className={`${!bathrooms ? "hidden" : "opacity-100"} text-gray-800 font-medium text-center text-sm transition duration-100 ease-out`}>SEWER JETTING & CAMERA</h1>
                    <h1 className={`${!bathrooms ? "hidden" : "opacity-100"} text-gray-800 font-medium text-center text-sm transition duration-100 ease-out`}>PIPES</h1>
                    <h1 className={`${!bathrooms ? "hidden" : "opacity-100"} text-gray-800 font-medium text-center text-sm transition duration-100 ease-out`}>LEAKS & CLOGS</h1>
                    <h1 className={`${!bathrooms ? "hidden" : "opacity-100"} text-gray-800 font-medium text-center text-sm transition duration-100 ease-out`}>WATER PRESSURE</h1>
                    <ChevronUpIcon onClick={() => {setBathrooms(false)}} className={`${!bathrooms ? "hidden" : "opacity-100"} mt-2 fill-gray-800 h-8 hover:-translate-y-2 transition duration-300 ease-out cursor-pointer`} />
                </div>
                <div className="flex flex-col items-center">
                    <img src="Images/kithcen.jpg" className="w-3/4 h-80 object-cover shadow-xl"></img>
                    <h1 className="text-gray-800 font-bold text-center text-3xl mt-3">KITCHENS</h1>
                    <h1 className="text-gray-800 font-medium text-center text-sm mt-2">REMODELS</h1>
                    <h1 className="text-gray-800 font-medium text-center text-sm">REPAIRS & REPLACEMENTS</h1>
                    <h1 className="text-gray-800 font-medium text-center text-sm">INSTALLATIONS</h1>
                    <ChevronDownIcon onClick={() => {setKitchens(true)}} className={`${!kitchens ? "opacity-100" : "hidden"} fill-gray-800 h-8 hover:translate-y-2 transition duration-300 ease-out cursor-pointer`} />
                    <h1 className={`${!kitchens ? "hidden" : "opacity-100"} text-gray-800 font-medium text-center text-sm transition duration-100 ease-out`}>SINKS & FAUCETS</h1>
                    <h1 className={`${!kitchens ? "hidden" : "opacity-100"} text-gray-800 font-medium text-center text-sm transition duration-100 ease-out`}>GARBAGE DISPOSALS</h1>
                    <h1 className={`${!kitchens ? "hidden" : "opacity-100"} text-gray-800 font-medium text-center text-sm transition duration-100 ease-out`}>REVERSE OSMOSIS SYSTEMS</h1>
                    <h1 className={`${!kitchens ? "hidden" : "opacity-100"} text-gray-800 font-medium text-center text-sm transition duration-100 ease-out`}>INSTA-HOT</h1>
                    <h1 className={`${!kitchens ? "hidden" : "opacity-100"} text-gray-800 font-medium text-center text-sm transition duration-100 ease-out`}>REPIPES</h1>
                    <h1 className={`${!kitchens ? "hidden" : "opacity-100"} text-gray-800 font-medium text-center text-sm transition duration-100 ease-out`}>LEAKS & CLOGS</h1>
                    <ChevronUpIcon onClick={() => {setKitchens(false)}} className={`${!kitchens ? "hidden" : "opacity-100"} mt-2 fill-gray-800 h-8 hover:-translate-y-2 transition duration-300 ease-out cursor-pointer`} />
                </div>
                <div className="flex flex-col items-center">
                    <img src="Images/home.jpg" className="w-3/4 h-80 object-cover shadow-xl"></img>
                    <h1 className="text-gray-800 font-bold text-center text-3xl mt-3">HOME</h1>
                    <h1 className="text-gray-800 font-medium text-center text-sm mt-2">CAMERA SEWER LINE</h1>
                    <h1 className="text-gray-800 font-medium text-center text-sm">REPAIRS & REPLACEMENTS</h1>
                    <h1 className="text-gray-800 font-medium text-center text-sm">INSTALLATIONS</h1>
                    <ChevronDownIcon onClick={() => {setKitchens(true)}} className={`${!kitchens ? "opacity-100" : "hidden"} fill-gray-800 h-8 hover:translate-y-2 transition duration-300 ease-out cursor-pointer`} />
                    <h1 className={`${!kitchens ? "hidden" : "opacity-100"} text-gray-800 font-medium text-center text-sm transition duration-100 ease-out`}>SEWER, WATER & GAS LINES</h1>
                    <h1 className={`${!kitchens ? "hidden" : "opacity-100"} text-gray-800 font-medium text-center text-sm transition duration-100 ease-out`}>WATER  HEATERS (TANK & TANKLESS)</h1>
                    <h1 className={`${!kitchens ? "hidden" : "opacity-100"} text-gray-800 font-medium text-center text-sm transition duration-100 ease-out`}>RECIRCULATING PUMPS</h1>
                    <h1 className={`${!kitchens ? "hidden" : "opacity-100"} text-gray-800 font-medium text-center text-sm transition duration-100 ease-out`}>WATER FILTRATION SYSTEMS</h1>
                    <h1 className={`${!kitchens ? "hidden" : "opacity-100"} text-gray-800 font-medium text-center text-sm transition duration-100 ease-out`}>SEWER JETTING & CAMERA</h1>
                    <h1 className={`${!kitchens ? "hidden" : "opacity-100"} text-gray-800 font-medium text-center text-sm transition duration-100 ease-out`}>LEAKS & CLOGS</h1>
                    <ChevronUpIcon onClick={() => {setKitchens(false)}} className={`${!kitchens ? "hidden" : "opacity-100"} mt-2 fill-gray-800 h-8 hover:-translate-y-2 transition duration-300 ease-out cursor-pointer`} />
                </div>
            </div>
            <h1 className="text-gray-800 font-bold text-3xl mt-20">AND MORE!</h1>
        </div>
    );
}

export default Services;