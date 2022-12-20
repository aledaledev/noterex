import './assets/styles/style.css'
import renderTasksList from './ts/renderTasksList'
import saveTask from './ts/saveTask'
import { Task } from './types'
import dafaultTasks from './data/defaultTasks.json'

const store = JSON.parse(localStorage.getItem('tasks') as string) || dafaultTasks

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
//styles (responsive) x
//tipado x 
//localstorage x
//mini modal x
//hacer algo con date()

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
