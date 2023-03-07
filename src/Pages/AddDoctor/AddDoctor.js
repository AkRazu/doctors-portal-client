import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
const AddDoctor = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const imageHostKey = process.env.REACT_APP_imgbb_key;

  const { data: specialties, isLoading } = useQuery({
    queryKey: ["specialty"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/appointmentSpecialty");
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <progress className="progress w-56"></progress>;
  }
  const handelSignup = (data) => {
    // console.log(data);
    const img = data.img[0];
    const formData = new FormData();
    formData.append("image", img);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((imageData) => {
        if (imageData.success) {
          console.log("Success:", imageData);
          const doctor = {
            name: data.name,
            email: data.email,
            specialty: data.specialty,
            image: imageData.data.url,
          };
          fetch(`http://localhost:5000/doctors`, {
            method: "POST",
            headers: {
              "Content-type": "application/json; charset=UTF-8",
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(doctor),
          })
            .then((response) => response.json())
            .then((json) => {
              console.log(json);
              navigate("/dashboard/managedoctors");
              toast.success(`${data.name} is added successful`);
            });
        }
      });
  };
  //   console.log('Key', imageHostKey);
  return (
    <div className="h-[800px] ">
      <h2 className="font-bold text-2xl">Add a New Doctor</h2>

     <div className="flex justify-center">
     <form onSubmit={handleSubmit(handelSignup)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Name * </span>
          </label>

          <input
            type="name"
            className="input input-bordered w-full max-w-xs "
            {...register("name", { required: "Email is required" })}
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Email *</span>
          </label>
          <input
            type="email"
            className="input input-bordered w-full max-w-xs "
            {...register("email", { required: "Email is required" })}
          />
        </div>
        {errors.email && (
          <p className="pt-2 text-red-600" role="alert">
            {errors.email?.message}
          </p>
        )}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Specialty</span>
          </label>
          <select
            {...register("specialty")}
            className="select input-bordered w-full max-w-xs"
          >
            {specialties.map((specialty) => (
              <option key={specialty._id} value={specialty.name}>
                {specialty.name}
              </option>
            ))}
          </select>
        </div>
        {errors.email && (
          <p className="pt-2 text-red-600" role="alert">
            {errors.email?.message}
          </p>
        )}

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>

          <input
            type="file"
            name="img"
            className="file-input file-input-bordered w-full max-w-xs"
            {...register("img", { required: "Photo is required" })}
          />
        </div>
        <input
          value="Add"
          className="btn btn-accent  w-full max-w-xs my-2"
          type="submit"
        />
      </form>
     </div>
    </div>
  );
};

export default AddDoctor;
