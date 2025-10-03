import React from "react";
import logo from "../assets/logo.png"; // safer import

const Footer = () => {
  return (
    <div className="px-6 md:px-20 lg:px-40 bg-gray-50 pt-16 pb-10">
      {/* Grid Layout */}
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 text-sm">
        {/* Logo + About */}
        <div>
          <img src={logo} className="mb-5 w-32" alt="Logo" />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis
            sed ipsum velit a voluptate ducimus eveniet. Neque repudiandae
            tempore impedit molestias maiores culpa, dolorem animi molestiae
            dicta eum illo eos.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        {/* Support (extra column so layout is balanced) */}
        <div>
          <p className="text-xl font-medium mb-5">Get in touch</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>1+22-345561</li>
            <li>dahriwaheed43@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* Bottom Copy */}
      <div className="text-center text-gray-500 text-xs border-t pt-5">
        © 2025 YourCompany. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
