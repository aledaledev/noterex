import { StorageProps, Task } from "../types";

export default function (key:string, value:Task[], callback:(value:StorageProps)=>void){
    localStorage.setItem(key,JSON.stringify(value))
    const store = JSON.parse(localStorage.getItem(key) as string)
    callback(store)
}