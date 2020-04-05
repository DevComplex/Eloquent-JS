loop(3, n => n > 0, n => n - 1, console.log)

function loop(initialVal, test, update, body) {
    val = initialVal

    for(;;) {
        if (!test(val)) {
            break
        }

        val = update(val)
        body(val)
    }
}
