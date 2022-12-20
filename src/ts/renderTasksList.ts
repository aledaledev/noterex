import {editId, tasks} from '../main'
import deleteTask from './deleteTask'
import editTask from './editTask'

function renderTasksList() {
    const tasksList = <HTMLDivElement>document.getElementById('tasks-list')
    tasksList.innerHTML=''

    tasks.map(({id,description,title}) => {
        const cardContainer = document.createElement('div') 
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
        
        buttonEdit.classList.add('btn','btn-outline-warning')
        buttonEdit.textContent='Edit'
        buttonEdit.addEventListener('click', () => editTask(id))
        
        span.classList.add('badge','bg-light','ms-auto','ms-sm-0','ms-md-auto','ms-lg-0','ms-xl-auto')
        span.textContent='2 days ago'

        buttonContainer.classList.add('d-flex','align-items-center','gap-2','mt-auto','flex-wrap')
        buttonContainer.appendChild(buttonDelete)
        buttonContainer.appendChild(buttonEdit)
        buttonContainer.appendChild(span)

        cardTitle.classList.add('card-title')
        cardTitle.textContent=title

        cardText.classList.add('card-text')
        cardText.textContent=description

        cardBody.classList.add('card-body','d-flex','flex-column')
        cardBody.appendChild(cardTitle)
        cardBody.appendChild(cardText)
        cardBody.appendChild(buttonContainer)

        cardContainer.classList.add('col-12','col-sm-6','col-lg-4','p-0')

        card.classList.add('card','m-1','text-white','bg-primary','bg-opacity-75')
        card.style.height='96%'
        
        if(editId === id) card.classList.replace('bg-primary','bg-success')
        if(editId !== '') buttonDelete.classList.add('opacity-75')

        card.appendChild(cardBody)
        cardContainer.appendChild(card)

        tasksList?.appendChild(cardContainer)
    })
}

export default renderTasksList