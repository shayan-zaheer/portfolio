import DetailBox from "@/components/DetailBox";
import TextBox from "@/components/TextBox";

function About() {
    return (
        <div className="overflow-x-hidden py-4 bg-[#FDF0E9] font-epilogue">
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

                <div className="flex max-lg:flex-col mx-10 max-lg:m-6 lg:m-16 lg:flex-row justify-around gap-x-12">
                    <img src="/hero2.png" className="mx-auto max-lg:flex max-lg:justify-center max-lg:items-center" alt="" />
                    <div className="mt-20 max-lg:mx-auto max-lg:flex-col max-lg:justify-center max-lg:items-center">
                        <p className="text-[#EF6D58] mb-4 tracking-widest">
                            ABOUT
                        </p>
                        <h1 className="max-md:text-5xl md:text-6xl text-[#391400] font-bold">
                            An Experience<br /> Design Agency
                        </h1>
                        <p className="text-[#391400] mt-8 line-clamp-2 text-lg">
                            Provides a full service range
                        </p>
                        <p className="text-[rgba(57,20,0,0.64)] mt-8">
                            Ability to put themselves in the merchant's shoes.
                            It<br /> is meant to partner on the long run, and work as
                            an<br /> extension of the merchant's team.
                        </p>
                        <button className="mt-8 bg-white rounded-lg px-8 py-3 text-[#391400] font-bold shadow-lg mx-auto max-lg:flex max-lg:justify-center max-lg:items-center">
                            ABOUT US
                        </button>
                    </div>
                </div>
                <div className="flex max-md:flex-col md:flex-row justify-center mx-4">
                    <DetailBox
                        number={42}
                        text="Years of experience"
                        sign="%"
                        roundL
                    />
                    <DetailBox
                        number={73}
                        text="Agency members"
                        sign="+"
                        noRound
                    />
                    <DetailBox number={5.0} text="Projects complete" roundR />
                </div>
                <div className="flex max-lg:flex-col max-md:m-6 md:mx-16 lg:flex-row justify-evenly mt-6 ">
                    <div className="mt-10 mx-auto">
                        <p className="text-[#EF6D58] mb-4 tracking-widest">
                            HOW WE WORK
                        </p>
                        <h1 className="max-md:text-5xl md:text-6xl text-[#391400] font-bold">
                            Making Your<br /> Projects Look<br /> Awesome
                        </h1>
                        <p className="text-[#391400] mt-8 line-clamp-2">
                            Technical skills, design, business understanding,<br />
                            ability to put themselves in the merchant's shoes.
                        </p>
                        <button className="mt-8 bg-none  text-[#391400]">
                            Read More
                        </button>
                    </div>
                    <div className="max-lg:mt-8 lg:mt-20 mx-auto">
                        <TextBox
                            number={1}
                            text="Full service range including"
                            extra
                        />
                        <TextBox
                            number={2}
                            text="Technical skills, design, business"
                        />
                        <TextBox
                            number={3}
                            text="Themsleves in the merchant's"
                        />
                    </div>
                </div>

                <div className="flex justify-center mt-6">
                    <hr className="h-px bg-[#F3D1BF] border-0 w-[75%] " />
                </div>
            </main>
        </div>
    );
}

export default About;

