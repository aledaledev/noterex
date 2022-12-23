import { store } from "../main"
import renderTasksList from "./renderTasksList"

export function renderDate(){

    const dateContainer = <HTMLDivElement>document.getElementById('date-container')
    dateContainer.innerHTML=''

    store.dates.map(date => {
        
        const dateBlock = document.createElement('div') as HTMLElement
        const dateText = document.createElement('p') as HTMLElement
        const taskList = document.createElement('div') as HTMLElement

        const dateId = date.split(' ').join('-') + '-list'

        dateText.textContent = date
        taskList.id = dateId

        dateBlock.className="col-11 m-auto my-5 bg-opacity-25 bg-primary p-3"
        dateText.className="text-dark text-black-50 ps-4 pt-2 fw-bold"
        taskList.className="row m-auto justify-content-center"

        dateBlock.appendChild(dateText)
        dateBlock.appendChild(taskList)

        dateContainer.appendChild(dateBlock)

        const validTasks = store.tasks.filter(task => task.dayMonthYear===date)

        renderTasksList(validTasks,taskList)
    })
}