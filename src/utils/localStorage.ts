import { setStore } from "../main";
import { StorageProps } from "../types";

export default function (key:string, value:StorageProps){
    localStorage.setItem(key,JSON.stringify(value))
    const store = JSON.parse(localStorage.getItem(key) as string)
    setStore(store)
}