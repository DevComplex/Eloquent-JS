const a = {
    "us": ["san diego", "orange county", ["ocean side"]],
    "grapefruit": {
        "isGood": "yes"
    },
    "good": ["yes", "no", {"foo": "bar"}]
}

const b = {
    "us": ["san diego", "orange county", ["ocean side"]],
    "grapefruit": {
        "isGood": "yes"
    },
    "good": ["yes", "no", {"foo": "bar"}]
}

console.log(deepEquals(a, b)) // true

function deepEquals(a, b) {
    const typeofA = typeof a
    const typeofB = typeof b

    if (typeofA !== typeofB) {
        return false
    }

    if (typeofA === "function" || typeofA === "symbol" || typeofA === "bigint") {
        throw new TypeError(`Type: ${typeofA} is not supported.`)
    }

    if (typeofA !== "object" || typeofA === "function" || !a || !b) {
        return a === b
    }

    if (isUnsupportedInstance(a) || isUnsupportedInstance(b)) {
        throw new Error('Instance not supported.')
    }

    const aIsArray = a instanceof Array
    const bIsArray = b instanceof Array

    if (aIsArray && bIsArray) {
        return deepEqualsArray(a, b)
    } else if (aIsArray || bIsArray) {
        return false
    }

    return deepEqualsObject(a, b)
}

function isUnsupportedInstance(x) {
    return x instanceof Set || x instanceof Map || x instanceof Error || x instanceof Date
}

function deepEqualsArray(a, b) {
    if (a.length !== b.length) {
        return false
    }

    for(let i = 0; i < a.length; i++) {
        if (!deepEquals(a[i], b[i])) {
            return false
        }
    }

    return true
}

function deepEqualsObject(a, b) {
    const aKeys = Object.keys(a)
    const bKeys = Object.keys(b)

    if (aKeys.length !== bKeys.length) {
        return false
    }

    for(const aKey of aKeys) {
        if (!(aKey in b)) {
            return false
        }

        const aVal = a[aKey]

        if (!deepEquals(aVal, b[aKey])) {
            return false
        }
    }

    return true
}