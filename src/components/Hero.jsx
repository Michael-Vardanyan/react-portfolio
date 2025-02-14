import profilePic from "../assets/me.png"
import {motion} from "framer-motion";
import {useTranslation} from "react-i18next";

const container = (delay) => ({
    hidden: {x: -100, opacity: 0},
    visible: {
        x: 0,
        opacity: 1,
        transition: {duration: 0.5, delay: delay}
    }
})

const Hero = () => {

    const {t} = useTranslation();

    return <div className="border-neural-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <motion.h1
                        variants={container(0)}
                        initial="hidden"
                        animate="visible"
                        className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
                    >
                        Michael Vardanyan
                    </motion.h1>
                </div>
                <motion.span
                    variants={container(0.5)}
                    initial="hidden"
                    animate="visible"
                    className="bg-clip-text bg-gradient-to-r dark:from-violet-500 dark:to-fuchsia-500 from-blue-500 to-blue-700 text-3xl tracking-tight text-transparent">
                    {t("hero_title")}
                </motion.span>
                <motion.p
                    variants={container(1)}
                    initial="hidden"
                    animate="visible"
                    className="my-2 max-w-xl py-6 tracking-tighter">
                    {t("hero_content")}
                </motion.p>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex justify-center">
                    <motion.img
                        initial={{x: 100, opacity: 0}}
                        animate={{x: 0, opacity: 1}}
                        transition={{duration: 1, delay: 1.2}}
                        src={profilePic}
                        alt="Michael Vardanyan"
                        className="me rounded-2xl blur-0"
                    />
                </div>
            </div>
        </div>
    </div>
}

export default Hero;