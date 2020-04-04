fizzBuzz(100)

function fizzBuzz(n) {
    for(let i = 3; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("Fizz Buzz")
        } else if (i % 3 === 0) {
            console.log("Fizz")
        } else if (i % 5 === 0) {
            console.log("Buzz")
        }
    }
}