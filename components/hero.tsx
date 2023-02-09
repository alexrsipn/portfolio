import Image from "next/image";

const Hero = (): JSX.Element => {
  return (
    <section
      id="Home"
      className="w-full bg-aliceBlue-500 dark:bg-rbFogra29-500 bg-hero-pattern lg:bg-repeat-round"
    >
      <div className=" flex flex-col lg:flex lg:flex-row m-8">
        <div className="w-full lg:w-2/3 flex flex-col justify-center items-center">
          <div className="w-full text-center lg:text-left lg:px-16">
            <h2 className="font-black text-2xl leading-relaxed lg:text-5xl lg:leading-loose text-cornflowerBlue-700 dark:text-aliceBlue-400">
              Hola, soy Alexis Ruiz 👋
            </h2>
            <h4 className="font-semibold text-xl lg:text-3xl leading-relaxed text-cornflowerBlue-600 dark:text-aliceBlue-500">
              Desarrollador Analista
            </h4>
            <p className="font-normal leading-normal text-cornflowerBlue-600 bg-white bg-opacity-80 dark:bg-transparent rounded text-center lg:text-left dark:text-aliceBlue-500">
              Ayudo a compañías a desarrollar soluciones
            </p>
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
      <div className="w-full flex justify-center items-center mb-8">
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
