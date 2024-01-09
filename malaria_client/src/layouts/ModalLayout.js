import React from "react";

const ModalLayout = ({ children }) => {
  return (
    <div
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      className="  flex    overflow-y-auto m-auto  overflow-x-hidden items-center justify-center fixed top-0 right-0 left-0 z-50 w-full md:inset-0   "
    >
      <div className=" relative p-4 w-full bg-white rounded-xl max-w-md  shadow-lg border-radius ">
        {children}
      </div>
    </div>
  );
};

export default ModalLayout;
