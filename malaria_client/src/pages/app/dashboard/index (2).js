import React, { useContext, useEffect, useState } from "react";
import AccountLayout from "@/layouts/AccountLayout";
import { API_URL } from "@/config/index";
import axios from "axios";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [highestVote, sethighestVote] = useState([]);

  const [votes, setVotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setInterval(() => {
      axios
        .get(`${API_URL}/api/party`)
        .then((res) => {
          if (!res.ok) {
            setError("could Not Fetch The resources");
          }
          setData(res.data.data);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("fetch Aborted");
          } else {
            setIsLoading(false);
            setError(err.message);
          }
        });
    }, 10000);
  }, []);

  const [drug, setDrug] = useState({
    ageRange: "",
    doses: "",
    frequency: "",
    description: "",
    instructions: "",
  });

  const handleChange = (e) => {
    setDrug({ ...drug, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/drugs", drug)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <AccountLayout title="Dashboard">
      <div className="flex flex-row w-full ">
        <div className="container max-w-3xl px-4 mx-auto sm:px-8">
          <div className="py-8">
            <div className="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
              <div className=" min-w-full overflow-hidden  rounded-lg shadow py-10 px-8  ">
                <form
                  onSubmit={handleSubmit}
                  className="bg-white p-6 rounded-lg"
                >
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-medium mb-2"
                      htmlFor="ageRange"
                    >
                      Age Range
                    </label>
                    <input
                      className="border border-gray-400 p-2 rounded-lg w-full"
                      type="text"
                      name="ageRange"
                      value={drug.ageRange}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-medium mb-2"
                      htmlFor="doses"
                    >
                      Doses
                    </label>
                    <input
                      className="border border-gray-400 p-2 rounded-lg w-full"
                      type="text"
                      name="doses"
                      value={drug.doses}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-medium mb-2"
                      htmlFor="frequency"
                    >
                      Frequency
                    </label>
                    <input
                      className="border border-gray-400 p-2 rounded-lg w-full"
                      type="text"
                      name="frequency"
                      value={drug.frequency}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-medium mb-2"
                      htmlFor="description"
                    >
                      Description
                    </label>
                    <textarea
                      className="border border-gray-400 p-2 rounded-lg w-full"
                      type="text"
                      name="description"
                      value={drug.description}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-medium mb-2"
                      htmlFor="instructions"
                    >
                      Instructions
                    </label>
                    <textarea
                      className=" border border-gray-400 p-2 rounded-lg w-full"
                      name="instructions"
                      value={drug.instructions}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Add Drug
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AccountLayout>
  );
};

export default Dashboard;
