import React, { useEffect, useState } from 'react'
import lightSwitch from '../../assets/lightSwitch.png'
import darkSwitch from '../../assets/darkSwitch.png'
type ThemeType = 'light' | 'dark' | null
const DarkMode = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light"
    //localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  ) 

  useEffect(() => {
    if (window.matchMedia(`(prefers-color-scheme: dark)`).matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, [])
  const element = document.documentElement; // html element

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);
  const handleThemeSwitch = () => {
    
  setTheme(theme === "light" ? "dark" : "light")
}
  return (
    <div className="relative">
      <img
        src={lightSwitch}
        alt=""
        onClick={handleThemeSwitch}
        className={`w-12  cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 absolute right-0 z-10 ${
          theme === "dark" ? "opacity-0" : "opacity-100"
        } `}
      />
      <img
        src={darkSwitch}
        alt=""
        onClick={handleThemeSwitch}
        className="w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300"
      />
    </div>
  );
};
export default DarkMode
