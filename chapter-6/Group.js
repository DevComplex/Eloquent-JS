class Group {
    constructor(iterable) {
        this._storage = Group._initializeStorage(iterable)
    }

    *[Symbol.iterator]() {
        for(const item of this._storage) {
            yield item
        }
    }

    add(item) {
        if (!(this._storage.includes(item))) {
            this._storage.push(item)
        }
    }

    delete(item) {
        this._storage = this._storage.filter(el => el !== item)
    }

    has(item) {
        return this._storage.includes(item)
    }

    static _initializeStorage(iterable) {
        const iterator = iterable[Symbol.iterator]()
        const storage = []

        let res = iterator.next()

        while(!res.done) {
            storage.push(res.value)
            res = iterator.next()
        }

        return storage
    }

    static from(iterable) {
        return new Group(iterable)
    }
}

const g = Group.from([1, 2, 3, 4, 5])

g.add(5)
g.delete(4)
g.delete(1000)

for(const el of g) {
    console.log(el)
}