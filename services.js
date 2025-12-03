import { dataBase } from "./db.js";
import { isEmpty, isObject, isExistId, validType } from "./utils.js";

const requierdFeilds = ["id", "terroristName", "terroristLastName", "weapons", "description"]
function newReport({ id, terroristName, terroristLastName, weapons = [""], description = "" }) {
    try {
        if (validType(id) && isEmpty(id)) {
            return {
                id,
                terroristName: terroristName ?? "Muhammad",
                terroristLastName: terroristLastName ?? "unknown",
                weapons,
                description
            };
        }
        else {
            throw new Error("not valid")
        }
    } catch (error) {
        console.log(typeof error.message)
        return error.message
    }
}


const insertData = (obj) => {
    if (isObject(obj)) {
        if (isExistId(obj.id, dataBase)) {
            console.log("This id is already exist")
            return
        }
        dataBase.push(obj)
    } else {
        throw new Error("not valid should be an object")
    }
}
insertData(newReport({ id: 123, description: "extreamly dangarous" }))
insertData(newReport({ id: 456, description: "extreamly dangarous" }))
insertData(newReport({ id: 789, description: "extreamly dangarous" }))
insertData(newReport({ id: 789, description: "extreamly dangarous" }))
// console.log(dataBase)


function sortByField(db=[Object]){
    for (let i = 0; i < db.length; i++){
        console.log(db[i])
    }
}
// console.log(sortByField(dataBase))


function validProperty(propArr, obj){
    let counter = 0
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            value = exampleObj[key];
            console.log(key, value);
        }
    }
}
console.log(dataBase[0].length)

