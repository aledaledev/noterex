import './styles/style.css'

const taskForm = document.getElementById('task-form')
taskForm?.addEventListener('submit', (e) => {
    e.preventDefault()
    const title = taskForm['title'] as unknown as HTMLInputElement
    const description = taskForm["description"] as HTMLTextAreaElement
    console.log(title.value);
    console.log(description.value);
    
})

