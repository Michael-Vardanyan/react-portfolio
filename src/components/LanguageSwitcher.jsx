import { useTranslation } from "react-i18next";

export const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const switchLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };

    return (
        <select
            onChange={(e) => switchLanguage(e.target.value)}
            defaultValue={i18n.language}
            className="border bg-neutral-800 dark:bg-neutral-200 text-blue-200 dark:text-purple-500 px-4 rounded-md dark:hover:bg-neutral-300 hover:bg-neutral-700 focus:outline-none transition duration-200 ease-in-out"
        >
            <option value="en" className="bg-neutral-800 text-blue-200 dark:text-purple-500">EN</option>
            <option value="de" className="bg-neutral-800 text-blue-200 dark:text-purple-500">DE</option>
        </select>
    );
};
