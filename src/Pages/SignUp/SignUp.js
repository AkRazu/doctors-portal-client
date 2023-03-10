import { toHaveStyle } from "@testing-library/jest-dom/dist/matchers";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import toast from "react-hot-toast";
import useToken from "../../Hooks/useToken";

const SignUp = () => {
  const { createUser, updateUser } = useContext(AuthContext);
  const [signUpError, setSignUPError] = useState("");

  const [createdUserEmail, setCreatedUserEmail] = useState("");
  const [token] = useToken(createdUserEmail);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  if(token){
    navigate('/')
  }
  const handelSignup = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("User create successful");
        const userInfo = {
          displayName: data?.name,
        };
        updateUser(userInfo)
          .then(() => {
            saveUser(data.name, data.email);
          })
          .catch((err) => console.log(err));
      })
      .catch((error) => {
        setSignUPError(error?.message);
        // ..
      });
  };

  const saveUser = (name, email) => {
    const user = { name, email };

    fetch("http://localhost:5000/users", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCreatedUserEmail(email)
      });
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
          {signUpError && <p className="text-red-500">{signUpError}</p>}
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
