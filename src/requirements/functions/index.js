export default (date) => {
    let timestamp = date.split('T')
    let elDateArray = timestamp[0].split('-')
    let elDate = new Date()
    elDate.setDate(elDateArray[0])
    elDate.setMonth(elDateArray[1] - 1)
    elDate.setFullYear(elDateArray[2])
    elDate.setHours(23)
    elDate.setMinutes(59)
    return elDate
}