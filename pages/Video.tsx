function Video() {
    return (
        <div className="min-h-screen bg-[#FDF0E9] font-epilogue ">
            <div className="flex max-lg:flex-col max-lg:mx-6 lg:mx-16 gap-x-20 lg:flex-row justify-center">
                <div className="relative my-4">
                    <img
                        src="/photo-bg.png"
                        className="w-full h-auto"
                        alt="Background"
                    />
                    <img
                        src="/play.png"
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                        alt="Play"
                    />
                    <img
                        src="/time.png"
                        className="absolute top-5 left-5"
                        alt="Time"
                    />
                </div>

                <div className="flex flex-col justify-center">
                    <p className="text-[#EF6D58] mb-4 tracking-widest">
                        VIDEO REEL
                    </p>
                    <h1 className="max-md:text-5xl md:text-6xl md:w-[8em] text-[#391400] font-bold">
                        Unlock The Greatest Value Possible
                    </h1>
                    <p className="text-[rgba(57,20,0,0.64)] mt-8 md:w-[30em]">
                        Design, business understanding, ability to put
                        themselves in the merchant's shoes meant to partner.
                    </p>
                </div>

            </div>
        </div>
    );
}

export default Video;
