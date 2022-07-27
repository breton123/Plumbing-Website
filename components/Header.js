import { useState, useEffect } from "react"

function Header() {
    const [activeSection, setActiveSection] = useState(0);
    const [scrollHeight, setScrollHeight] = useState(0);
    
    function setBar() {
        if(scrollHeight >= 0 && scrollHeight < 500) {
            setActiveSection(1);
        }
        else if(scrollHeight >= 500 && scrollHeight < 1780) {
            setActiveSection(2);
        }
        else if(scrollHeight >= 1780 && scrollHeight < 3000) {
            setActiveSection(3);
        }
        else if(scrollHeight >= 3000) {
            setActiveSection(4);
        }
    }

    useEffect(() => {
        function onScroll() {
            setScrollHeight(window.pageYOffset);
        }
        window.addEventListener("scroll",onScroll);
    }, [])

    useEffect(() => {
        setBar();
        console.log(scrollHeight);
    }, [scrollHeight])

    return (
        <div className="bg-gray-800 bg-opacity-50 fixed top-0 py-5 w-screen flex justify-center lg:justify-between lg:px-60 shadow-xl backdrop-blur-sm">
            <div className="flex space-x-5">
                <h1 className={`${activeSection==1 ? "text-[#F06543]" : ""} font-semibold hover:text-[#F06543] text-white cursor-pointer transition duration-300 ease-out`}>HOME</h1>
                <h1 className={`${activeSection==2 ? "text-[#F06543]" : ""} font-semibold hover:text-[#F06543] text-white cursor-pointer transition duration-300 ease-out`}>SERVICES</h1>
                <h1 className={`${activeSection==3 ? "text-[#F06543]" : ""} font-semibold hover:text-[#F06543] text-white cursor-pointer transition duration-300 ease-out`}>ABOUT</h1>
                <h1 className={`${activeSection==4 ? "text-[#F06543]" : ""} font-semibold hover:text-[#F06543] text-white cursor-pointer transition duration-300 ease-out`}>CONTACT</h1>
            </div>
            <div className="hidden space-x-4 lg:flex">
                <h1 className="text-[#F06543] font-bold text-xl">FREE QUOTE</h1>
                <h1 className="font-bold text-xl text-white">01223 247795</h1>
            </div>
        </div>
    );
}

export default Header;