import Link from "next/link";
import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { MdCheckBox } from "react-icons/md";

export const Header = () => {
  return (
    <header className="flex items-center bg-zinc-900 justify-between px-4">
      <Link href={"/"} className="flex text-violet-300 hover:text-violet-500 transition-all">
        <MdCheckBox size={60} />
        <h1 className="text-4xl flex items-center">My ToDos</h1>
      </Link>

      <div className="text-violet-300 hover:text-violet-500 transition-all cursor-pointer">
        <FaUserAlt size={50} />
      </div>
    </header>
  );
};
