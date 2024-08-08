"use client";

import { ToDoList } from "@/components";
import { ToDo } from "@/interfaces";
import { clearToDos, getToDosFromLocalStorage } from "@/services";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { MdAddBox, MdRemoveCircle } from "react-icons/md";

export const HomePageWrapper = () => {

  
  const [isLoading, setLoading] = useState(true);
  const [todos, setTodos] = useState<ToDo[]>([]);

  const [isRemoveModeOn, setRemoveModeOn] = useState(false);
  const [isClearModeOn, setClearModeOn] = useState(false);

  useEffect(() => {
    setTodos(getToDosFromLocalStorage());
    setLoading(false);
    emitAllTodosCompleted(todos.length == 0 ? false : todos.every(toDo => toDo.isCompleted));

  }, []);

  const handleToDoEmit = () => {
    emitAllTodosCompleted(getToDosFromLocalStorage().every(toDo => toDo.isCompleted));
    setTodos(getToDosFromLocalStorage());
  }
  const handleRemoveMode = () => {
    setRemoveModeOn(!isRemoveModeOn);
  };
  const emitAllTodosCompleted = (areCompleted: boolean) => setClearModeOn(areCompleted);

  const handleClearToDos = () => {
    console.log('cleared')
    clearToDos();
    setTodos(getToDosFromLocalStorage());
  }

  return (
    <>
      <ToDoList
        toDos={ todos }
        isLoading= { isLoading }
        handleToDoEmit={ handleToDoEmit }
        isRemoveModeOn={isRemoveModeOn}
        emitAllTodosCompleted={emitAllTodosCompleted}
      />

      <section className="bg-zinc-900 flex justify-center p-2 bottom-0">
        {isClearModeOn ? (
          <button
          className="flex items-center hover:bg-zinc-800 text-violet-300 hover:text-violet-500 p-2 rounded-lg transition-all"
          onClick={ () => handleClearToDos() }
        >
          <span className="text-2xl mr-2">Clear ToDos</span>
          <MdRemoveCircle size={60} />
        </button>
        ) : (
          <Link
            href={"/todos/create"}
            className="flex items-center hover:bg-zinc-800 text-violet-300 hover:text-violet-500 p-2 rounded-lg transition-all"
          >
            <span className="text-2xl mr-2 text-center">Create ToDo</span>
            <MdAddBox size={60} />
          </Link>
        )}

        <button
          className="flex items-center hover:bg-zinc-800 text-violet-300 hover:text-violet-500 p-2 rounded-lg transition-all"
          onClick={ () => handleRemoveMode() }
        >
          <span className="text-2xl mr-2">Remove ToDo</span>
          <MdRemoveCircle size={60} />
        </button>
      </section>
    </>
  );
};
