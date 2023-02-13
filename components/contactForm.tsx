import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  Name: string;
  Company: string;
  Phone: string;
  Email: string;
  Message: string;
};
const ContactForm = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    let contactData = {
      name: data.Name,
      company: data.Company,
      phone: data.Phone,
      email: data.Email,
      message: data.Message,
    };
    fetch("/api/contactMe", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contactData),
    }).then((res) => {
      console.log("Respuesta recibida!");
      console.log(res);
      if (res.ok && res.status == 200) {
        console.log("Exitoso!");
      }
    });
  };
  return (
    <form action="/api/contactMe" method="POST" className="w-4/5 py-8 px-4">
      {/*<form onSubmit={handleSubmit(onSubmit)} className="w-4/5 py-8 px-4">*/}
      <div className="flex flex-col justify-center items-center gap-y-2">
        <div className="w-full flex justify-between items-center">
          <div className="flex justify-center items-center gap-x-4">
            <label htmlFor="Name">Nombre(*):</label>
            <input
              type="text"
              id="Name"
              className="w-full rounded border border-gray-300 focus:border-blue-300 focus:ring-2 focus:ring-blue-300 outline-none text-gray-700 px-3 leading-8 transition-colors duration-400 ease-in-out"
              required={true}
              {...register("Name", { required: true })}
            />
            {errors.Name && `<span>Nombre requerido</span>`}
          </div>
          <div className="flex justify-center items-center gap-x-4">
            <label htmlFor="Company">Compañia:</label>
            <input
              type="text"
              id="Company"
              className="w-full rounded border border-gray-300 focus:border-blue-300 focus:ring-2 focus:ring-blue-300 outline-none text-gray-700 px-3 leading-8 transition-colors duration-400 ease-in-out"
              required={false}
              {...register("Company")}
            />
          </div>
        </div>
        <div className="w-full flex justify-between items-center">
          <div className="flex justify-center items-center gap-x-4">
            <label htmlFor="Phone">Teléfono:</label>
            <input
              type="text"
              id="Phone"
              className="w-full rounded border border-gray-300 focus:border-blue-300 focus:ring-2 focus:ring-blue-300 outline-none text-gray-700 px-3 leading-8 transition-colors duration-400 ease-in-out"
              required={false}
              {...register("Phone")}
            />
          </div>
          <div className="flex justify-center items-center gap-x-4">
            <label htmlFor="Email">Correo:</label>
            <input
              type="email"
              id="Email"
              className="w-full rounded border border-gray-300 focus:border-blue-300 focus:ring-2 focus:ring-blue-300 outline-none text-gray-700 px-3 leading-8 transition-colors duration-400 ease-in-out"
              required={true}
              {...register("Email")}
            />
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-start">
          <label htmlFor="Message">Mensaje:</label>
          <textarea
            id="Message"
            className="w-full rounded border border-gray-300 focus:border-blue-300 focus:ring-2 focus:ring-blue-300 outline-none text-gray-700 px-3 leading-8 transition-colors duration-400 ease-in-out resize-none"
            required={true}
            {...register("Message")}
          ></textarea>
        </div>
        <div className="flex justify-center items-center py-2">
          <button
            className="px-4 py-2 text-white font-medium bg-emerald-500 hover:bg-emerald-600 rounded-lg"
            type="submit"
          >
            Contactemos
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
