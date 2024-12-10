class User321 {
    name: string;
    id: number;
}

class PersistentUser extends User321 {
    dbId: string;
}

type UserOrPersistentUser<T extends string | number> = T extends number ? User321 : PersistentUser;

function getUser<T extends string | number>(id: T): UserOrPersistentUser<T> {
    if (typeof id === 'number') {
        return new User321() as UserOrPersistentUser<T>;
    } else {
        return new PersistentUser() as UserOrPersistentUser<T>;
    }
}