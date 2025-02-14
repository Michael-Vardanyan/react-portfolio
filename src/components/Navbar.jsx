import { useState } from "react";
import { TypeAnimation } from 'react-type-animation';
import { IoMoon, IoSunny } from "react-icons/io5";
import { FiMenu, FiX } from "react-icons/fi";
import {LanguageSwitcher} from "./LanguageSwitcher.jsx";
import {useTranslation} from "react-i18next";

const Navbar = () => {
    const [dark, setDark] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const {t} = useTranslation();
    const darkModeHandler = () => {
        setDark(!dark);
        document.body.classList.toggle("dark");
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="mb-20 flex items-center justify-between py-6 px-4 md:px-10 relative">
            {/* Logo */}
            <div className="flex items-center">
                <TypeAnimation
                    sequence={["byMichael.dev", 1000]}
                    wrapper="span"
                    speed={10}
                    style={{
                        fontSize: '2em',
                        display: 'inline-block',
                        fontFamily: '"Fira Code", monospace'
                    }}
                />
            </div>

            <div className="flex items-center justify-between w-full md:w-auto space-x-8 text-lg">
                <div className="hidden md:flex space-x-8 text-lg">
                    <a href="#about"><p
                        className="cursor-pointer hover:text-blue-400 dark:hover:text-purple-400">{t("about-me-title-1").concat(t("about-me-title-2"))}</p></a>
                    <a href="#technologies"><p
                        className="cursor-pointer hover:text-blue-400 dark:hover:dark:text-purple-400">{t("technologies-title")}</p>
                    </a>
                    <a href="#experience"><p
                        className="cursor-pointer hover:text-blue-400 dark:hover:dark:text-purple-400">{t("experiences-title")}</p>
                    </a>
                    <a href="#projects"><p
                        className="cursor-pointer hover:text-blue-400 dark:hover:dark:text-purple-400">{t("projects-title")}</p></a>
                    <a href="#contact"><p
                        className="cursor-pointer hover:text-blue-400 dark:hover:dark:text-purple-400">{t("contacts-title")}</p></a>
                </div>

                <div className="flex items-center gap-4 text-2xl">
                    <button onClick={darkModeHandler}>
                        {!dark ? <IoSunny className="text-yellow-300"/> : <IoMoon/>}
                    </button>

                    <button className="md:hidden" onClick={toggleMenu}>
                        {menuOpen ? <FiX/> : <FiMenu/>}
                    </button>
                    <LanguageSwitcher/>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div
                    className="absolute top-20 left-0 w-full bg-white dark:bg-gray-800 shadow-lg md:hidden transition-all duration-300 ease-in-out">
                    <div className="flex flex-col items-center space-y-4 py-4 text-lg">
                        <a href="#about"><p
                            className="cursor-pointer hover:text-blue-400 dark:hover:text-purple-400"
                            onClick={toggleMenu}>About</p></a>
                        <a href="#technologies"><p
                            className="cursor-pointer hover:text-blue-400 dark:hover:dark:text-purple-400"
                            onClick={toggleMenu}>Technologies</p>
                        </a>
                        <a href="#experience"><p
                            className="cursor-pointer hover:text-blue-400 dark:hover:dark:text-purple-400"
                            onClick={toggleMenu}>Experience</p>
                        </a>
                        <a href="#projects"><p
                            className="cursor-pointer hover:text-blue-400 dark:hover:dark:text-purple-400"
                            onClick={toggleMenu}>Projects</p>
                        </a>
                        <a href="#contact"><p
                            className="cursor-pointer hover:text-blue-400 dark:hover:dark:text-purple-400"
                            onClick={toggleMenu}>Contacts</p>
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
