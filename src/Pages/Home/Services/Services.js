import React from "react";
import fluoride from "../../../assets/images/fluoride.png";
import cavity from "../../../assets/images/cavity.png";
import whitening from "../../../assets/images/whitening.png";
import Service from "../Service/Service";
const Services = () => {
  const services = [
    {
      id: 1,
      name: "Fluoride Treatment",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      image: fluoride,
    },
    {
      id: 2,
      name: "Cavity Filling",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      image: cavity,
    },
    {
      id: 3,
      name: "Teeth Whitening",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      image: whitening,
    },
  ];
  return (
    <div>
        <div className="text-center lg:mt-32 mt-20 mb-12 lg:mb-20">
            <h4 className="text-secondary font-bold text-xl">OUR SERVICES</h4>
            <h1 className="text-4xl text-[#3A4256]">Services We Provide</h1>

        </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 grid-cols-1 mt-8">
        {
            services.map(service=><Service key={service.id} service={service}></Service>)
        }
      </div>
    </div>
  );
};

export default Services;
