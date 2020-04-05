function every(arr, predicate) {
    for(const element of arr) {
        if (!predicate(element)) {
            return false
        }
    }

    return true
}