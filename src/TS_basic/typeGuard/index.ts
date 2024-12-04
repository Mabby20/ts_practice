interface IUser2 {
    name: string,
    email: string,
    login: string
}

interface IAdmin2 {
    name: string,
    role: number
}

//! typeguard предпочтительнее
const isAdmin = (user: IUser2 | IAdmin2): user is IAdmin2 => {
    return 'role' in user;
}

//! typeguard возможный вариант
const isAdminAlt = (user: IUser2 | IAdmin2): user is IAdmin2 => {
    return (user as IAdmin2).role !== undefined;
}

const setRoleZero = (user: IUser2 | IAdmin2) => {
    if (isAdmin(user)) {
        user.role = 0
    } else {
        throw new Error('пользователь не админ')
    }
}