import { API_URL } from "@/config/index";
import AccountLayout from "@/layouts/AccountLayout";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

type VerifyInputs = {
  verify: string;
};
const index = () => {
  const [doctors, setDoctors] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<VerifyInputs>();
  const [loading, setLoading] = useState(false);
  const onSubmit: SubmitHandler<VerifyInputs> = async (values) => {
    try {
      setLoading(true);
      const response = await axios.post(
        `${API_URL}/api/users/verify-user`,
        values,
        {
          withCredentials: true,
        }
      );
      setLoading(false);
      toast.success("Verified successfully!");
    } catch (err: any) {
      setLoading(false);
      console.error(err);
      toast.error(err?.response?.data.message);
    }
  };

  useEffect(() => {
    axios
      .get(`${API_URL}/api/users/unverified-doctors`)
      .then((res) => {
        if (!res.ok) {
          setError("could Not Fetch The resources");
        }
        setDoctors(res.data.data);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("fetch Aborted");
        } else {
          setIsLoading(false);
          setError(err.message);
        }
      });
  }, []);
  return (
    <AccountLayout title={"Unverified Doctors"}>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Email Address
              </th>
              <th scope="col" className="px-6 py-3">
                First Name
              </th>
              <th scope="col" className="px-6 py-3">
                Last Name
              </th>
              <th scope="col" className="px-6 py-3">
                Phone Number
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor) => (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {doctor?.email}
                </th>
                <td className="px-6 py-4">{doctor.first_name}</td>
                <td className="px-6 py-4">{doctor.last_name}</td>
                <td className="px-6 py-4"></td>
                <td className="px-6 py-4">Pending</td>
                <td className="px-6 py-4">
                  <button
                    onClick={handleSubmit(onSubmit)}
                    type="button"
                    value={doctor._id}
                    className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                    {...register("verify", { required: true })}
                  >
                    Approve
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AccountLayout>
  );
};

export default index;
