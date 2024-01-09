import FormModal from "@/components/FormModal";
import Modal from "@/components/Modal";
import AdminLayout from "@/layouts/AdminLayout";
import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";

const index = () => {
  const [showModal, setShowModal] = useState(false);

  const [malariaDrugs, setMalariaDrugs] = useState([]);
  const [patientAge, setPatientAge] = useState("");
  const [actCombination, setActCombination] = useState("");
  const [testType, setTestType] = useState("");
  const [newDrug, setNewDrug] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/malaria-drugs", {
        malariaDrugs,
        patientAge,
        actCombination,
        testType,
      });
      toast.success("Malaria drugs submitted successfully!");
    } catch (err) {
      console.error(err);
      toast.error("Somthging Went Wrong!");
    }
  };

  function closeModal() {
    setShowModal(false);
  }

  return (
    <AdminLayout title={"All Available Drugs"}>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div className="flex w-1/4 my-4 m-10">
          <button
            onClick={() => setShowModal(true)}
            className="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
          >
            Add Drugs
          </button>
        </div>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Drug Name
              </th>
              <th scope="col" className="px-6 py-3">
                Dosage
              </th>
              <th scope="col" className="px-6 py-3">
                Age
              </th>
              <th scope="col" className="px-6 py-3">
                Frequency
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
              <th scope="col" className="px-6 py-3">
                Instruction
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Paracetamol
              </th>
              <td className="px-6 py-4">3 doses</td>
              <td className="px-6 py-4">10 years and above</td>
              <td className="px-6 py-4">5 times a day</td>
              <td className="px-6 py-4">Pregnant Woman can't use this</td>
              <td className="px-6 py-4">
                Make sure you use this drugs to avoid any problem in the future
              </td>
            </tr>
          </tbody>
        </table>
        {showModal && (
          <FormModal close={closeModal}>
            {" "}
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col mb-2">
                <div className=" relative ">
                  <input
                    type="text"
                    value={actCombination}
                    onChange={(e) => setActCombination(e.target.value)}
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    name="actCombination"
                    placeholder="Enter ACT Combination"
                  />
                </div>
              </div>
              <div className="flex gap-4 mb-2">
                <div className=" relative ">
                  <input
                    type="text"
                    value={testType}
                    onChange={(e) => setTestType(e.target.value)}
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    name=" testType"
                    placeholder=" Enter Test Type"
                  />
                </div>
                <div className=" relative ">
                  <input
                    type="number"
                    value={patientAge}
                    onChange={(e) => setPatientAge(e.target.value)}
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    name=" patientAge"
                    placeholder=" Enter Patient Age"
                  />
                </div>
              </div>
              <div className="flex flex-col mb-2">
                <div className=" relative ">
                  <input
                    type="text"
                    placeholder="Enter drug name"
                    value={newDrug}
                    onChange={(e) => setNewDrug(e.target.value)}
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    name="newDrug"
                  />
                </div>
              </div>
              <div className="flex w-full my-4">
                <button
                  type="button"
                  onClick={() => setMalariaDrugs([...malariaDrugs, newDrug])}
                  className="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-2/4 text-xs transition ease-in duration-200 text-center  font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                >
                  Add Drug
                </button>
              </div>
              <div className="flex w-full my-4">
                <button className="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full text-base transition ease-in duration-200 text-center  font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                  Add Drug Combination
                </button>
              </div>
              <div className="flex flex-row gap-4 mb-2">
                {malariaDrugs.map((drug, index) => (
                  <div key={index}>{drug}</div>
                ))}
              </div>
            </form>
          </FormModal>
        )}
      </div>
    </AdminLayout>
  );
};

export default index;
