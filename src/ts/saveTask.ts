import {taskForm, editId, setEditId, store} from '../main'
import {v4 as uuid} from 'uuid'
import createToast, { customToast } from './createToast'
import { StorageProps, Task } from '../types'
import localStorage from '../utils/localStorage'
import { getDayMonthYear } from '../utils/getDayMonthYear'
import { getTime } from '../utils/getTime'
import { renderDate } from './renderDate'

const handleError = (title : HTMLInputElement,description:HTMLTextAreaElement) => {
    title.classList.remove('is-invalid')
    description.classList.remove('is-invalid')
    if(title.value === '') {
        title.classList.add('is-invalid')
    }
    if(description.value === '') {
        description.classList.add('is-invalid')
    }
}

const saveTask = (e:SubmitEvent) => {
    e.preventDefault()
    const title = taskForm['title'] as unknown as HTMLInputElement
    const description = taskForm["description"] as HTMLTextAreaElement
    const dateTime = taskForm['datetime']
    const buttonSave = taskForm[3]

    handleError(title,description)
    if(title.value === '' || description.value === '') return
    
    if(editId === ''){
        const taskDate = new Date(dateTime.value);
        const dayMonthYear = getDayMonthYear(taskDate)

        const task:Task = {
            id: uuid(),
            title: title.value,
            description: description.value,
            time:getTime(taskDate),
            dayMonthYear
        }

        let updateDates:string[]=[...store.dates]
        
        if(!store.dates.includes(dayMonthYear)){
            updateDates=[...store.dates, dayMonthYear]
        }

        const resultStore:StorageProps = {
            tasks:[...store.tasks, task],
            dates:updateDates
        }
        
        localStorage('TASKS_STORE',resultStore)

        createToast(customToast[0])
    } else {
        const taskIndex = store.tasks.findIndex(task => task.id === editId)
        store.tasks[taskIndex].description = description.value,
        store.tasks[taskIndex].title = title.value

        localStorage('TASKS_STORE',store)
        
        setEditId('')
        buttonSave.classList.replace('btn-outline-success','btn-outline-primary')
        createToast(customToast[1])
    }
    renderDate()
    taskForm.reset()
}

export default saveTask