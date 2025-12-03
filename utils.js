export const validType = (id) => typeof id === "string" || typeof id === "number"
export const isEmpty = (id) => Boolean(id)
export const isObject = (report) => typeof report === "object"
export const isExistId = (id, arr) => arr.find((terrorist) => terrorist.id === id)
