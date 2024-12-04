interface IData {
    name: string,
    age: number
}

const getValue = <T, D extends keyof T>(obj: T, key: D) => {
    return obj[key]
}

const data12: IData = {
    name: 'aboba',
    age: 22
}

const res123 = getValue(data12, 'name')

// _____________________________

interface ITestData {
    group: number,
    name: string,
}
type ReturnData = Record<string, ITestData[]>

type keyRecord = string | number | symbol;

interface ReturnData2<T> {
    [key: string]: T[]
}

const testData: ITestData[] = [
    { group: 1, name: 'a' },
    { group: 1, name: 'b' },
    { group: 2, name: 'c' },
];


const groupBy = <T extends Record<keyRecord, any>, K extends keyof T>(data: T[], key: K): ReturnData2<T> => {

    const res = data.reduce<ReturnData2<T>>((acc, item) => {
        const curKey = item[key];
        if (!(curKey in acc)) {
            acc[curKey] = [item]
            return acc
        }

        acc[curKey].push(item);
        return acc;
    }, {})

    return res;
}

const abbb = groupBy(testData, 'name')
console.log('abbb', abbb)