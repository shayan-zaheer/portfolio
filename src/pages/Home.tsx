import Navbar from "../components/Navbar";
import { imageVariants, textVariants } from "../utils/animation-constants";
import { motion } from "framer-motion";

function Home() {
    return (
        <div className="overflow-x-hidden min-h-screen py-4 text-white bg-[#28293E] font-epilogue">
            <Navbar />
            <main className="flex max-lg:flex-col-reverse max-md:m-6 md:m-16 lg:flex-row justify-around gap-x-12">
                <motion.div 
                    className="relative mt-8 max-lg:mx-auto"
                    initial="hidden"
                    animate="visible"
                    variants={textVariants}
                >
                    <motion.p 
                        className="text-[#EF6D58] mb-4 tracking-widest"
                        variants={textVariants}
                    >
                        FULL STACK DEVELOPER
                    </motion.p>
                    <div>
                        <motion.h1 
                            className="font-epilogue max-md:text-5xl md:text-6xl font-bold z-20 relative"
                            variants={textVariants}
                        >
                            Shayan Zaheer<br /> - Building Your<br /> Web Vision
                        </motion.h1>
                        <img
                            src="./star.png"
                            alt=""
                            className="z-0 absolute top-0 left-56"
                        />
                    </div>
                    <motion.p 
                        className="text-[#B2B2BA] mt-8 font-epilogue"
                        variants={textVariants}
                    >
                        Crafting robust web solutions with expertise in<br />
                        front-end and back-end development
                    </motion.p>
                    <motion.div 
                        className="flex mt-8 font-epilogue gap-8"
                        variants={textVariants}
                    >
                        <button className="bg-[#EF6D58] rounded-lg px-4 py-3 font-bold">
                            MY WORK
                        </button>
                        <p className="bg-none px-4 py-3">Contact Me</p>
                    </motion.div>
                    <motion.div 
                        className="flex max-lg:mt-12 lg:mt-40 gap-x-4 font-epilogue"
                        variants={textVariants}
                    >
                        <img src="Bitmap.png" className="w-12 h-12" alt="" />
                        <div>
                            <p className="text-[#B2B2BA]">
                                "Exceptional coding skills and dedication"
                            </p>
                            <p className="text-white ml-1">Previous Client</p>
                        </div>
                    </motion.div>
                </motion.div>
                <motion.div 
                    className="max-lg:flex max-lg:justify-center max-lg:items-center"
                    initial="hidden"
                    animate="visible"
                    variants={imageVariants}
                >
                    <img src="./hero.png" className="w-min" alt="" />
                </motion.div>
            </main>
        </div>
    );
}

export default Home;