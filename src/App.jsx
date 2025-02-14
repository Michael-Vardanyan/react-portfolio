import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Technologies from "./components/Technologies.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import './i18n';

export default function App() {
    return (
        <div
            className="overflow-x-hidden transition-colors duration-500 ease-in-out dark:text-neutral-300 text-neutral-900 antialiased selection:bg-blue-200 selection:text-blue-600 dark:selection:bg-purple-200 dark:selection:text-purple-400 text-justify">
            <div className="fixed top-0 -z-10 h-full w-full">
                <div className="absolute top-0 z-[-2] h-screen w-screen
                bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]
                dark:bg-neutral-950 dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
                >
                </div>

            </div>
            <div className="container mx-auto px-8">
                <Navbar/>
                <Hero/>
                <About/>
                <Technologies/>
                <Experience/>
                <Projects/>
                <Contact/>
            </div>
        </div>
    );
};

