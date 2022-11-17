import { useRef} from "react";
import {
  FaLinkedin,
  FaTwitterSquare,
  FaGithub,
  FaInstagram,
  FaMoon,
} from "react-icons/fa";
import {ImSun} from 'react-icons/im'

export const Hero = () => {

  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  const toggleDarkMode = useRef(document.documentElement.className === "dark");

  const changeDarkMode = () => {
    toggleDarkMode.value = document.documentElement.classList.toggle("dark");
    toggleDarkMode.value
      ? (localStorage.theme = "dark")
      : (localStorage.theme = "light");
  };

  return (
    <div className="dark:ease-in duration-200 dark:bg-neutral-900">
      <div className="max-w-[708px] m-auto p-2">
        <div className="flex justify-end mt-3">
          <button onClick={changeDarkMode} className='w-10 h-10 rounded-lg text-gray-100 '>
          <FaMoon size={20} className='text-slate-900 absolute ml-[10px] opacity-100 dark:opacity-0'/>
          <ImSun size={20} className='m-auto opacity-0 dark:opacity-100'/>
          </button>
        </div>
        <section className="mt-32">
          <img
            src="src\components\assets\tomascoll.jpeg"
            className="rounded-full w-40 h-40 object-cover grayscale hover:grayscale-0 ease-in duration-300"
          />
          <h1 className="text-5xl text-stone-800 my-5 font-inter font-extrabold dark:text-neutral-300">
            Tomas Coll
          </h1>
          <div className="bg-zinc-100/80 rounded-md p-5 dark:bg-zinc-800/30">
            <p className="font-inter text-base dark:text-neutral-300">
              Hello, I'm an Frontend developer based in Argentina! I love
              developing beautiful and fast websites, I am currently focused on
              learning and improving technologies through the creation of
              projects.
            </p>
            <div className="flex gap-4 mt-5 text-zinc-800 dark:text-neutral-300">
              <a className="cursor-pointer">
                <FaLinkedin size={30} className='hover:scale-110 ease-in duration-300 dark:hover:text-sky-200/75' />
              </a>
              <a className="cursor-pointer">
                <FaGithub size={30}  className='hover:scale-110 duration-200 dark:hover:text-sky-200/75'/>
              </a>
              <a className="cursor-pointer">
                <FaInstagram size={30} className='hover:scale-110 duration-200 dark:hover:text-sky-200/75' />
              </a>
              <a className="cursor-pointer">
                <FaTwitterSquare size={30} className='hover:scale-110 duration-200 dark:hover:text-sky-200/75' />
              </a>
            </div>
          </div>
        </section>
        <section className="mb-10 dark:text-neutral-300">
          <h2 className="text-2xl text-stone-800 my-5 font-inter font-semibold dark:text-neutral-300">
            👉 About Me
          </h2>
          <div>
            <h3 className="text-2xl text-stone-800 my-5 font-sans font-medium dark:text-neutral-300">
              Studies
            </h3>
            <p className="font-inter text-base">
              In 2021 I entered the university to study Information Systems,
              where I learned about programming for the first time. In 2022 I
              decided to leave the university to dedicate myself entirely to
              Frontend programming, where I took several courses on well-known
              platforms such as Google, FreeCodeCamp, CoderHouse, Platzi and
              Udemy.
            </p>
            <div>
              <p className="font-inter text-base my-5">
                Some of the courses I have taken:
              </p>
              <ul className="flex flex-col min-h-24 flex-wrap font-inter text-base sm:max-h-24">
                <li className="p-1 hover:bg-slate-200/75 ease-in duration-200 rounded-md cursor-pointer dark:hover:bg-slate-800/50">
                  <a
                    href="https://www.coderhouse.com/certificados/62c73155664f14001a0c2950"
                    target={"_blank"}
                  >
                    › CoderHouse Web Developer
                  </a>
                </li>
                <li className="p-1 hover:bg-slate-200/75 ease-in duration-200 rounded-md cursor-pointer dark:hover:bg-slate-800/50">
                  <a
                    href="https://www.coderhouse.com/certificados/6315e19b182e080024f14459"
                    target={"_blank"}
                  >
                    › CoderHouse JavaScript
                  </a>
                </li>
                <li className="p-1 hover:bg-slate-200/75 ease-in duration-200 rounded-md cursor-pointer dark:hover:bg-slate-800/50">
                  <a
                    href="https://www.coderhouse.com/certificados/634c083509252f000ea15200"
                    target={"_blank"}
                  >
                    › CoderHouse ReactJS
                  </a>
                </li>
                <li className="p-1 hover:bg-slate-200/75 ease-in duration-200 rounded-md cursor-pointer dark:hover:bg-slate-800/50">
                  <a
                    href="https://www.freecodecamp.org/certification/fccb9ec96d3-33b2-45e9-a3e7-01faf6520cdb/responsive-web-design"
                    target={"_blank"}
                  >
                    › FreeCodeCamp Responsive Design
                  </a>
                </li>
                <li className="p-1 hover:bg-slate-200/75 ease-in duration-200 rounded-md cursor-pointer dark:hover:bg-slate-800/50">
                  <a
                    href="https://platzi.com/p/tomasagustincoll/curso/3208-course/diploma/detalle/"
                    target={"_blank"}
                  >
                    › Platzi Basic Programming
                  </a>
                </li>
                <li className="p-1 hover:bg-slate-200/75 ease-in duration-200 rounded-md cursor-pointer dark:hover:bg-slate-800/50">
                  <a href="" target={"_blank"}>
                    › Google Introduction to Web Development
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="py-3">
            <h3 className="text-2xl text-stone-800 my-5 font-sans font-medium dark:text-neutral-300">
              Technologies
            </h3>
            <div>
              <p className="font-inter text-base my-5">
                Here are a few technologies I have been working with recently:
              </p>
              <ul className="flex gap-3 flex-wrap font-inter text-sm">
                <li className="bg-zinc-200/75 rounded-md p-1 hover:bg-slate-300/75 ease-in duration-200 dark:bg-zinc-800 dark:hover:bg-slate-700/50">
                  JavaScript
                </li>
                <li className="bg-zinc-200/75 rounded-md p-1 hover:bg-slate-300/75 ease-in duration-200 dark:bg-zinc-800 dark:hover:bg-slate-700/50">
                  CSS3
                </li>
                <li className="bg-zinc-200/75 rounded-md p-1 hover:bg-slate-300/75 ease-in duration-200 dark:bg-zinc-800 dark:hover:bg-slate-700/50">
                  HTML5
                </li>
                <li className="bg-zinc-200/75 rounded-md p-1 hover:bg-slate-300/75 ease-in duration-200 dark:bg-zinc-800 dark:hover:bg-slate-700/50">
                  ReactJS
                </li>
                <li className="bg-zinc-200/75 rounded-md p-1 hover:bg-slate-300/75 ease-in duration-200 dark:bg-zinc-800 dark:hover:bg-slate-700/50">
                  TailwindCSS
                </li>
                <li className="bg-zinc-200/75 rounded-md p-1 hover:bg-slate-300/75 ease-in duration-200 dark:bg-zinc-800 dark:hover:bg-slate-700/50">
                  WordPress
                </li>
                <li className="bg-zinc-200/75 rounded-md p-1 hover:bg-slate-300/75 ease-in duration-200 dark:bg-zinc-800 dark:hover:bg-slate-700/50">
                  FireBase
                </li>
                <li className="bg-zinc-200/75 rounded-md p-1 hover:bg-slate-300/75 ease-in duration-200 dark:bg-zinc-800 dark:hover:bg-slate-700/50">
                  NPM
                </li>
              </ul>
              <p className="font-inter text-base my-5">
                These are some of the technologies I am interested in learning
                about:
              </p>
              <ul className="flex gap-3 flex-wrap font-inter text-sm">
                <li className="bg-zinc-200/75 rounded-md p-1 hover:bg-slate-300/75 ease-in duration-200 dark:bg-zinc-800 dark:hover:bg-slate-700/50">
                  Redux
                </li>
                <li className="bg-zinc-200/75 rounded-md p-1 hover:bg-slate-300/75 ease-in duration-200 dark:bg-zinc-800 dark:hover:bg-slate-700/50">
                  NextJS
                </li>
                <li className="bg-zinc-200/75 rounded-md p-1 hover:bg-slate-300/75 ease-in duration-200 dark:bg-zinc-800 dark:hover:bg-slate-700/50">
                  TypeScript
                </li>
                <li className="bg-zinc-200/75 rounded-md p-1 hover:bg-slate-300/75 ease-in duration-200 dark:bg-zinc-800 dark:hover:bg-slate-700/50">
                  React Native or Flutter
                </li>
                <li className="bg-zinc-200/75 rounded-md p-1 hover:bg-slate-300/75 ease-in duration-200 dark:bg-zinc-800 dark:hover:bg-slate-700/50">
                  Electron
                </li>
                <li className="bg-zinc-200/75 rounded-md p-1 hover:bg-slate-300/75 ease-in duration-200 dark:bg-zinc-800 dark:hover:bg-slate-700/50">
                  Chakra UI
                </li>
              </ul>
            </div>
          </div>
        </section>
        <hr className="dark:border-neutral-800" />
        <section className="my-10">
          <h2 className="text-2xl text-stone-800 font-inter font-semibold dark:text-neutral-300">
            📂 Projects
          </h2>
          <div className="flex flex-wrap gap-10 px-2 mt-5">
            <div className="w-72 h-64">
              <a
                href="https://github.com/tomascoll/CoffeTimeColl"
                target={"_blank"}
              >
                <img
                  className="shadow-lg rounded-md sm:w-72 h-40 cursor-pointer object-cover"
                  src="src\components\assets\preview.jpg"
                />
              </a>
              <h4 className="text-lg text-stone-800 mb-1 mt-4 font-inter font-medium text-center dark:text-neutral-300">
                Coffe Time
              </h4>
              <figcaption className="font-inter text-sm text-center dark:text-neutral-400">
                Coffe time is a simulator site about Starbucks Coffe Company
                coffee beans.
              </figcaption>
            </div>
          </div>
        </section>
        <hr className="dark:border-neutral-800" />
        <section className="my-10">
          <h2 className="text-2xl text-stone-800 font-inter font-semibold dark:text-neutral-300">
            📝 Contact Me
          </h2>
          <form className="my-5">
            <label className="block my-2 text-sm font-inter font-medium text-gray-900 dark:text-neutral-300">
              Your email
            </label>
            <input
              type="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 block w-full p-2.5"
              placeholder="name@gmail.com"
            />
            <label className="block my-2 text-sm font-inter font-medium text-gray-900 dark:text-neutral-300">
              Your message
            </label>
            <textarea
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 block w-full p-2.5"
            />
            <button className="my-5 border border-gray-300 text-gray-900 bg-zinc-200/75 font-inter font-medium text-sm p-2 rounded-lg hover:bg-slate-300/50 active:bg-slate-300 dark:bg-slate-100">
              
              Submit
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};
