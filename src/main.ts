import './assets/styles/style.css'
import saveTask from './ts/saveTask'
import { StorageProps } from './types'
import defaultStorage from './data/defaultStorage.json'
import { renderDate } from './ts/renderDate'
import sortDateTime from './utils/sortDateTime'

export let store:StorageProps = sortDateTime(JSON.parse(localStorage.getItem('TASKS_STORE') as string) || defaultStorage) 
export let editId:string = '';

export const taskForm = <HTMLFormElement>document.getElementById('task-form')
const title = taskForm['title'] as unknown as HTMLInputElement
const description = taskForm["description"] as HTMLTextAreaElement

taskForm.addEventListener('submit',saveTask)
taskForm.reset()
renderDate()

export function setEditId({ id }: { id: string }):void{
    editId=id
}

export function setStore(value:StorageProps){
    store=value
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
