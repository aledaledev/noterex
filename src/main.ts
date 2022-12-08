import './styles/style.css'
import {v4 as uuid} from 'uuid'

type Task = {
    id: string,
    title: string,
    description: string
    //date: Date
}

let tasks:Task[] = [
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

let editId:string = '';
const taskForm = <HTMLFormElement>document.getElementById('task-form')

taskForm?.addEventListener('submit', (e) => {
    e.preventDefault()
    const title = taskForm['title'] as unknown as HTMLInputElement
    const description = taskForm["description"] as HTMLTextAreaElement
    const buttonSave = taskForm[2]
    if(editId === ''){
        if(title.value === '' || description.value==='') return
        const task:Task = {
            id: uuid(),
            title: title.value,
            description: description.value,
            //date: new Date()
        }
        tasks = [...tasks, task]
    } else {
        if(title.value === '' || description.value==='') return
        const taskIndex = tasks.findIndex(task => task.id === editId)
        tasks[taskIndex].description = description.value,
        tasks[taskIndex].title = title.value
        editId=''
        buttonSave.classList.replace('btn-outline-success','btn-outline-primary')
    }
    renderTasksList()
    taskForm.reset()
})

const editTask = (id:string) => {
    const titleForm = taskForm['title'] as unknown as HTMLInputElement
    const descriptionForm = taskForm["description"] as HTMLTextAreaElement
    const buttonSave = taskForm[2] as HTMLButtonElement

    if(editId === '' || editId !== id){
        const {title, description} = tasks.find(task => task.id === id)
    
        titleForm.focus()

        buttonSave.classList.replace('btn-outline-primary','btn-outline-success')
        editId = id
    
        titleForm.value= title
        descriptionForm.value=description
    } else if (editId === id){
        buttonSave.classList.replace('btn-outline-success','btn-outline-primary')
        editId = ''
        taskForm.reset()
    }
    renderTasksList()
}

const deleteTask = (id:string) => {
    tasks = tasks.filter(task => task.id !== id)
    renderTasksList()
} 

function renderTasksList() {
    const tasksList = <HTMLDivElement>document.getElementById('tasks-list')
    tasksList.innerHTML=''

    tasks.map(({id,description,title}) => {
        const card = document.createElement('div')
        const cardBody = document.createElement('div')
        const cardTitle = document.createElement('h4')
        const cardText = document.createElement('p')
        const buttonContainer = document.createElement('div')
        const buttonDelete = document.createElement('button')
        const buttonEdit = document.createElement('button')
        const span = document.createElement('span')

        buttonDelete.classList.add('btn','btn-outline-danger')
        buttonDelete.textContent='Delete'
        buttonDelete.addEventListener('click', () => deleteTask(id))
        
        buttonEdit.classList.add('btn', 'btn-outline-warning')
        buttonEdit.textContent='Edit'
        buttonEdit.addEventListener('click', () => editTask(id))
        
        span.classList.add('badge','bg-light','ms-auto')
        span.textContent='2 days ago'

        buttonContainer.classList.add('d-flex','align-items-center')
        buttonContainer.appendChild(buttonDelete)
        buttonContainer.appendChild(buttonEdit)
        buttonContainer.appendChild(span)

        cardTitle.classList.add('card-title')
        cardTitle.textContent=title

        cardText.classList.add('card-text')
        cardText.textContent=description

        cardBody.classList.add('card-body')
        cardBody.appendChild(cardTitle)
        cardBody.appendChild(cardText)
        cardBody.appendChild(buttonContainer)

        card.classList.add('card','text-white','bg-primary','bg-opacity-75')
        
        if(editId === id) card.classList.replace('bg-primary','bg-success')

        card.appendChild(cardBody)

        tasksList?.appendChild(card)
    })
} 

taskForm.reset()
renderTasksList()
