import './assets/styles/style.css'
import renderTasksList from './ts/renderTasksList'
import saveTask from './ts/saveTask'
import { Task } from './types'
import dafaultTasks from './data/defaultTasks.json'

localStorage.setItem('tasks',JSON.stringify(dafaultTasks))
export const store = JSON.parse(localStorage.getItem('tasks') as string)

export let tasks:Task[] = store
export let editId:string = '';
export const taskForm = <HTMLFormElement>document.getElementById('task-form')

const title = taskForm['title'] as unknown as HTMLInputElement
const description = taskForm["description"] as HTMLTextAreaElement

taskForm.addEventListener('submit', saveTask)

taskForm.reset()
renderTasksList()

//errores x
//modular x
//styles (responsive)
//tipado
//localstorage 
//mini modal x

export function setEditId(x:string):void{
    editId=x
}

export function setTasks(x:Task[]):void{
    tasks=x
}

title.addEventListener('input', () => {
    if(title.value === '') {
        title.classList.add('is-invalid')
    } else {
        title.classList.remove('is-invalid')
    }
})

description.addEventListener('input', () => {
    if(description.value === '') {
        description.classList.add('is-invalid')
    } else {
        description.classList.remove('is-invalid')
    }
})
