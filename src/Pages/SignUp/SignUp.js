import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handelSignup = (data) => {
    console.log(data);
  };
  return (
    <div>
      <div className="h-[800px] flex justify-center items-center">
        <div className="w-96 p-7 shadow-xl rounded-lg">
          <h2 className="text-xl text-center">Sign Up</h2>
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
                {" "}
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be 6 characters long",
                  },
                  pattern: {
                    value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                    message:
                      "Password must have uppercase, number and special characters",
                  },
                })}
                className="input input-bordered w-full max-w-xs"
              />
              {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}
            </div>
            <input
              value="Sign Up"
              className="btn btn-accent  w-full max-w-xs my-2"
              type="submit"
            />
          </form>
          <p className="text-center my-4">
            Already have an account ?
            <Link className="text-secondary" to="/login">
              Login
            </Link>
          </p>

          <div className="divider">OR</div>
          <button className="btn btn-outline w-full max-w-xs">
            CONTINUE WITH GOOGLE
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
