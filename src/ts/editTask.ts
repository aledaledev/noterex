import renderTasksList from './renderTasksList'
import {taskForm, editId, setEditId, store} from '../main'
import { Task } from '../types'

const editTask = (id:string) => {
    const titleForm = taskForm['title'] as unknown as HTMLInputElement
    const descriptionForm = taskForm["description"] as HTMLTextAreaElement
    const buttonSave = taskForm[2] as HTMLButtonElement

    if(editId === '' || editId !== id){
        titleForm.focus()
        const {title, description} = store.tasks.find((task:Task) => task.id === id) as {title:string,description:string}

        buttonSave.classList.replace('btn-outline-primary','btn-outline-success')
        setEditId(id)

        if(titleForm.classList.contains('is-invalid')){
            titleForm.classList.remove('is-invalid')
        }
        if(descriptionForm.classList.contains('is-invalid')){
            descriptionForm.classList.remove('is-invalid')
        }
    
        titleForm.value= title
        descriptionForm.value=description
    } else if (editId === id){
        buttonSave.classList.replace('btn-outline-success','btn-outline-primary')
        setEditId('')
        taskForm.reset()
    }
    renderTasksList()
}

export default editTask