import './styles/style.css'
import {v4 as uuid} from 'uuid'
import renderTasksList from './ts/renderTasksList'
import saveTask from './ts/saveTask'

export type Task = {
    id: string;
    title: string;
    description: string;
    //date: Date
}

export type Toast = {
    bgColor: 'info' | 'success' | 'danger',
    content: 'created' | 'edited' | 'deleted'
}

export let tasks:Task[] = [
    {
        id: uuid(),
        title: 'Go to Murray show',
        description: 'This night will be the best one ever, hahahha'
    },
    {
        id: uuid(),
        title: 'Make tea for Nina',
        description: 'Nina likes tea but she dont know make him self, so I am going to help to him :3'
    }
]

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