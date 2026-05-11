import { useState, useEffect } from "react";
import CodeRain from "./CodeRain";
import Contacto from "./Contacto";
import { useInView } from "./useInView";

function App() {
  const [showNav, setShowNav] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [open, setOpen] = useState(false);
  const [homeRef, homeVisible] = useState(false);
  const [aboutRef, aboutVisible] = useInView({ threshold: 0.2 });
  const [skillsRef, skillsVisible] = useInView({ threshold: 0.2 });
  const [aboutAnimated, setAboutAnimated] = useState(false);

  const [rain, setRain] = useState(() => {
    const savedRain = localStorage.getItem("rain");
    // Si hay un valor, lo parseamos (JSON.parse), si no, devolvemos true
    return savedRain !== null ? JSON.parse(savedRain) : true;
  });

  // 2. Guardar el estado en localStorage cuando cambie 'rain'
  useEffect(() => {
    localStorage.setItem("rain", JSON.stringify(rain));
  }, [rain]);

  if (aboutVisible && !aboutAnimated) {
    setAboutAnimated(true);
  }

  if (skillsVisible && !aboutAnimated) {
    setAboutAnimated(true);
  }

  const skills = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-13 text-violet-600"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V0zM4.59 7.498q-.908 0-1.455.508-.547.507-.547 1.484v3.106q0 .986.527 1.484t1.406.498q.576 0 1.016-.224.45-.225.703-.674.255-.45.254-1.114v-.185h-1.22v.176q0 .449-.186.683t-.527.235q-.372-.01-.557-.264-.186-.255-.186-.752V9.686q0-.547.166-.811.177-.264.577-.264.321 0 .517.225.195.224.195.693v.205h1.23V9.52q0-.674-.243-1.124a1.55 1.55 0 0 0-.664-.673q-.42-.225-1.006-.225m4.214-.01q-.586 0-1.006.244a1.67 1.67 0 0 0-.635.674 2.1 2.1 0 0 0-.225.996q0 .753.293 1.182.304.42.967.732l.469.215q.44.186.625.43.186.244.186.635 0 .478-.166.703-.157.224-.528.224-.36 0-.547-.244-.185-.243-.205-.752H6.87q.02.996.498 1.524.479.527 1.387.527t1.416-.518.508-1.484q0-.81-.332-1.289-.333-.479-1.045-.79l-.45-.196q-.39-.166-.556-.381-.165-.214-.166-.576 0-.4.166-.596.175-.195.508-.195.36 0 .508.234.156.234.175.703h1.123q-.03-.976-.498-1.484-.468-.518-1.308-.518m4.057 0q-.585 0-1.006.244a1.67 1.67 0 0 0-.634.674 2.1 2.1 0 0 0-.225.996q0 .753.293 1.182.303.42.967.732l.469.215q.438.186.625.43.185.244.185.635 0 .478-.166.703-.156.224-.527.224-.361.001-.547-.244-.186-.243-.205-.752h-1.162q.02.996.498 1.524.479.527 1.386.527.909 0 1.417-.518.507-.517.507-1.484 0-.81-.332-1.289t-1.045-.79l-.449-.196q-.39-.166-.556-.381-.166-.214-.166-.576 0-.4.165-.596.177-.195.508-.195.361 0 .508.234.156.234.176.703h1.123q-.03-.976-.498-1.484-.47-.518-1.309-.518"
          />
        </svg>
      ),
      name: "CSS",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 16 16"
          className="w-13 text-yellow-300"
        >
          <path
            fill-rule="evenodd"
            d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zM9.053 7.596v3.127l-.007 1.752q0 .498-.186.752t-.556.263q-.342 0-.528-.234-.185-.234-.185-.684v-.175H6.37v.185q0 .665.253 1.113.255.45.703.674.44.225 1.016.225.88 0 1.406-.498.527-.498.527-1.485l.007-1.752V7.596zm3.808-.108q-.585 0-1.006.244a1.67 1.67 0 0 0-.634.674 2.1 2.1 0 0 0-.225.996q0 .753.293 1.182.303.42.967.732l.469.215q.438.186.625.43.185.244.185.635 0 .478-.166.703-.156.224-.527.224-.361.001-.547-.244-.186-.243-.205-.752h-1.162q.02.996.498 1.524.479.527 1.386.527.909 0 1.417-.518.507-.517.507-1.484 0-.81-.332-1.289t-1.045-.79l-.449-.196q-.39-.166-.556-.381-.166-.214-.166-.576 0-.4.165-.596.177-.195.508-.195.361 0 .508.234.156.234.176.703h1.123q-.03-.976-.498-1.484-.47-.518-1.309-.518"
          />
        </svg>
      ),
      name: "JavaScript",
    },
    {
      icon: (
        <svg
          className="w-13"
          viewBox="-11.5 -10.23174 23 20.46348"
          xmlns="http://w3.org"
        >
          <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
          <g stroke="#61DAFB" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      ),
      name: "React",
    },
    {
      icon: (
        <svg
          className="w-13"
          viewBox="0 0 110 110"
          fill="none"
          xmlns="http://w3.org"
        >
          <path
            d="M55.15 0C24.73 0 25.86 13.19 25.86 13.19L25.9 26.96H55.93V31.2H13.68C13.68 31.2 0 29.8 0 55.45C0 81.1 11.96 83.19 11.96 83.19H19.98V71.93C19.98 71.93 19.53 58.11 33.4 58.11H55.44C55.44 58.11 68.61 58.11 68.61 45.1V21.11C68.61 21.11 70.18 0 55.15 0ZM40.94 8.52C43.5 8.52 45.57 10.6 45.57 13.15C45.57 15.71 43.5 17.78 40.94 17.78C38.39 17.78 36.31 15.71 36.31 13.15C36.31 10.6 38.39 8.52 40.94 8.52Z"
            fill="#3776AB"
          />
          <path
            d="M54.85 110C85.27 110 84.14 96.81 84.14 96.81L84.1 83.04H54.07V78.8H96.32C96.32 78.8 110 80.2 110 54.55C110 28.9 98.04 26.81 98.04 26.81H90.02V38.07C90.02 38.07 90.47 51.89 76.6 51.89H54.56C54.56 51.89 41.39 51.89 41.39 64.9V88.89C41.39 88.89 39.82 110 54.85 110ZM69.06 101.48C66.5 101.48 64.43 99.4 64.43 96.85C64.43 94.29 66.5 92.22 69.06 92.22C71.61 92.22 73.69 94.29 73.69 96.85C73.69 99.4 71.61 101.48 69.06 101.48Z"
            fill="#FFD343"
          />
        </svg>
      ),
      name: "Python",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-13 text-orange-500"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M15.698 7.287 8.712.302a1.03 1.03 0 0 0-1.457 0l-1.45 1.45 1.84 1.84a1.223 1.223 0 0 1 1.55 1.56l1.773 1.774a1.224 1.224 0 0 1 1.267 2.025 1.226 1.226 0 0 1-2.002-1.334L8.58 5.963v4.353a1.226 1.226 0 1 1-1.008-.036V5.887a1.226 1.226 0 0 1-.666-1.608L5.093 2.465l-4.79 4.79a1.03 1.03 0 0 0 0 1.457l6.986 6.986a1.03 1.03 0 0 0 1.457 0l6.953-6.953a1.03 1.03 0 0 0 0-1.457" />
        </svg>
      ),
      name: "Git",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      // SI BAJA
      if (currentScroll > lastScroll && currentScroll > 100) {
        setShowNav(false);
      }
      // SI SUBE
      else {
        setShowNav(true);
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScroll]);

  return (
    <>
      <nav
        className={`
        flex flex-row lg:flex-col fixed
       bg-zinc-900
        w-screen lg:w-auto lg:h-screen
        px-4 py-3 md:py-6
        z-50 lg:gap-38
        transition-transform duration-500

    ${showNav ? "translate-y-0" : "-translate-y-full lg:translate-y-0"}

    animate-[navIn_0.6s_ease-out]
  `}
      >
        <div className="flex flex-row justify-around lg:flex-col gap-10">
          <button className="text-zinc-400 font-serif text-2xl md:text-4xl ">
            EM
          </button>

          <div className="lg:flex hidden flex-row lg:flex-col gap-5 items-center">
            <a
              href="#Home"
              className="flex flex-col items-center text-zinc-400 hover:text-white group"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-xl group-hover:bg-zinc-800 transition">
                <svg
                  className="w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
                </svg>
              </div>
              <p className="font-mono text-center text-xs ">Inicio</p>
            </a>

            <a
              href="#About-me"
              className="flex flex-col items-center text-zinc-400 hover:text-white group"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-xl group-hover:bg-zinc-800 transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                </svg>
              </div>
              <p className="font-mono text-center text-xs ">Sobre mi</p>
            </a>

            <a
              href="#Home"
              className="flex flex-col items-center text-zinc-400 hover:text-white group"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-xl group-hover:bg-zinc-800 transition">
                <svg
                  className="w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M1 3.5A1.5 1.5 0 0 1 2.5 2h2.764c.958 0 1.76.56 2.311 1.184C7.985 3.648 8.48 4 9 4h4.5A1.5 1.5 0 0 1 15 5.5v.64c.57.265.94.876.856 1.546l-.64 5.124A2.5 2.5 0 0 1 12.733 15H3.266a2.5 2.5 0 0 1-2.481-2.19l-.64-5.124A1.5 1.5 0 0 1 1 6.14zM2 6h12v-.5a.5.5 0 0 0-.5-.5H9c-.964 0-1.71-.629-2.174-1.154C6.374 3.334 5.82 3 5.264 3H2.5a.5.5 0 0 0-.5.5zm-.367 1a.5.5 0 0 0-.496.562l.64 5.124A1.5 1.5 0 0 0 3.266 14h9.468a1.5 1.5 0 0 0 1.489-1.314l.64-5.124A.5.5 0 0 0 14.367 7z" />
                </svg>
              </div>
              <p className="font-mono text-center text-xs ">Proyectos</p>
            </a>

            <a
              href="#Skills"
              className="flex flex-col items-center text-zinc-400 hover:text-white group"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-xl group-hover:bg-zinc-800 transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0m6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0" />
                </svg>
              </div>
              <p className="font-mono text-center text-xs ">Habilidades</p>
            </a>

            <a
              href="#mail"
              className="flex flex-col items-center text-zinc-400 hover:text-white group"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-xl group-hover:bg-zinc-800 transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                </svg>
              </div>
              <p className="font-mono text-center text-xs ">Contacto</p>
            </a>
          </div>
        </div>

        <div className="hidden md:flex  flex-row lg:flex-col gap-3">
          <hr className="border-t border-zinc-500 " />
          <button
            onClick={() => setRain((prev) => !prev)}
            className="fixed top-4 right-4 z-50 bg-zinc-900 text-white px-5 py-5 rounded-full"
          >
            {rain ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M4.158 12.025a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317m6 0a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317m-3.5 1.5a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317m6 0a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317m.747-8.498a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 11H13a3 3 0 0 0 .405-5.973M8.5 2a4 4 0 0 1 3.976 3.555.5.5 0 0 0 .5.445H13a2 2 0 0 1 0 4H3.5a2.5 2.5 0 1 1 .605-4.926.5.5 0 0 0 .596-.329A4 4 0 0 1 8.5 2" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708" />
              </svg>
            )}
          </button>
          <a
            target="_blank"
            href="https://github.com/Elias-mc"
            className="flex flex-col items-center text-zinc-400 hover:text-white group"
          >
            <div className="w-10 h-10 flex items-center justify-center rounded-xl group-hover:bg-zinc-800 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
              </svg>
            </div>
          </a>

          <a
            target="_blank"
            href="https://www.linkedin.com/in/elias-macay-b02753386/"
            className="flex flex-col items-center text-zinc-400 hover:text-white group"
          >
            <div className="w-10 h-10 flex items-center justify-center rounded-xl group-hover:bg-zinc-800 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
              </svg>
            </div>
          </a>
        </div>

        <div className="flex md:hidden ml-auto ">
          <button
            className="text-zinc-400  hover:text-zinc-50 hover:scale-120 cursor-pointer  "
            onClick={() => homeVisible(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 "
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
              />
            </svg>
          </button>
        </div>
      </nav>

      <main className="transition-all mx-auto lg:ml-25 ">
        <header
          id="Home"
          className=" relative flex flex-col  lg:flex-row bg-orange-100 w-full  lg:min-h-screen mx-auto pt-20 px-6 md:px-10 items-center justify-around overflow-hidden"
        >
          {/* GRID FONDO */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.08)_1px,transparent_1px)] bg-size-[50px_50px] z-0" />

          {/* EFECTO GRADIENTE SUAVE */}
          <div className="absolute inset-0 bg-linear-to-br from-orange-100 via-transparent to-orange-200 opacity-60 z-0" />

          {rain && <CodeRain />}

          {/* TEXTO */}
          <div className="relative z-10 max-w-xl flex flex-col lg:h-130 h-95 sm:h-110 animate-fadeInUp">
            <p className="text-md pb-4 text-taupe-600 font-mono animate-fadeIn delay-100">
              Hola, soy
            </p>

            <h1 className="text-6xl justify-center md:justify-start  md:text-8xl font-bold font-serif pb-4 leading-tight flex items-center">
              <span className="inline-block animate-slideUp delay-200">
                Elias
              </span>
              <span className="text-taupe-500">.</span>
              <span className="inline-block animate-slideUp delay-300">
                dev
              </span>

              {/* Cursor */}
              <span className="ml-2 w-0.5 h-[0.9em] bg-taupe-500 animate-caret"></span>
            </h1>

            <p className="text-taupe-500  text-center lg:text-start uppercase text-sm md:text-base pb-4 tracking-[0.3em] md:tracking-[0.4em] font-bold font-mono animate-fadeIn delay-300">
              Desarrollador de aplicaciones <br /> y creador de experiencias
            </p>

            <p className="text-sm pb-6 font-mono animate-fadeIn text-center lg:text-start delay-500">
              Me especializo en construir aplicaciones móviles
              <br className="hidden md:block" />
              interactivas, juegos y experiencias web modernas{" "}
              <br className="hidden md:block" />
              con foco en el diseño y funcionalidad.
            </p>

            {/* BOTONES */}
            <div className="flex flex-row flex-wrap justify-center sm:flex-row gap-2 md:gap-4">
              <a
                href="#"
                className="group flex items-center gap-2 sm:gap-4 text-sm px-5 py-2 sm:px-6 md:py-4 rounded-2xl text-zinc-200 font-mono 
                bg-linear-to-r from-zinc-900 via-zinc-800 to-zinc-700
                hover:scale-105 hover:shadow-xl transition-all duration-300"
              >
                Ver mis proyectos
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="transition group-hover:translate-x-1 md:group-hover:translate-x-2"
                >
                  <path d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                </svg>
              </a>

              <a
                target="_blank"
                href="./pdf/Elias-Macay_CV.pdf"
                className="group flex items-center gap-3 font-mono text-sm md:text-md m-2 sm:m-0 px-4 py-4"
              >
                Descargar CV
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="transition group-hover:translate-y-1"
                >
                  <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                  <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="z-10 animate-fadeInRight md:block">
            <div className="group relative bg-white/70 rounded-4xl w-70 sm:w-80 h-90 sm:h-105 flex justify-center items-center overflow-hidden shadow-lg animate-float">
              <div className="w-11/12 h-11/12 rounded-4xl overflow-hidden">
                <img
                  src="/perfil.jpg"
                  alt="perfil"
                  className="w-full h-full object-cover rounded-4xl transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>

            <div className="bg-white px-6 py-6 relative -top-10  sm:-top-20 sm:left-24 rounded-2xl sm:rounded-4xl shadow-md sm:w-60 animate-fadeIn delay-500 hover:-translate-y-2 transition-all duration-300">
              <p className="text-sm text-zinc-800 leading-relaxed mb-6">
                Disponible para <br />
                proyectos freelance
              </p>

              <a
                href="#mail"
                className="flex items-center justify-between font-mono text-sm text-black group"
              >
                <span className="group-hover:tracking-wider transition">
                  Colaboremos
                </span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="transition group-hover:translate-x-2"
                >
                  <path d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                </svg>
              </a>
            </div>
          </div>
        </header>

        <section
          ref={aboutRef}
          id="About-me"
          className={`  relative flex flex-col lg:flex-row bg-orange-200 mx-auto items-center py-10 md:py20 px-6 md:px-12 justify-around gap-6 md:gap-12 overflow-hidden
              transition-all duration-1000 ease-out @media @max-sm:justify-center 
              ${aboutAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* FONDO DECORATIVO */}
          <div className="absolute inset-0 bg-linear-to-br from-orange-200 via-orange-100 to-orange-300 opacity-60 animate-[bgFloat_6s_ease-in-out_infinite]" />

          {/* TEXTO */}
          <div
            className={`items-center  flex-col lg:min-w-xl  lg:items-start  flex relative z-10 px-2 py-3 max-w-xl transition-all duration-700   ease-out ${
              aboutAnimated
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <p className="font-mono  text-xs  mb-2 lg:mb-5 font-bold uppercase text-amber-600 tracking-widest animate-[fadeUp_0.6s_ease-out]">
              Sobre mí
            </p>

            <h2 className="text-3xl lg:text-5xl text-center lg:text-start  md:text-4xl font-serif mb-3 md:mb-6 leading-tight animate-[fadeUp_0.8s_ease-out]">
              Apasionado por crear
              <br />
              soluciones que conectan
              <br />
              ideas con personas.
            </h2>

            <p className="font-mono md:text-base text-sm text-center lg:text-start  mb-6 text-zinc-700 animate-[fadeUp_1s_ease-out]">
              Combino lógica y creatividad para transformar
              <br className="hidden sm:block" />
              conceptos en productos digitales funcionales,
              <br className="hidden sm:block" />
              atractivos y útiles.
            </p>

            <h3 className="font-firma text-4xl md:text-5xl text-amber-400 -rotate-3 animate-float">
              Elias
            </h3>
          </div>

          {/* CARDS */}
          <div className="relative justify-center flex-wrap z-10 flex flex-col sm:flex-row gap-6">
            {/* CARD 1 */}
            <div
              className={`group bg-white rounded-3xl flex flex-col px-6 py-8 w-64 shadow-md
              transition-all duration-700 ease-out hover:scale-105 ${
                aboutAnimated
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-10 scale-95"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <span className="w-full mb-5 text-amber-500  transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0m6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0" />
                </svg>
              </span>

              <h2 className="font-serif text-2xl font-bold mb-3">Desarrollo</h2>

              <p className="font-mono text-sm text-zinc-600">
                Creo aplicaciones móviles y web escalables, eficientes y
                modernas.
              </p>
            </div>

            {/* CARD 2 */}
            <div
              className={`group bg-white rounded-3xl flex flex-col px-6 py-8 w-64 shadow-md
                transition-all duration-700 ease-out hover:scale-105 ${
                  aboutAnimated
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-10 scale-95"
                }`}
              style={{ transitionDelay: "400ms" }}
            >
              <span className="w-full mb-5 text-amber-500  transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2zm3.564 1.426L5.596 5 8 5.961 14.154 3.5zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923zM7.443.184a1.5.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464z" />
                </svg>
              </span>

              <h2 className="font-serif text-2xl font-bold mb-3">
                Diseño UI/UX
              </h2>

              <p className="font-mono text-sm text-zinc-600">
                Diseño interfaces limpias, intuitivas y centradas en la
                experiencia del usuario.
              </p>
            </div>
          </div>
        </section>

        <section
          ref={skillsRef}
          className={`bg-orange-100 md:py-16 py-8 overflow-hidden ${aboutAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          id="Skills"
        >
          <div className="px-5   w-full">
            <div
              className={`flex justify-center flex-col md:flex-row items-center md:justify-between px-5 w-full mb-10 transition-all duration-700 ${
                aboutAnimated
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5"
              }`}
            >
              <h3 className="font-mono   uppercase text-lg tracking-widest">
                Habilidades
              </h3>
              <p className="font-mono  text-md text-zinc-600">
                Siempre aprendiendo.
              </p>
            </div>

            <div className="relative overflow-hidden">
              <div className="absolute left-0 top-0 h-full w-32 bg-linear-to-r from-orange-100 to-transparent z-10" />
              <div className="absolute right-0 top-0 h-full w-32 bg-linear-to-l from-orange-100 to-transparent z-10" />

              <div className="flex w-max animate-scroll gap-10">
                {[...skills, ...skills].map((skill, i) => (
                  <div
                    key={i}
                    className={`
      min-w-55
      flex flex-row items-center justify-center
      gap-4
      bg-white/70 backdrop-blur-md
      px-4 py-5
      rounded-3xl
      shadow-md
      hover:scale-105 hover:shadow-2xl
      border border-white/40
      transition-all duration-700
      ${aboutAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
    `}
                    style={{
                      transitionDelay: `${i * 100}ms`,
                    }}
                  >
                    <span className="text-5xl mb-3">{skill.icon}</span>
                    <h3 className="font-mono text-lg">{skill.name}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <footer
          className="flex bg-zinc-900 rounded-t-4xl  mx-auto pt-10 flex-col px-10 justify-center-safe"
          id="mail"
        >
          <div className="flex flex-wrap flex-row justify-around gap-5 md:gap-10 items-center mb-2">
            <div className="flex flex-row flex-wrap justify-center gap-5  md:gap-10">
              <div className="flex flex-col text-center items-center md:text-start md:items-start gap-3 md:gap-6 max-w-80">
                <h2 className="text-2xl md:text-3xl font-bold font-serif text-amber-100">
                  ¿Tieneas un proyecto en mente?
                </h2>
                <p className="md:text-md text-sm text-zinc-200 font-mono mb-3">
                  Estoy disponible para colaboraciones y proyectos y proyectos
                  freelance.
                </p>
                <button
                  onClick={() => setOpen(true)}
                  className=" flex items-center gap-3 bg-orange-200 px-5 py-3 rounded-lg  max-w-38 group"
                >
                  Hamblemos
                  <span className="w-4 transition group-hover:translate-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                      />
                    </svg>
                  </span>
                </button>
              </div>

              <div className="flex md:border-l sm:border-zinc-300 items-center md:items-start md:pl-10 justify-around ite py-7 gap-5 md:gap-10 flex-col ">
                <a
                  href="#"
                  className="text-center flex gap-2 items-center text-amber-50"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2zm3.708 6.208L1 11.105V5.383zM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2z" />
                    <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648m-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z" />
                  </svg>
                  macayzamora1234@gmail.con
                </a>
                <a
                  href="#"
                  className="text-center flex gap-2 items-center text-amber-50"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                  </svg>
                  Argentina, Buenos Aires
                </a>
              </div>
            </div>

            <div className="flex w-120 overflow-hidden h-45 items-center">
              <img
                src="./mapa.png"
                alt="Mapa"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="border-t border-zinc-300 mx-10 justify-center items-center py-2 flex ">
            <p className="font-mono text-sm md:text-base cent text-center text-zinc-300">
              2026 Elias.dev -- Todos los derechos reservados.
            </p>
          </div>
        </footer>
      </main>

      {open && (
        <section
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-61 flex items-center justify-center p-4"
          style={{
            animation: "backdropIn 0.3s ease forwards",
          }}
        >
          <style>{`
      @keyframes backdropIn {
        from { background: rgba(0,0,0,0); backdrop-filter: blur(0px); }
        to   { background: rgba(0,0,0,0.45); backdrop-filter: blur(6px); }
      }

      @keyframes modalSlideUp {
        from { opacity: 0; transform: translateY(32px) scale(0.97); }
        to   { opacity: 1; transform: translateY(0)    scale(1);    }
      }

      @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(16px); }
        to   { opacity: 1; transform: translateY(0); }
      }

      @keyframes iconPop {
        0%   { transform: scale(0.5) rotate(-15deg); opacity: 0; }
        70%  { transform: scale(1.15) rotate(4deg); opacity: 1; }
        100% { transform: scale(1) rotate(0deg); opacity: 1; }
      }

      .modal-card {
        animation: modalSlideUp 0.35s cubic-bezier(0.34,1.4,0.64,1) forwards;
      }

      .modal-header {
        animation: fadeInUp 0.4s ease 0.1s both;
      }

      .modal-form {
        animation: fadeInUp 0.4s ease 0.2s both;
      }

      .modal-side {
        animation: fadeInUp 0.4s ease 0.28s both;
      }

      .icon-pop {
        animation: iconPop 0.5s cubic-bezier(0.34,1.5,0.64,1) 0.3s both;
      }

      .social-btn {
        transition: transform 0.18s cubic-bezier(0.34,1.5,0.64,1),
                    background 0.18s ease,
                    color 0.18s ease,
                    border-color 0.18s ease;
      }
      .social-btn:hover {
        transform: scale(1.12) translateY(-2px);
      }
      .social-btn:active {
        transform: scale(0.95);
      }

      .close-btn {
        transition: transform 0.2s ease, opacity 0.2s ease;
      }
      .close-btn:hover {
        transform: rotate(90deg) scale(1.1);
        opacity: 0.7;
      }
    `}</style>

          <div
            onClick={(e) => e.stopPropagation()}
            className="modal-card flex flex-col justify-around items-center w-full max-w-4xl p-6 md:p-8 rounded-3xl bg-orange-100 shadow-2xl shadow-black/40 relative overflow-y-auto max-h-[90vh]"
          >
            {/* Botón cerrar */}
            <button
              onClick={() => setOpen(false)}
              className="close-btn absolute top-4 right-4 text-zinc-400 hover:text-zinc-700"
              aria-label="Cerrar"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
              </svg>
            </button>

            {/* Header */}
            <div className="modal-header px-3 py-4">
              <p className="mb-3 text-center font-bold text-sx text-orange-400 uppercase font-mono">
                contacto
              </p>
              <h3 className="text-2xl md:text-3xl text-center font-serif font-bold mb-3">
                Hablemos de <br />
                tu Próximo <span className="text-orange-400">proyecto</span>
              </h3>
              <p className="font-mono text-center text-sm md:text-base">
                ¿Tienes una idea en mente o quieres colaborar? <br />
                Envíame un mensaje y te responderé lo antes posible.
              </p>
            </div>

            <div className="flex flex-col md:flex-row justify-between gap-6 w-full">
              {/* Formulario */}
              <div className="modal-form px-0 md:px-2 w-full md:w-auto">
                <Contacto />
                <p className="flex items-center gap-2 text-zinc-500 mt-2 text-center text-xs font-mono">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 0a4 4 0 0 1 4 4v2.05a2.5 2.5 0 0 1 2 2.45v5a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 13.5v-5a2.5 2.5 0 0 1 2-2.45V4a4 4 0 0 1 4-4M4.5 7A1.5 1.5 0 0 0 3 8.5v5A1.5 1.5 0 0 0 4.5 15h7a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 11.5 7zM8 1a3 3 0 0 0-3 3v2h6V4a3 3 0 0 0-3-3"
                    />
                  </svg>
                  Tu información está segura. No comparto tus datos.
                </p>
              </div>

              {/* Panel derecho */}
              <div className="modal-side px-6 md:px-9 bg-amber-50 rounded-4xl py-8 md:py-9 shadow-2xl shadow-zinc-950/50 w-full md:w-auto">
                <div className="icon-pop bg-zinc-900 px-5 py-5 w-20 rounded-2xl mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full text-amber-50"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z" />
                  </svg>
                </div>
                <h4 className="font-serif text-xl md:text-2xl text-zinc-900 mb-4">
                  ¿Prefieres otro medio?
                </h4>
                <p className="font-mono text-sm md:text-md">
                  También puedes contactarme a través <br />
                  de mis redes sociales o LinkedIn.
                </p>
                <div className="flex justify-center items-center px-5 pt-10 md:pt-15 gap-7">
                  <a
                    target="_blank"
                    href="https://github.com/Elias-mc"
                    className="social-btn rounded-md flex flex-col items-center text-zinc-200 hover:bg-amber-50 hover:border-zinc-900 border-2 hover:text-zinc-900 bg-zinc-900 px-3 py-3"
                  >
                    <div className="w-10 h-10 flex items-center justify-center rounded-xl">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-full"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                      </svg>
                    </div>
                  </a>

                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/elias-macay-b02753386/"
                    className="social-btn rounded-md flex flex-col items-center text-zinc-200 hover:bg-amber-50 hover:border-zinc-900 border-2 hover:text-zinc-900 bg-zinc-900 px-3 py-3"
                  >
                    <div className="w-10 h-10 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-full"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {homeRef && (
        <section className=" transition-all fixed bg-zinc-800 opacity-99 flex-col gap-9 inset-0 z-61 mx-auto flex items-center justify-center p-4 ">
          <div className="relative -right-50 -top-50">
            <button
              className=" text-zinc-100 w-6 cursor-pointer"
              onClick={() => homeVisible(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-full"
                viewBox="0 0 16 16"
              >
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
              </svg>
            </button>
          </div>

          <div className="flex flex-col items-center gap-5">
            <a
              href="#Home"
              onClick={() => homeVisible(false)}
              className="text-white text-2xl uppercase "
            >
              Inicio
            </a>

            <a
              href="#About-me"
              onClick={() => homeVisible(false)}
              className="text-white text-2xl uppercase "
            >
              Sobre mi
            </a>

            <a
              href="#Skills"
              onClick={() => homeVisible(false)}
              className="text-white text-2xl uppercase "
            >
              Habilidades
            </a>

            <a
              href="#mail"
              onClick={() => homeVisible(false)}
              className="text-white text-2xl uppercase "
            >
              Contacto
            </a>
          </div>

          <div className=" flex flex-row gap-10 ">
            <a
              target="_blank"
              href="https://github.com/Elias-mc"
              className="flex flex-col items-center text-zinc-800 hover:text-zinc-50 group bg-zinc-200 hover:bg-zinc-400  p-3 rounded-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
              </svg>
            </a>

            <a
              target="_blank"
              href="https://www.linkedin.com/in/elias-macay-b02753386/"
              className="flex flex-col items-center text-zinc-800 hover:text-zinc-50 group bg-zinc-200 hover:bg-zinc-400  p-3 rounded-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
              </svg>
            </a>
          </div>
        </section>
      )}
    </>
  );
}

export default App;
