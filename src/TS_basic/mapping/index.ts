interface IUser1 {
    name: string,
    email: string,
    login: string
}

interface IAdmin1 {
    name: string,
    role: number
}

const user1: IUser1 = {
    name: 'asdf',
    email: 'aasdfasdf',
    login: 'asdf',
}


//! итого на самом деле данные котоыре в admin1 будут отличичаться от реального интерфейса IUser1 потому что там будут еще поля email и login
const admin1: IAdmin1 = {
    ...user1,
    role: 1
}

//! правильнее делать функции мапинга для приведения одного объекта к другому, так мы получим только нужные поля

const userToAdmin = (user: IUser1): IAdmin1 => {
    return {
        name: user.name,
        role: 1
    }
}