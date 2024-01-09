import React from "react";
import { Toaster } from "react-hot-toast";

const AuthLayout = ({ children }) => {
  return (
    <main className=" py-2 lg:py-8 px-4 lg:px-8 bg-light min-h-screen">
      <Toaster position="bottom-left" toastOptions={{ duration: 10000 }} />
      <div className="px-4 pt-4 pb-12 flex mx-auto lg:py-16 antialiased">
        <div className="relative w-full mx-auto py-3 text-center sm:w-2/3 lg:w-1/3">
          <div className="relative mt-4 sm:rounded-lg text-left">
            {children}
          </div>
        </div>
      </div>
    </main>
  );
};

export default AuthLayout;
