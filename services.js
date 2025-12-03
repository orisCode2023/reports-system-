import { dataBase } from "./db.js";
import { isEmpty, validType, validToInsert} from "./utils.js";
import input from 'analiza-sync';
import { nanoid } from "nanoid";

function newReport({ id, terroristName, terroristLastName, weapons = [""], description = "" }) {
    try {
        if (validType(id) && isEmpty(id)) {
            return {
                id:id ?? nanoid(),
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

const insertData = (db=[], obj=Object) => {
    if (db.length !== 0){
        if (validToInsert(db, obj)){
            db.push(obj)
        } else {
            throw new Error("not valid ")
        }
    } else {
        db.push(obj)
    }
}

const getDataBase = () => dataBase


const searchById = (db=[Object], id) => {
    const found = db.filter(report => report.id === id)
    if (found){
        return found
    } else {
        throw "Not Found"
    }
}
        
const sortById = (db=[Object]) => {
    const arrayId = db.map(report => Number(report.id))
    return arrayId.sort((id1, id2) => id1 - id2)
}

insertData(dataBase, newReport({id: 123, description: "extreamly dangarous" }))
insertData(dataBase, newReport({ id: 789, description: "extreamly dangarous" }))
insertData(dataBase, newReport({ id: 456, description: "extreamly dangarous" }))

console.log(getDataBase)







function test (id){
    const ob = {
        id: id ?? nanoid()
    }
    console.log(ob)
}
const name = input("Enter name: ")
console.log(name) 







// sorting methods

// function sortByField(db=[Object], field){
//     for (let i = 0; i < db.length; i++){
//         console.log(db[i])
//     }
// }
// // console.log(sortByField(dataBase))


