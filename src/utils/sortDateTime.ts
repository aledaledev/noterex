import { StorageProps } from "../types";

export default function (store:StorageProps) {
    const sortedStore = {...store}
    sortedStore.tasks.sort((prev,acu) => prev.time>acu.time)
    sortedStore.dates.sort((prev,acu) => new Date(prev).getTime()>new Date(acu).getTime())
    return sortedStore
}