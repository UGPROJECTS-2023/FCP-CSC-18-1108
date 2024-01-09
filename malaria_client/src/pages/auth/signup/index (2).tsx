import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import { Toaster } from "react-hot-toast";
import { useForm, SubmitHandler } from "react-hook-form";
import RequiredError from "@/components/RequiredError";
import { useRouter } from "next/router";
import axios from "axios";
import { API_URL } from "@/config/index";
import toast from "react-hot-toast";

type SignUpInputs = {
  email: string;
  first_name: string;
  last_name: string;
  password: string;
};

const index = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignUpInputs>();
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const onSubmit: SubmitHandler<SignUpInputs> = async (data) => {
    try {
      setLoading(true);
      await axios.post(`${API_URL}/api/users`, data, {
        withCredentials: true,
      });
      setLoading(false);
      toast.success(
        "Signup successful! We are currently veryfiying your account."
      );
      console.log("Signup Successful!");
      // router.replace("/login");
    } catch (err: any) {
      setLoading(false);
      console.error(err);
      console.log(err?.response?.data.message);
      toast.error(err?.response?.data.message);
      <Toaster position="top-right" reverseOrder={false} />;
    }
  };
  return (
    <div>
      <div className=" absolute w-full -mt-5">
        <Navbar />
      </div>
      <Toaster position="bottom-left" toastOptions={{ duration: 10000 }} />
      <div className="flex flex-wrap w-full overflow-hidden h-screen">
        <div className="flex flex-col w-full md:w-1/2">
          <div className="flex flex-col justify-center px-8 pt-8 my-auto md:justify-start md:pt-0 md:px-24 lg:px-32">
            <p className="text-3xl text-center">Welcome Back.</p>
            <form
              className="flex flex-col pt-3 md:pt-8"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className=" flex flex-row space-x-5">
                <div className="flex flex-col pt-4">
                  <div className=" flex flex-row space-x-4">
                    <div className="flex relative ">
                      <span className=" inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="w-6 h-6 text-primary"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                          />
                        </svg>
                      </span>
                      <input
                        type="text"
                        name="first_name"
                        className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        placeholder="First Name"
                        {...register("first_name", { required: true })}
                      />
                    </div>

                    <div className="flex relative ">
                      <span className=" inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="w-6 h-6 text-primary"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                          />
                        </svg>
                      </span>
                      <input
                        type="text"
                        name="last_name"
                        className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        placeholder=" Last Name"
                        {...register("last_name", { required: true })}
                      />
                    </div>
                  </div>
                  <div className=" flex justify-between">
                    {errors.first_name?.type === "required" && (
                      <RequiredError name="First Name is required" />
                    )}
                    {errors.last_name?.type === "required" && (
                      <RequiredError name="Last name required" />
                    )}
                  </div>
                </div>
              </div>
              <div className="flex flex-col pt-4">
                <div className="flex relative ">
                  <span className=" inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                    <svg
                      width="15"
                      height="15"
                      className=" text-primary"
                      fill="currentColor"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z"></path>
                    </svg>
                  </span>
                  <input
                    type="email"
                    name="email"
                    className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Email"
                    {...register("email", { required: true })}
                  />
                </div>
                {errors.email?.type === "required" && (
                  <RequiredError name="Email address" />
                )}
              </div>

              <div className="flex flex-col pt-4 mb-12">
                <div className="flex relative ">
                  <span className=" inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                    <svg
                      width="15"
                      height="15"
                      className=" text-primary"
                      fill="currentColor"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1376 768q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-320q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75-181 75-75 181v320h736z"></path>
                    </svg>
                  </span>
                  <input
                    type="password"
                    name="password"
                    className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Password"
                    {...register("password", { required: true })}
                  />
                </div>
                {errors.password?.type === "required" && (
                  <RequiredError name="Password" />
                )}
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-primary shadow-md hover:text-white hover:bg-black focus:outline-none focus:ring-2"
              >
                <span className="w-full">Submit</span>
              </button>
            </form>
            <div className="pt-12 pb-12 text-center">
              <p>
                Already have an account?
                <a
                  href="/auth/login"
                  className="font-semibold underline text-primary"
                >
                  Login here.
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="w-1/2 h-5/6 shadow-2xl transform translate-y-48 translate-x-28 rotate-12">
          <img
            className="hidden object-cover shadow-2x w-full h-full md:block rounded-2xl"
            src="/ml.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default index;
