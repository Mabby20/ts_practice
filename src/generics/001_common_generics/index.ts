const num: Array<number> = [1, 2, 3]

const getSplitedHalf = <T>(data: Array<T>): Array<T> => {
    const l = data.length / 2;
    return data.slice(0, l)
}

const t = getSplitedHalf

interface ILogLine<T> {
    timeStamp: Date,
    data: T
}

const logLine: ILogLine<{ a: number }> = {
    timeStamp: new Date(),
    data: {
        a: 1
    }
}