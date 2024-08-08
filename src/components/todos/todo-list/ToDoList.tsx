"use client";

import React, { MutableRefObject, ReactNode, useEffect, useImperativeHandle, useState } from "react";
import { Spinner } from "@/components";
import { ToDo } from "@/interfaces";
import { ToDoListItem } from "./ToDoListItem";
import { getToDosFromLocalStorage } from "@/services";

interface Props {
  isRemoveModeOn: boolean,
  emitAllTodosCompleted: (areCompleted: boolean) => void,
  isLoading: boolean,
  toDos: ToDo[],
  handleToDoEmit: () => void
}


export const ToDoList = ( { isRemoveModeOn, emitAllTodosCompleted, isLoading, toDos, handleToDoEmit }: Props ) => {


  return (
    <section className="bg-zinc-800 p-4">
      <h2 className="text-2xl mb-4 text-center">
        { toDos.length > 0 ? 'Current ToDos' : 'No Existing ToDos'}
      </h2>
      <div className={`w-full h-full flex flex-col items-center ${ isLoading ? 'justify-center' : 'justify-start' }`}>
        {isLoading && <Spinner width={150} />}

        <div className="w-full">
          {toDos.map((toDo) => (
            <ToDoListItem
              key={toDo.id}
              item={toDo}
              emitTodoUpdate={ handleToDoEmit }
              isRemoveModeOn={ isRemoveModeOn }
            />
          ))}
        </div>
      </div>
    </section>
  );
};
