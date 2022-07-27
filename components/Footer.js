function Footer() {
    return (
        <div className="bg-gray-800 pt-20 pb-20 flex flex-col items-center">
            <h1 className="text-white font-bold text-3xl lg:text-4xl text-center">FIXING YOUR PLUMBING PROBLEM IS OUR JOB</h1>
            <h1 className="text-white font-bold text-2xl lg:text-4xl">(AND WE LOVE WHAT WE DO)</h1>
            <h1 className="text-white font-semibold pt-10 text-2xl">01223 247795</h1>
            <h1 className="text-gray-400 font-semibold pt-10 text-xl">Give us a call or drop us an email</h1>
            <input className="bg-gray-800 border-b mt-10 w-4/5 lg:w-1/5" placeholder="Name..."></input>
            <input className="bg-gray-800 border-b mt-4 w-4/5 lg:w-1/5" placeholder="Email..."></input>
            <input className="bg-gray-800 border-b mt-10 w-4/5 lg:w-1/5 h-20" placeholder="Message..."></input>
            <button className="bg-white text-gray-800 px-2 py-1 rounded-md font-bold mt-5 hover:scale-110 transition duration-200 ease-out">SEND</button>
        </div>
    );
}

export default Footer;