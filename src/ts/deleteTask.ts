import {editId, store} from '../main'
import {createToast, customToast} from './createToast'
import localStorage from '../utils/localStorage'
import { renderDate } from './renderDate'

const deleteTask = (id:string) => {

    if(editId === ''){
        const result = store.tasks.filter(task => task.id !== id)
        const {dayMonthYear} = store.tasks.find(task => task.id===id) 
        const deleteCondition = result.some(task => task.dayMonthYear===dayMonthYear)

        let updateDates = [...store.dates]

        if(!deleteCondition){
            updateDates = updateDates.filter(date => date !== dayMonthYear)
            console.log(dayMonthYear);
            
        }

        localStorage('TASKS_STORE',{dates:updateDates,tasks:result})
        renderDate()
        createToast(customToast[2])
    }

}

export default deleteTask
