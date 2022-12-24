import { setStore } from "../main";
import { StorageProps } from "../types";
import sortDateTime from "./sortDateTime";

export default function (key:string, value:StorageProps){
    localStorage.setItem(key,JSON.stringify(value))
    const store:StorageProps = JSON.parse(localStorage.getItem(key) as string)
    setStore(sortDateTime(store))
}