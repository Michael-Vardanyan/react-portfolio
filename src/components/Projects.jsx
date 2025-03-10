import {motion} from "framer-motion";
import {useTranslation} from "react-i18next";

const Projects = () => {
    const { t } = useTranslation();
    const projects = t('projects', { returnObjects: true });

    return <section id="projects" className="border-b border-neutral-900 pb-4">
        <motion.h2
            whileInView={{opacity: 1, y: 0}}
            initial={{opacity: 0, y: -100}}
            transition={{duration: 0.5}}
            className="my-20 text-center text-4xl">{t("projects-title")}
        </motion.h2>
        <div>
            {projects.map((project, index) => (
                <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                    <motion.div
                        whileInView={{opacity: 1, x: 0}}
                        initial={{opacity: 0, x: -100}}
                        transition={{duration: 1}}
                        className="w-full lg:w-1/4">
                        <a href={project.link} target="_blank">
                            <img
                                src={project.image}
                                width={150}
                                height={150}
                                alt={project.title}
                                className="mb-6 rounded scale-105 transition-all duration-300 hover:scale-110"
                            />
                        </a>
                    </motion.div>
                    <motion.div
                        whileInView={{opacity: 1, x: 0}}
                        initial={{opacity: 0, x: 100}}
                        transition={{duration: 1}}
                        className="w-full max-w-xl lg:w-3/4">
                        <h6 className="mb-2 font-semibold">{project.title}</h6>
                        <p className="mb-4 text-neutral-400">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, index) => (
                                <span key={index}
                                      className="mr-2 rounded dark:bg-neutral-400 bg-neutral-900 px-2 py-1 text-sm font-medium dark:text-purple-900 text-blue-200">
                                {tech}</span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            ))}
        </div>
    </section>
}

export default Projects;