import DetailBox from "../components/DetailBox";
import TextBox from "../components/TextBox";

function About() {
    return (
        <div className="overflow-x-hidden py-4 bg-[#FDF0E9] font-epilogue">
            <main className="flex flex-col ">
                <div className="mt-12 space-y-8 flex flex-col ">
                    <div className="mx-4 flex justify-center">
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

                <div className="flex max-lg:flex-col m-6 lg:flex-row justify-center gap-x-10">
                    <img
                        src="/hero2.png"
                        className="w-full lg:w-auto lg:max-w-[50%] h-auto"
                        alt="Hero Image"
                    />
                    <div className="mt-20 max-lg:mx-auto max-lg:flex-col max-lg:justify-center max-lg:items-center">
                        <p className="text-[#EF6D58] mb-4 tracking-widest">
                            ABOUT ME
                        </p>
                        <h1 className="max-md:text-5xl md:text-6xl text-[#391400] font-bold">
                            Shayan Zaheer
                            <br /> Full Stack
                            <br /> Developer
                        </h1>
                        <p className="text-[#391400] mt-8 line-clamp-2 text-lg">
                            Passionate about coding and innovation
                        </p>
                        <p className="text-[rgba(57,20,0,0.64)] mt-8">
                            Specializing in creating scalable web applications
                            <br /> with modern technologies and best practices
                        </p>
                        <button className="mt-8 bg-white rounded-lg px-8 py-3 text-[#391400] font-bold shadow-lg mx-auto max-lg:flex max-lg:justify-center max-lg:items-center">
                            MY SKILLS
                        </button>
                    </div>
                </div>
                <div className="flex max-md:flex-col md:flex-row justify-center mx-4">
                    <DetailBox
                        number={42}
                        text="Projects completed"
                        sign="+"
                        roundL
                    />
                    <DetailBox
                        number={73}
                        text="Code commits"
                        sign="K"
                        noRound
                    />
                    <DetailBox number={2} text="Years experience" roundR />
                </div>
                <div className="flex max-lg:flex-col max-md:m-6 md:mx-16 lg:flex-row justify-evenly mt-6 ">
                    <div className="mt-10 mx-auto">
                        <p className="text-[#EF6D58] mb-4 tracking-widest">
                            MY APPROACH
                        </p>
                        <h1 className="max-md:text-5xl md:text-6xl text-[#391400] font-bold">
                            Crafting Your
                            <br /> Digital
                            <br /> Solutions
                        </h1>
                        <p className="text-[#391400] mt-8 line-clamp-2">
                            Clean code, responsive design, and
                            <br />
                            robust functionality
                        </p>
                        <button className="mt-8 bg-none text-[#391400]">
                            Read More
                        </button>
                    </div>
                    <div className="max-lg:mt-8 lg:mt-20 mx-auto">
                        <TextBox
                            number={1}
                            text="Front-end development"
                            extra
                        />
                        <TextBox
                            number={2}
                            text="Back-end architecture"
                        />
                        <TextBox
                            number={3}
                            text="Database management"
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