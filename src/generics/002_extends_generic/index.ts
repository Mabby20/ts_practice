//! Классы
class VehicleClass {
    run: number
}

class VLC1 extends VehicleClass {
    arg: string
}

//! интерфейсы

interface VehicleInterface {
    run: number
}

interface VLC2 extends VehicleInterface {
    arg: string
}

//! типы
type VehicleType = {
    run: number
}

type VLC3 = {
    arg: string;
}

type Test = VehicleType & VLC3

//! использование

//* дженерик можно ограничить при помощи extends
//* Это позволяет ограничить генерик конкретным базовым классом, интерфейсом, типом
//* Это позволяет обращаться к свойствам и методам этого базового типа

//! Types
const kmToMilesClass = <T extends VehicleClass>(vehicle: T): T => {
    //! по сути мы указали что T это класс у которого должен обязательно быть метод run
    vehicle.run = vehicle.run / 0.62
    return vehicle;
}


const res20 = kmToMilesClass(new VehicleClass);
const res21 = kmToMilesClass(new VLC1); //* так же работает потому что класс VLC1 унаследован от VehicleClass
//! ==================


//! Interface
const kmToMilesInterface = <T extends VehicleInterface>(vehicle: T): T => {
    vehicle.run = vehicle.run / 0.62
    return vehicle;
}

const i1: VehicleInterface = { run: 1 }
const i2: VLC2 = { run: 1, arg: 'asdf' }

const res22 = kmToMilesInterface(i1)
const res23 = kmToMilesInterface(i2)

//! Types
const kmToMilesType = <T extends VehicleType>(vehicle: T): T => {
    vehicle.run = vehicle.run / 0.62
    return vehicle;
}

const t1: Test = { run: 1, arg: 'asdf' } //! так не будет работать потому что не экстендит
const res24 = kmToMilesType({ run: 1 })
const res25 = kmToMilesType(Test)

//! ==================

class Resp<D, E> {
    data?: D
    error?: E

    constructor(data?: D, error?: E) {
        if (data) {
            this.data = data;
        }
        if (error) {
            this.error = error;
        }
    }
}

class HttpResp<C, D, E> extends Resp<D, E> {
    code: C

    constructor(code: C, data?: D, error?: E) {
        super(data, error)
        this.code = code;
    }
}