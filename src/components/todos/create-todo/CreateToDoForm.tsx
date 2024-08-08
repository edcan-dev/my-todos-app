"use client";

import { ToDo } from "@/interfaces";
import { createToDo, getToDosFromLocalStorage } from "@/services";
import { getFormattedDate } from "@/utils";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

interface CreateTodoFormDate {
  description: HTMLInputElement,
  expirationDate: HTMLInputElement,
}


export const CreateToDoForm = () => {

  const { push } = useRouter();

  return (
    <form className="flex flex-col" onSubmit={ (ev: FormEvent<HTMLFormElement>) => {
      ev.preventDefault();

      const { description, expirationDate } = ev.target as unknown as CreateTodoFormDate;


      const lastToDo = getToDosFromLocalStorage().findLast(toDo => true);

      const newToDo: ToDo = {
        id: lastToDo ? lastToDo.id + 1 : 1,
        description: description.value,
        creationDate: getFormattedDate(new Date()),
        isCompleted: false,
        expirationDate: expirationDate.value != '' ? expirationDate.value : undefined
      };

      createToDo(newToDo);

      push('/')


    } }>

      <div className="flex flex-col mb-8">
        <label className="mb-4 text-xl font-bold text-violet-300" htmlFor="description"> ToDo Description</label>
        <input maxLength={ 50 } required className="px-4 py-6 rounded-md border-none text-violet-900 text-xl bg-violet-300 outline-none" type="text" id="description" name="description" />
      </div>
      
      <div className="flex flex-col mb-16">
        <label className="mb-4 text-xl font-bold text-violet-300" htmlFor="expirationDate"> Expiration Date (Optional)</label>
        {/* <input maxLength={ 50 } className="px-4 py-6 rounded-md border-none text-violet-900 text-xl bg-violet-300 outline-none" type="text" id="description" /> */}
        <input className="px-4 py-6 rounded-md border-none text-violet-900 text-xl bg-violet-300 outline-none" type="date" name="expirationDate" id="expirationDate" min={getFormattedDate(new Date())} />
      </div>
      
      <div className="flex flex-col">
        <input className="px-4 py-6 rounded-md border-none bg-violet-900 text-xl text-violet-300 outline-none font-bold" type="submit" value={'Crear ToDo'} />
      </div>
      
    </form>
  )
}
