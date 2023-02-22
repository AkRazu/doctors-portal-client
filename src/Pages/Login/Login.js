import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { signIn } = useContext(AuthContext);
  const handelLogin = (data) => {
    console.log(data);
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((err) => console.log(err));
  };
  console.log();
  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 p-7 shadow-xl rounded-lg">
        <h2 className="text-xl text-center">Login</h2>
        <form onSubmit={handleSubmit(handelLogin)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", { required: "Email Address is required" })}
              className="input input-bordered w-full max-w-xs "
            />
          </div>
          {errors.email && (
            <p className="text-red-600 pt-2" role="alert">
              {errors.email?.message}
            </p>
          )}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be 6 characters or longer",
                },
              })}
              type="password"
              className="input input-bordered w-full max-w-xs"
            />
            {errors.password && (
              <p className="text-red-600 pt-2" role="alert">
                {errors.password?.message}
              </p>
            )}
            <label className="label">
              <Link to="/forget" className="label-text-alt">
                Forgot Password ?
              </Link>
            </label>
          </div>

          <input
            value="LOGIN"
            className="btn btn-accent  w-full max-w-xs my-2"
            type="submit"
          />
        </form>
        <p className="text-center my-4">
          New to Doctors Portal?
          <Link className="text-secondary" to="/signup">
            Create new account
          </Link>
        </p>

        <div className="divider">OR</div>
        <button className="btn btn-outline w-full max-w-xs">
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default Login;
