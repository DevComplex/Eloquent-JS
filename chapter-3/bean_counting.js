function countBs(str) {
    return countLetters(str, "B")
}

function countLettersV1(str, letter) {
    let letterCount = 0

    for(const l of str) {
        if (l === letter) {
            letterCount += 1
        }
    }

    return letterCount
}

function countLettersV2(str, letter) {
    return str.split("").filter(l => l === letter).length
}

function countsLettersV3(str, letter) {
    return str.split("").reduce((letterCount, l) => {
        return l === letter ? letterCount + 1: letterCount
    }, 0)
}

function countLettersV4(str, letter) {
    let letterCount = 0

    for(let i = 0; i < str.length; i++) {
        if (letter === str[i]) {
            letterCount += 1
        }
    }

    return letterCount
}

function countLettersV5(str, letter) {
    let letterCount = 0
    let i = 0

    while(i < str.length) {
        if (letter === str[i]) {
            letterCount += 1
        }
    }

    return letterCount
}