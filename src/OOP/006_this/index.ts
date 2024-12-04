class UserBuilder {
    name: string

    //! при возврате this в методе обязательно указывать тип this, иначе при наследовании от этого класса метод будет иметь тот же тип, от которого унаследовался.
    //!  setName(this: this, name: string): UserBuilder  - так не правильно

    setName(this: this, name: string): this {
        this.name = name;
        return this;
    }

    //! TypeGuard

    isAdmin(): this is AdminBuilder {
        return this instanceof AdminBuilder;
    }
}

class AdminBuilder extends UserBuilder {
    role: string[]
}

const user123 = new UserBuilder().setName('asdf');
const user124 = new AdminBuilder().setName('asdfa')

let userTest: UserBuilder | AdminBuilder = new UserBuilder()

if (userTest.isAdmin()) {
    console.log(userTest)
} else {
    console.log(userTest)
}
