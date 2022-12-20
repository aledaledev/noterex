import renderTasksList from './renderTasksList'
import {editId, tasks} from '../main'
import {createToast, customToast} from './createToast'
import localStorage from '../utils/localStorage'

const deleteTask = (id:string) => {

    if(editId === ''){
        const result = tasks.filter(task => task.id !== id)
        localStorage('tasks',result)
        renderTasksList()
        createToast(customToast[2])
    }

}

export default deleteTask
