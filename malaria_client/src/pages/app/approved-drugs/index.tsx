import AccountLayout from "@/layouts/AccountLayout";
import React from "react";

const index = () => {
  return (
    <AccountLayout title={"Unapproved Drugs"}>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
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
              <th scope="col" className="px-6 py-3">
                Action
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
              <td className="px-6 py-4">
                <button
                  type="button"
                  className="py-2 px-4 bg-red-700  focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </AccountLayout>
  );
};

export default index;
