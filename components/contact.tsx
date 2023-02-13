import Link from "next/link";
import ContactForm from "@/components/contactForm";
import UnderConstruction from "@/components/underconstruction";

const Contact = (): JSX.Element => {
  return (
    <section
      id="Contact"
      className="container bg-white dark:bg-rbFogra29-500 pt-16 border-b"
    >
      <div className="m-8">
        <h2 className="font-bold text-2xl lg:text-4xl leading-loose mb-8">
          Contacto
        </h2>
        <div className="grid grid-cols-4 rounded-lg shadow-lg border border-red-500">
          <div className="flex flex-col justify-evenly items-center border-r-2 border-gainsboro-500">
            <h4 className="font-semibold">Sígueme en LinkedIn</h4>
            <Link
              href={"https://www.linkedin.com/in/alexisruizmx"}
              rel={"noreferrer noopener"}
              target="_blank"
              className="text-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="96"
                height="96"
                viewBox="0 0 48 48"
                className="opacity-90 hover:opacity-100"
              >
                <path
                  fill="#0288D1"
                  d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
                ></path>
                <path
                  fill="#FFF"
                  d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
                ></path>
              </svg>
            </Link>
            <span className="text-center text-[#0077B5] font-mono">
              /in/alexisruizmx
            </span>
          </div>
          <div className="flex flex-col justify-center items-center col-span-3">
            <h4 className="font-semibold">
              O puedes contactarme a través de un correo electrónico
            </h4>
            {/*<ContactForm />*/}
            <UnderConstruction />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
