import './assets/styles/style.css'
import saveTask from './ts/saveTask'
import { StorageProps } from './types'
import defaultStorage from './data/defaultStorage.json'
import { renderDate } from './ts/renderDate'

export let store:StorageProps = JSON.parse(localStorage.getItem('TASKS_STORE') as string) || defaultStorage 
export let editId:string = '';

export const taskForm = <HTMLFormElement>document.getElementById('task-form')
const title = taskForm['title'] as unknown as HTMLInputElement
const description = taskForm["description"] as HTMLTextAreaElement

taskForm.addEventListener('submit',saveTask)

    //console.log(time>"20:15");  //sort

taskForm.reset()
//renderTasksList()

//errores x
//modular x
//styles (responsive) x
//tipado x 
//localstorage x
//mini modal x
//hacer algo con date() x
//ahora se vera implicado el localstorage porque debemos guardar los dates y los task x
//generar distintos wrappers segun dates en el array x
//se deben ordenar por date y dentro por hora: de menor a mayor 
//delete y edit fixear x

export function setEditId(id:string):void{
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

renderDate()
