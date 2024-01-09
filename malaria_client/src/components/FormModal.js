import React, { useState } from "react";
import ModalLayout from "@/layouts/ModalLayout";

const FormModal = ({ children, close }) => {
  return (
    <ModalLayout>
      <div className=" relative bg-white rounded-lg shadow dark:bg-gray-700 flex flex-col py-6">
        <div className="text-center mx-8 mb-16">{children}</div>
        <button
          onClick={close}
          type="submit"
          className="bg-primary self-center w-72 p-3 text-white border-none outline-none font-bold rounded-[20px]"
        >
          Close
        </button>
      </div>
    </ModalLayout>
  );
};

export default FormModal;
