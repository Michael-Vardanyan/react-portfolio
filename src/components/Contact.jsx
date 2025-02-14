import {motion} from "framer-motion";
import {FaGithub, FaLinkedinIn} from "react-icons/fa";
import {FiMail} from "react-icons/fi";
import {useTranslation} from "react-i18next";

const Contact = () => {
    const { t } = useTranslation();

    return (
        <section id="contact" className="border-b border-neutral-900 pb-20">
            <motion.h1
                whileInView={{opacity: 1, y: 0}}
                initial={{opacity: 0, y: -100}}
                transition={{duration: 0.5}}
                className="my-10 text-center text-4xl">{t("contact.message")}
            </motion.h1>
            <motion.div className="text-center items-center tracking-tighter">
                <motion.p
                    whileInView={{opacity: 1, x: 0}}
                    initial={{opacity: 1, x: -100}}
                    transition={{duration: 1}}
                    className="my-4">{t("contact.address")}</motion.p>
                <motion.p
                    whileInView={{opacity: 1, x: 0}}
                    initial={{opacity: 1, x: 100}}
                    transition={{duration: 1}}
                    className="my-4">{t("contact.email")}</motion.p>
                <motion.div
                    whileInView={{opacity: 1, x: 0}}
                    initial={{opacity: 1, x: -100}}
                    transition={{duration: 1}}
                    className="flex justify-center gap-6 mt-6">
                    <a href="https://www.linkedin.com/in/michael-vardanyan-6990b732a/" target="_blank">
                    <FaLinkedinIn
                        className="text-4xl transition-all duration-300 ease-in-out hover:scale-150 hover:bg-blue-500 hover:p-3 hover:rounded-full"/>
                    </a>
                    <a href="https://github.com/Michael-Vardanyan" target="_blank">
                    <FaGithub
                        className="text-4xl transition-all duration-300 ease-in-out hover:scale-150 hover:bg-gray-700 hover:p-3 hover:rounded-full"/>
                    </a>
                    <a href="mailto:hello@bymichael.dev">
                    <FiMail
                        className="text-4xl transition-all duration-300 ease-in-out hover:scale-150 hover:bg-red-500 hover:p-3 hover:rounded-full"/>
                    </a>
                </motion.div>
            </motion.div>
        </section>
    )
}

export default Contact;