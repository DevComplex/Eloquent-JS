const arr = [[[], 1, [2, [3, [4, 5, []]]]]]

console.log(flatten(arr)) // 1, 2, 3, 4, 5

function flatten(arr) {
    return arr.reduce((flattenedArr, val) => {
        if (val instanceof Array) {
            flattenedArr.push(...flatten(val))
        } else {
            flattenedArr.push(val)
        }

        return flattenedArr
    }, [])
}