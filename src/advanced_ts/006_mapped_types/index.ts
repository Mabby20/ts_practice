type Modifier = 'read' | 'update' | 'create'

type UserRoles = {
    customers?: Modifier,
    projects?: Modifier,
    adminPanel?: Modifier,
}

type ModifierToAccess1<T> = {
    [Property in keyof T]: boolean;
}

interface IModifierToAccess2<T> {
    obj: {
        [P in keyof T]: boolean;
    }
}
