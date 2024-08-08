"use client";

import { ToDo } from "@/interfaces";
import { toggleCompletedToDo, removeToDoById } from "@/services";
import { MdCheckBox, MdCheckBoxOutlineBlank, MdRemoveCircle } from "react-icons/md";

interface Props {
  item: ToDo,
  isRemoveModeOn: boolean,
  emitTodoUpdate: () => void,
}

export const ToDoListItem = ({ item, isRemoveModeOn, emitTodoUpdate: emitToggledTodoUpdate } : Props) => {

  const { id, isCompleted, creationDate, description, expirationDate } = item;

  const handleToggleTodo = () => {  
    toggleCompletedToDo(id);
    emitToggledTodoUpdate();
  }
  const handleRemoveTodo = () => {  
    removeToDoById(id);
    emitToggledTodoUpdate();
  }

  return (
    <div
      className="p-2 bg-violet-300 mb-8 flex justify-between items-center rounded-md"
    >

      {
        isRemoveModeOn && (
        <MdRemoveCircle
          color="8b5cf6"
          className="flex mr-2 transition-all cursor-pointer"
          size={ 100 }
          onClick={ () => handleRemoveTodo() }
        />
        )
      }

      {(isCompleted && !isRemoveModeOn) && (
        <MdCheckBox
          className="flex mr-2 transition-all cursor-pointer"
          size={ 100 }
          onClick={ () => handleToggleTodo() }
        />
      )}

      {(!isCompleted && !isRemoveModeOn) && (
        <MdCheckBoxOutlineBlank
          className="flex mr-2 transition-all cursor-pointer"
          size={ 100 }
          onClick={ () => handleToggleTodo() }
        />
      )} 
      
      <div className="flex flex-col w-full">
        <span className="text-violet-950 text-2xl">{description}</span>
        <span className="text-violet-950 text-xl">{`Creado: ${ creationDate }`}</span>
        {
          expirationDate && <span className="text-violet-950 text-xl">{`Expira: ${ expirationDate }`}</span> 
        }

      </div>
    </div>
  );
};
