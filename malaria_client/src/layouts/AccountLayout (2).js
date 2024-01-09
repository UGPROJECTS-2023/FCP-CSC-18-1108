import React from "react";
import { Toaster } from "react-hot-toast";
import Content from "@/components/Content/index";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const AccountLayout = ({ children, title }) => {
  return (
    <main className="lg:relative font-outfit flex flex-row md:flex-col lg:flex-row w-screen h-screen space-x-0 text-gray-800 dark:text-gray-200  sm:flex-col bg-light dark:bg-gray-800">
      <Sidebar />
      <Content>
        <Header title={title} />
        <Toaster position="bottom-left" toastOptions={{ duration: 10000 }} />
        {children}
      </Content>
    </main>
  );
};

export default AccountLayout;
