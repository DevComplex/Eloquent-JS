const x = {
    "hasOwnProperty": "hi"
}

const y = {}

console.log(hop(x, "hasOwnProperty")) // true
console.log(hop(y, "hasOwnProperty")) // false

function hop(obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key)
}
