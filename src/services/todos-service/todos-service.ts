import { ToDo } from "@/interfaces";
import {
  getFromLocalStorage,
  deleteAndSetItemInLocalStorage,
  deleteItemInLocalStorage,
} from "@/services";

interface ToDosService {
  getToDosFromLocalStorage: () => ToDo[];
  countToDosFromLocalStorage: () => number;
  getTodoById: (id: number) => ToDo | null;
  toggleCompletedToDo: (id: number) => void;
  removeToDoById: (id: number) => void;
  createToDo: (toDo: ToDo) => void;
  clearToDos: () => void
}

const localStorageToDosService: ToDosService = {
  getToDosFromLocalStorage: () => {
    if (window) {
      const toDos = getFromLocalStorage("toDos");
      if (toDos) {
        return JSON.parse(toDos) as ToDo[];
      }
    }
    return [] as ToDo[];
  },

  getTodoById: function (id: number): ToDo | null {
    return getToDosFromLocalStorage().find((todo) => todo.id == id) || null;
  },

  toggleCompletedToDo: function (id: number): void {
    const toDos = getToDosFromLocalStorage();

    if (!toDos.find((toDo) => toDo.id == id)) {
      return;
    }

    toDos.forEach((toDo) => {
      if (toDo.id == id) {
        toDo.isCompleted = !toDo.isCompleted;
      }
    });
    deleteAndSetItemInLocalStorage("toDos", JSON.stringify(toDos));
  },

  removeToDoById: function (id: number): void {
    const toDos = getToDosFromLocalStorage();

    if (toDos.length == 0) {
      return;
    }

    const newToDos = toDos.filter((toDo) => toDo.id != id);
    deleteAndSetItemInLocalStorage("toDos", JSON.stringify(newToDos));
  },

  countToDosFromLocalStorage: function (): number {
    return getToDosFromLocalStorage().length;
  },

  createToDo: function (toDo: ToDo): void {
    if (window) {

      const toDos = getToDosFromLocalStorage();
      const newToDos = [...toDos, toDo];
      // console.log(newToDos);
      deleteAndSetItemInLocalStorage('toDos', JSON.stringify(newToDos));
    }
  },
  clearToDos: function (): void {
    if(window) {
      deleteItemInLocalStorage('toDos');
    }
  }
};

export const {
  getToDosFromLocalStorage,
  toggleCompletedToDo,
  getTodoById,
  removeToDoById,
  countToDosFromLocalStorage,
  createToDo,
  clearToDos
} = localStorageToDosService;
