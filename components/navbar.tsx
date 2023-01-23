import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../store/store";
import { increment, decrement, selectedValue } from "../slices/counterSlice";
import {
  setDarkMode,
  setLightMode,
  darkModeSelectedValue,
} from "@/slices/darkModeSlice";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const count = useSelector(selectedValue);
  const darkMode = useSelector(darkModeSelectedValue);
  const dispatch = useDispatch();
  useEffect(() => {
    if (darkMode) {
      document.querySelector("body")?.classList.add("dark")
      document.querySelector("body")?.classList.add("bg-black")
    }
    else {
      document.querySelector("body")?.classList.remove("dark")
    }
  }, [darkMode])
  return (
    <div
      className="w-full px-8 py-4 shadow-md fixed bg-white dark:bg-[#0f0e17]"
    >
      <div className="flex justify-between items-center">
        <div>
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
            <span className="font-medium text-black dark:text-white">
              Bluumoon
            </span>
          </Link>
        </div>
        <div>
          <ul className="list-none flex justify-center items-center gap-x-4 text-black dark:text-white">
            <li>
              <a href="#id">Inicio</a>
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
            <li>
              {darkMode ? (
                <button
                  onClick={() => dispatch(setLightMode())}
                  className="text-black dark:text-[#ff8906]"
                >
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
                      d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                    />
                  </svg>
                </button>
              ) : (
                <button
                  onClick={() => dispatch(setDarkMode())}
                  className="text-black"
                >
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
                      d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                    />
                  </svg>
                </button>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
