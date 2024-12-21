import Navbar from "@/components/Navbar";

function Home() { 
    return (
        <div className="overflow-x-hidden min-h-screen py-4 text-white bg-[#28293E]">
            <Navbar />
            <main className="flex max-lg:flex-col-reverse max-md:m-6 md:m-16 lg:flex-row justify-around">
                <div className="relative">
                    <p className="text-[#EF6D58] mb-4 tracking-widest">
                        MODERN STUDIO
                    </p>
                    <div>
                        <h1 className="font-epilogue max-md:text-5xl md:text-6xl md:w-[8em] font-bold z-20 relative">
                            We're Help To Build Your Dream Project
                        </h1>
                        <img
                            src="./star.png"
                            alt=""
                            className="z-0 absolute top-0 right-5"
                        />
                    </div>
                    <p className="text-[#B2B2BA] mt-8 md:w-[26em] font-epilogue">
                        Agency provides a full serive range including technical
                        skills, design, business understanding.
                    </p>
                    <div className="flex mt-8 font-epilogue gap-8">
                        <button className="bg-[#EF6D58] rounded-lg px-4 py-3 font-bold">
                            HOW WE WORK
                        </button>
                        <p className="bg-none px-4 py-3">Contact Us</p>
                    </div>
                <div className="flex max-lg:mt-12 lg:mt-40 gap-x-4 font-epilogue">
                    <img src="Bitmap.png" className="w-12 h-12" alt="" />
                    <div>
                    <p className="text-[#B2B2BA]">
                        "Put themselves in the merchant's shoes"
                    </p>
                    <p className="text-white ml-1">Meta Inc.</p>
                    </div>
                </div>
                </div>
                <div className="flex items-center justify-center">
                    <img src="./hero.png" className="w-min" alt="" />
                </div>
            </main>
        </div>
    );
}

export default Home;
