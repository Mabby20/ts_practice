let unknownValue: unknown


//! типы все равно будут как unknown
unknownValue = 3
unknownValue = 'aboba'

let res1: string = unknownValue; //! не получится взять и типу unknown присвоить тип string, его необходима определить

interface aboba {
    arg: string,
    arg2: number,
    arg3: {
        name: string
    }
}

//! что бы сузить тип unknown нужно обязательно проверить на тип
const fn = (arg: unknown) => {
    if (typeof arg === 'string') {
        arg.toLowerCase()
    } else if (arg) {
        console.log('unknown')
    }
}