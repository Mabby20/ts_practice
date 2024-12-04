interface IUserTest {
    name: string;
}

const assertUser1 = (obj: unknown): obj is IUserTest => {
    return (!!obj && typeof obj === 'object' && 'name' in obj);
}

function assertUser2(obj: unknown): asserts obj is IUserTest {
    if (!!obj && typeof obj === 'object' && 'name' in obj) {
        return;
    }

    throw new Error('не пользователь');
}

const assertUser3 = (obj: unknown): asserts obj is IUserTest => {
    if (!!obj && typeof obj === 'object' && 'name' in obj) {
        return;
    }

    throw new Error('не пользователь');
}

const assertUser4: (obj: unknown) => asserts obj is IUserTest = (obj) => {
    if (!!obj && typeof obj === 'object' && 'name' in obj) {
        return;
    }

    throw new Error('не пользователь');
};

const a = {};

assertUser1(a)
assertUser2(a);
assertUser3(a);
assertUser4(a)
