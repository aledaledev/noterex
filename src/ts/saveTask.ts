import {taskForm, editId, tasks, setEditId, setTasks} from '../main'
import renderTasksList from './renderTasksList'
import {v4 as uuid} from 'uuid'
import createToast, { customToast } from './createToast'
import { Task } from '../types'

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

const saveTask = (e:HTMLFormElement) => {
    e.preventDefault()
    const title = taskForm['title'] as unknown as HTMLInputElement
    const description = taskForm["description"] as HTMLTextAreaElement
    const buttonSave = taskForm[2]

    handleError(title,description)
    if(title.value === '' || description.value === '') return
    
    if(editId === ''){
        const task:Task = {
            id: uuid(),
            title: title.value,
            description: description.value,
            //date: new Date()
        }
        const resultTasks = [...tasks, task]
        setTasks(resultTasks)
        createToast(customToast[0])
    } else {
        const taskIndex = tasks.findIndex(task => task.id === editId)
        tasks[taskIndex].description = description.value,
        tasks[taskIndex].title = title.value
        setEditId('')
        buttonSave.classList.replace('btn-outline-success','btn-outline-primary')
        createToast(customToast[1])
    }
    renderTasksList()
    taskForm.reset()
}

export default saveTask