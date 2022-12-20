import './assets/styles/style.css'
import renderTasksList from './ts/renderTasksList'
import saveTask from './ts/saveTask'
import { Task } from './types'
import dafaultTasks from './data/defaultTasks.json'

const store = JSON.parse(localStorage.getItem('tasks') as string) || dafaultTasks

export let tasks:Task[] = store
export let editId:string = '';
let dates:string[] = []

export const taskForm = <HTMLFormElement>document.getElementById('task-form')
const title = taskForm['title'] as unknown as HTMLInputElement
const description = taskForm["description"] as HTMLTextAreaElement
const dateTime = taskForm['datetime']

taskForm.addEventListener('submit', (e)=> {
    e.preventDefault()
    saveTask
    
    const taskDate = new Date(dateTime.value);
    
    const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];

    const month = monthNames[taskDate.getUTCMonth()];
    const day = taskDate.getUTCDate();
    const year = taskDate.getUTCFullYear();
    
    const date = `${day} ${month} ${year}`;

    if(!dates.includes(date)){
        dates = [...dates, date]
    }

    console.log(dates);
    
    
})
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

