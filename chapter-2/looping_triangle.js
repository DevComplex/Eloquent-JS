printLoopingTriangle(7)

function printLoopingTriangle(height) {
    let triangle = ""

    for(let i = 1; i <= height; i++) {
        let row = ""

        for(let j = 0; j < i; j++) {
            row += "*"
        }

        triangle += row

        if (i < height) {
            triangle += "\n"
        }
    }

    console.log(triangle)
}
