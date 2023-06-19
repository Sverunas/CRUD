import React, { useState } from "react";
import {
  FaTh,
  FaBars,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
  FaThList,
  FaPlus,
  FaCog,
  FaInfoCircle,
  FaMinus
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    // {
    //   path: "/",
    //   name: "Linkas į logo",
    //   icon: <FaPlus style={{ color: "red" }} />,
    // },
    {
      path: "/expenses",
      name: "Įvesti išlaidas",
      icon: <FaMinus style={{ color: "red" }} />,
    },
    {
      path: "/incomes",
      name: "Įvesti pajamas",
      icon: <FaPlus style={{ color: "#44ff00" }} />,
    },
    {
      path: "/analytics",
      name: "Išlaidų išklotinė",
      icon: <FaThList style={{ color: "yellow" }} />,
    },
    {
      path: "/comment",
      name: "Vartotojas",
      icon: <FaUserAlt />,
    },
    {
      path: "/product",
      name: "Nustatymai",
      icon: <FaCog />,
    },
    {
      path: "/productList",
      name: "Apie mus",
      icon: <FaInfoCircle />,
    },
  ];
  return (
    <div className="container">
      <div style={{ width: "250px" }} className="sidebar">
        <br />
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeClassName="active"
          >
            <div className="icon">{item.icon}</div>
            <div className="link_text">{item.name}</div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
