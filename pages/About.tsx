import DetailBox from "@/components/DetailBox";

function About() {
    return (
        <div className="min-h-screen bg-[#FDF0E9] font-epilogue">
            <main className="flex flex-col ">
                <div className="mt-12 space-y-8 flex flex-col ">
                    <div className="flex justify-center">
                        <img
                            src="./slider.png"
                            alt=""
                            className="hidden lg:block"
                        />
                        <img
                            src="./logos.png"
                            alt=""
                            className="lg:hidden xs:block"
                        />
                    </div>
                    <div className="flex justify-center">
                        <hr className="h-px bg-[#F3D1BF] border-0 w-[75%] " />
                    </div>
                </div>

                <div className="flex max-lg:flex-col max-md:m-6 md:m-16 lg:flex-row justify-evenly mt-4">
                    <img src="/hero2.png" className="size-auto" alt="" />
                    <div className="mt-20 ">
                        <p className="text-[#EF6D58] mb-4 tracking-widest">
                            ABOUT
                        </p>
                        <h1 className="max-md:text-5xl md:text-6xl md:w-[8em] text-[#391400] font-bold">
                            An Experience Design Agency
                        </h1>
                        <p className="text-[#391400] mt-8 line-clamp-2 text-lg">
                            Provides a full service range
                        </p>
                        <p className="text-[rgba(57,20,0,0.64)] mt-8 md:w-[26em]">
                            Ability to put themselves in the merchant's shoes.
                            It is meant to partner on the long run, and work as
                            an extension of the merchant's team.
                        </p>
                        <button className="mt-8 bg-white rounded-lg px-8 py-3 text-[#391400] font-bold shadow-lg">
                            ABOUT US
                        </button>
                    </div>
                </div>
                <div className="flex max-md:flex-col md:flex-row justify-center mx-4">
                  <DetailBox number={42} text="Years of experience" sign="%" roundL />
                  <DetailBox number={73} text="Agency members" sign="+" noRound />
                  <DetailBox number={5.000} text="Projects complete" roundR />
                </div>

            </main>
        </div>
    );
}

export default About;
