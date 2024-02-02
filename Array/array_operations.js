const strings = ["a", 'b', 'c', 'd'];
console.log(strings)
// console.log(strings[2])

// push, O(1) operation
strings.push("e")
console.log(strings)

// pop, O(1) operation
strings.pop()
console.log(strings)

// unshift, O(n) operation
strings.unshift("f")
console.log(strings)

// splice, O(n) operation
strings.splice(2, 3, "g")
console.log(strings)