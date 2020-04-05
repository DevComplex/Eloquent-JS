class Vector {
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    _calc(v, calc) {
        return {x: calc(this.x, v.x), y: calc(this.y, v.y)}
    }

    plus(v) {
        const {x, y} = this._calc(v, (a, b) => a + b)
        return new Vector(x, y)
    }

    minus(v) {
        const {x, y} = this._calc(v, (a, b) => a - b)
        return new Vector(x, y)
    }

    get() {
        return Math.sqrt(this.x ** 2 + this.y ** 2)
    }
}