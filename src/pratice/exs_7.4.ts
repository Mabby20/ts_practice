function toString<T>(arg: T): string | undefined {
    if (Array.isArray(arg)) {
        return arg.toString();
    }
    switch (typeof arg) {
        case 'string':
            return arg;
        case 'number':
        case 'function':
        case 'boolean':
        case 'bigint':
        case 'symbol':
            return arg.toString();
        case 'object':
            return JSON.stringify(arg);
        default:
            return undefined;
    }
}
1
const test = toString(() => { })
console.log(test)
const test2 = toString(true)
console.log(test2)