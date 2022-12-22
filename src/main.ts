import './assets/styles/style.css'
import renderTasksList from './ts/renderTasksList'
import saveTask from './ts/saveTask'
import { StorageProps, Task } from './types'
import defaultStorage from './data/defaultStorage.json'

const {tasks:tasksStore, dates:datesStore}:StorageProps = JSON.parse(localStorage.getItem('tasksStorage') as string) || defaultStorage 

export let tasks:Task[] = tasksStore 
export let editId:string = '';
export let dates:string[] = datesStore
console.log(dates);

export const taskForm = <HTMLFormElement>document.getElementById('task-form')
const title = taskForm['title'] as unknown as HTMLInputElement
const description = taskForm["description"] as HTMLTextAreaElement
//const dateTime = taskForm['datetime']

taskForm.addEventListener('submit',saveTask)

    /*const taskDate = new Date(dateTime.value);
    const dayMothYear = getDayMonthYear(taskDate)
    const time = getTime(taskDate)

    if(!dates.includes(dayMothYear)){
        dates = [...dates, dayMothYear]
    }

    console.log(dates);
    
    console.log(time);  //only hh:mm*/

    //console.log((+time.split(':')[0])>11?time+' PM':time+' AM');    //AM or PM
    
    //console.log(time>"20:15");  //sort

    {
        tasks:[{1:1},{1:1},{1:2},{1:2},{1:3}];
        dates:['1','2','3'];
    }

taskForm.reset()
renderTasksList()

//errores x
//modular x
//styles (responsive) x
//tipado x 
//localstorage x
//mini modal x
//hacer algo con date()
//ahora se vera implicado el localstorage porque debemos guardar los dates y los task
//se deben ordenar por date y dentro por hora: de menor a mayor
//generar distintos wrappers segun dates en el array

export function setEditId(id:string):void{
    editId=id
}

export function setTasks(updateTasks:Task[]):void{
    tasks=updateTasks
}

export function setDates(updateDates:string[]):void{
    dates=updateDates
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

