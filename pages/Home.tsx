import Navbar from "@/components/Navbar";

function Home() {
    return (
        <div className="overflow-x-hidden min-h-screen py-4 text-white bg-[#28293E] font-epilogue">
            <Navbar />
            <main className="flex max-lg:flex-col-reverse max-md:m-6 md:m-16 lg:flex-row justify-around gap-x-12">
                <div className="relative mt-8 max-lg:mx-auto">
                    <p className="text-[#EF6D58] mb-4 tracking-widest">
                        MODERN STUDIO
                    </p>
                    <div>
                        <h1 className="font-epilogue max-md:text-5xl md:text-6xl font-bold z-20 relative">
                            We're Help<br /> To Build Your<br /> Dream Project
                        </h1>
                        <img
                            src="./star.png"
                            alt=""
                            className="z-0 absolute top-0 left-56"
                        />
                    </div>
                    <p className="text-[#B2B2BA] mt-8 font-epilogue">
                        Agency provides a full serive range including<br /> technical
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
                <div className="max-lg:flex max-lg:justify-center max-lg:items-center">
                    <img src="./hero.png" className="w-min" alt="" />
                </div>
            </main>
        </div>
    );
}

export default Home;
