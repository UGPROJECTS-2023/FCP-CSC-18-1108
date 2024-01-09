import React from "react";

const MenuOpenIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M4 6h16M4 12h16M4 18h16"
    ></path>
  </svg>
);

const MenuCloseIcon = () => (
  <svg
    className="hidden w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M6 18L18 6M6 6l12 12"
    ></path>
  </svg>
);

const Navbar = () => {
  return (
    <nav className="text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img
                className="w-32 h-16"
                src="/pdp.jpg"
                alt="PDP Logo"
              />
            </div>


          </div>

          <div className="hidden md:block text-black">
            <div className="flex items-center space-x-4">
              <a
                href={"/auth/login"}
                className="px-4 py-3 bg-green-600 text-white rounded-lg font-head"
              >
                Login
              </a>
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            {/* <!-- Mobile menu button --> */}
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <MenuOpenIcon />

              <MenuCloseIcon />
            </button>
          </div>
        </div>
      </div>

      {/* <!-- Mobile menu, show/hide based on menu state. --> */}
      <div className="hidden text-black" id="mobile-menu">
        <div className="py-4">
          <div className="px-4">
            <a
              href="#"
              className="block px-3 py-2 text-center bg-green-600 text-white rounded-lg"
            >
              Login
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
