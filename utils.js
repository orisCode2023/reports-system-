export const validType = (id) => typeof id === "string" || typeof id === "number"
export const isEmpty = (id) => Boolean(id)
export const isObject = (report) => typeof report === "object"
export const isExistId = (arr=[Object], id) => arr.find((terrorist) => terrorist.id !== id)
export const getPropertys = (obj=Object) => Object.keys(obj)
const getPropertysFromArray = (arr=[Object]) => Object.keys(arr[0])
const getLengthReport = (propertysArr, report) => propertysArr.length === report.length
function sameValues(propertysArr, report) {
    for(let i = 0; i < propertysArr.length; i++){
        if (!propertysArr.includes(report[i])){
            return false 
        } 
    }
    return true
}
// const sameValues = (propertysArr, report) => report.every(val => propertysArr.includes(val))
export const validToInsert = (arr=[Object], report=Object) => getLengthReport(getPropertysFromArray(arr), 
getPropertys(report)) && sameValues(getPropertysFromArray(arr), getPropertys(report)) && isObject(report) && isExistId(arr, report.id)




// let ob = {
//     name: "iuygikjhfk",
//     age: 5
// }
// let ob1 = {
//     age: 4,
//     name: "iuygi"
// }
// let ob3 = {
//     name: "s;diguh",
//     age: 234
// }
// const temo = [ob, ob1];

