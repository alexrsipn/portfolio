import Image from "next/image";
import Link from "next/link";

const Projects = (): JSX.Element => {
  return (
    <section
      id="Projects"
      className="container bg-aliceBlue-200 dark:bg-rbFogra29-500"
    >
      <div className="m-8">
        <h2 className="font-bold text-2xl lg:text-4xl leading-loose">Proyectos</h2>
        <div className="flex flex-col justify-center items-center gap-4">
          {/* Proyecto INCOM */}
          <div className="w-4/5 h-96 lg:h-64 grid sm:grid-flow-row lg:grid-flow-col lg:auto-cols-fr sm:auto-rows-fr border border-rbFogra29-500 rounded-md shadow-md hover:scale-[1.01] hover:shadow-2xl transition ease-out duration-500">
            <div className="flex flex-col justify-center items-center gap-4 order-1">
              <div className="text-center">
                <h4 className="font-semibold text-lg lg:text-2xl tracking-widest leading-relaxed">
                  INCOM
                </h4>
                <p className="font-medium text-sm lg:text-base px-4 leading-normal max-w-lg">
                  Empresa mexicana dedicada a la comercialización de insumos
                  para telecomunicaciones a las principales empresas líder del
                  sector
                </p>
              </div>
              <Link
                href="#"
                className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-md text-white font-mono font-semibold"
              >
                Caso de estudio
              </Link>
            </div>
            <a
              href="https://www.incom.mx"
              title="INCOM - La ferretera de las telecomunicaciones"
              target="_blank"
              rel="noreferrer noopener"
              className="relative order-2"
            >
              <Image
                src="/newIncom.png"
                alt="Proyecto INCOM"
                width="600"
                height="444"
                className="absolute inset-0 h-full w-full object-cover object-top opacity-50 hover:opacity-100 transition ease-in-out duration-500 lg:rounded-tr-md lg:rounded-br-md"
              ></Image>
            </a>
          </div>
          {/* Fin de proyecto INCOM */}
          {/* Proyecto MAUHAUS */}
          <div className="w-4/5 h-96 lg:h-64 grid sm:grid-flow-row lg:grid-flow-col lg:auto-cols-fr sm:auto-rows-fr border border-rbFogra29-500 rounded-md shadow-md hover:scale-[1.01] hover:shadow-2xl transition ease-out duration-500">
            <div className="flex flex-col justify-center items-center gap-4 order-1 lg:order-2">
              <div className="text-center">
                <h4 className="font-semibold text-lg lg:text-2xl tracking-widest leading-relaxed">
                  MAUHAUS TOYS
                </h4>
                <p className="font-medium text-sm lg:text-base px-4 leading-normal max-w-lg">
                  Empresa mexicana especializada en venta de coleccionables como
                  Funko, NECA, McFarlane, IronStudios, MarvelSelect, Hot Toys,
                  Disney y más.
                </p>
              </div>
              <Link
                href="#"
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-md text-white font-mono font-semibold"
              >
                Caso de estudio
              </Link>
            </div>
            <a
              href="https://www.mauhaustoys.com"
              title="MAUHAUSTOYS - Del mito a la realidad"
              target="_blank"
              rel="noreferrer noopener"
              className="relative order-1"
            >
              <Image
                src="/newMauhaus.png"
                alt="Proyecto MAUHAUS"
                width="600"
                height="444"
                className="absolute inset-0 h-full w-full object-cover object-top opacity-50 hover:opacity-100 transition ease-in-out duration-500 lg:rounded-tr-md lg:rounded-br-md"
              ></Image>
            </a>
          </div>
          {/* Fin de proyecto MAUHAUS */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
