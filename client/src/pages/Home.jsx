function Home() {
    return (
        <div className="h-screen py-4 text-white bg-[#28293E]">
            <nav className="flex items-center justify-around font-epilogue">
                <div className="flex items-center gap-2">
                    <img src="./logo.png" alt="" className="w-12" />
                    <h4 className="font-bold text-2xl">IdeaFlux</h4>
                </div>
                <ul className="flex text-md gap-x-24">
                    <li>About</li>
                    <li>Services</li>
                    <li>Pricing</li>
                    <li>Blog</li>
                </ul>
                <button className="border font-bold border-[rgb(104,104,119)] rounded-lg px-9 py-3">CONTACT</button>
            </nav>
            <main className="flex mt-12 items-center justify-evenly">
                <div>
                    <p className="text-[#EF6D58] mb-4 tracking-widest">MODERN STUDIO</p>
                    <div>
                        <h1 className="w-[420px] relative h-[240px] z-20 font-bold text-6xl">We're Help To Build Your Dream Project</h1>
                        <img src="./star.png" alt="" className="z-10 absolute top-[33%] left-[30%] " />
                    </div>
                </div>
                <img src="./hero.png" alt="" className="w-120"/>
            </main>
        </div>  
    );
}

export default Home;
