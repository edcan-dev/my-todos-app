"use client";

import Link from "next/link";
import { redirect, usePathname } from "next/navigation";
import { MdAddBox, MdCheckBox } from "react-icons/md";

const paths = [
  { currentPath: '/', path: '/todos/create', label: 'Create ToDo', icon: <MdAddBox size={ 60 }/> },
  { currentPath: '/todos/create', path: '/', label: 'Current ToDos', icon: < MdCheckBox size={ 60 }/> }
];

export const MenuItem = () => {

  const pathname = usePathname();

  
  const foundPath = paths.find(path => path.currentPath == pathname);
  
  if(!foundPath) redirect('/');

  const { icon, label, path } = foundPath;

  return (
    <Link
      href={ path }
      className="flex items-center hover:bg-zinc-800 text-violet-300 hover:text-violet-500 p-2 rounded-lg transition-all "
    >
      <span className="text-3xl mr-2">{ label }</span>
      { icon }
    </Link>
  );
};
