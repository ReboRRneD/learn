
let arr = [1, 4, 8, 21, 22]
let doneArr = []
let crop = arr.length
arr.map((a) => arr.push(a/2))
arr.splice(0, crop)

arr.map((a) => {if (a == Math.round(a)) {doneArr.push(a)}})
console.log(arr.splice(0, 5))

//yep