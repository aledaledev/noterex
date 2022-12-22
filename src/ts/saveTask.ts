import {taskForm, editId, tasks, setEditId, dates, setDates} from '../main'
import renderTasksList from './renderTasksList'
import {v4 as uuid} from 'uuid'
import createToast, { customToast } from './createToast'
import { Task } from '../types'
import localStorage from '../utils/localStorage'
import { getDayMonthYear } from '../utils/getDayMonthYear'
import { getTime } from '../utils/getTime'

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
        const task:Task = {
            id: uuid(),
            title: title.value,
            description: description.value,
            time:getTime(taskDate),
            dayMonthYear:getDayMonthYear(taskDate)
        }
        if(!dates.includes(getDayMonthYear(taskDate))){
            setDates([...dates, getDayMonthYear(taskDate)])
        }
        
        const resultTasks = [...tasks, task]
        localStorage('tasksStorage',resultTasks)
        createToast(customToast[0])
    } else {
        const taskIndex = tasks.findIndex(task => task.id === editId)
        tasks[taskIndex].description = description.value,
        tasks[taskIndex].title = title.value
        localStorage('tasksStorage',tasks)
        setEditId('')
        buttonSave.classList.replace('btn-outline-success','btn-outline-primary')
        createToast(customToast[1])
    }
    renderTasksList()
    taskForm.reset()
}

export default saveTask