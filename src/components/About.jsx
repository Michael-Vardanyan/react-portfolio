import aboutImg from "../assets/about.png";
import {motion} from "framer-motion";
import {useTranslation} from "react-i18next";

const About = () => {
    const { t } = useTranslation();


    return <section id="about" className="border-b border-neutral-900 pb-4">
        <motion.h2
            whileInView={{opacity: 1, y: 0}}
            initial={{opacity: 0, y: -100}}
            transition={{duration: 0.5}}
            className="my-20 text-center text-4xl">
            {t("about-me-title-1")}
            <span className="bg-clip-text bg-gradient-to-r dark:from-violet-500 dark:to-fuchsia-500 from-blue-500 to-blue-700 tracking-tight text-transparent">{t("about-me-title-2")}</span>
        </motion.h2>
        <div className="flex flex-wrap">
            <motion.div
                whileInView={{opacity: 1, x: 0}}
                initial={{opacity: 0, x: -100}}
                transition={{duration: 0.5}}
                className="w-full lg:w-1/2 lg:p-8">
                <div className="flex items-center justify-center">
                    <img className="rounded-2xl" src={aboutImg} alt="about"/>
                </div>
            </motion.div>
            <motion.div
            whileInView={{opacity: 1, x: 0}}
            initial={{opacity: 0, x: 100}}
            transition={{duration: 0.5}}
                className="w-full lg:w-1/2">
                <div className="flex justify-center lg:justify-start">
                    <p className="my-2 max-w-xl py-6">{t("about_text")}</p>
                </div>
            </motion.div>
        </div>
    </section>
}

export default About;