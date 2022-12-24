export default (dayMonthYear:string,time:string) => {
    const currentDate = dayMonthYear.split('-')
    const day = ('0'+currentDate[2]).slice(-2)
    const month = ('0'+currentDate[1]).slice(-2)
    return `${currentDate[0]}-${month}-${day}T${time}`
}