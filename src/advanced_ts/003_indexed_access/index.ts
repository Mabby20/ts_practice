import { permission } from "process"

interface IRole {
    id: number
}

interface IPermission {
    dueDate: Date
}

interface IUser {
    name: string,
    roles: IRole[],
    permission: IPermission
}

const user333: IUser = {
    name: 'aboba',
    roles: [],
    permission: {
        dueDate: new Date(),
    }
}

const userName = user333.name //! обращение по index, но это обращение именно к значению

type UserName = IUser['roles'] //! достаем тип ролей, будет массав
type Permission = IUser['permission']['dueDate'] //! обратились еще к более вложенной структуре
type UserName2 = IUser['roles'][number] //! позволяет достать тип из массива

const arr = ['asdf', 'asdfg', 'asdf3'] as const //! запись const позволяет изменить тип на литеральные представления
type ArrType = typeof arr[number] //! number позволяет получить все типы через union

