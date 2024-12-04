type HttpMethod = 'get' | 'post'; //! это тайп элиас

type User = {
    name: string,
    age: number,
    skills: string[],
}

const user: User = {
    name: 'aboba',
    age: 12,
    skills: ['1', '2']
}

type Role = {
    id: number
}

//! INTERSECTION

type UserWithRole = User & Role; //! некое объединение

const user2: UserWithRole = {
    id: 1,
    name: 'aboba',
    age: 12,
    skills: ['1', '2']
}

//! если и в User и в Role будут одинковые поля, то при использовании INTERSECTION - будет использоваться только одно поле.

type User2 = {
    name: string,
    age: number,
    skills: string[],
}

type Role2 = {
    name: string
    id: number
}

type UserWithRole2 = User2 & Role2

const user3: UserWithRole2 = {
    id: 1,
    name: 'aboba', //! не понятно отчего name от User2 или от Role2
    age: 12,
    skills: ['1', '2']
}

//! в таком случае лучше использовать композицию объектов

type Composition {
    user: User2,
    role: Role2
}

const userWithRole3: Composition = { //! у каждого объекта есть свой name
    user: {
        name: 'aboba',
        age: 12,
        skills: ['1', '2']
    },
    role: {
        name: 'adasdf',
        id: 1
    }
}