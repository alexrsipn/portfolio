import Image from "next/image";

export default function Navbar() {
  return (
    <div className="w-full px-8 py-4 shadow-md fixed">
      <div className="flex justify-between items-center">
        <div>
          <a
            href="/"
            className="flex justify-center items-center gap-2 decoration-o"
          >
            <Image
              src="/LogoBluumoon.png"
              alt="Logo Bluumoon"
              width="48"
              height="48"
            ></Image>
            <span className="font-medium">Bluumoon</span>
          </a>
        </div>
        <div>
          <ul className="list-none flex justify-center items-center gap-x-4">
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
          </ul>
        </div>
      </div>
    </div>
  );
}
