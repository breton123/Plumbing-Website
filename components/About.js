function About() {
    return (
        <div>
            <div className="grid xl:grid-cols-2 pt-20 pb-10">
                <div className="flex flex-col items-center xl:items-start 2xl:pl-96 xl:pr-40">
                    <h1 className="text-gray-800 font-bold text-4xl">PRIME</h1>
                    <h1 className="text-gray-800 font-bold text-4xl">PLUMBING</h1>
                    <p className="mt-5 font-medium text-gray-800">We are a locally owned plumbing company based in Phoenix, AZ. We have over 15 years of experience and can tackle any plumbing need, small or large jobs, from clogged drains to complete re-pipes and remodels. We pride ourselves on being clean and tidy. We always wear booties when entering the home and make sure everything is cleaned up before we leave. Call us to come out and give a free estimate on any plumbing need you have.</p>
                    <h1 className="font-bold text-gray-800 mt-5">There's no charge until you say go.</h1>
                    <p className="mt-5 font-medium">We service all areas of the valley including but not limited to: Mesa, Chandler, Gilbert, Ahwatukee, Tempe, Scottsdale, Arcadia, Paradise Valley, Glendale, Peoria, Buckeye, Avondale, Sun City and Sun City West.</p>
                </div>
                <img src="Images/van.jpg" className="hidden xl:block w-3/5 shadow-xl"></img>
            </div>
            <div className="grid xl:grid-cols-2 pt-20 pb-40">
                <div className="flex justify-center ml-60">
                    <img src="Images/man.png" className="hidden xl:block w-2/3 shadow-xl translate-x-5 object-cover"></img>
                </div>
                <div className="flex flex-col items-center xl:items-start 2xl:pr-96">
                    <h1 className="text-gray-800 font-bold text-4xl">STEVE</h1>
                    <h1 className="text-gray-800 font-bold text-4xl">SHORLEY</h1>
                    <p className="mt-5 font-medium text-gray-800">We are a locally owned plumbing company based in Phoenix, AZ. We have over 15 years of experience and can tackle any plumbing need, small or large jobs, from clogged drains to complete re-pipes and remodels. We pride ourselves on being clean and tidy. We always wear booties when entering the home and make sure everything is cleaned up before we leave. Call us to come out and give a free estimate on any plumbing need you have.</p>
                    <h1 className="font-bold text-gray-800 mt-5 pb-20">I will handle any task professionally</h1>
                </div>
            </div>
        </div>
    );
}

export default About;