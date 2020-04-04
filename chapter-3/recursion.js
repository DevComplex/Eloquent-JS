function isEven(x) {
    return isEvenHelper(abs(x))

    function isEvenHelper(x) {
        if (x === 0) {
            return true
        } else if (x === 1) {
            return false
        }

        return isEvenHelper(x - 2)
    }
}

function abs(x) {
    return x < 0 ? x * -1 : x
}