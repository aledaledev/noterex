import {taskForm, editId, setEditId, store} from '../main'
import { Task } from '../types'
import getTimeToChange from '../utils/getTimeToChange'
import { renderDate } from './renderDate'

const editTask = (id:string) => {
    const titleForm = taskForm['title'] as unknown as HTMLInputElement
    const descriptionForm = taskForm["description"] as HTMLTextAreaElement
    const dateTime = taskForm['datetime'] as HTMLInputElement

    const buttonSave = taskForm[3] as HTMLButtonElement

    if(editId === '' || editId !== id){
        titleForm.focus()
        const {title, description, dayMonthYear,time } = store.tasks.find((task:Task) => task.id === id) as {title:string,description:string, dayMonthYear:string,time:string}

        buttonSave.classList.replace('btn-outline-primary','btn-outline-success')
        setEditId({ id })

        if(titleForm.classList.contains('is-invalid')){
            titleForm.classList.remove('is-invalid')
        }
        if(descriptionForm.classList.contains('is-invalid')){
            descriptionForm.classList.remove('is-invalid')
        }
    
        titleForm.value= title
        descriptionForm.value=description        
        dateTime.value= getTimeToChange(dayMonthYear,time)
        
    } else if (editId === id){
        buttonSave.classList.replace('btn-outline-success','btn-outline-primary')
        setEditId({ id: '' })
        taskForm.reset()
    }
    renderDate()
}

export default editTask