import FormModal from "@/components/FormModal";
import AdminLayout from "@/layouts/AdminLayout";
import React, { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { useForm, SubmitHandler } from "react-hook-form";
import RequiredError from "@/components/RequiredError";
import { useRouter } from "next/router";
import axios from "axios";
import { API_URL } from "@/config/index";
import toast from "react-hot-toast";

type SymptomInputs = {
  name: string;
  required: boolean;
};
const index = () => {
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState("");
  const [symptom, setSymptom] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  function closeModal() {
    setShowModal(false);
  }
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SymptomInputs>();
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const onSubmit: SubmitHandler<SymptomInputs> = async (values) => {
    try {
      setLoading(true);
      const response = await axios.post(`${API_URL}/api/symptom`, values, {
        withCredentials: true,
      });
      setLoading(false);
      toast.success("Symptom Added successfully!");
    } catch (err: any) {
      setLoading(false);
      console.error(err);
      toast.error(err?.response?.data.message);
    }
  };
  useEffect(() => {
    setInterval(() => {
      axios
        .get(`${API_URL}/api/symptom`)
        .then((res) => {
          if (!res.ok) {
            setError("could Not Fetch The resources");
          }
          setSymptom(res.data.data);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("fetch Aborted");
          } else {
            setIsLoading(false);
            setError(err.message);
          }
        });
    }, 1000);
  }, []);
  return (
    <AdminLayout title={"All Available Symptoms"}>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div className="flex w-1/4 my-4 m-10">
          <button
            onClick={() => setShowModal(true)}
            className="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
          >
            Add Symptoms
          </button>
        </div>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
            </tr>
          </thead>
          <tbody>
            {symptom &&
              symptom.map((symptom) => (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {symptom.name}
                  </th>
                </tr>
              ))}
          </tbody>
        </table>
        {showModal && (
          <FormModal close={closeModal}>
            {" "}
            <form onClick={handleSubmit(onSubmit)}>
              <div className="flex flex-col mb-2">
                <div className=" relative ">
                  <input
                    type="text"
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="e.g Feever"
                    {...register("name", { required: true })}
                  />
                  {errors.name?.type === "required" && (
                    <RequiredError name="Name is required" />
                  )}
                </div>
                <div className=" relative ">
                  <select
                    className=" my-5 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="e.g Fever"
                    {...register("required", { required: true })}
                  >
                    <option value="">Select Severity</option>
                    <option value="true">Strongly Required</option>
                    <option value="false">Not Really Required</option>
                  </select>
                  {errors.name?.type === "required" && (
                    <RequiredError name="Name is required" />
                  )}
                </div>
              </div>
              <div className="flex w-full my-4">
                <button
                  type="submit"
                  className="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                >
                  Add Symptom
                </button>
              </div>
            </form>
          </FormModal>
        )}
      </div>
    </AdminLayout>
  );
};

export default index;
