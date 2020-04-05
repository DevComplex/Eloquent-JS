function some(arr, predicate) {
    for(const element of arr) {
        if (predicate(element)) {
            return true
        }
    }

    return false
}