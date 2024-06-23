import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form"

function Signup() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data)
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex items-center justify-center w-[600px]" >
        <div className="modal-box dark:bg-gray-800 dark:text-white p-8">
          <Link
            to="/"
            className="btn btn-sm btn-circle btn-ghost hover:bg-blue-500 absolute right-2 top-2 dark:hover:bg-blue-700"
          >
            ✕
          </Link>
          <h3 className="font-bold text-lg">Login</h3>
          <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="input input-bordered w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                type="name"
                id="name"
                name="name"
                placeholder="Enter your name"
                {...register("name", { required: true })}
              />
              <br />
               {errors.name && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="input input-bordered w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                {...register("email", { required: true })}
              />
              <br />
               {errors.email && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            <div className="mb-4">
              <label
                className="block text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="input input-bordered w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                {...register("password", { required: true })}
              />
              <br />
               {errors.password && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            <button
              type="submit"
              className="btn bg-blue-500 w-full hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-800"
            >
              Signup
            </button>
          </form>
          <p className="mt-4 text-center">
            Already Have a Account?{" "}
            <Link
              to="/"
              className="text-blue-500 hover:underline dark:text-blue-400"
            >
              Login
            </Link>
            <Login />
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
