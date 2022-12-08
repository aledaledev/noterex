import renderTasksList from './renderTasksList'
import {setTasks,tasks} from '../main'
import {createToast, customToast} from './createToast'

const deleteTask = (id:string) => {
    const result = tasks.filter(task => task.id !== id)
    setTasks(result)
    renderTasksList()
    createToast(customToast[2])
}

export default deleteTask
