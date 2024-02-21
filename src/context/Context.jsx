import { RiReactjsLine } from "react-icons/ri";
import { DiPhotoshop } from "react-icons/di";
import { BiCodeBlock } from "react-icons/bi";

import { AiOutlineHtml5 } from "react-icons/ai";
import { FaCss3 } from "react-icons/fa";
import { SiTailwindcss, } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { FaPython } from "react-icons/fa";



import { FaLaptopCode } from "react-icons/fa";

import { createContext, useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import "../i18n";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [settings, setSettings] = useState(false);
  const [currentColor, setCurrentColor] = useState("#F55050");
  const [currentMode, setCurrentMode] = useState("dark");
  const [currentLang, setCurrentLang] = useState("en");
  const { t, i18n } = useTranslation();

  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem("ThemeMode", e.target.value);
    setSettings(false);
  };
  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem("colorMode", color);
    setSettings(false);
  };
  const setLang = (e) => {
    i18n.changeLanguage(e.target.value);
    setCurrentLang(e.target.value);
    localStorage.setItem("currentLang", e.target.value);
    setSettings(false);
  };

  //todo Data

  const navItems = [
    {
      name: t("navItem1"),
      href: "home",
    },
    {
      name: t("navItem2"),
      href: "about",
    },
    {
      name: t("navItem3"),
      href: "service",
    },
    {
      name: t("navItem4"),
      href: "portfolio",
    },
    {
      name: t("navItem5"),
      href: "contact",
    },
  ];
  const themeColors = [
    {
      name: "blue-theme",
      color: "#1A97F5",
    },
    {
      name: "green-theme",
      color: "#03C9D7",
    },
    {
      name: "purple-theme",
      color: "#7352FF",
    },
    {
      name: "red-theme",
      color: "#F55050",
    },
    {
      name: "indigo-theme",
      color: "#3F72AF",
    },
    {
      color: "#F55302",
      name: "orange-theme",
    },
  ];
  const aboutData = [
    {
      skill: t("aboutSkills1"),
      description: t("aboutSkills1Description1"),
      icon: <BiCodeBlock />,
    },
    {
      skill: t("aboutSkills2"),
      description: t("aboutSkills1Description2"),
      icon: <FaLaptopCode />,
    },
    {
      skill: t("aboutSkills3"),
      description: t("aboutSkills1Description3"),
      icon: <BiCodeBlock />,
    },
    {
      skill: t("aboutSkills5"),
      description: t("aboutSkills1Description5"),
      icon: <DiPhotoshop />,
    },
  ];
  const serviceData = [
    {
      skill: t("html"),
      description: t("htmlDescription"),
      icon: <AiOutlineHtml5 />,
    },
    {
      skill: t("css"),
      description: t("cssDescription"),
      icon: <FaCss3 />,
    },
    {
      skill: t("js"),
      description: t("jsDescription"),
      icon: <IoLogoJavascript />,
    },
    {
      skill: t("react"),
      description: t("reactDescription"),
      icon: <RiReactjsLine />,
    },
    {
      skill: t("sass"),
      description: t("sassDescription"),
      icon: <SiMongodb />,
    },
    {
      skill: t("tailwind"),
      description: t("tailwindDescription"),
      icon: <SiTailwindcss />,
    },
    {
      skill: t("Node "),
      description: t("bootstrapDescription"),
      icon: <FaNodeJs />,
    },
    {
      skill: t("python "),
      description: t("bootstrapDescription1"),
      icon: <FaPython />,
    },
    {
      skill: t("figma"),
      description: t("photoshopDescription"),
      icon: <FaFigma />,
    },
  ];
  const portfolioTitle = [
    {
      
      activetab: [true, false, false, false, false],
    },
    {
     
      activetab: [false, true, false, false, false],
    },
    {
    
      activetab: [false, false, true, false, false],
    },
    {
      
      activetab: [false, false, false, true, false],
    },
    {
      
      activetab: [false, false, false, false, true],
    },
  ];
  const portfolioData = [
    {
      all: [
        
        
        {
          title: t("TypeScript"),
          projectName: t("projectName3"),
          pic: "bg-legends_landingpage",
          githubLink: "https://github.com/Celestin-Pet/shopping-cort",
          viewOnline: "#",
        },
        {
          title: t(" web"),
          projectName: t("projectName4"),
          pic: "bg-alannews",
          githubLink: "https://github.com/Celestin-Pet/tourist.rw",
          viewOnline: "https://tourist2.netlify.app/",
        },
        {
          title: t(" crpto web"),
          projectName: t("projectName5"),
          pic: "bg-cryptocurrency",
          githubLink: "https://github.com/Celestin-Pet/crypto",
          viewOnline: "https://celestin-pet.github.io/crypto/",
        },

        {
          title: t("TypeScript"),
          projectName: t("projectName6"),
          pic: "bg-legends_landingpage",
          githubLink: "https://github.com/Celestin-Pet/shopping-cort",
          viewOnline: "#",
        },
        {
          title: t("web"),
          projectName: t("projectName7"),
          pic: "bg-GPT3",
          githubLink: "#",
          viewOnline: "https://ladyforum.netlify.com/",
        },
        {
          title: t("Authentication"),
          projectName: t("projectName8"),
          pic: "bg-business",
          githubLink: "https://github.com/Celestin-Pet/signup-react",
          viewOnline: "https://signuptodb.netlify.app/",
        },
        {
          title: t("ui,ux"),
          projectName: t("projectName9"),
          pic: "bg-covid19",
          githubLink: "#",
          viewOnline: "#",
        },
       
        {
          title: t("  react game"),
          projectName: t("projectName18"),
          pic: "bg-quizapp",
          githubLink: "https://github.com/Celestin-Pet/Testapp",
          viewOnline: "celestin-pet.github.io/Testapp/",
        },
        
      ],

     

     

    },
  ];

  //todo Data

  return (
    <StateContext.Provider
      value={{
        loading,
        setLoading,
        settings,
        setSettings,
        currentMode,
        setCurrentMode,
        currentColor,
        setCurrentColor,
        currentLang,
        setCurrentLang,
        t,
        i18n,
        setMode,
        setColor,
        setLang,
        navItems,
        themeColors,
        aboutData,
        serviceData,
        portfolioTitle,
        portfolioData,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
export const useStateContext = () => useContext(StateContext);
