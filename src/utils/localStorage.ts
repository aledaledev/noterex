import { setTasks } from "../main";
import { Task } from "../types";

export default function (key:string, value:Task[]){
    localStorage.setItem(key,JSON.stringify(value))
    const store = JSON.parse(localStorage.getItem(key) as string)
    setTasks(store)
}