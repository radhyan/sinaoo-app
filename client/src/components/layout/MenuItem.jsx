import { Link, useLocation } from "react-router-dom";
import React from "react";

export default function MenuItem({ to, icon: Icon, label }) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className="relative flex items-center px-4 py-2 transition-all duration-[1000ms] ease-in-out w-full group"
    >
      <span
        className={`absolute left-0 top-1/2 -translate-y-1/2 h-10 w-1.5 rounded-r-xsm transition-transform duration-[1000ms] ease-in-out transform ${
          isActive
            ? "bg-db-b translate-x-0"
            : "bg-Grayscale-800 -translate-x-full group-hover:translate-x-0"
        }`}
      ></span>

      <span
        className={`inline-flex items-center justify-center w-10 h-10 rounded-xsm transition-all duration-[1000ms] ease-in-out ${
          isActive
            ? "bg-db-b drop-shadow-blue-60"
            : "bg-transparent group-hover:drop-shadow-blue-60"
        }`}
      >
        <Icon
          size={24}
          weight="fill"
          className={`transition-colors duration-[1000ms] ease-in-out ${
            isActive
              ? "text-white"
              : "text-Grayscale-600 group-hover:text-Grayscale-800"
          }`}
        />
      </span>

      <span
        className={`ml-2 transition-all duration-[1000ms] ease-in-out ${
          isActive
            ? "text-Primary-500 font-bold [text-shadow:0_0_10px_rgba(58,116,234,0.35)]"
            : "text-Grayscale-600 font-bold group-hover:text-Grayscale-800 group-hover:[text-shadow:0_1px_2px_rgba(58,116,234,0.20)]"
        }`}
      >
        {label}
      </span>
    </Link>
  );
}
