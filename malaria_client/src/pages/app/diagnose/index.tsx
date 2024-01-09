import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Modal from "@/components/Modal";
import axios from "axios";
import { API_URL } from "@/config/index";

const index = () => {
  const [showModal, setShowModal] = useState(false);
  const [symptoms, setSymptoms] = useState([]);
  const [newSymptoms, setNewSymptoms] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [hasMalaria, setHasMalaria] = useState(false);

  const handleSymptomChange = (event: any) => {
    const symptom = event.target.value;
    if (newSymptoms.includes(symptom)) {
      setNewSymptoms(symptoms.filter((s) => s !== symptom));
    } else {
      setNewSymptoms([...newSymptoms, symptom]);
    }
  };
  const handleSubmit = (event: any) => {
    event.preventDefault();
    setShowModal(true);
    // Submit symptoms to backend for analysis
    fetch(`${API_URL}/api/symptom/has-malaria`, {
      method: "POST",
      body: JSON.stringify({ newSymptoms }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setHasMalaria(data.hasMalaria);
        console.log(data.hasMalaria);
      });
  };

  function closeModal() {
    setShowModal(false);
  }
  useEffect(() => {
    axios
      .get(`${API_URL}/api/symptom`)
      .then((res) => {
        if (!res.ok) {
          setError("could Not Fetch The resources");
        }
        setSymptoms(res.data.data);
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
    <div>
      <Navbar />

      <div className="container max-w-3xl px-4 mx-auto sm:px-8">
        <div className="py-8">
          <div className="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
            <div className=" min-w-full overflow-hidden  rounded-lg shadow py-10 px-8  ">
              <form onSubmit={handleSubmit}>
                <div className="m-auto grid grid-cols-3">
                  {symptoms.map((symptom: any) => (
                    <label
                      className="flex items-center mb-3 space-x-3"
                      key={symptom.name}
                    >
                      <input
                        type="checkbox"
                        checked={symptoms.name}
                        onChange={handleSymptomChange}
                        value={symptom.name}
                        className="form-tick appearance-none bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-primary checked:border-transparent focus:outline-none"
                      />
                      <span className="font-normal text-gray-700 dark:text-white">
                        {symptom.name}
                      </span>
                    </label>
                  ))}
                </div>
                <button
                  type="submit"
                  className="w-full mt-10 px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-primary shadow-md hover:text-white hover:bg-black focus:outline-none focus:ring-2"
                >
                  <span className="w-full">Diagnose</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <div>
          {hasMalaria ? (
            <Modal
              title="You have malaria."
              subtitle="Please go for a test and bring your result back to us for prescription"
              close={closeModal}
            />
          ) : (
            <Modal
              title="It does not appear that you have malaria"
              subtitle="Based on your symptoms or lack of symptoms, please pick more symptoms to be sure"
              close={closeModal}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default index;
