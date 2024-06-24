import { React, useEffect } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Login() {
  useEffect(() => {
    const modal = document.getElementById("login_modal");
    const closeButton = document.getElementById("close_button");

    closeButton.addEventListener("click", () => {
      modal.close();
    });

    return () => {
      closeButton.removeEventListener("click", () => {
        modal.close();
      });
    };
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:4001/user/login", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Loggedin Successfully");
          document.getElementById("login_modal").close();
          setTimeout(() => {
            window.location.reload();
            localStorage.setItem("Users", JSON.stringify(res.data.user));
          }, 1000);
        }
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error: " + err.response.data.message);
          setTimeout(() => {}, 2000);
        }
      });
  };
  return (
    <div>
      <dialog id="login_modal" className="modal">
        <div className="modal-box dark:bg-gray-800 dark:text-white">
          <button
            id="close_button"
            className="btn btn-sm btn-circle btn-ghost hover:bg-blue-500 absolute right-2 top-2 dark:hover:bg-blue-700"
          >
            ✕
          </button>
          <h3 className="font-bold text-lg">Login</h3>
          <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
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
              Login
            </button>
          </form>
          <p className="mt-4 text-center">
            Not registered yet?{" "}
            <Link
              to="/signup"
              className="text-blue-500 hover:underline dark:text-blue-400"
            >
              Create an account
            </Link>
          </p>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
