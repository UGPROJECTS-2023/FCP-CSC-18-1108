import React, { useState } from "react";
import Navbar from "@/components/Navbar";

const MalariaPrescription = () => {
  const [age, setAge] = useState(0);
  const [hasMalaria, setHasMalaria] = useState(true);
  const [prescription, setPrescription] = useState("");

  const handleAgeChange = (event: any) => {
    setAge(event.target.value);
  };

  const handleMalariaChange = (event: any) => {
    setHasMalaria(event.target.value === "yes");
  };

  const generatePrescription = () => {
    if (!hasMalaria) {
      setPrescription("Patient does not have malaria, no prescription needed.");
      return;
    }

    if (age < 18) {
      setPrescription(
        "Prescribe pediatric dose of Chloroquine and Primaquine."
      );
    } else {
      setPrescription("Prescribe adult dose of Chloroquine and Primaquine.");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center">
        <div className="w-full max-w-xs mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Patient Age:
          </label>
          <input
            className="border border-gray-400 p-2 rounded-lg w-full"
            type="number"
            value={age}
            onChange={handleAgeChange}
          />
        </div>
        <div className="w-full max-w-xs mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Test Result Type:
          </label>
          <select className="border border-gray-400 p-2 rounded-lg w-full">
            <option value="falciparum">Falciparum</option>
            <option value="vivax">Vivax</option>
            <option value="malariae">Malariae</option>
            <option value="ovale">Ovale</option>
          </select>
        </div>
        {/* <div className="w-full max-w-xs mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Does the patient have malaria?
          </label>
          <select
            className="border border-gray-400 p-2 rounded-lg w-full"
            onChange={handleMalariaChange}
          >
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div> */}
        <button
          className="bg-blue-500 text-white p-2 rounded-lg"
          onClick={generatePrescription}
        >
          Generate Prescription
        </button>
        <div className="w-full max-w-xs mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Prescription:
          </label>
          <p className="p-2 rounded-lg">{prescription}</p>
        </div>
      </div>
    </div>
  );
};

export default MalariaPrescription;
