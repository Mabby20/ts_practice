function logId(id: string | number) {
    if (typeof id === 'string') { // сужение типа union до string
        console.log('string', id)
        return;
    }

    console.log('number', id)
}

function logArray(err: string | string[]) {
    if (Array.isArray(err)) { // сужение типа union до array
        console.log('array', err)
        return;
    }

    console.log('srting', err)
}

function logObj(obj: { a: number } | { b: number }) {
    if ('a' in obj) {
        console.log('a in obj', obj)
        return;
    }

    console.log('b in obj', obj)
}

logObj({ a: 1, b: 1 })