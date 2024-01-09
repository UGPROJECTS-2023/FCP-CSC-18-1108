import React, { useState } from "react";
import ModalLayout from "@/layouts/ModalLayout";

const Modal = (props: any) => {
  return (
    <ModalLayout>
      <div className=" relative bg-white rounded-lg shadow dark:bg-gray-700 flex flex-col py-6">
        <div className="self-center my-2">
          <svg
            width="57"
            height="42"
            viewBox="0 0 57 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M29.8547 22.2849L27.2202 25.5698L29.8547 28.8547L26.5698 26.2202L23.2849 28.8547L25.9194 25.5698L23.2849 22.2849L26.5698 24.9194L29.8547 22.2849Z"
              fill="white"
            />
            <path
              d="M29.8547 22.2849L27.2202 25.5698L29.8547 28.8547L26.5698 26.2202L23.2849 28.8547L25.9194 25.5698L23.2849 22.2849L26.5698 24.9194L29.8547 22.2849Z"
              fill="#149286"
            />
            <path
              d="M52.8547 25.2849L50.2202 28.5698L52.8547 31.8547L49.5698 29.2202L46.2849 31.8547L48.9194 28.5698L46.2849 25.2849L49.5698 27.9194L52.8547 25.2849Z"
              fill="white"
            />
            <path
              d="M52.8547 25.2849L50.2202 28.5698L52.8547 31.8547L49.5698 29.2202L46.2849 31.8547L48.9194 28.5698L46.2849 25.2849L49.5698 27.9194L52.8547 25.2849Z"
              fill="#149286"
            />
            <path
              d="M6.56984 2.18995L4.81347 4.37991L6.56984 6.56986L4.37988 4.8135L2.18993 6.56986L3.94629 4.37991L2.18993 2.18995L4.37988 3.94632L6.56984 2.18995Z"
              fill="white"
            />
            <path
              d="M6.56984 2.18995L4.81347 4.37991L6.56984 6.56986L4.37988 4.8135L2.18993 6.56986L3.94629 4.37991L2.18993 2.18995L4.37988 3.94632L6.56984 2.18995Z"
              fill="#149286"
            />
            <path
              d="M44 35.6551L41.4506 32.2332C26.7027 43.2307 12.1659 32.6876 11.5536 32.2332L9 35.6529C9.11734 35.7383 16.8892 41.4301 27.1848 41.4301C32.3689 41.4301 38.1951 39.9858 44 35.6551Z"
              fill="#149286"
            />
            <path
              d="M15.4451 20.673C18.7264 20.673 21.3865 18.0129 21.3865 14.7316C21.3865 11.4502 18.7264 8.79016 15.4451 8.79016C12.1637 8.79016 9.50366 11.4502 9.50366 14.7316C9.50366 18.0129 12.1637 20.673 15.4451 20.673Z"
              fill="#149286"
            />
            <path
              d="M41.1542 7L29.2437 14.7313L41.1564 22.4605L43.4775 18.8828L37.0816 14.7313L43.4796 10.5798L41.1542 7Z"
              fill="#149286"
            />
          </svg>
        </div>
        <div className="text-center mx-8 mb-16">
          <h1 className="text-xl text-primary font-bold">{props.title}</h1>

          <p className="text-lg font-semibold">{props.subtitle}</p>
        </div>

        <button
          onClick={props.close}
          type="submit"
          className="bg-primary self-center w-72 p-3 text-white border-none outline-none font-bold rounded-[20px]"
        >
          Close
        </button>
      </div>
    </ModalLayout>
  );
};

export default Modal;
