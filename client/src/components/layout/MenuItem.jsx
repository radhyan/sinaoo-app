import { Link, useLocation } from "react-router-dom";
import React from "react";

export default function MenuItem({ to, icon: Icon, label, isCollapsed }) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`relative flex items-center py-2 transition-all duration-[1000ms] ease-in-out group ${
        isCollapsed ? "justify-center px-0 w-12 rounded-xl" : "w-full px-4"
      }`}
      title={isCollapsed ? label : ""}
    >
      <span
        className={`absolute left-0 top-1/2 -translate-y-1/2 h-10 w-1.5 rounded-r-xsm transition-all duration-[1000ms] ease-in-out transform ${
          isActive
            ? "bg-db-b translate-x-0"
            : "bg-Grayscale-800 -translate-x-full group-hover:translate-x-0"
        } ${isCollapsed ? "opacity-0" : "opacity-100"}`}
      ></span>

      <span
        className={`inline-flex shrink-0 items-center justify-center rounded-xsm transition-all duration-[1000ms] ease-in-out ${
          isCollapsed ? "w-10 h-10 rounded-xl" : "w-10 h-10"
        } ${
          isActive
            ? "bg-db-b drop-shadow-blue-60"
            : "bg-transparent group-hover:drop-shadow-none group-hover:shadow-none group-hover:bg-Primary-50/50"
        }`}
      >
        <Icon
          size={24}
          weight={isActive ? "fill" : "bold"}
          className={`transition-colors duration-[1000ms] ease-in-out ${
            isActive
              ? "text-white"
              : "text-Grayscale-500 group-hover:text-Primary-500"
          }`}
        />
      </span>

      <span
        className={`whitespace-nowrap overflow-hidden transition-all duration-[1000ms] ease-in-out text-body-l ${
          isCollapsed
            ? "max-w-0 opacity-0 ml-0"
            : "max-w-[150px] opacity-100 ml-3"
        } ${
          isActive
            ? "text-Primary-600 font-bold [text-shadow:0_0_10px_rgba(58,116,234,0.35)]"
            : "text-Grayscale-500 font-bold group-hover:text-Primary-600 group-hover:[text-shadow:0_1px_2px_rgba(58,116,234,0.20)]"
        }`}
      >
        {label}
      </span>
    </Link>
  );
}
