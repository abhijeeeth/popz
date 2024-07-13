import React, { useState, useRef, useEffect } from 'react';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  // Close the menu when clicking outside of it
  const handleOutsideClick = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

      return (
        <nav className=" px-10 py-4 ">
      <div className="container mx-auto flex justify-between items-center border-gray-100/10 border-b-2 drop-shadow-sm">

   
     
        <div className="text-gray-700 ml-16 font-bold text-xl ">Popz<span className='text-red-500 font-thin'>Up</span> </div>

    
        {/* Hamburger menu for mobile */}
        <div className={`lg:hidden ${isOpen ? 'hidden' : 'block'}`}>
          <button
            onClick={toggleNavbar}
            className="text-gray-700 focus:outline-none focus:shadow-outline"
            >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
                ></path>
            </svg>
          </button>
        </div>

        {/* Navbar links */}
        <div
          ref={menuRef}
          className={`${
            isOpen ? 'block' : 'hidden'
          } lg:flex lg:items-center lg:w-auto mr-8`}
          >
          <div className="text-lg font-semibold lg:flex-grow">
            <a
              href="/"
              className="block mt-4 lg:inline-block lg:mt-0 text-red-700 hover:text-red-900 mr-4"
              >
              Profile
            </a>
            
           

          </div>
          <div className='flex items-center'>
          <a
              
              rel="noopener noreferrer"
              className="bg-gray-100/10 text-gray-100 px-4 py-2 rounded-md mb-2  ml-4 shadow-sm shadow-gray-900  hover:bg-slate-400"
            >
              Customer
            </a>
            <a
              
              rel="noopener noreferrer"
              className="bg-gray-100/10  text-gray-100 px-4 py-2 rounded-md mb-2  ml-4 shadow-sm shadow-gray-900 font-semibold hover:bg-slate-400"
            >
              Business
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

