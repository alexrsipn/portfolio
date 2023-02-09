import { useState } from "react";

const Skill = (
  icon: string,
  title: string,
  description: string
): JSX.Element => {
  const [useIcon, setUseIcon] = useState("");
  switch (icon) {
    case "Languages":
      setUseIcon(`<svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-12 h-12"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z"
            />
          </svg>`);
      break;
    default:
      break;
  }
  return (
    <div className="flex relative py-4 sm:items-center md:w-2/3 mx-auto">
      <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div className="h-full w-1 bg-gainsboro-500 pointer-events-none"></div>
      </div>
      <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div className="flex-shrink-0 w-24 h-24 bg-cornflowerBlue-400 bg-opacity-80 hover:bg-cornflowerBlue-500 hover:bg-opacity-100 text-white rounded-full inline-flex items-center justify-center">
          {useIcon}
        </div>
        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 className="font-medium text-gray-900 mb-1 text-xl">{title}</h2>
          <p className="leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
