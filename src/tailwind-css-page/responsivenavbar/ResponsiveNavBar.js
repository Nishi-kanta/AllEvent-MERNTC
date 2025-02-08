import React, { useEffect, useState } from "react";
// import Lopa from "../../../assets/LOPAA.IO1.png";
import { Link } from "react-router-dom";
// import Header from "../navbar/Header.tsx";

const ResponsiveNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [hoveredItem, setHoveredItem] = useState();
  const [selectedItem, setSelectedItem] = useState();
  const [activeDropdown, setActiveDropdown] = useState();
  const [activeItem, setActiveItem] = useState();
  const listitem = [
    {
      link: "",
      text: "Product",
      dropdown: [
        { link: "#", text: "Product One" },
        { link: "#", text: "Product Two" },
        { link: "#", text: "Product Three" },
      ],
    },
    {
      link: "",
      text: "Solutions",
      dropdown: [
        { link: "#", text: "Solution One" },
        { link: "#", text: "Solution Two" },
        { link: "#", text: "Solution Three" },
      ],
    },
    {
      link: "",
      text: "Industry",
      dropdown: [
        { link: "#", text: "Industry One" },
        { link: "#", text: "Industry Two" },
        { link: "#", text: "Industry Three" },
      ],
    },
    {
      link: "",
      text: "Customers",
      // dropdown: [
      //   { link: "#", text: "Customer One" },
      //   { link: "#", text: "Customer Two" },
      //   { link: "#", text: "Customer Three" },
      // ],
    },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (index) => {
    // Toggle the dropdown by updating activeDropdown state
    if (activeDropdown === index) {
      setActiveDropdown(null); // Close dropdown if it was already open
    } else {
      setActiveDropdown(index); // Open the clicked dropdown
    }
  };

  /*active item.text*/
  const handleDropdownSelect = (dropdownText, mainItemText) => {
    setSelectedItem(dropdownText); // Set the selected dropdown item
    setActiveItem(mainItemText); // Set the active main item text color
    setHoveredItem(null); // Clear the hovered item after selection
    setIsOpen(false);
  };

  // active nodropdowntext
  const handlenoDropdownSelect = (mainItemNoDropDown) => {
    setActiveItem(mainItemNoDropDown);
    setSelectedItem(null); // remove the selected dropdown item
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <>
        <p className="text-center h-20">ResponsiveNavBar</p>
      </>
      <header className="bg-gradient-to-r sticky top-0 from-blue-50 to-white  shadow-md ">
        {/* <Header /> */}

        {/* <div className=" md:mx-10 mx-0 flex justify-between items-center py-4 px-6 mt-4 "> */}
        <div className={`flex justify-between items-center py-4 px-8 `}>
          {/* Logo */}
          <div className="flex justify-center items-center gap-24">
            <div className="flex items-center space-x-2">
              <img
                src={""}
                className="lg:w-48 lg:h-7 w-36 h-4"
                alt="Matrix AI"
              />
              {/* <span className="text-lg font-semibold">Lopaa.ai</span> */}
            </div>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex space-x-6 text-[#000000] md:text-[16px] md:font-semibold">
              {listitem.map((item, index) => (
                <React.Fragment key={index}>
                  {item.dropdown ? ( // Only render this block if dropdown exists
                    <div
                      className="relative group"
                      onMouseEnter={() => setHoveredItem(item.text)}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      <Link
                        to={item.link}
                        className={`block py-2 ${activeItem === item.text ? "text-blue-500" : "text-black"
                          }`}
                      >
                        {item.text}
                      </Link>
                      {hoveredItem === item.text && (
                        <div className="absolute left-0 mt-0 bg-white shadow-lg space-y-2 z-50 w-40">
                          {item.dropdown.map((dropdownItem, dropdownIndex) => (
                            <Link
                              key={dropdownIndex}
                              to={dropdownItem.link}
                              className={`block px-4 py-2 text-black ${selectedItem === dropdownItem.text
                                  ? "bg-blue-500 text-white"
                                  : ""
                                }`}
                              onClick={() =>
                                handleDropdownSelect(dropdownItem.text, item.text)
                              }
                            >
                              {dropdownItem.text}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    // If there's no dropdown, render the Customers link
                    <Link
                      className={`block py-2 ${activeItem === item.text ? "text-blue-500" : "text-black"
                        }`}
                      onClick={() => {
                        alert("hii");
                        handlenoDropdownSelect(item.text);
                      }}
                    >
                      {item.text}
                    </Link>
                  )}
                </React.Fragment>
              ))}
            </nav>

          </div>
          {/* Buttons */}
          <div className="hidden lg:flex space-x-4  border border-[#000000] rounded-lg p-2">
            <button className=" text-[#1E1E1E]  px-4 py-1 md:text-[16px] md:font-medium ">
              Start free trial
            </button>
            {/* <Link to="https://support-system.sulopa.com/"> */}
            <Link
              to="https://support-system.sulopa.com/"
              target="_blank"
              className="bg-[#006BEA] text-[#FFFFFF] rounded-md py-2 px-4 md:text-[16px] md:font-medium"
            >
              View demo
            </Link>
            {/* </Link> */}
          </div>

          {/* Hamburger Icon (Mobile) */}
          <button
            className="lg:hidden flex flex-col space-y-1.5 m-8"
            onClick={toggleMenu}
          >
            <span className="block w-6 h-0.5 bg-black"></span>
            <span className="block w-6 h-0.5 bg-black"></span>
            <span className="block w-6 h-0.5 bg-black"></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-50 backdrop-blur-md">
            <nav
              className={`lg:hidden bg-white text-[#000000] text-[16px] font-normal p-4 absolute top-0 right-0 w-3/4 h-full transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"
                }`}
              style={{
                transform: isOpen ? "translateX(0)" : "translateX(100%)",
              }}
            >
              <button
                onClick={() => setIsOpen(false)}
                className="text-2xl font-bold absolute top-4 left-6"
              >
                ✕
              </button>
              <div className="w-full">
                {listitem?.map((item, index) => (
                  <>
                    <div
                      key={index}
                      className="flex flex-col justify-center items-center"
                    >
                      {/* Main item link */}
                      <div
                        className="flex items-center space-x-2 cursor-pointer "
                        onClick={() => toggleDropdown(index)}
                      >
                        <Link
                          to={item.link}
                          className={`block py-2 ${activeItem === item.text
                              ? "text-blue-500"
                              : "text-black"
                            }`}
                        >
                          {item?.dropdown?.length > 0 &&
                            item?.text !== "Customers" ? (
                            <>{item?.text}</>
                          ) : (
                            ""
                          )}
                        </Link>
                        {/* Arrow icon, rotates when dropdown is active */}
                        <span
                          className={`${activeDropdown === index ? "rotate-180" : "rotate-0"
                            } transition-transform duration-200`}
                        >
                          {item?.dropdown?.length > 0 &&
                            item?.text !== "Customers" ? (
                            <>▼</>
                          ) : (
                            ""
                          )}
                        </span>
                      </div>

                      {/* Show dropdown items when active */}
                      {activeDropdown === index && (
                        <div className="mt-2 space-y-2 z-90">
                          {item?.dropdown?.map(
                            (dropdownItem, dropdownIndex) => (
                              <Link
                                key={dropdownIndex}
                                to={dropdownItem.link}
                                className={`block px-4 py-2 text-black ${selectedItem === dropdownItem.text
                                    ? "bg-blue-500 text-white"
                                    : ""
                                  }`} // Apply active styles if selected
                                onClick={() =>
                                  handleDropdownSelect(
                                    dropdownItem.text,
                                    item.text
                                  )
                                }
                              >
                                {dropdownItem.text}
                              </Link>
                            )
                          )}
                        </div>
                      )}
                    </div>
                    <div className="flex items-center flex-col justify-start">
                      {item?.text === "Customers" && (
                        <Link
                          className={`block py-2 ${activeItem === item.text
                              ? "text-blue-500"
                              : "text-black"
                            }`}
                          onClick={() => {
                            alert("hii");
                            handlenoDropdownSelect(item.text);
                          }}
                        >
                          {item?.text}
                        </Link>
                      )}
                    </div>
                  </>
                ))}
              </div>
              {/* Buttons visible in the mobile menu */}
              <div className="flex flex-col flex-nowrap space-y-4 p-4 mt-4">
                <button className="border border-[#000000] text-[#1E1E1E] text-[16px] font-normal rounded-md px-4 py-2">
                  Start free trial
                </button>
                <Link
                  target="_blank"
                  to="https://support-system.sulopa.com/"
                  className="bg-[#006BEA] text-white rounded-md px-4 py-2 text-[16px] font-normal "
                >
                  View demo
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default ResponsiveNavBar;