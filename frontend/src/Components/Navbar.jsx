import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [visible, setvisible] = useState(false);

  // ✅ Links ko array me define kar do
  const navLinks = [
    { title: "HOME", path: "/" },
    { title: "COLLECTION", path: "/collection" },
    { title: "ABOUT", path: "/about" },
    { title: "CONTACT", path: "/contact" },
  ];

  return (
    <div className="flex items-center justify-between py-5 font-medium">
      {/* Logo */}
      <img src={assets.logo} className="w-36" alt="logo" />

      {/* Nav Links */}
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        {navLinks.map(({ title, path }) => (
          <NavLink
            key={path}
            to={path}
            className="flex flex-col items-center gap-1 font-bold text-gray-700"
          >
            <p>{title}</p>
            {/* ✅ hr sirf active page par dikhana */}
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
        ))}
      </ul>

      {/* Icons & Profile Dropdown */}
      <div className="flex items-center gap-6">
        <img
          src={assets.search_icon}
          className="w-5 cursor-pointer"
          alt="search"
        />

        <div className="group relative">
          <img
            className="w-5 cursor-pointer"
            src={assets.profile_icon}
            alt="profile"
          />
          <div className="group-hover:block hidden absolute right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
              {["My Profile", "Orders", "Logout"].map((item, i) => (
                <p key={i} className="cursor-pointer hover:text-black">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative">
          <img
            src={assets.cart_icon}
            className="w-5 min-w-5 cursor-pointer"
            alt=""
          />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            10
          </p>
        </Link>
        <img
          onClick={() => setvisible(true)}
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden"
          alt=""
        />
      </div>

      {/* Sidebar Menu */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          {/* Back Button */}
          <div
            onClick={() => setvisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer"
          >
            <img
              src={assets.dropdown_icon}
              className="h-4 rotate-180"
              alt="back"
            />
            <p>Back</p>
          </div>

          {/* Sidebar Links */}
          <div className="flex flex-col gap-4 p-6">
            {navLinks.map(({ title, path }) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `font-bold ${isActive ? "text-red-600" : "text-gray-700"}`
                }
                onClick={() => setvisible(false)} // ✅ close sidebar on click
              >
                {title}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
