import React, { useContext, useState } from "react";
import logo from "../../images/logo.png";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/UserContext";
import { useSelector } from "react-redux";

function Header() {
  const [btnName, setBtnName] = useState("LogIn");
  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(userContext);

  // subscribing to the store using a selector
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="bg-white shadow-md">
      <div className="flex items-center justify-between px-8 py-4 ">
        {/* Left Section: Logo */}
        <div className="flex items-center space-x-4">
          <img src={logo} alt="logo" className="w-16 h-16" />
        </div>

        {/* Middle Section: Navigation Links */}
        <nav className="flex items-center space-x-8 text-sm text-gray-700 font-medium">
          <li className="list-none flex items-center space-x-1">
            <span
              className={`w-3 h-3 rounded-full ${
                onlineStatus ? "bg-green-500" : "bg-red-500"
              }`}
            ></span>
            <span className="text-sm">
              {onlineStatus ? "Online" : "Offline"}
            </span>
          </li>

          <Link to="/" className="hover:text-orange-500">
            Home
          </Link>
          <Link to="/about" className="hover:text-orange-500">
            About Us
          </Link>
          <Link to="/contact" className="hover:text-orange-500">
            Contact
          </Link>
          <Link to="/grocery" className="hover:text-orange-500">
            Grocery
          </Link>
          <Link to="/cart" className="hover:text-orange-500 flex items-center">
            Cart
            <span className="ml-1 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
              {cartItems.length}
            </span>
          </Link>
        </nav>

        {/* Right Section: Login Button */}
        <div>
          <button
            className="px-5 py-2 bg-orange-500 text-white text-sm font-medium rounded hover:bg-orange-600"
            onClick={() => {
              setBtnName(btnName === "LogIn" ? "LogOut" : "LogIn");
            }}
          >
            {btnName}
          </button>
        </div>

        <div className="hover:text-orange-500 flex items-center">
          User : {loggedInUser}
        </div>
      </div>
    </div>
  );
}

export default Header;
