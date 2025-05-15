"use client";

import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";

export const ButtonSearch = () => {
  const [showInput, setShowInput] = useState(false);

  return (
    <div className="relative flex items-center">
      <button
        className="bg-principal text-white rounded-full p-2 cursor-pointer"
        onClick={() => setShowInput((prev) => !prev)}
      >
        <IoSearchSharp size={22} className="h-full text-4xl" />
      </button>
      <input
        onMouseLeave={() => setShowInput(false)}
        type="text"
        placeholder="Buscar..."
        className={`
                absolute right-12 transition-all duration-300
                bg-white border border-gray-300 rounded px-3 py-1
                text-black outline-none shadow
                ${
                  showInput
                    ? "opacity-100 w-40"
                    : "opacity-0 w-0 px-0 py-0 border-0"
                }
              `}
        style={{ zIndex: 10 }}
        onBlur={() => setShowInput(false)}
      />
    </div>
  );
};
