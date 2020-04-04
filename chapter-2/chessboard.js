printChessboard(8, 8)

function printChessboard(width, height) {
    let chessboard = ""

    startWithSpace = false

    for(let i = 0; i < height; i++) {
        let row = new Array(width).fill("#").join(" ")
        
        if (startWithSpace) {
            row = " " + row
        } else if (!startWithSpace) {
            row += " "
        }

        chessboard += row

        if (i < height - 1) {
            chessboard += "\n"
        }

        startWithSpace = !startWithSpace
    }

    console.log(chessboard)
}