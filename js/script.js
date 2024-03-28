let arr = [1, 4 ,8]
let doneArr = []


arr.map((a) => arr.push(a/2))


for (var i = 0; i < --arr.length/2; i++) {
	arr[i].remove()
}

console.log(arr)