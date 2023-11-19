let X = undefined

if (typeof X == "string") {
    console.log("х = строке")
}

if (typeof X === "number") {
    console.log("х = числу")
}

if (typeof X === "boolean") {
    console.log("х = логическому типу")
}

if (typeof X != "boolean", "string", "number") {
    console.log("Тип x не определён")
}