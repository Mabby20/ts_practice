interface IUser {
    name: string,
    age: number,
    skills: string[],
    log: (id: number) => string
}

interface IRole {
    roleId: number
}
interface IUserWithRole extends IUser {
    roleId: number
}

interface IUserWithRole2 extends IUser, IRole {
    createdAt: Date
}

const user12: IUserWithRole2 = {
    name: 'asdf',
    age: 12,
    skills: ['1', '2'],
    roleId: 1,
    createdAt: new Date(),
    log: (id) => ''
}

//! словари

//! у этого интерфейса может быть неограниченное число свойств где ключом будет являться число, а значением User
interface UserDictionary {
    [index: number]: User
}