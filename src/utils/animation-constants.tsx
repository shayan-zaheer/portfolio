export const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
        opacity: 1, 
        x: 0,
        transition: { 
            duration: 0.8,
            ease: "easeOut"
        }
    }
};

export const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
        opacity: 1, 
        x: 0,
        transition: { 
            duration: 0.8,
            ease: "easeOut",
            delay: 0.2
        }
    }
};