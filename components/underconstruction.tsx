import Image from "next/image";

export default function UnderConstruction() {
  return (
    <div className="flex flex-col justify-center items-center h-full bg-white dark:bg-[#2e2f3e]">
      <Image
        src="/underconstruction.png"
        alt="Página en construcción"
        width="400"
        height="138"
      ></Image>
      <h4 className="select-none text-black dark:text-white">
        Bajo construcción
      </h4>
    </div>
  );
}
