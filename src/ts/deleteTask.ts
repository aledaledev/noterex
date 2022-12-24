import {editId, store} from '../main'
import {createToast, customToast} from './createToast'
import localStorage from '../utils/localStorage'
import { renderDate } from './renderDate'

const deleteTask = (id:string) => {

    if(editId === ''){
        const filteredTasks = store.tasks.filter(task => task.id !== id)
        const {dayMonthYear} = store.tasks.find(task => task.id===id) as {dayMonthYear:string}
        const deleteCondition = filteredTasks.some(task => task.dayMonthYear===dayMonthYear)

        let updateDates = [...store.dates]

        if(!deleteCondition){
            updateDates = updateDates.filter(date => date !== dayMonthYear)            
        }

        const resultStore = {
            dates:updateDates,
            tasks:filteredTasks
        }

        localStorage('TASKS_STORE',resultStore)
        renderDate()
        createToast(customToast[2])
    }

}

export default deleteTask
