import { useSelector, useDispatch } from "react-redux";
import {
  setDarkMode,
  setLightMode,
  darkModeSelectedValue,
} from "@/slices/darkModeSlice";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Switch } from "@headlessui/react";

const Navbar = (): JSX.Element => {
  const isDarkMode = useSelector(darkModeSelectedValue);
  const dispatch = useDispatch();
  const [openMenu, setOpenMenu] = useState(false);
  useEffect(() => {
    if (isDarkMode) {
      document.querySelector("body")?.classList.add("dark");
      document.querySelector("body")?.classList.add("bg-black");
    } else {
      document.querySelector("body")?.classList.remove("dark");
      document.querySelector("body")?.classList.remove("bg-black");
    }
  }, [isDarkMode]);
  const handleMobileMenu = () => {
    setOpenMenu(!openMenu);
    console.log(openMenu);
  };
  return (
    <div className="w-full block px-8 py-4 shadow-md bg-white dark:bg-rbFogra39-500 z-10">
      <div className="flex justify-between items-center">
        <div className={openMenu ? "hidden" : "block"}>
          <Link
            href="/"
            className="flex justify-center items-center gap-2 decoration-o"
          >
            <Image
              src="/LogoBluumoon.png"
              alt="Logo Bluumoon"
              width="48"
              height="48"
            ></Image>
            <span className="font-semibold text-black dark:text-white">
              Bluumoon
            </span>
          </Link>
        </div>
        <div>
          <ul className="hidden list-none lg:flex justify-center items-center gap-x-4 font-medium text-black dark:text-white">
            <li>
              <a href="#Home">Inicio</a>
            </li>
            <li>
              <a href="#Projects">Proyectos</a>
            </li>
            <li>
              <a href="#Skills">Habilidades</a>
            </li>
            <li>
              <a href="#Referencias">Referencias</a>
            </li>
            <li>
              <a href="#Contacto">Contacto</a>
            </li>
            <li>
              <div className="flex justify-between items-center gap-x-1">
                {isDarkMode ? (
                  <span className="text-gainsboro-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                      />
                    </svg>
                  </span>
                ) : (
                  <span className="text-cornflowerBlue-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                      />
                    </svg>
                  </span>
                )}
                <Switch
                  checked={isDarkMode}
                  onChange={() =>
                    isDarkMode
                      ? dispatch(setLightMode())
                      : dispatch(setDarkMode())
                  }
                  className={`${
                    isDarkMode ? "bg-blue-600" : "bg-gray-200"
                  } relative inline-flex h-6 w-11 items-center rounded-full`}
                >
                  <span
                    className={`${
                      isDarkMode ? "translate-x-6" : "translate-x-1"
                    } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                  />
                </Switch>
              </div>
            </li>
          </ul>
        </div>
        <div className="flex lg:hidden">
          <button
            onClick={handleMobileMenu}
            title={openMenu ? "Cerrar" : "Abrir"}
            type="button"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 9h16.5m-16.5 6.75h16.5"
                />
              </svg>
            </span>
          </button>
        </div>
        <div className={openMenu ? "max-w-full h-screen z-50 flex justify-center items-center" : "hidden"}>
          <nav>
            <ul>
              <li>
                <a href="#Home">Inicio</a>
              </li>
              <li>
                <a href="#Proyectos">Proyectos</a>
              </li>
              <li>
                <a href="#Habilidades">Habilidades</a>
              </li>
              <li>
                <a href="#Referencias">Referencias</a>
              </li>
              <li>
                <a href="#Contacto">Contacto</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
