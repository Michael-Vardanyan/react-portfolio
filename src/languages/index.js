import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a dedicated Junior Java Backend Developer with a strong drive to master the intricacies of backend systems and architecture. With a focus on building efficient, scalable, and maintainable applications, I am committed to deepening my expertise in Java and related technologies. My goal is to develop high-quality solutions that not only meet technical requirements but also enhance overall system performance and reliability. Consistency and continuous learning are at the core of my approach, as I strive to evolve into an expert in the field and contribute to impactful projects.`;

export const ABOUT_TEXT = `I am a dedicated Java backend developer with a passion for building robust, scalable, and high-performance applications. My journey into software development started with a curiosity for how systems work behind the scenes, evolving into a focused career where I strive to master the complexities of Java backend technologies. I’m committed to continuous learning and growth, consistently deepening my understanding of backend architecture and best practices. I enjoy tackling challenging problems, optimizing system performance, and contributing to projects that make a real impact. Outside of coding, I’m into weighted calisthenics, always pushing my limits with smaller reps, and exploring ways to balance productivity with personal well-being.`;

export const EXPERIENCES = [{
    year: "2024 - Present",
    role: "Junior Java Backend Developer",
    company: {
        name: "nexnet GmbH", link: "https://www.nexnet.de/"
    },
    description: `As a Junior Java Backend Developer, I am responsible for developing and maintaining Java backend applications using Spring Boot. My role includes creating and integrating RESTful APIs, ensuring code quality through unit and integration tests, and working within agile project teams. Additionally, I conduct code reviews to maintain high standards of code quality and maintainability.`,
    technologies: ["Java", "Spring", "SQL", "Maven", "Git", "Docker", "Postman", "Bamboo"],
}, {
    year: "2021 - 2024",
    role: "Apprenticeship as a Software Developer",
    company: {
        name: "nexnet GmbH", link: "https://www.nexnet.de/"
    },
    description: `During my apprenticeship as a Software Developer, I gained in-depth knowledge of Java, Spring, SQL, and modern development tools such as Maven, Git, Docker, and Postman. My work involved both backend and frontend development, contributing to real world projects, with a strong focus on testing (JUnit), security concepts, UI/UX design principles, and project management methodologies.`,
    technologies: ["Java", "Spring", "Maven", "SQL", "Hibernate", "JasperReports", "Docker", "Git", "Postman", "Bamboo"],
}, {
    year: "2019 - 2021",
    role: "Embedded Systems (B.Eng.)",
    company: {
        name: "Berliner Hochschule für Technik", link: "https://www.bht-berlin.de/"
    },
    description: `This period, although relatively short, was incredibly significant in my life. It provided me with a deep insight into what I truly wanted to do and set me on the path to pursue programming as a career. It was the one module that captivated me, keeping me up late into the night, driven by a sense of purpose and excitement. During this time, I started working with C, which helped me build a strong foundational understanding of programming. It was the spark that ignited my passion for coding and laid the groundwork for everything that followed.`,
    technologies: ["C", "Digital Systems"],
}, {
    year: "2016 - 2019",
    role: "Staatlich geprüfte(r) elektrotechnische(r) Assistent(in) Schwerpunkt: Elektronik und Datentechnik",
    company: {
        name: "Hein-Moeller-Schule", link: "https://www.hein-moeller-schule.de/"
    },
    description: `This marked the beginning of my programming journey. I started with C++, working on a variety of small projects that helped me build a solid foundation. I was also introduced to web development, where I created a project website for a fictitious startup using HTML and CSS. This experience sparked my interest in databases, leading me to explore SQL and PHP for data manipulation and backend development.`,
    technologies: ["HTML", "CSS", "SQL", "PHP", "C++"],
}];

export const PROJECTS = [{
    title: "Portfolio Website",
    image: project1,
    link: "https://bymichael.dev",
    description: "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["Vite", "React", "Tailwind"],
}, {
    title: "URL Shortener",
    image: project2,
    link: "https://url-shortener.bymichael.dev",
    description: "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "JavaScripts"],
}, {
    title: "Dog Glossary",
    image: project3,
    link: "https://dog-glossary.bymichael.dev",
    description: "An app that you can use to brose dog races from A-Z, with different features.",
    technologies: ["HTML", "CSS", "JavaScripts"],
}, {
    title: "To-Do List",
    image: project4,
    link: "https://todo-list.bymichael.dev",
    description: "A fully functional To-Do List app.",
    technologies: ["HTML", "CSS", "JavaScripts"],
},];

export const CONTACT = {
    address: "Berlin, Germany", email: "hello@bymichael.dev",
};
