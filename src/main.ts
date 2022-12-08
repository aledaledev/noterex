import './styles/style.css'
import {v4 as uuid} from 'uuid'

type Task = {
    id: string,
    title: string,
    description: string
    date: Date
}

let tasks:Task[] = []

const taskForm = document.getElementById('task-form')
taskForm?.addEventListener('submit', (e) => {
    e.preventDefault()
    const title = taskForm['title'] as unknown as HTMLInputElement
    const description = taskForm["description"] as HTMLTextAreaElement
    const task:Task = {
        id: uuid(),
        title: title.value,
        description: description.value,
        date: new Date()
    }
    tasks = [...tasks, task]
    console.log(tasks);
    
})

