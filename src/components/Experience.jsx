import {motion} from "framer-motion";
import {useTranslation} from "react-i18next";

const Experience = () => {

    const {t} = useTranslation();
    const experiences = t('experiences', { returnObjects: true });


    return (
        <section id="experience" className="border-b border-neutral-900 pb-4">
            <motion.h2
                whileInView={{opacity: 1, y: 0}}
                initial={{opacity: 0, y: -100}}
                transition={{duration: 0.5}}
                className="my-20 text-center text-4xl">{t("experiences-title")}
            </motion.h2>
            <div>
                {experiences.map((experience, index) => (
                    <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                        <motion.div
                            whileInView={{opacity: 1, x: 0}}
                            initial={{opacity: 0, x: -100}}
                            transition={{duration: 1}}
                            className="w-full lg:w-1/4">
                            <p className="mb-2 text-sm dark:text-neutral-400 text-neutral-700">{experience.year}</p>
                        </motion.div>
                        <motion.div
                            whileInView={{opacity: 1, x: 0}}
                            initial={{opacity: 0, x: 100}}
                            transition={{duration: 1}}
                            className="w-full max-w-xl lg:w-3/4">
                            <h6 className="mb-2 font-semibold">
                                {experience.role} - {" "}
                                <span className="text-sm dark:text-purple-300 text-blue-500">
                                    <a href={experience.company.link} target="_blank">{experience.company.name}</a>
                                </span>
                            </h6>
                            <p className="mb-4 dark:text-neutral-400 text-neutral-600">{experience.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {experience.technologies.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="rounded dark:bg-neutral-400 bg-neutral-900 px-2 py-1 text-sm font-medium dark:text-purple-800 text-blue-200 break-words"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Experience;