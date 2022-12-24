export const getDayMonthYear = (date:Date):string => {
    const month = date.getUTCMonth()+1 ;
    const day = date.getDate();
    const year = date.getUTCFullYear();
    return `${year}-${month}-${day}`
}