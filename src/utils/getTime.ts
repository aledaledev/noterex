export const getTime = (date:Date):string => {
    const hour = ("0"+date.getHours()).slice(-2)
    const min = ("0"+date.getMinutes()).slice(-2)
    return hour+":"+min
}  