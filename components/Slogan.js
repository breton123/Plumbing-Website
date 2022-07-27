function Slogan() {
    return (
        <div className="grid lg:grid-cols-2 bg-gray-800">
            <div className="p-10 lg:block hidden">
                <img src="Images/slogan.png" className="shadow-2xl"></img>
            </div>
            <div className="flex flex-col items-center pt-52 pb-40">
                <h1 className="text-white font-bold text-3xl text-center">WE TREAT YOUR HOME LIKE OUR HOME</h1>
                <h1 className="text-white font-medium text-xl w-2/3 text-center pt-5"> We pride ourselves on being neat and clean. Your satisfaction and peace of mind is our top priority. </h1>
            </div>
        </div>
    );
}

export default Slogan;