import Image from "next/image";

const Hero = (): JSX.Element => {
  return (
    <section
      id="Home"
      className="w-full bg-opacity-80 dark:bg-rbFogra29-500 bg-hero-pattern bg-cover "
    >
      <div className="flex flex-col lg:flex lg:flex-row mt-20">
        <div className="w-full lg:w-2/3 flex flex-col justify-center items-center">
          <div className="w-5/6 h-3/4">
            <div className="grid grid-flow-row gap-8 lg:grid-flow-col bg-white dark:bg-b-500 rounded-3xl border-2 border-cornflowerBlue-500 border-opacity-75 shadow-lg">
              <div className="flex justify-center items-center pt-8">
                <h2 className="font-black text-2xl text-center lg:text-5xl text-cornflowerBlue-500 dark:text-aliceBlue-400 select-none">
                  Hola, soy Alexis Ruiz 👋
                </h2>
              </div>
              <div className="flex flex-col justify-center items-center">
                <h4 className="font-semibold text-xl lg:text-3xl leading-relaxed text-cornflowerBlue-500 dark:text-aliceBlue-500">
                  Desarrollador Analista
                </h4>
              </div>
              <div className="p-4 lg:px-16 text-justify">
                <p className="font-normal leading-normal text-cornflowerBlue-600 text-center dark:text-aliceBlue-500">
                  Soy un desarrollador de software con más de 3 años de
                  experiencia, destacado en análisis, resolución de problemas y
                  creación de soluciones eficientes de TI.
                </p>
                <p className="font-normal leading-normal text-cornflowerBlue-600 text-center dark:text-aliceBlue-500">
                  Experimentado en ABSL, Python, JavaScript, bases de datos y
                  servidores.
                </p>
                <p className="font-normal leading-normal text-cornflowerBlue-600 text-center dark:text-aliceBlue-500">
                  Involucrado en todo el ciclo de vida del desarrollo.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 flex justify-center lg:justify-start items-center">
          <Image
            src="/profilePhoto.png"
            alt="Profile illustration hero"
            width="388"
            height="434"
            className="w-4/5 lg:w-full"
          />
        </div>
      </div>
      <div className="w-full flex justify-center items-center my-8">
        <a
          href="mailto:alexrs.escom@gmail.com"
          className="font-semibold text-lg lg:text-2xl text-white bg-emerald-500 hover:bg-emerald-600 dark:bg-emerald-600 dark:hover:bg-emerald-700 px-16 lg:px-32 py-4 rounded-md shadow-md"
        >
          ¡Hablemos!
        </a>
      </div>
    </section>
  );
};

export default Hero;
