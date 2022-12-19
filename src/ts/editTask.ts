import renderTasksList from './renderTasksList'
import {taskForm, editId, tasks, setEditId} from '../main'
import { Task } from '../types'

const editTask = (id:string) => {
    const titleForm = taskForm['title'] as unknown as HTMLInputElement
    const descriptionForm = taskForm["description"] as HTMLTextAreaElement
    const buttonSave = taskForm[2] as HTMLButtonElement

    if(editId === '' || editId !== id){
        const {title, description} = tasks.find((task:Task) => task.id === id) as {title:string,description:string}
    
        titleForm.focus()

        buttonSave.classList.replace('btn-outline-primary','btn-outline-success')
        setEditId(id)
    
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